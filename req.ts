import * as fs from 'fs-extra';
import { jsonc } from 'jsonc';
import { join } from 'path';
import { copyStatic } from './scripts/copyStatic';
import { createDiskPublisher } from './src/core/publisher/disk';
import alita from './src/solutions/alita';
(async () => {
  // 支持命令中指定 appId 如 pnpm req appId
  const appId = process.argv.slice(2)[0] || '11'; // HJF
  // const appId = '772790966277644288'; // 开发环境
  const schemaFile = join(
    __dirname,
    `./demo/node_modules/.cache/${appId}/req.json`,
  );
  // const schemaFile = `./req.json`;
  // 读取 Schema
  const schema = await loadSchemaFile(schemaFile);

  const projectBuilder = alita({ options: schema.options });

  const project = await projectBuilder.generateProject(
    schema.pages, // 编排搭建出来的 schema
  );
  const projectSlug = appId;
  // 写入到 zip 包
  await createDiskPublisher().publish({
    project, // 上一步生成的 project
    outputPath: join(__dirname, './templates/'), // 输出目录
    projectSlug,
  });
  copyStatic(
    join(__dirname, './src/plugins/project/framework/alita/template/public'),
    join(__dirname, './templates/', projectSlug),
  );
  async function loadSchemaFile(schemaFile: string): Promise<any> {
    if (!schemaFile) {
      throw new Error('invalid schema file name');
    }

    const schemaFileContent = await fs.readFile(schemaFile, 'utf8');

    // 默认用 JSONC 的格式解析（兼容 JSON）
    return jsonc.parse(schemaFileContent);
  }
})();
