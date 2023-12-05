import {
  code,
  findAppPolymerizationInfo,
  findBusiCompById,
  getPageVersionById,
} from '@/services/api';
import { Button, Form, Input } from 'antd';
const Item = Form.Item;

const getPageDsls = (resultObjects) => {
  return resultObjects
    .map((i) => JSON.parse(i.resultObject.attrMappingJson))
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
    const element = list[i];
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

const Page = () => {
  const onFinish = async (values: any) => {
    const { resultObject } = await findAppPolymerizationInfo({
      appId: values.appId,
      terminalType: 'APP',
    });
    console.log(resultObject);
    const pageIdMapping: any = {};
    const appPageList = resultObject?.appPageList.map((i) => {
      pageIdMapping[i.pagePath] = i.pageId;
      return i.pageId;
    });
    console.log(appPageList);
    let lastPageId: any = '';
    // 根据 pageId 获得 dsl
    const data = await Promise.all(
      appPageList.map((i) => {
        lastPageId = i;
        return getPageVersionById({
          appId: values.appId,
          pageId: i,
        });
      }),
    );
    console.log(data);
    const pages = getPageDsls(data);
    console.log(pages);
    // busiCompId 过滤重复
    const itemHash: any = {};
    findAllItem(pages, (item) => item.compName === 'BOFramer', itemHash);
    console.log(itemHash);
    const itemLists = Object.keys(itemHash);
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
    console.log('pages', [...pages, ...busiPages]);
    const options = {
      platform: 'h5',
      appId: values.appId,
      pageIdMapping,
      busiCompMapping,
    };
    console.log(options);

    const res = await code({
      pages: [...pages, ...busiPages],
      options,
      appId: values.appId,
    });
    console.log(res);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      autoComplete="off"
      onFinish={onFinish}
      initialValues={{
        appId: '868681578956083200',
        // appId: '1024143353417228288',
      }}
    >
      <Item name="appId" label="AppID">
        <Input />
      </Item>
      <Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Item>
    </Form>
  );
};

export default Page;
