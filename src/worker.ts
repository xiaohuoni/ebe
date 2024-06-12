/* eslint-disable no-console */
// polyfills 必须在最前面，不要格式化到下面去
import './polyfills/buffer';

import type { IProjectSchema, PrintUtilProps } from './core';
import { resultHelper } from './core/utils';
import alita from './solutions/alita';

declare const self: any;
declare const __PACKAGE_VERSION__: string;

const packageVersion = __PACKAGE_VERSION__ ?? 'latest';
declare const __PACKAGE_CREATE_TIME__: string;

const createTime = __PACKAGE_CREATE_TIME__ ?? '';

const solutions: any = {
  alita,
};

self.onmessage = (event: any) => {
  const msg = event.data || {};
  if (msg.type === 'run') {
    run(msg);
  }
};

self.postMessage({ type: 'ready' });

export async function run(msg: {
  solution: string;
  schema: IProjectSchema;
  options: any;
  flattenResult?: boolean;
}) {
  try {
    print('begin run...');

    print('ebe worker version' + packageVersion);
    print('create time' + new Date(createTime));
    self.postMessage({ type: 'run:begin' });

    const { solution, options, schema } = msg;
    if (!solution) {
      throw new Error('solution is required');
    }

    const createAppBuilder = solutions[solution];
    if (typeof createAppBuilder !== 'function') {
      throw new Error(`solution '${solution}' is invalid`);
    }
    print('generating from options: %o', options);

    const appBuilder = createAppBuilder({
      options, 
      printUtil: {
        prettier: (data) => {
          const {
            tag,
            childTag = '',
            msg,
            progress,
            childProcess = '',
            end = '',
          } = data;
          if (end) {
            printProgress(
              `${tag} ${msg} ${end}`, data
            );
            return;
          }
          printProgress(
            `${tag}${childTag} ${msg
            } ${childProcess} ${progress}`, data
          );
        },
      } as PrintUtilProps
    });

    print('generating from schema: %o', schema);

    const result = await appBuilder.generateProject(schema);

    print('generated result: %o', result);

    const finalResult = msg.flattenResult
      ? resultHelper.flattenResult(result)
      : result;

    if (msg.flattenResult) {
      print('flatten result: %o', finalResult);
    }

    self.postMessage({
      type: 'run:end',
      result: finalResult,
    });
  } catch (e) {
    printErr(`${e}`);
    self.postMessage({
      type: 'run:error',
      errorMsg: `${(e as Error | null)?.message || e}`,
      errorDetail: `${e}`,
    });
  }
}

function print(text: string, ...args: any[]) {
  console.debug(`[code-creator/worker]: ${text}`, ...args);
  self.postMessage({
    type: 'stdout',
    data: text,
    args,
  });
}

function printProgress(text: string, ...args: any[]) {
  console.debug(`[code-creator/worker]: ${text}`, ...args);
  self.postMessage({
    type: 'progress',
    data: text,
    args,
  });
}

function printErr(text: string, ...args: any[]) {
  console.debug(`[code-creator/worker]: %c${text}`, 'color:red', ...args);
  self.postMessage({
    type: 'stderr',
    data: text,
    args,
  });
}
