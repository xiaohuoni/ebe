/* eslint-disable jsx-a11y/alt-text */
import { DformFile } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { Ellipsis, ImageViewer, Popover, Toast } from 'antd-mobile-5';
import { Action } from 'antd-mobile-5/es/components/popover';
import classNames from 'classnames';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DFormWrapper } from '../BasicComponents';
import Icon from '../Icon';
import { convertToBytes } from '../utils';
import { dateToFormatter } from '../utils/date';
import { useFormItem, UseFormItemProps } from '../utils/hooks/useFormItem';
import { join } from '../utils/path';
import UploadHandle from '../utils/upload';
import closeIcon from './assets/closeIcon.png';
import defaultIcon from './assets/default.png';
import fileIcon from './assets/fileName.png';
import imgIcon from './assets/img.png';
import jsIcon from './assets/js.png';
import pdfIcon from './assets/pdf.png';
import pptIcon from './assets/ppt.png';
import txtIcon from './assets/txt.png';
import wordIcon from './assets/word.png';
import xlsIcon from './assets/xls.png';
import zipIcon from './assets/zip.png';
import './index.less';

const prefixCls = 'lcdp-dformfile';
const IMG_TYPE = [
  'png',
  'svg',
  'jpeg',
  'jpg',
  'heic',
  'ico',
  'bmp',
  'tiff',
  'tif',
];
export interface FormFileProps extends UseFormItemProps {
  onUpload?: (file: any) => void;
  error?: any;
  onDelete?: (i: any) => void;
  onDownloadClick?: (file: any, index?: number) => void;
  onFilespreviewClick?: (file: any, fileIndex: number) => void;
  fileName?: string;
  headers?: any;
  credentials?: boolean;
  filePrefix?: string;
  value?: string;
  title: string;
  onClick?: any;
  isFilespreview: Boolean; // 附件预览
  numberLimit?: number; // 最大上传个数
  singleFileMinSize?: string;
  singleFileMaxSize?: string; // 最大上传大小 旧数据是数字，新版本含有单位 KB或者MB
  isWatermark: boolean; // 增加水印
  hasTitleIcon?: string; // 是否有标题图标
  titleIcon?: any; // 标题图标
  btnIcon?: any; // 上传样式为卡片时的按钮图标
  uploadStyle?: string; // 上传的样式
  previewBtn?: any;
  downloadBtn?: any;
  deleteBtn?: any;
  listStyle?: string; // 列表样式
  status?: string; // 状态 4为只读
  fileProps?: any; // 零代码里面可能有自定义上传信息
  uploadAccepType?: any;
  columns?: any;
  showBtnIcon?: boolean;
  btnText?: string;
  iconPosition?: string;
  uploadBtnStyle?: string;

  /**
   * @deprecated 不知道啥作用
   */
  resAliaKeys?: {
    title: string;
    id: string;
  };
  alias?: {
    title: string;
    id: string;
  };
  upload: (values: any) => void;

  valueStyle: Record<string, string>;
}

