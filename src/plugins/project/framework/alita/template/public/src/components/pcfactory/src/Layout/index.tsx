import React, { useMemo } from 'react';
import { findItemsSumThanNum, pxToNum } from './utils';
import { LingXiFC } from '@lingxiteam/types';
import { useHiddenStyle } from '../utils';

export interface LayoutProps {
  children: any;
  style: React.CSSProperties;
  layoutOptions?: any;
  visible: boolean;
}

const Layout: LingXiFC<LayoutProps> = (props) => {
  const {
    children,
    style,
    layoutOptions,
    visible = true,
    ...restProps
  } = props;

  const hiddenStyle = useHiddenStyle(visible);
  const myStyle: React.CSSProperties = useMemo(() => {
    const oldDataFlag = style.display === 'grid'; // 旧数据
    const oldGridAutoRows = style?.gridAutoRows === 'column' ? 'column' : 'row'; // grid其他属性在 flex布局下不支持，兼容旧数据
    if (oldDataFlag) {
      return {
        ...style,
        display: 'flex', // 旧数据都改为flex展示
        flexWrap: 'wrap',
        flexDirection: oldGridAutoRows,
        gap: '0px', // 旧数据当中的列间距需要清除，flex布局改到每个item内边距
        ...hiddenStyle,
      };
    }
    return { ...style, flexWrap: 'wrap', gap: '0px', ...hiddenStyle }; // IE不支持gap属性，所以通过margin、padding来实现列、行间距
  }, [style, hiddenStyle]);
  const myChildren = useMemo(() => {
    const { colSpace, grid, colSpan, rowSpace } = layoutOptions || {};
    if (Array.isArray(children) && children.length > 0) {
      const curColSpace = pxToNum(colSpace) / 2;
      if (colSpan) {
        const targetList = colSpan.split(':');
        const curGrid = parseInt(grid, 10);
        const rowList = findItemsSumThanNum(targetList, curGrid);
        let curChildren = 0;
        return rowList.map((item, rowIndex) => {
          curChildren += item.length;
          return (
            <>
              {item.map((col, colIndex) => {
                const span = parseInt(col, 10);
                const itemCol = span > curGrid ? curGrid : span;
                // 目前布局容器提供的是12、20栅格
                const targetCol = (itemCol / curGrid) * 100;
                const childIndex = curChildren - item.length + colIndex;
                const targetChild = children[childIndex];
                if (targetChild) {
                  const renderChildren = {
                    ...targetChild,
                    props: {
                      ...targetChild?.props,
                      canDrag: false,
                      style: {
                        ...targetChild?.props?.style,
                        maxWidth: '100%', // // 一级的普通容器用户会自定义，超过最大的会影响栅格布局，和UI确定最大宽度就为100%
                      },
                    },
                  };
                  return (
                    <div
                      style={{
                        width: `${targetCol}%`,
                        paddingLeft: colIndex === 0 ? 0 : `${curColSpace}px`,
                        paddingRight: colIndex === item.length - 1 ? 0 : `${curColSpace}px`,
                        marginTop: rowIndex === 0 ? 0 : rowSpace,
                      }}
                    >
                      {renderChildren}
                    </div>
                  );
                }
                return null;
              })}
            </>
          );
        });
      }
      const targetChild = children[0]; // 列比例删除为空时，默认是第一个容器
      const renderChildren = {
        ...targetChild,
        props: {
          ...targetChild?.props,
          canDrag: false,
          style: {
            ...targetChild?.props?.style,
            maxWidth: '100%', // 一级的普通容器用户会自定义，超过最大的会影响栅格布局，和UI确定最大宽度就为100%
          },
        },
      };
      return (
        <div
          style={{
            width: '20%',
            paddingLeft: 0,
            paddingRight: `${curColSpace}px`,
          }}
        >
          {renderChildren}
        </div>
      );
    }
    return null;
  }, [children, layoutOptions]);

  return (
    <>
      {children ? (
        <div {...restProps} style={myStyle}>
          {myChildren}
        </div>
      ) : (
        <div {...restProps} style={myStyle} />
      )}
    </>
  );
};

export default Layout;
