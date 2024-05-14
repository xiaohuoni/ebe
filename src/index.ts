import fetch from 'node-fetch';
import type { IProjectSchema, ResultDir } from './core';
import { createDiskPublisher } from './core/publisher/disk';
import { createZipPublisher } from './core/publisher/zip';
import type { FlattenFile } from './core/types/file';
import alita from './solutions/alita';
declare const Worker: any;
declare const self: any;
declare const __PACKAGE_VERSION__: string;

const packageVersion = __PACKAGE_VERSION__ ?? 'latest';

export const DEFAULT_WORKER_JS = `https://cdn.jsdelivr.net/npm/ebe@${packageVersion}/dist/worker.js`;

export const DEFAULT_TIMEOUT_IN_MS = 60 * 10000;

const workerJsCache = new Map<string, { content: string; url: string }>();

export async function init({
  workerJsUrl = DEFAULT_WORKER_JS,
}: {
  workerJsUrl?: string;
} = {}) {
  await loadWorkerJs(workerJsUrl);
}

export type Result = ResultDir | FlattenFile[];

export async function generateCode(options: {
  solution: 'alita';
  schema: IProjectSchema;
  options: any;
  flattenResult?: boolean;
  workerJsUrl?: string;
  timeoutInMs?: number;
}): Promise<Result> {
  if (typeof self !== 'object') {
    throw new Error('self is not defined');
  }

  if (typeof Worker !== 'function') {
    throw new Error('Worker is not supported');
  }

  const workerJsUrl = options.workerJsUrl || DEFAULT_WORKER_JS;

  const workerJs = await loadWorkerJs(workerJsUrl);

  const worker = new Worker(workerJs.url, {
    type: 'classic',
    credentials: 'omit',
  });

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('timeout'));
      worker.terminate();
    }, options.timeoutInMs || DEFAULT_TIMEOUT_IN_MS);

    worker.onmessage = (event: any) => {
      const msg = event.data;
      switch (msg.type) {
        case 'ready':
          print('worker is ready.');
          break;

        case 'run:begin':
          print('worker is running...');
          break;
        case 'run:end':
          print('worker is done.');
          resolve(msg.result);
          clearTimeout(timer);
          worker.terminate();
          break;
        case 'run:error':
          printErr(`worker error: ${msg.errorMsg}`);
          clearTimeout(timer);
          reject(new Error(msg.errorMsg || 'unknown error'));
          worker.terminate();
          break;
        default:
          print('got unknown msg: %o', msg);
          break;
      }
    };

    worker.onerror = (err: any) => {
      printErr('worker error: %o', err);
      clearTimeout(timer);
      reject(err);
      worker.terminate();
    };

    worker.postMessage({
      type: 'run',
      solution: options.solution,
      schema: options.schema,
      options: options.options,
      flattenResult: options.flattenResult,
    });
  });
}

async function loadWorkerJs(workerJsUrl: string) {
  const cached = workerJsCache.get(workerJsUrl);
  if (cached) {
    return cached;
  }

  const workerJsContent = await fetch(workerJsUrl, {
    //@ts-ignore
    headers: {
      disabledSignKey: true,
    },
  })
    .then((res) => res.text())
    .catch((err) => {
      throw new Error(`Failed to fetch worker js: ${err}`);
    });

  const workerJs = {
    content: workerJsContent,
    url: self.URL.createObjectURL(
      new self.Blob([workerJsContent], { type: 'application/javascript' }),
    ),
  };

  workerJsCache.set(workerJsUrl, workerJs);

  return workerJs;
}

function print(msg: string, ...args: unknown[]) {
  // eslint-disable-next-line no-console
  console.debug(`[code-generator/loader]: ${msg}`, ...args);
}

function printErr(msg: string, ...args: unknown[]) {
  // eslint-disable-next-line no-console
  console.debug(`[code-generator/loader]: %c${msg}`, 'color:red', ...args);
}

export const solutions = {
  alita,
};

export const publishers = {
  disk: createDiskPublisher,
  zip: createZipPublisher,
};
