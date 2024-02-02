import * as fs from 'fs-extra';
import { jsonc } from 'jsonc';
import alita from './src/solutions/alita';
import { createDiskPublisher } from './src/core/publisher/disk';
import { createZipPublisher } from './src/core/publisher/zip';
(async () => {
  const testPlatformIsH5 = false;
  const schemaFile = testPlatformIsH5 ? 'lingxi-page-h5.json' : 'a.json';
  // 读取 Schema
  const schema = await loadSchemaFile(schemaFile);
  // schema.pageId = testPlatformIsH5
  //   ? '1024143466269171712'
  //   : '1028120483871506432';
  // schema.appId = testPlatformIsH5
  //   ? '1024143353417228288'
  //   : '1024143353417228288';
  const options = {
    platform: testPlatformIsH5 ? 'h5' : 'pc',
    appId: '871672424566726656',
    // pagePath: pageId
    pageIdMapping: {
      '/asd5371': '1024143466269171712',
      '/ceshi1071': '1024143466269171712',
      '/model28529': '1051421568049684480',
      '/buchong4160': '1051387196217495552',
      '/tanchuang1787': '1060380198735069184',
      '/model7813': '1049266938740068352',
      '/ssss3279': '1024161040026025984',
      '/kapian9555': '1052397738087833600',
      '/guanliyuanshouye0496': '1056843976424230912',
      '/auditStart': '887537833022541824',
    },
    baseUrl: 'http://10.10.193.65:9015/',
  };
  // const projectBuilder = testPlatformIsH5 ? alita({ options }) : alitapc({ options });
  const projectBuilder = alita({ options });

  const project = await projectBuilder.generateProject(
    schema, // 编排搭建出来的 schema
  );
  // 写入到 zip 包
  await createDiskPublisher().publish({
    project, // 上一步生成的 project
    outputPath: './templates/', // 输出目录
    projectSlug: testPlatformIsH5 ? 'h5' : 'zs', // 项目标识 -- 对应生成 h5.zip 文件
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
