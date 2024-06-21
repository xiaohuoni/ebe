import { px2hd } from '@alitajs/f2';
import Donut from '@lingxiteam/charts/es/Donut';
import { LingXiFC } from '@lingxiteam/types';
import classNames from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import { setRgbTo16 } from '../utils';
import CustomModule, { getJSXHtml } from '../utils/CustomModule';
import useAsyncState from '../utils/hooks/useAsyncState';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';
import './index.less';
import { MyDonutProps } from './PropsType';

const prefixCls = 'lcdp-donut';
const MyDonut: LingXiFC<MyDonutProps> = (props, ref) => {
  const {
    colors,
    tableHeader: otherHeader,
    proColor = {},
    strokeColor = {},
    customRenderCode,
    customProgressCode,
    proSize,
    visible,
    $$componentItem,
    className,
    refData,
    ...restProps
  } = props;
  const { MemoRenderer, sandBoxSafeRun, sandBoxLoadModule } =
    props.getEngineApis();
  const { MemoLoopItem, renderer } = MemoRenderer;
  const { components } = renderer;
  const funcExpExecute = useFuncExpExecute(sandBoxSafeRun);
  const [probackColor, setprobackColor] = useState('');
  const [mHtmlStr, setMHtmlStr] = useState('');
  const [strokebackColor, setstrokebackColor] = useState('#eee');
  const [{ x, y, data: originData, sumText = '' }, setState] = useAsyncState({
    x: props.x,
    y: props.y,
    data: props.data,
    sumText: props.sumText,
  });

  useEffect(() => {
    if (
      Object.prototype.toString.call(proColor) === '[object Object]' &&
      Object.keys(proColor).length
    ) {
      const { endColor, startColor, color: cleanColor } = proColor;
      if (proColor.type === 'hGradient') {
        setprobackColor(
          `l(0) 0:${setRgbTo16(startColor)} 1:${setRgbTo16(endColor)}`,
        );
      } else if (proColor.type === 'vGradient') {
        setprobackColor(
          `l(90) 0:${setRgbTo16(startColor)} 1:${setRgbTo16(endColor)}`,
        );
      } else {
        setprobackColor(setRgbTo16(cleanColor));
      }
    }
  }, [proColor]);

  useEffect(() => {
    if (
      Object.prototype.toString.call(strokeColor) === '[object Object]' &&
      Object.keys(strokeColor).length
    ) {
      const { endColor, startColor, color: cleanColor } = strokeColor;
      if (strokeColor.type === 'hGradient') {
        setstrokebackColor(
          `l(0) 0:${setRgbTo16(startColor)} 1:${setRgbTo16(endColor)}`,
        );
      } else if (strokeColor.type === 'vGradient') {
        setstrokebackColor(
          `l(90) 0:${setRgbTo16(startColor)} 1:${setRgbTo16(endColor)}`,
        );
      } else {
        setstrokebackColor(setRgbTo16(cleanColor));
      }
    }
  }, [strokeColor]);

  const tableHeader = useMemo(() => {
    if (Array.isArray(props.tableHeader)) {
      return props.tableHeader;
    }
    if (typeof props.tableHeader === 'string') {
      return props.tableHeader.split(',');
    }
    return undefined;
  }, [props.tableHeader]) as string[];

  const data = useMemo(
    () =>
      originData?.map((it: any) => ({
        ...it,
        [y]: +it[y],
      })),
    [originData, y],
  );

  const style = useMemo(() => {
    if (Array.isArray(components) && components.length > 0) {
      const firstStyle = JSON.parse(JSON.stringify(components[0]?.style || {}));
      components[0].style.width = 'auto';
      return firstStyle || {};
    }
    return {};
  }, [components]);

  const mDountProps: any = {};
  // let mHtmlStr = '';
  // 自定义渲染函数-新数据格式
  // if (customProgressCode && typeof customProgressCode === 'object' && customProgressCode.jsx) {
  //   // JSX语法渲染组件
  //   mHtmlStr = getJSXHtml(<CustomModule
  //     code={customProgressCode.targetVal}
  //     compProps={{
  //       centerText: 'askdjfh',
  //       title: props.sumTitle,
  //       px2hd,
  //     }}
  //     sandBoxLoadModule={sandBoxLoadModule}
  //     errorInfo={{
  //       id: $$componentItem.id,
  //     }}
  //   />);
  // } else if (customProgressCode) {
  //   mHtmlStr = funcExpExecute(customProgressCode, [
  //     {
  //       key: 'sumText',
  //       value: sumText,
  //     },
  //     {
  //       key: 'sumTitle',
  //       value: props.sumTitle,
  //     },
  //     {
  //       key: 'px2hd',
  //       value: px2hd,
  //     },
  //   ]);
  // } else if (customRenderCode?.code) {
  //   // 自定义渲染函数-旧数据格式兼容
  //   mHtmlStr = funcExpExecute(customRenderCode.code, [
  //     {
  //       key: 'sumText',
  //       value: sumText,
  //     },
  //     {
  //       key: 'sumTitle',
  //       value: props.sumTitle,
  //     },
  //     {
  //       key: 'px2hd',
  //       value: px2hd,
  //     },
  //   ]);
  // }

  useEffect(() => {
    if (
      customProgressCode &&
      typeof customProgressCode === 'object' &&
      customProgressCode.jsx
    ) {
      // JSX语法渲染组件
      getJSXHtml(
        <CustomModule
          code={customProgressCode.targetVal}
          compProps={{
            sumText: props.sumText,
            sumTitle: props.sumTitle,
            px2hd,
          }}
          sandBoxLoadModule={sandBoxLoadModule}
          errorInfo={{
            id: $$componentItem.id,
          }}
        />,
        setMHtmlStr,
      );
    } else if (customProgressCode) {
      setMHtmlStr(
        funcExpExecute(customProgressCode, [
          {
            key: 'sumText',
            value: sumText,
          },
          {
            key: 'sumTitle',
            value: props.sumTitle,
          },
          {
            key: 'px2hd',
            value: px2hd,
          },
        ]),
      );
    } else if (customRenderCode?.code) {
      // 自定义渲染函数-旧数据格式兼容
      setMHtmlStr(
        funcExpExecute(customRenderCode.code, [
          {
            key: 'sumText',
            value: sumText,
          },
          {
            key: 'sumTitle',
            value: props.sumTitle,
          },
          {
            key: 'px2hd',
            value: px2hd,
          },
        ]),
      );
    }
  }, [customRenderCode, sumText, props.sumTitle]);

  if (mHtmlStr.length) mDountProps.htmlStr = mHtmlStr;

  if (props.type === 'progress') {
    mDountProps.xTakeY = true;
    mDountProps.colDefs = {
      [`${y}`]: {
        max: 100,
        min: 0,
      },
    };
    mDountProps.strokeColor = strokebackColor;
    mDountProps.geometryProps = {
      color: probackColor,
    };
    mDountProps.size = proSize;
  }

  // useImperativeHandle(ref, () => ({
  //   setData: setState
  // }));

  useEffect(() => {
    if (refData) {
      setState(refData as any);
    }
  }, [refData]);

  return visible ? (
    <div className={classNames(`${prefixCls}-legend`, className)}>
      <Donut
        color={colors ? [x, colors.split(',')] : colors}
        tableHeader={tableHeader}
        {...restProps}
        {...mDountProps}
        x={x}
        data={data}
        renderLegend={(
          { item, index, ...legend }: any,
          showSelectShapeCallback: () => void,
        ) => {
          const renderProps = {
            item,
            i: index,
            __render__: props.__render__,
            renderer,
            compId: $$componentItem.uid,
            itemId: index,
          };
          return (
            <span
              key={item[x]}
              className={`${prefixCls}-legendItem`}
              style={{ width: style.width || '100%' }}
              onClick={showSelectShapeCallback}
            >
              <span
                className={`${prefixCls}-legendDot`}
                style={{ color: legend.color }}
              />
              <MemoLoopItem {...renderProps} />
            </span>
          );
        }}
      />
    </div>
  ) : (
    <></>
  );
};

MyDonut.displayName = 'Donut';

export default MyDonut;
