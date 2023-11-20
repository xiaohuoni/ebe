import * as fs from 'fs-extra';
import { jsonc } from 'jsonc';
import alita from './src/solutions/alita';
import { createDiskPublisher } from './src/core/publisher/disk';
// import { createZipPublisher } from './src/core/publisher/zip';
(async () => {
  const testPlatformIsH5 = true;
  const schemaFile = testPlatformIsH5
    ? 'lingxi-page-h5.json'
    : 'lingxi-page-pc.json';
  // 读取 Schema
  const schema = await loadSchemaFile(schemaFile);
  schema.pageId = testPlatformIsH5 ? 'pageId' : '1028120483871506432';
  schema.appId = testPlatformIsH5
    ? '1024143353417228288'
    : '1024143353417228288';

  const projectBuilder = testPlatformIsH5 ? alita() : alita();

  const project = await projectBuilder.generateProject(
    schema, // 编排搭建出来的 schema
  );
  // 写入到 zip 包
  await createDiskPublisher().publish({
    project, // 上一步生成的 project
    outputPath: './templates/', // 输出目录
    projectSlug: testPlatformIsH5 ? 'h5' : 'pc', // 项目标识 -- 对应生成 lingxi-project-slug.zip 文件
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