const FormFile = LingxiForwardRef<any, FormFileProps>((props, ref) => {
  const {
    defaultValue,
    onChange,
    upload,
    alias = {
      title: 'fileName',
      id: 'fileId',
    },
    // action = '/app/file/uploadSingleFile',
    fileName = 'file',
    headers,
    resAliaKeys,
    credentials,
    filePrefix,
    onClick,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isFilespreview = false,
    onFilespreviewClick,
    onDownloadClick,
    numberLimit = 5,
    singleFileMinSize,
    singleFileMaxSize = '50MB',
    isWatermark = false,
    hasTitleIcon = 'none',
    titleIcon,
    btnIcon,
    listStyle,
    fileProps,
    uploadAccepType,
    columns,
    uploadStyle,
    showBtnIcon,
    iconPosition,
    uploadBtnStyle,
    // accept,
    // acceptExtension,
    getEngineApis,
    $$componentItem,
    ...restProps
  } = props;
  const engineApis = getEngineApis?.() || {
    getLocale: (_: string, place?: string, kv?: Record<string, string>) =>
      place,
  };
  const { getLocale } = engineApis;
  const {
    api = '/app/file/uploadSingleFile',
    _source,
    _serviceId,
  } = columns || {};
  const {
    disabled,
    val,
    onInputChange,
    getRules,
    required,
    readOnly,
    visible,
  } = useFormItem(ref, props);
  const galleryRef = useRef<any>();
  const uploadResultRef = React.useRef<any>();
  const [imgSrc, setImgSrc] = useState('');
  const [imageVisible, setImageVisibleVisible] = useState(false);

  useEffect(() => {
    if (!uploadResultRef.current) {
      const extendData: any = {};
      if (_source === 'std') {
        extendData['ORCHESTRATION.appId'] = $$componentItem.appId;
        extendData['ORCHESTRATION.serviceVersionId'] = _serviceId;
      }
      uploadResultRef.current = new UploadHandle({
        // @ts-ignore
        request: engineApis?.http,
        // @ts-ignore
        filePrefix: filePrefix || engineApis?.downFieldPrefix?.(),
        getLocale,
        fileName,
        url: api,
        headers,
        credentials: credentials === true ? 'include' : 'same-origin',
        extendUploadData: extendData,
        getAppFileUrlById: filePrefix ? null : engineApis?.getAppFileUrlById,
      });
    }
    return () => {
      if (typeof galleryRef.current?.viewer?.remove === 'function') {
        galleryRef.current.viewer.remove();
      }
    };
  }, []);

  const onUpload = async (file: any) =>
    new Promise((resolve, reject) => {
      uploadResultRef.current.setProps({
        file,
        hooks: {
          uploadAfter(opts: unknown) {
            resolve(opts);
          },
          uploadError: reject,
        },
      });
      uploadResultRef.current.sendRequest();
    });
  const isLimitSize = (currentSize: number) => {
    if (singleFileMinSize && convertToBytes(singleFileMinSize) > currentSize) {
      return true;
    }
    if (singleFileMaxSize && convertToBytes(singleFileMaxSize) < currentSize) {
      return true;
    }
    return false;
  };
  const onUploadFile = async (files: any) => {
    const acceptStr = fileProps?.accept || acceptData();
    let acceptArray: string | any[] = [];
    if (acceptStr) {
      acceptArray = acceptStr.split(',')?.map((s: string) => s.toLowerCase());
    }
    let isLimit = false;
    let isAccept = true;
    let fileType = '';
    files?.forEach((item: any) => {
      if (isLimitSize(item?.size)) {
        isLimit = true;
        return;
      }
      if (acceptArray && acceptArray.length && item?.name) {
        const { name } = item;
        const lastPointPos = name.lastIndexOf('.');
        if (lastPointPos !== -1) {
          const start = lastPointPos;
          const postFix = name?.slice(start)?.toLowerCase(); // 不区分大小
          if (!acceptArray.includes(postFix)) {
            isAccept = false;
            fileType = postFix;
          }
        }
      }
    });
    if (!isAccept) {
      Toast.show({
        icon: 'fail',
        content: engineApis?.getLocale(
          'DformFile.noAllow',
          `不允许上传文件类型 ${fileType}`,
          { type: fileType },
        ),
      });
      return;
    }
    if (isLimit) {
      Toast.show({
        icon: 'fail',
        content: engineApis?.getLocale(
          'DformFile.fileSizeExceeded',
          '超过文件设置上传大小!',
        ),
      });
      return;
    }
    const awaitAllPromise: ((file: any) => Promise<unknown>)[] = [];
    (files || []).forEach(() => {
      awaitAllPromise.push(onUpload);
    });
    try {
      Toast.show({
        icon: 'loading',
        content: `${getLocale('loadingText', '加载中')}...`,
        duration: 0,
      });
      await uploadResultRef.current.queue(awaitAllPromise, files);
      const values = uploadResultRef.current.values();

      const vals = [...(val || []), ...values];
      onInputChange(vals);
      if (upload) {
        upload(values);
      }
      Toast.clear();
    } catch (error: any) {
      Toast.clear();
      Toast.show({
        icon: 'fail',
        content:
          error?.message ||
          getLocale('DformFile.somePicFailed', '部分图片上传失败'),
      });
      console.log(error);
    }
  };

  const onFileChange = (v: any, value: any, type: string) => {
    if (type === 'delete') {
      onInputChange(v);
      if (props.onDelete) {
        props.onDelete(value);
      }
    }
  };
  const transValue = (temValue: any) => {
    if (!temValue) {
      return undefined;
    }
    if (typeof temValue === 'object') {
      if (temValue.fileId) {
        // @ts-ignore
        const url = engineApis?.getAppFileUrlById({
          fileId: temValue.fileId,
          addWaterMark: isWatermark,
        });
        if (url?.startsWith('http')) {
          return url;
        }
        return url;
      }
      if (temValue.url) {
        if (temValue.url.startsWith('http')) {
          return temValue.url;
        }
        return join(
          window.location.origin,
          window.location.pathname,
          '../',
          temValue.url,
        );
      }
    }

    return undefined;
  };
  const filesOnClick = (e: any) => {
    if (onClick) {
      onClick(e);
    } else {
      preview(e);
    }
  };
  const onImageModel = (imageInfo: any) => {
    if (imageInfo.url || imageInfo.fileId) {
      const realvalue = transValue(imageInfo);
      setImgSrc(realvalue);
      setImageVisibleVisible(true);
    } else {
      Toast.show({
        icon: 'fail',
        content: getLocale('DformFile.noUrl', '当前数据无url/ fileId'),
        duration: 1,
      });
    }
  };
  const isImage = (item: any) => {
    if (
      item?.fileType?.startsWith('image') ||
      IMG_TYPE.includes(
        item?.file_path_in_server?.split('.')?.[1]?.toLocaleLowerCase() || '',
      ) ||
      IMG_TYPE.includes(
        item.filePathInServer?.split('.')?.[1]?.toLocaleLowerCase() || '',
      ) ||
      IMG_TYPE.includes(
        item.fileName?.split('.')?.[1]?.toLocaleLowerCase() || '',
      ) ||
      IMG_TYPE.includes(item.url?.split('.')?.[1]?.toLocaleLowerCase() || '')
    ) {
      return true;
    }
    return false;
  };
  const renderIcon = (iconInfo: any, cName: string, onButtonClick: any) => {
    if (!iconInfo) {
      return null;
    }
    let iconView = null;
    if (iconInfo && iconInfo?.prefixIconIconFileInfo) {
      iconView = (
        <span
          className={cName}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: iconInfo?.iconFileInfo?.svgContent,
          }}
          onClick={() => {
            if (onButtonClick) {
              onButtonClick();
            }
          }}
        />
      );
    } else {
      const { type, theme, isIconFont, fontAddress } = iconInfo;
      iconView = (
        <span className={cName}>
          {/** @ts-ignore */}
          <Icon
            type={type}
            theme={theme}
            isIconFont={isIconFont}
            fontAddress={fontAddress}
            onClick={() => {
              if (onButtonClick) {
                onButtonClick();
              }
            }}
            getEngineApis={getEngineApis}
            name="card"
            $$componentItem={$$componentItem}
          />
        </span>
      );
    }
    return iconView;
  };

  const cardIcon = useMemo(() => {
    if (props?.uploadStyle === 'card') {
      if (btnIcon) {
        return renderIcon(btnIcon, `${prefixCls}-card-icon`, null);
      }
      return (
        <span className={`${prefixCls}-card-icon`}>
          {/** @ts-ignore */}
          <Icon
            type="plus"
            theme="outlined"
            getEngineApis={getEngineApis}
            name="card-icon"
            $$componentItem={$$componentItem}
          />
        </span>
      );
    }
    return null;
  }, [props?.uploadStyle, btnIcon]);
  const File: any = DformFile;
  const renderFileIcon = (item: any) => {
    // file suffix-icon map
    const fileName: string = item[alias?.title || 'title'];
    const key = alias?.id || 'fileId';
    let icon;
    const iconMap = {
      doc: wordIcon,
      docx: wordIcon,
      xls: xlsIcon,
      xlsx: xlsIcon,
      ppt: pptIcon,
      pptx: pptIcon,
      png: imgIcon,
      svg: imgIcon,
      jpeg: imgIcon,
      jpg: imgIcon,
      txt: txtIcon,
      zip: zipIcon,
      js: jsIcon,
      pdf: pdfIcon,
    };
    const lastPointPos = (fileName || '')?.lastIndexOf('.');
    if (lastPointPos !== -1) {
      const start = lastPointPos + 1;
      const suffix = fileName.slice(start);
      // 如果是图片则展示出来
      if (IMG_TYPE?.includes(suffix)) {
        // 如果key值是base64的url
        if (item?.[key]?.startsWith('data:')) {
          icon = item?.[key];
        } else if (engineApis?.getAppFileUrlById) {
          icon = engineApis.getAppFileUrlById(item?.[key]);
        }
      } else {
        // @ts-ignore
        icon = iconMap[suffix];
      }
    }
    return (
      <img
        src={icon ?? defaultIcon}
        alt=""
        className={`${prefixCls}-list-style-img-item-file-icon`}
      />
    );
  };
  const rightBtn = (btnList: any) => {
    const showBtnList = (btnList || []).filter(
      (btn: { checked: any }) => btn.checked,
    );
    if (showBtnList.length === 1) {
      const { checked, btnText, onButtonClick } = showBtnList[0];
      return checked ? (
        <span
          className={`${prefixCls}-list-style-img-item-more-btn`}
          onClick={() => {
            if (onButtonClick) {
              onButtonClick();
            }
          }}
        >
          {btnText}
        </span>
      ) : null;
    }
    const actions: Action[] = showBtnList.map((btn: any, index: number) => {
      const { btnText, onButtonClick } = btn;
      return {
        key: `${index + 1}`,
        icon: null,
        text: btnText,
        onClick: onButtonClick,
      };
    });
    return (
      <Popover.Menu
        actions={actions}
        placement="bottom"
        trigger="click"
        className={`${prefixCls}-popover`}
      >
        <span className={`${prefixCls}-list-style-img-item-more-btn`}>
          {getLocale?.('more', '更多')}
        </span>
      </Popover.Menu>
    );
  };

  const preview = (data: any, index?: number) => {
    if (isImage(data)) {
      // 图片类型，则直接弹窗展示
      onImageModel(data);
    } else {
      // @ts-ignore
      engineApis?.BannerModal?.open({
        // @ts-ignore
        fileId: data.fileId,
        downloadClick: (src: string) => {
          onDownloadClick && onDownloadClick(src, index);
        },
        showDownLad: !!onDownloadClick,
        src: data,
      });
    }
  };
  const previewFile = (data: any, index: number) => {
    if (`${props?.status}` !== '4') {
      if (onFilespreviewClick) {
        // 有配置预览事件，则执行默认，否则默认
        onFilespreviewClick(data, index);
      } else {
        preview(data, index);
      }
    }
  };
  const itemRender = (data: any, index: number) => {
    const fileNameField = data[alias.title || 'title'];
    const btnList: any[] = [];
    if (props?.previewBtn) {
      // 预览，只读情况，则不执行事件
      btnList.push({
        ...props.previewBtn,
        onButtonClick: () => {
          previewFile(data, index);
        },
      });
    }
    if (props?.downloadBtn && !disabled) {
      // 下载
      btnList.push({
        ...props.downloadBtn,
        onButtonClick: () => {
          if (onDownloadClick) {
            // 有配置点击下载事件，则执行配置的点击事件
            onDownloadClick(data, index);
          }
        },
      });
    }
    if (props?.deleteBtn && !disabled) {
      if (`${props?.status}` !== '4') {
        // 删除
        btnList.push({
          ...props.deleteBtn,
          onButtonClick: () => {
            const newData = Array.from(val);
            newData.splice(index, 1);
            onFileChange(newData, val[index], 'delete');
          },
        });
      }
    }
    switch (listStyle) {
      case 'text': // 列表样式-文字
        return (
          <div className={`${prefixCls}-list-style-text-item`}>
            <div className={`${prefixCls}-list-style-text-item-left-item`}>
              <img
                src={fileIcon}
                alt=""
                className={`${prefixCls}-list-style-text-item-file-icon`}
              />
              <Ellipsis
                direction="middle"
                content={fileNameField}
                className={`${prefixCls}-list-style-text-item-file-name`}
                onContentClick={() => {
                  if (onClick) {
                    onClick(data);
                  } else {
                    previewFile(data, index);
                  }
                }}
              />
            </div>
            <div className={`${prefixCls}-list-style-text-item-right-icon`}>
              {btnList && btnList.length
                ? btnList.map((item) => {
                    const { checked, icon, onButtonClick } = item;
                    const iconView = checked
                      ? renderIcon(
                          icon,
                          `${prefixCls}-line-icon`,
                          onButtonClick,
                        )
                      : null;
                    return iconView;
                  })
                : null}
            </div>
          </div>
        );
      case 'img': // 列表样式-图片
        return (
          <div className={`${prefixCls}-list-style-img-item`}>
            <div className={`${prefixCls}-list-style-img-item-left-item`}>
              {renderFileIcon(data)}
              <div className={`${prefixCls}-list-style-img-item-fileInfo`}>
                <Ellipsis
                  direction="middle"
                  content={fileNameField}
                  className={`${prefixCls}-list-style-img-item-file-name`}
                  onContentClick={() => {
                    if (onClick) {
                      onClick(data);
                    } else {
                      previewFile(data, index);
                    }
                  }}
                />
                <div className={`${prefixCls}-list-style-img-item-upload-time`}>
                  {getLocale('DformFile.updateTime', '上传时间')}:{' '}
                  <span>
                    {dateToFormatter('YYYY-MM-DD HH:mm:ss', new Date())}
                  </span>
                </div>
              </div>
            </div>
            <div>{btnList.length ? rightBtn(btnList) : null}</div>
          </div>
        );
      default:
        return null;
    }
  };
  const acceptData = () => {
    const { accept, acceptExtension } = uploadAccepType || {};
    let targetacceptExtension = '';
    if (acceptExtension) {
      const extensionList = acceptExtension.split(',');
      if (extensionList && extensionList.length > 0) {
        targetacceptExtension = extensionList
          .map((item: string) => {
            if (item.startsWith('.')) {
              return item;
            }
            return `.${item}`;
          })
          .join(',');
      }
    }
    let combinedAcceptType;
    if (accept && targetacceptExtension) {
      combinedAcceptType = `${accept},${targetacceptExtension}`;
    } else if (accept) {
      combinedAcceptType = accept;
    } else if (targetacceptExtension) {
      combinedAcceptType = targetacceptExtension;
    }
    return combinedAcceptType;
  };

  const renderExtra = useMemo(() => {
    if (uploadStyle === 'button' && showBtnIcon) {
      let cName = `${prefixCls}-extra-icon`;
      if (uploadBtnStyle === 'text' && iconPosition === 'left') {
        cName = `${prefixCls}-extra-icon-left`;
      } else if (uploadBtnStyle === 'text' && iconPosition === 'right') {
        cName = `${prefixCls}-extra-icon-right`;
      }
      if (uploadBtnStyle === 'icon') {
        return renderIcon(btnIcon, cName, null);
      }
      return (
        <div
          className={classNames({
            [`${prefixCls}-extra`]: true,
            [`${prefixCls}-extra-right`]: iconPosition === 'right',
          })}
        >
          {renderIcon(btnIcon, cName, null)}
          <div>{props.btnText}</div>
        </div>
      );
    }
    return null;
  }, [
    props.btnText,
    iconPosition,
    uploadStyle,
    showBtnIcon,
    uploadBtnStyle,
    btnIcon,
  ]);

  const fileOtherProps: any = {};
  if (uploadStyle === 'button' && showBtnIcon) {
    fileOtherProps.uploadStyle = 'custom';
  }

  return (
    <>
      <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
        <File
          {...restProps}
          uploadStyle={uploadStyle}
          {...fileOtherProps}
          extra={renderExtra}
          titleExtension={
            hasTitleIcon === 'hasIcon'
              ? renderIcon(titleIcon, `${prefixCls}-icon`, null)
              : null
          }
          value={val}
          rules={getRules()}
          cardIcon={cardIcon}
          itemRender={itemRender}
          alias={alias}
          required={required}
          positionType="vertical"
          upload={onUploadFile}
          disabled={disabled}
          onChange={onFileChange}
          onClick={filesOnClick}
          maxLength={numberLimit}
          // 存量数据
          valueStyle={{ color: props.valueStyle }}
          fileProps={{
            ...fileProps,
            accept: fileProps?.accept || acceptData(),
          }}
          readonly={readOnly}
          getLocale={(
            t: string,
            tempValue: Record<string, any> | undefined,
          ) => {
            return engineApis?.getLocale(`DformFile.${t}`, '', tempValue);
          }}
        />
      </DFormWrapper>
      {imageVisible && (
        <div
          className={`${prefixCls}-img-close`}
          onClick={() => setImageVisibleVisible(false)}
        >
          <img src={closeIcon} />
        </div>
      )}
      {imgSrc ? (
        <ImageViewer
          image={imgSrc}
          getContainer={document.body}
          visible={imageVisible}
          onClose={() => {
            setImageVisibleVisible(false);
          }}
        />
      ) : null}
    </>
  );
});

FormFile.displayName = 'dformFile';

export default FormFile;
