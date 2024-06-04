import { CloseCircleFilled } from '@ant-design/icons';
import { LocaleFunction } from '@lingxiteam/types';
import {
  Button,
  ConfigProvider,
  message,
  notification,
  Popconfirm,
  Spin,
} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { antPrefix } from '../pcfactory/src/variables';
import ProgressComp from './ProgressComp';

const openProgress = (percent: number, restProps?: any) => (
  <ProgressComp percent={percent} {...restProps} />
);

const openProgressMsg = (
  key: string,
  fileName: string,
  percentComplete: number,
  text: string,
  { getLocale = (k, p) => p ?? '' }: { getLocale: LocaleFunction },
) => {
  message.loading({
    icon: getLocale('ProgressComp.progressMsg', `${fileName} 正在${text}：`, {
      fileName,
      text,
    }),
    content: openProgress(percentComplete),
    key,
    duration: 0,
  });
};

const closeProgressMsg = (key: any) => {
  setTimeout(() => {
    if (message && message.destroy) {
      message.destroy(key);
    }
  }, 1000);
};

const showFailMsg = (key: string, content: string) => {
  message.loading({
    icon: (
      <CloseCircleFilled
        rev={undefined}
        style={{ color: 'rgb(250, 117, 112)' }}
      />
    ),
    content,
    key,
    duration: 0,
  });
};

const showProgressNotification = (config: {
  showLoading?: false;
  percent: number;
  onCancel: () => void;
  message?: any;
  key: string;
  title?: any;
  type?: 'error' | 'success' | 'process';
  btn: (onCancel: () => void) => any;
  loadingText?: string;
  getLocale: LocaleFunction;
}) => {
  const getLocale = config.getLocale ?? ((k?: string, l?: string) => l ?? '');
  const {
    key,
    title = getLocale('derive', '导出'),
    percent,
    onCancel,
    message,
    btn,
    type,
    showLoading = false,
    loadingText,
    ...restConfig
  } = config || {};
  const btnFn =
    typeof btn === 'function' ? (
      btn(() => {
        onCancel?.();
        if (key) {
          notification?.close(key);
        }
      })
    ) : (
      <ConfigProvider prefixCls={antPrefix} locale={zhCN}>
        <Popconfirm
          placement="bottomRight"
          title={getLocale(
            'ProgressComp.cancelMessage',
            '取消将无法获得下载结果，请确认是否需要取消',
          )}
          onConfirm={() => {
            onCancel?.();
            notification?.close(key);
          }}
          overlayClassName="ProgressComp-confirm"
        >
          <Button>{getLocale('cancelText', '取消')}</Button>
        </Popconfirm>
      </ConfigProvider>
    );

  const description = (
    <ConfigProvider prefixCls={antPrefix} locale={zhCN}>
      <Spin spinning={showLoading} size="small" tip={loadingText}>
        {percent !== undefined &&
          openProgress(percent, {
            className: 'notification',
            strokeWidth: 8,
            status: type === 'error' ? 'exception' : undefined,
          })}
        {message && <div className="desc">{message}</div>}
      </Spin>
    </ConfigProvider>
  );
  return notification.open({
    className: 'ProgressComp-notification',
    btn: btnFn,
    key,
    message: title,
    description,
    duration: null,
    closeIcon: <></>,
    ...restConfig,
  });
};

const closeProgressNotification = (key: any) => {
  setTimeout(() => {
    if (notification && notification.close) {
      notification.close(key);
    }
  }, 500);
};

export default ProgressComp;

export {
  openProgress,
  openProgressMsg,
  closeProgressMsg,
  showFailMsg,
  showProgressNotification,
  closeProgressNotification,
};
