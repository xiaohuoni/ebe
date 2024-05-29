import { useMemo } from 'react';
import { useCreation } from '../ahooks';

export const useDataMask = ({
  getEngineApis,
  dataMask,
  defaultValue,
  value,
}: {
  getEngineApis: any;
  dataMask: any;
  defaultValue: any;
  value: any;
}) => {
  /**
   * isMask 是否配置了脱敏规则
   * maskValue 脱敏数据
   * maskStatus 脱敏状态开启
   * getMaskData 将数据脱敏
   */
  const maskData = useCreation<{
    isMask: boolean;
    defaultMaskValue: any;
    maskValue: any;
    getMaskData(value: any): any;
    init: boolean;
  }>(() => {
    const { functorsMap } = getEngineApis() || {};
    if (!functorsMap?.DATAMASK || !dataMask) {
      return {
        isMask: false,
        defaultMaskValue: defaultValue,
        maskValue: value,
        getMaskData: (val) => val,
        init: false,
      };
    }

    const defaultMaskValue =
      defaultValue !== undefined
        ? functorsMap.DATAMASK(defaultValue || '', dataMask)
        : defaultValue;
    return {
      isMask: true,
      defaultMaskValue,
      maskValue:
        value !== undefined
          ? functorsMap.DATAMASK(value || '', dataMask)
          : defaultMaskValue,
      getMaskData(value) {
        return functorsMap.DATAMASK(value, dataMask);
      },
      init: false,
    };
  }, []);

  const maskValue = useMemo(() => {
    if (maskData.isMask) {
      if (!maskData.init) {
        maskData.init = true;
        return value;
      }
      if (maskData.maskValue !== value) {
        maskData.maskValue = maskData.getMaskData(value);
      }
      return maskData.maskValue;
    }
    return value;
  }, [value]);

  return {
    maskData,
    disableMastStatus: () => {
      maskData.isMask = false;
    },
    maskValue: !maskData.isMask ? value : maskValue,
    defaultMaskValue: !maskData.isMask
      ? defaultValue
      : maskData.defaultMaskValue,
  };
};

export default useDataMask;
