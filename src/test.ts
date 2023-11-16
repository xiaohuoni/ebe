import { run } from './worker';
import * as fs from 'fs-extra';
import { jsonc } from 'jsonc';
(async () => {
  const testPlatformIsH5 = false;
  const schemaFile = testPlatformIsH5
    ? 'lingxi-page-h5.json'
    : 'lingxi-page-pc.json';
  async function loadSchemaFile(schemaFile: string): Promise<any> {
    if (!schemaFile) {
      throw new Error('invalid schema file name');
    }

    const schemaFileContent = await fs.readFile(schemaFile, 'utf8');

    // 默认用 JSONC 的格式解析（兼容 JSON）
    return jsonc.parse(schemaFileContent);
  }
  // 读取 Schema
  const schema = await loadSchemaFile(schemaFile);
  schema.pageId = testPlatformIsH5 ? 'pageId' : '1028120483871506432';
  schema.appId = testPlatformIsH5
    ? '1024143353417228288'
    : '1024143353417228288';
  run({
    solution: 'alita',
    schema,
  });
})();
