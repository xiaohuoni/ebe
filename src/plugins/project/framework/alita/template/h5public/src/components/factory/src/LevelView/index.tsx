import { LevelView, LevelViewType } from '@lingxiteam/antd-mobile-plus';
import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useMemo } from 'react';

interface LevelViewStyle extends React.CSSProperties {
  _component: any;
}
export interface MyLevelViewProps extends LevelViewType {
  style: LevelViewStyle;
  visible: boolean;
}
// 枚举定义， ’-‘ 前为dsl所配置样式名称，‘-’后面为组件内部实际所需的样式名称
const enmu = {
  titleStyle: ['titleColor-color', 'titleStyle-style', 'titleSize-fontSize'],
  contentStyle: [
    'selectBackgroundColor-selectBackground',
    'selectColor-selectColor',
    'fontSize-fontSize',
    'selectStyle-style',
  ],
  btnStyle: ['btnStyle-style'],
};
const MyLevelView = LingxiForwardRef<any, MyLevelViewProps>((props, ref) => {
  const { visible, style } = props;
  const styleProps = useMemo(() => {
    const myStyle = {} as any;
    Object.keys(enmu).forEach((key) => {
      let obj: any = {};
      // @ts-ignore
      enmu[key].forEach((i: string) => {
        const objMap = i.split('-');
        // @ts-ignore
        const objValue = style[objMap[0]];
        const objKey = objMap[1];
        if (!objValue) return;
        objKey === 'style'
          ? (obj = { ...obj, ...objValue })
          : (obj[objKey] = objValue);
      });
      myStyle[key] = obj;
    });
    return myStyle;
  }, [style]);
  return visible ? <LevelView {...props} {...styleProps} /> : <></>;
});

MyLevelView.displayName = 'LevelView';

export default MyLevelView;
