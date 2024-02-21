import * as fs from 'fs-extra';
import { jsonc } from 'jsonc';
import alita from './src/solutions/alita';
import { createDiskPublisher } from './src/core/publisher/disk';
import { createZipPublisher } from './src/core/publisher/zip';
(async () => {
  const appId = '1024143353417228288';
  const schemaFile = `./demo/node_modules/.cache/${appId}/req.json`;
  // 读取 Schema
  const schema = await loadSchemaFile(schemaFile);

  const projectBuilder = alita({ options: schema.options });

  const project = await projectBuilder.generateProject(
    schema.pages, // 编排搭建出来的 schema
  );
  // 写入到 zip 包
  await createDiskPublisher().publish({
    project, // 上一步生成的 project
    outputPath: './templates/', // 输出目录
    projectSlug: 'pc',
  });

  async function loadSchemaFile(schemaFile: string): Promise<any> {
    if (!schemaFile) {
      throw new Error('invalid schema file name');
    }

    const schemaFileContent = await fs.readFile(schemaFile, 'utf8');

    // 默认用 JSONC 的格式解析（兼容 JSON）
    return jsonc.parse(schemaFileContent);
  }
})();
