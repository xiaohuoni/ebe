import { LingxiForwardRef } from '@lingxiteam/types';
import { useImperativeHandle, useState } from 'react';
import LineColumnLoader from './loader';
import { ColumnProps } from './PropsType';

const Line = LingxiForwardRef<unknown, ColumnProps>((props, ref) => {
  const [refData, setRefData] = useState();

  useImperativeHandle(ref, () => ({
    // 这里暴漏部分指令方法
    // 由于组件采用懒加载延迟执行组件，导致组件在未加载完成的时候已经执行了页面加载完成的生命周期，所以未来的指令方法不应放入懒加载中，避免页面加载完成时机无法调用指令。
    setChartData: (obj: any) => {
      const { data } = obj;
      if (data) {
        setRefData(data);
      }
    },
  }));

  return <LineColumnLoader {...props} refData={refData} />;
});

export default Line;
