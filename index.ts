import * as fs from 'fs-extra';
import { jsonc } from 'jsonc';
import alita from './src/solutions/alita';
import alitapc from './src/solutions/alita-pc';
import { createDiskPublisher } from './src/core/publisher/disk';
// import { createZipPublisher } from './src/core/publisher/zip';
(async () => {
  const testPlatformIsH5 = true;
  const schemaFile = testPlatformIsH5
    ? 'lingxi-page-h5.json'
    : 'lingxi-page-pc.json';
  // 读取 Schema
  const schema = await loadSchemaFile(schemaFile);
  schema.pageId = testPlatformIsH5
    ? '1024143466269171712'
    : '1028120483871506432';
  schema.appId = testPlatformIsH5
    ? '1024143353417228288'
    : '1024143353417228288';

  // TODO: 重要 业务组件代码应该由外部传入

  schema.busiComp = {
    '1046689438983856129': {
      id: '9635362',
      pageContainerType: 'BusiComp',
      pageName: '新增H5业务组件',
      pagePath: '',
      objType: 'app',
      busiCompCode: 'Custom',
      callbacks: ['onChange'],
      compState: [
        {
          code: 'title',
          name: '标题',
        },
        {
          code: 'data',
          name: '第二个按钮的标题',
        },
      ],
      events: [],
      actions: [],
      pageDynamicFlag: true,
      setEvents: [
        {
          dataName: 'event',
          dataId: '115054',
          path: [],
          value: 'useEffect',
          params: [],
          children: [],
        },
      ],
      layout: 'BaseLayout',
      searchParams: [
        {
          name: '业务主键',
          code: 'bizId',
        },
        {
          name: '业务场景',
          code: 'sceneCode',
        },
        {
          name: '业务数据',
          code: 'bizData',
        },
      ],
      catalogItemId: '-1',
      platform: 'h5',
      platformType: 'LowCode',
      editorVersion: '3.2.1.11280828',
      createdEditorVersion: '3.2.1.11280828',
      busiCompObjectRelDTOList: [],
      appId: '1024143353417228288',
      components: [
        {
          id: 'Button_4196567',
          label: '按钮',
          compName: 'Button',
          type: 'Button',
          compType: 1,
          compLib: '@/components',
          props: {
            name: '按钮',
            btnIcon: false,
            type: 'primary',
            size: 'large',
            loading: false,
            mImagePostion: 'left',
            shape: 'default',
            status: '1',
            children: '$"$state.title$"$',
          },
          style: {
            textAlign: 'center',
          },
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'h5',
          description: '',
          image: '',
          groupsName: '基础',
          transform: {
            value: 'children',
          },
          icon: 'Button',
          setEvents: [],
          isLabelDropBoxChild: false,
          functors: {
            children: {
              title: '$"$state.title$"$',
              value: '$state.title$',
              dependOtherIds: [],
            },
          },
          components: [],
          path: ['9635362'],
        },
        {
          id: 'Button_205224',
          label: '按钮',
          compName: 'Button',
          type: 'Button',
          compType: 1,
          compLib: '@/components',
          props: {
            name: '按钮',
            btnIcon: false,
            type: 'primary',
            size: 'large',
            loading: false,
            mImagePostion: 'left',
            shape: 'default',
            status: '1',
            children: '$"$state.data.param$"$',
          },
          style: {
            textAlign: 'center',
          },
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'h5',
          description: '',
          image: '',
          groupsName: '基础',
          transform: {
            value: 'children',
          },
          icon: 'Button',
          setEvents: [],
          isLabelDropBoxChild: false,
          functors: {
            children: {
              title: '$"$state.data.param$"$',
              value: '$state.data.param$',
              dependOtherIds: [],
            },
          },
          components: [],
          path: ['9635362'],
        },
      ],
      path: [],
    },
  };
  const projectBuilder = testPlatformIsH5 ? alita() : alitapc();

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
