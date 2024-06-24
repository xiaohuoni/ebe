import { FC, useEffect, useRef, useState } from 'react';
import generatorImage from './generatorImage';
import './index.less';

/**
 * 水印配置
 */
export interface AppWaterMarkCfgType {
  fontColor: string;
  fontSize: string;
  tiltAngle?: string;
  waterMarkInfoResultValue: string;
  isEnable: string;
  fontTransparency: number;
  blockWidth?: number;
  blockHeight?: number;
}

interface WatermarkProps {
  config: AppWaterMarkCfgType;
}

const Watermark: FC<WatermarkProps> = (props) => {
  const watermarkInfo = props.config || {};
  const [previewURL, setPreviewURL] = useState<string>();
  const watermarkRef = useRef<HTMLDivElement>(null);
  const getWaterMark = () => {
    // 如果存在水印就不需要展示，不然弹窗等会叠加水印
    generatorImage(
      watermarkInfo.waterMarkInfoResultValue,
      watermarkInfo.blockWidth || 200,
      watermarkInfo.blockHeight || 200,
      Number(watermarkInfo.fontSize || 16),
      watermarkInfo.fontColor || '#000',
      (watermarkInfo.fontTransparency || 50) / 100,
      Number(watermarkInfo.tiltAngle) || 0,
    ).then((res) => {
      if (res) {
        setPreviewURL(res);
      }
    });
  };
  useEffect(() => {
    getWaterMark();
  }, [watermarkInfo]);

  return previewURL ? (
    <div
      ref={watermarkRef}
      className="engine-watermark"
      style={{ background: previewURL ? `url(${previewURL})` : '#FFFFFF' }}
    />
  ) : (
    <></>
  );
};

export default Watermark;
