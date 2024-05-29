import {
  FileOutlined,
  LoadingOutlined,
  PaperClipOutlined,
} from '@ant-design/icons';
import React, { Progress, Spin } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';
// import fileIcon from './assets/fileName.png';
import defaultIcon from './assets/default.png';
import pptIcon from './assets/ppt.png';
import wordIcon from './assets/word.png';
import xlsIcon from './assets/xls.png';
// import imgIcon from './assets/img.png';
import jsIcon from './assets/js.png';
import pdfIcon from './assets/pdf.png';
import txtIcon from './assets/txt.png';
import zipIcon from './assets/zip.png';
import './uploadItem.less';

interface UploadItemProps {
  originNode: ReactElement;
  file: UploadFile;
  fileList: any[];
  actions: {
    download: Function;
    preview: Function;
    remove: Function;
  };
  showUploadList: {
    showPreviewIcon?: boolean;
    showRemoveIcon?: boolean;
    showDownloadIcon?: boolean;
    previewIcon?: ReactNode | Function;
    removeIcon?: ReactNode | Function;
    downloadIcon?: ReactNode | Function;
  };
  onFileNameClick?: Function;
  listType: 'picture-card' | 'text' | 'picture';
}

const iconMap: any = {
  doc: wordIcon,
  docx: wordIcon,
  xls: xlsIcon,
  xlsx: xlsIcon,
  ppt: pptIcon,
  pptx: pptIcon,
  txt: txtIcon,
  zip: zipIcon,
  js: jsIcon,
  pdf: pdfIcon,
};

const imageFormat = [
  'jpeg',
  'jpg',
  'svg',
  'png',
  'gif',
  'webp',
  'avif',
  'apng',
];

const prefix = 'ued-stdUpload-item';
// 目前只有卡片式图片（picture-card）上传会展示预览图标，重写上传项样式，展示预览图标
const UploadItem = (props: UploadItemProps) => {
  const {
    file,
    actions,
    showUploadList,
    listType,
    originNode,
    onFileNameClick,
  } = props || {};
  const { status, percent, fileName = '', originFileObj } = file || {};
  const {
    showDownloadIcon,
    showPreviewIcon,
    showRemoveIcon,
    previewIcon,
    removeIcon,
    downloadIcon,
  } = showUploadList || {};

  const renderIcon = () => {
    if (status === 'error') {
      return listType === 'picture' ? (
        <FileOutlined rev="" />
      ) : (
        <PaperClipOutlined rev="" />
      );
    }
    if (status !== 'uploading') {
      return listType === 'picture' ? (
        <img src={file.thumbUrl || file.url} alt={file.name} />
      ) : (
        <PaperClipOutlined rev="" />
      );
    }
    return null;
  };

  const renderItem = () => {
    return (
      <div
        className={classNames(
          prefix,
          `${prefix}-${listType}`,
          `${prefix}-${status}`,
        )}
      >
        <Spin
          indicator={<LoadingOutlined spin rev="" />}
          className={`${prefix}-loading`}
          spinning={status === 'uploading'}
        >
          <div className={`${prefix}-icon`}>{renderIcon()}</div>
        </Spin>
        <div className={`${prefix}-info`}>
          <a
            className={`${prefix}-name`}
            onClick={(e) => {
              e?.preventDefault();
              if (typeof onFileNameClick === 'function') {
                onFileNameClick(file);
              } else if (
                showPreviewIcon &&
                typeof actions?.preview === 'function'
              ) {
                actions.preview();
              }
            }}
            title={file.name}
          >
            {file.name}
          </a>
          {status === 'uploading' && (
            <Progress
              strokeWidth={2}
              className={`${prefix}-progress`}
              type="line"
              size="small"
              percent={percent}
              showInfo={false}
            />
          )}
        </div>
        <div className={`${prefix}-action`}>
          {showPreviewIcon && status === 'done' && (
            <span
              className={`${prefix}-action-icon`}
              onClick={actions.preview as any}
            >
              {typeof previewIcon === 'function'
                ? previewIcon(file)
                : previewIcon}
            </span>
          )}
          {showDownloadIcon && status === 'done' && (
            <span
              className={`${prefix}-action-icon`}
              onClick={actions.download as any}
            >
              {typeof downloadIcon === 'function'
                ? downloadIcon(file)
                : downloadIcon}
            </span>
          )}
          {showRemoveIcon && (
            <span
              className={`${prefix}-action-icon`}
              onClick={actions.remove as any}
            >
              {typeof removeIcon === 'function' ? removeIcon(file) : removeIcon}
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderPictureCard = () => {
    if (originFileObj && typeof originFileObj === 'object') {
      return originNode;
    }

    const getFormat = () => {
      const lastPointPos = (fileName || '')?.lastIndexOf('.');
      if (lastPointPos !== -1) {
        const start = lastPointPos + 1;
        return fileName.slice(start);
      }
      return '';
    };

    const format = getFormat();

    if (imageFormat.includes(format.toLowerCase()) || status === 'uploading') {
      return originNode;
    }

    const icon = iconMap[format] ?? defaultIcon;

    return (
      <div className="std-upload-item">
        <div className="std-upload-item-info">
          <img src={icon} alt="" className="std-upload-item-info-icon" />
          <span className="std-upload-item-info-actions">
            {showPreviewIcon && (
              <a
                className={`${prefix}-action-icon`}
                onClick={actions.preview as any}
              >
                {typeof previewIcon === 'function'
                  ? previewIcon(file)
                  : previewIcon}
              </a>
            )}
            {showDownloadIcon && (
              <span
                className={`${prefix}-action-icon`}
                style={{ color: 'hsla(0,0%,100%,.85)' }}
                onClick={actions.download as any}
              >
                {typeof downloadIcon === 'function'
                  ? downloadIcon(file)
                  : downloadIcon}
              </span>
            )}
            {showRemoveIcon && (
              <span
                className={`${prefix}-action-icon`}
                style={{ color: 'hsla(0,0%,100%,.85)' }}
                onClick={actions.remove as any}
              >
                {typeof removeIcon === 'function'
                  ? removeIcon(file)
                  : removeIcon}
              </span>
            )}
          </span>
        </div>
      </div>
    );
  };

  return listType === 'picture-card' ? renderPictureCard() : renderItem();
};

export default UploadItem;
