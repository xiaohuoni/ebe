import chalk from 'chalk';
import * as fs from 'fs-extra';
import { jsonc } from 'jsonc';
import { join } from 'path';
import { clearLXPagesDSL } from './ebe-utils/src/index';
import { copyStatic } from './ebe-utils/src/node/copyStatic';
import { parseEnv } from './parseEnv';
import { createDiskPublisher } from './src/core/publisher/disk';
import alita from './src/solutions/alita';

parseEnv();

process.env.APPID = process.argv.slice(2)[0] ?? process.env.APPID;

(async () => {
  console.time('create-code');
  // 转化是否启用 appId
  const transformHasAppId = true;
  // 支持命令中指定 appId 如 pnpm req appId
  const appId = process.env.APPID;

  // const appId = '772790966277644288'; // 开发环境
  const schemaFile = join(
    __dirname,
    `./demo/node_modules/.cache/${appId}/req.json`,
  );
  // const schemaFile = `./req.json`;
  // 读取 Schema
  const schema = await loadSchemaFile(schemaFile);

  const isMobile = schema.options.platform === 'h5';
  const projectBuilder = alita({
    options: { ...schema.options, transformHasAppId },
    useEbeSetup: false,
    printUtil: {
      prettier: ({
        tag,
        childTag = '',
        msg,
        progress,
        childProcess = '',
        end = '',
      }) => {
        if (end) {
          console.debug(
            `${chalk.green(tag)} ${chalk.cyan(msg)} ${chalk.cyan(end)}`,
          );
          return;
        }
        console.debug(
          `${chalk.magenta(tag)}${chalk.blue(childTag)} ${chalk.cyan(
            msg,
          )} ${chalk.gray(childProcess)} ${chalk.yellow(progress)}`,
        );
      },
    },
  });

  const project = await projectBuilder.generateProject(
    // @ts-ignore
    clearLXPagesDSL(schema.pages), // 编排搭建出来的 schema
  );
  const projectSlug = appId;
  // 写入到 zip 包
  await createDiskPublisher().publish({
    project, // 上一步生成的 project
    outputPath: join(__dirname, './templates/'), // 输出目录
    projectSlug,
  });

  // 走 ebe setup
  copyStatic(
    join(__dirname, './src/plugins/project/framework/alita/template/public'),
    join(__dirname, './templates/', projectSlug!),
  );
  if (isMobile) {
    copyStatic(
      join(
        __dirname,
        './src/plugins/project/framework/alita/template/h5public',
      ),
      join(__dirname, './templates/', projectSlug!),
    );
  } else {
    copyStatic(
      join(
        __dirname,
        './src/plugins/project/framework/alita/template/pcpublic',
      ),
      join(__dirname, './templates/', projectSlug!),
    );
  }
  async function loadSchemaFile(schemaFile: string): Promise<any> {
    if (!schemaFile) {
      throw new Error('invalid schema file name');
    }

    const schemaFileContent = await fs.readFile(schemaFile, 'utf8');

    // 默认用 JSONC 的格式解析（兼容 JSON）
    return jsonc.parse(schemaFileContent);
  }
})();
