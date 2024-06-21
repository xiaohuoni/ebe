import { DataItem, Grid, GridProps } from '@lingxiteam/antd-mobile-plus';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useImperativeHandle, useMemo, useState } from 'react';
import { useDeepCompareEffect } from '../utils/ahooks';

export interface MyGridProps extends GridProps {
  maxRow?: number | string;
  aliasIcon: string;
  aliasText: string;
  moreIcon?: string;
  gridData?: any[];
}

const MyGrid = LingxiForwardRef<any, MyGridProps>((props, ref) => {
  const {
    isCarousel = false,
    carouselMaxRow,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    maxRow = 0,
    aliasIcon = 'icon',
    aliasText = 'text',
    data = [],
    gridData = [],
    columnNum = 4,
    moreIcon,
    appId,
    style,
    visible,
    getEngineApis,
    className,
    lineColor,
    ...restProps
  } = props;

  const [dataSource, setDataSource] = useState<any[]>([]);
  const carouselData = useMemo(() => {
    let newData = data;
    if (gridData && gridData.length > 0 && Array.isArray(gridData)) {
      newData = gridData;
    }
    return newData.map((item: any) => ({
      icon: item[aliasIcon],
      text: item[aliasText],
      ...item,
    }));
  }, [data, aliasIcon, aliasText, gridData]);

  const configCarouselDataIcon = (
    data: DataItem[],
    labelKey = aliasText,
    labelValue = aliasIcon,
  ) => {
    if (Array.isArray(data)) {
      const { getAppFileUrlByFileCode } = getEngineApis();
      setDataSource(
        data.map((it) => ({
          ...it,
          icon: (it[labelValue] || '').startsWith('http')
            ? it[labelValue]
            : getAppFileUrlByFileCode(it.icon),
          text: it[labelKey],
        })),
      );
    }
  };

  useImperativeHandle(ref, () => ({
    setData: (data: any[]) => {
      configCarouselDataIcon(data);
    },
    setDataWithLabelAndValue: (params: {
      dataSource: any[];
      labelKey: string;
      valueKey: string;
    }) => {
      configCarouselDataIcon(
        params.dataSource,
        params.labelKey,
        params.valueKey,
      );
    },
  }));
  useDeepCompareEffect(() => {
    configCarouselDataIcon(carouselData);
  }, [JSON.stringify(carouselData)]);

  if (!visible) {
    return <></>;
  }
  return (
    <div className={`use-app-grid ${className}`}>
      <Grid
        isCarousel={isCarousel}
        columnNum={columnNum}
        data={dataSource}
        carouselMaxRow={carouselMaxRow}
        srcStyle={style.srcStyle}
        style={{ ...style, '--adm-border-color': lineColor }}
        {...restProps}
      />
    </div>
  );
});

export default MyGrid;
