import {
  code,
  findApplication,
  findBusiCompById,
  findPageInstByVersionId,
  getThemeCss,
  localgenerate,
  qryAttrSpecPage,
  qryPageCompAssetList,
  qryPageInstListByAppId,
  queryFrontendDatasourcePage,
  queryFrontendHookList,
  translateToEnglish,
} from '@/services/api';
import { generateCode, publishers } from '@lingxiteam/ebe';
import { fetchData, init, setWorkerJsUrl } from '@lingxiteam/ebe-utils';
import { Button, Form, Input, message, Progress, Switch } from 'antd';
import { useEffect, useState } from 'react';

const Item = Form.Item;
const workerJsUrl = './ebeWorker.js';
const Page = () => {
  useEffect(() => {
    init();
    setWorkerJsUrl(workerJsUrl);
  }, []);
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const [log, setLog] = useState('');

  const [form] = Form.useForm();
  const onFinish = async (
    values: any,
    bower: boolean = false,
    localGenerete: boolean = false,
  ) => {
    setLoading(true);
    setPercent(0);
    setLog('');
    const { options, cleanedTree } = await fetchData({
      appId: values.appId,
      platform: values.platform ? 'APP' : 'PC',
      baseUrl: 'http://172.21.72.205:10010/',
      services: {
        findBusiCompById,
        findPageInstByVersionId,
        getThemeCss,
        qryAttrSpecPage,
        qryPageCompAssetList,
        qryPageInstListByAppId,
        queryFrontendDatasourcePage,
        queryFrontendHookList,
        findApplication,
        translateToEnglish,
      },
      onProgress: (d: any) => {
        setLog(d.log);
        setPercent(d.progress);
      },
    });
    console.log('cleanedTree', cleanedTree);
    if (bower) {
      setPercent(0);
      const result = await generateCode({
        solution: 'alita', // 出码方案
        options,
        schema: cleanedTree, // 编排搭建出来的 schema
        workerJsUrl,
        onProgress: (log: string) => {
          if (!log || typeof log !== 'string') {
            // 错误数据，不给返回
            return;
          }
          if (log?.includes('出码生成完成')) {
            setLog(log);
            setPercent(100);
            return;
          }

          const p = log.match(/(?<=\(总进度: ).*?(?=\%)/)?.[0] || '0';
          if (p) {
            setLog(log);
            setPercent(parseFloat(p));
          }
        },
      } as any);
      console.log(result); // 出码结果(默认是递归结构描述的，可以传 flattenResult: true 以生成扁平结构的结果)
      publishers.zip().publish({
        project: result as any, // 上一步生成的 project
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
    message.success(res.message);
    if (localGenerete) {
      const lgRes = await localgenerate({
        appId: values.appId,
      });
      console.log(res);
      message.success(lgRes.message);
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
          appId: '1106842174504439808',
          pageId: '',
          platform: true,
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
            仅生成json（缓存目录中）
          </Button>
          <Button
            loading={loading}
            onClick={async () => {
              onFinish(form.getFieldsValue(), true);
            }}
          >
            浏览器出码
          </Button>
          <Button
            loading={loading}
            onClick={async () => {
              onFinish(form.getFieldsValue(), false, true);
            }}
          >
            生成本地项目（仅开发可用）
          </Button>
        </Item>
      </Form>
      {loading && <Progress percent={percent} />}
      {loading && log}
    </>
  );
};

export default Page;
