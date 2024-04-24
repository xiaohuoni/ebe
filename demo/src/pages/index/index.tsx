import {
  code,
  findAppPolymerizationInfo,
  findBusiCompById,
  getPageVersionById,
  qryPageCompAssetList,
} from '@/services/api';
import { Button, Form, Input, message, Switch } from 'antd';
import { useEffect, useState } from 'react';
// @ts-ignore
import { generateCode, init, publishers } from 'ebe';

const Item = Form.Item;

const getPageDsls = (resultObjects: any[]) => {
  return resultObjects
    .filter(Boolean)
    .map((i) => JSON.parse(i.resultObject.attrMappingJson));
};
function findAllItem<T = any>(
  target: T[],
  callback: (item: T, index: number, list: T[]) => boolean,
  itemHash: any,
) {
  const list = target;
  // Makes sures is always has an positive integer as length.
  // eslint-disable-next-line
  const length = list.length >>> 0;
  // eslint-disable-next-line
  const thisArg = arguments[1];
  for (let i = 0; i < length; ) {
    const element = list[i] as any;
    if (callback.call(thisArg, element, i, list)) {
      itemHash[element?.props?.busiCompId ?? ''] = 1;
    }
    i += 1;
    if (element?.components) {
      findAllItem(element?.components, callback, itemHash);
    }
  }
}
export function findItem<T = any>(
  target: T[],
  callback: (item: T, index: number, list: T[]) => boolean,
) {
  const list = target;
  // Makes sures is always has an positive integer as length.
  // eslint-disable-next-line
  const length = list.length >>> 0;
  // eslint-disable-next-line
  const thisArg = arguments[1];
  for (let i = 0; i < length; ) {
    const element = list[i];
    if (callback.call(thisArg, element, i, list)) {
      return element;
    }
    i += 1;
  }
  return null;
}
function cleanTree(tree: any, fields) {
  let fieldSet = new Set(fields); // 使用set结构可以提高查询速度

  if (Array.isArray(tree)) {
    return tree.map((item) => cleanTree(item, fields));
  } else if (typeof tree === 'object' && tree !== null) {
    return Object.entries(tree).reduce((newTree, [key, value]) => {
      if (!fieldSet.has(key)) {
        newTree[key] = cleanTree(value, fields);
      }
      return newTree;
    }, {});
  } else {
    return tree;
  }
}

const Page = () => {
  const ii = async () => {
    await init({});
  };
  useEffect(() => {
    ii();
  }, []);
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  const onFinish = async (values: any, bower: boolean = false) => {
    setLoading(true);

    // 根据 appId 获取当前应用的全部页面
    const { resultObject } = await findAppPolymerizationInfo({
      appId: values.appId,
      terminalType: values.platform ? 'APP' : 'PC',
      // operationType: 'publish',
    });
    // 根据 appId 获取当前应用的使用的自定义组件
    const compAssetList = await qryPageCompAssetList({
      appId: values.appId,
    });
    console.log(resultObject);
    const pageIdMapping: any = {};
    const appPageList = resultObject?.appPageList.map((i) => {
      pageIdMapping[i.pagePath] = i.pageId;
      return i;
    });
    const appConfig = resultObject?.appConfig ?? {};
    console.log(appPageList);
    console.log(appConfig);
    let lastPageId: any = '';
    // 根据 pageId 获得 dsl
    const data = await Promise.all(
      appPageList.map((i) => {
        lastPageId = i.pageId;
        return getPageVersionById({
          appId: values.appId,
          pageId: i.pageId,
          // actionType: 'publish',
        });
      }),
    );
    console.log(data);
    const pages = getPageDsls(data);
    console.log(pages);
    // busiCompId 过滤重复
    const itemHash: any = {};
    // 找到所有页面使用到的 业务组件
    findAllItem(pages, (item) => item.compName === 'BOFramer', itemHash);
    console.log(itemHash);
    const itemLists = Object.keys(itemHash);
    // 请求所有业务组件的 dsl
    const busiData = await Promise.all(
      itemLists.map((i) =>
        findBusiCompById({
          busiCompId: i,
          appId: values.appId,
          pageId: lastPageId,
        }),
      ),
    );
    console.log(busiData);
    const busiCompMapping: any = {};
    const busiPages = busiData.map((i, index) => {
      const busiData = JSON.parse(
        i?.resultObject?.busiCompVersion?.sourceCodeJson,
      );
      busiCompMapping[itemLists[index]] = busiData.id;
      return busiData;
    });
    // 合并页面，生成器那边支持页面类型和业务组件类型
    const pageDSLS = [...pages, ...busiPages];
    // 清理dsl

    console.log('pages', pageDSLS);
    const options = {
      platform: values.platform ? 'h5' : 'pc',
      appId: values.appId,
      pageIdMapping,
      busiCompMapping,
      compAssetList: compAssetList?.resultObject || [],
      baseUrl: process.env.BASE_URL,
      appConfig,
    };
    console.log(options);
    let cleanedTree = cleanTree(pageDSLS, ['path', 'originCode']); // 清理字段'b'和字段'e'
    console.log('cleanedTree', cleanedTree);
    if (bower) {
      const result = await generateCode({
        solution: 'alita', // 出码方案
        options,
        schema: cleanedTree, // 编排搭建出来的 schema
        // workerJsUrl: '/ebe/worker.js',
      } as any);
      console.log(result); // 出码结果(默认是递归结构描述的，可以传 flattenResult: true 以生成扁平结构的结果)
      publishers.zip().publish({
        project: result, // 上一步生成的 project
        projectSlug: values.appId, // 项目标识
      });
      setLoading(false);
      return;
    }
    const res = await code({
      pages: cleanedTree,
      options,
      appId: values.appId,
      cache: true,
    });
    console.log(res);
    if (res.resultCode === '0') {
      message.success(res.resultObject.message);
      window.open(`/download?appId=${values.appId}`);
    } else {
      message.error(res.resultObject.message);
    }
    setLoading(false);
  };
  return (
    <>
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
        onFinish={onFinish}
        initialValues={{
          // appId: '868681578956083200',
          appId: '1024143353417228288',
          platform: false,
        }}
      >
        <Item name="appId" label="AppID">
          <Input />
        </Item>
        <Item name="platform" label="是否是 H5">
          <Switch />
        </Item>
        <Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            服务端出码
          </Button>
          <Button
            loading={loading}
            onClick={async () => {
              onFinish(form.getFieldsValue(), true);
            }}
          >
            浏览器出码
          </Button>
        </Item>
      </Form>
    </>
  );
};

export default Page;
