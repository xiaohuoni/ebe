import { LingxiForwardRef } from '@lingxiteam/types';
import { useImperativeHandle } from 'react';
import LXRadarChartLoader from './loader';
import LXRadarChartProps from './PropsType';

const LXRadarChar = LingxiForwardRef<unknown, LXRadarChartProps>(
  (props, ref) => {
    useImperativeHandle(ref, () => ({
      // 这里暴漏部分指令方法
      // 由于组件采用懒加载延迟执行组件，导致组件在未加载完成的时候已经执行了页面加载完成的生命周期，所以未来的指令方法不应放入懒加载中，避免页面加载完成时机无法调用指令。
    }));

    return <LXRadarChartLoader {...props} />;
  },
);

export default LXRadarChar;
