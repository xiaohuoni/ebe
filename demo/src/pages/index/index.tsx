import {
  code,
  findBusiCompById,
  findPageInstByVersionId,
  getThemeCss,
  qryAttrSpecPage,
  qryPageCompAssetList,
  qryPageInstListByAppId,
  queryFrontendHookList,
} from '@/services/api';
import { Button, Form, Input, message, Switch } from 'antd';
import { useEffect, useState } from 'react';
// @ts-ignore
import { generateCode, init, publishers } from 'ebe';

const Item = Form.Item;

const treeForEach = (
  tree: any,
  callback: (item: any, root: boolean) => void,
  options = { children: 'components' },
) => {
  callback(tree, true);

  const loop = (children: any[]) => {
    children?.forEach((item) => {
      callback(item, false);
      if (Array.isArray(item?.[options.children])) {
        loop(item?.[options.children]);
      }
    });
  };

  const list = tree[options.children];
  loop(list);
};

const getPageDsls = (resultObjects: any[]) => {
  return resultObjects
    .filter(Boolean)
    .map((i) => {
      try {
        const pageData = JSON.parse(i.resultObject.attrMappingJson);
        pageData.pageId = i.resultObject?.pageId;
        return pageData;
      } catch (error) {
        console.error(error, '该页面信息出错', i);
        return null;
      }
    })
    .filter(Boolean);
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
    const attrSpecPage = await qryAttrSpecPage({
      appId: values.appId,
    });

    // 根据 appId 获取当前应用的全部页面
    const { resultObject = [] } = await qryPageInstListByAppId({
      appId: values.appId,
      terminalType: values.platform ? 'APP' : 'PC',
    });
    const { resultObject: frontendHookList = [] } = await queryFrontendHookList(
      {
        appId: values.appId,
      },
    );

    // 根据 appId 获取当前应用的全部页面
    const themeCss = await getThemeCss({
      appId: values.appId,
      terminalType: values.platform ? 'APP' : 'PC',
      // operationType: 'publish',
    });
    console.log(themeCss);

    // 根据 appId 获取当前应用的使用的自定义组件
    const compAssetList = await qryPageCompAssetList({
      appId: values.appId,
    });
    const pageIdMapping: any = {};
    const appPageList = resultObject?.map((i) => {
      pageIdMapping[i.pagePath] = i.pageId;
      return i;
    });
    let lastPageId: any = '';
    // 根据 pageId 获得 dsl
    let data = [];
    if (!values.pageId) {
      data = await Promise.all(
        appPageList.map((i) => {
          lastPageId = i.pageId;
          return findPageInstByVersionId({
            appId: values.appId,
            pageId: i.pageId,
            // actionType: 'publish',
          });
        }),
      );
    } else {
      const p = await findPageInstByVersionId({
        appId: values.appId,
        pageId: values.pageId,
        // actionType: 'publish',
      });
      data = [p];
    }

    // 收集页面中用到的页面id
    const pagesId: string[] = [];
    if (values.pageId) {
      getPageDsls(data).forEach((p) => {
        treeForEach(p, (item) => {
          if (item.compName === 'Pageview') {
            if (item.props.pageId) {
              pagesId.push(item.props.pageId);
            }
          }
          treeForEach(
            { children: item.setEvents },
            (actionItem) => {
              if (
                ['setPageSrc', 'showCustomModal'].includes(actionItem.value) &&
                actionItem.options?.pageId
              ) {
                pagesId.push(actionItem.options?.pageId);
              }
            },
            { children: 'children' },
          );
        });
      });
    }

    if (pagesId.length > 0) {
      const pages = await Promise.all(
        pagesId.map((i) => {
          return findPageInstByVersionId({
            appId: values.appId,
            pageId: i,
            // actionType: 'publish',
          });
        }),
      );

      data.push(...pages);
    }

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
      busiData.busiCompId = i?.resultObject?.busiCompId;
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
      baseUrl: process.env.BASE_URL === 'http://10.10.179.140:8047/HJF/' ? 'http://10.10.179.140:8048/HJF/' : process.env.BASE_URL,
      appConfig: {
        frontendHookList,
      },
      attrSpecPage: (attrSpecPage?.resultObject?.list || []).map(
        (i: any) => i.attrNbr,
      ),
    };
    let cleanedTree = cleanTree(pageDSLS, ['path']); // 清理字段'b'和字段'e'
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
      cache: false,
    });
    console.log(res);
    if (res.resultCode === '0') {
      message.success(res.resultObject.message);
      // window.open(`/download?appId=${values.appId}`);
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
          appId: '1107846612411265024',
          pageId: '',
          platform: false,
        }}
      >
        <Item name="appId" label="AppID">
          <Input />
        </Item>
        <Item name="pageId" label="PageID">
          <Input />
        </Item>
        <Item name="platform" label="是否是 H5">
          <Switch />
        </Item>
        <Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            生成json
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
