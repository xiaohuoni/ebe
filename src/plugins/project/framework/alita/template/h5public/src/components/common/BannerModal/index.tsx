import { Icon as LegacyIcon } from '@lingxiteam/icons';
import { LocaleFunction } from '@lingxiteam/types';
import { useThrottleFn } from 'ahooks';
import Toast from 'antd-mobile-5/es/components/toast';
import Animate from 'rc-animate';
import { FC, useState } from 'react';
import * as ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import closeIcon from './assets/closeIcon.png';
import downloadIcon from './assets/downloadIcon.png';
import leftIcon from './assets/leftIcon.png';
import rightIcon from './assets/rightIcon.png';
import zoomInIcon from './assets/zoomInIcon.png';
import zoomOutIcon from './assets/zoomOutIcon.png';
import './index.less';

export interface BannerModalProps {
  visible?: boolean;
  src: string;
  type: 'Image' | 'Iframe' | string;
  onClose: () => void;
  onComplete?: () => void;
  showDownLad?: boolean;
  downloadClick?: (url: string) => void;
  isEnableWaterMark?: boolean;
  appId: string;
  fileId: string;
  pageId: string;
  fileObj?: any;
  getLocale: LocaleFunction;
  doNotShowClose?: boolean;
  language: string;
}

export interface BMFC<T> extends FC<T> {
  open: (props: Omit<T, 'visible'>) => void;
}

const prefixCls = 'lcdp-bannermodal';
const PreviewFile = Loadable({
  loader: async () => {
    const factoryCom = await import(
      /* webpackChunkName: "PreviewFile" */ '../PreviewFile/index'
    );
    const com: any = factoryCom?.default ?? factoryCom;
    return com;
  },
  loading: () => <></>,
});
const BannerModal: BMFC<BannerModalProps> = (props) => {
  const {
    visible,
    src,
    onClose,
    onComplete = () => {},
    showDownLad = false,
    downloadClick,
    appId,
    fileId,
    pageId,
    isEnableWaterMark = true,
    getLocale,
    doNotShowClose = false,
    language,
  } = props;
  const [exists, setExists] = useState(visible);
  const mydownloadClick = () => {
    downloadClick && downloadClick(src);
  };
  const [totalPage, setTotalPage] = useState(1);
  const [pageNum, setPageNum] = useState(1);
  const [scale, setScale] = useState(0.65);
  const [pdfDisShow, setPdfDisShow] = useState(false);
  // 不支持预览文件不展示浮层
  const [loadedFile, setIsLoadedFile] = useState<boolean>(false);
  const [fullScreen, setFullScreen] = useState(true);

  const { run } = useThrottleFn(
    (onClick) => {
      onClick && onClick();
    },
    {
      wait: 200,
      trailing: false,
    },
  );

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setPdfDisShow(true);
    setTotalPage(numPages);
  };

  const renderDisBtn = () => {
    return (
      <div className="pdf-disbtn">
        {pdfDisShow && (
          <>
            <div
              className="pdf-bt"
              onClick={() => {
                if (pageNum > 1) setPageNum(pageNum - 1);
              }}
            >
              <img src={leftIcon} alt="" />
            </div>
            <div className="pdf-bt-text">{`${pageNum}/${totalPage}`}</div>
            <div
              className="pdf-bt"
              onClick={() => {
                if (pageNum < totalPage) setPageNum(pageNum + 1);
              }}
            >
              <img src={rightIcon} alt="" />
            </div>
            <div className="pdf-bt-line" />
            <div
              className="pdf-bt"
              onClick={() => {
                const onClick = () => {
                  if (scale <= 0.1) {
                    Toast.show({
                      content: getLocale('scaleMin'),
                      duration: 1500,
                    });
                    return;
                  }
                  const newScale = (scale * 10 - 0.1 * 10) / 10;
                  setScale(newScale);
                };
                run(onClick);
              }}
            >
              <img src={zoomOutIcon} alt="" />
            </div>
            <div className="pdf-bt-text">{`${Math.round(scale * 100)}%`}</div>
            <div
              className="pdf-bt"
              onClick={() => {
                if (scale >= 2) {
                  Toast.show({
                    content: getLocale('scaleMax'),
                    duration: 1500,
                  });
                  return;
                }
                const newScale = (scale * 10 + 0.1 * 10) / 10;
                setScale(newScale);
              }}
            >
              <img src={zoomInIcon} alt="" />
            </div>
          </>
        )}
        {showDownLad && pdfDisShow && <div className="pdf-bt-line" />}
        {showDownLad && (
          <div className="pdf-bt" onClick={mydownloadClick}>
            <img src={downloadIcon} alt="" />
          </div>
        )}
      </div>
    );
  };
  return (
    <div
      className={
        exists
          ? `${prefixCls}-mask ${prefixCls}-${
              fullScreen ? 'fullScreen' : 'modal'
            }`
          : ''
      }
    >
      <Animate
        transitionName={prefixCls}
        component="div"
        onEnd={(key: string, exist: boolean) => {
          setExists(exist);
          if (!exist) {
            onComplete();
          }
        }}
      >
        {visible && (
          <div
            className={
              loadedFile ? `${prefixCls} ${prefixCls}-with-mask` : prefixCls
            }
          >
            <div className={`${prefixCls}-content`}>
              {loadedFile && !doNotShowClose && (
                <span
                  className={`${prefixCls}-left-icon`}
                  onClick={() => {
                    setFullScreen((pre) => !pre);
                  }}
                >
                  <LegacyIcon
                    type={!fullScreen ? 'fullscreen' : 'fullscreen-exit'}
                  />
                </span>
              )}
              {loadedFile && !doNotShowClose && (
                <div
                  className={`${prefixCls}-content-closeIcon`}
                  onClick={onClose}
                >
                  <img src={closeIcon} alt="" />
                </div>
              )}
              <PreviewFile
                // @ts-ignore
                appId={appId}
                fileId={fileId}
                pageId={pageId}
                isEnableWaterMark={isEnableWaterMark}
                file={src}
                onClose={onClose}
                pdfInfo={{ pageNum, scale, onDocumentLoadSuccess }}
                // 不支持预览文件不展示浮层
                onLoaded={setIsLoadedFile}
                getLocale={getLocale}
                language={language}
              />
              {(pdfDisShow || showDownLad) && renderDisBtn()}
            </div>
          </div>
        )}
      </Animate>
    </div>
  );
};

BannerModal.open = (props) => {
  let closed = false;

  const div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  ReactDOM.render(
    (() => {
      return (
        <BannerModal
          visible
          {...props}
          onClose={() => {
            if (closed) {
              return;
            }
            closed = true;
            close();
            if (props.onClose) {
              props.onClose();
            }
          }}
        />
      );
    })(),
    div,
  );
};

export default BannerModal;
