import React, { useEffect, useState } from 'react';
import CommIconEG from '../../Icon';
import { handleIsValidIconCfg } from '../../Icon/hooks';
import CommIconED from '../../Icon/IconED';
import { useLocale } from '../../utils/hooks/useLocale';

const useExpandable = (expandCfg: any, isED?: boolean) => {
  const {
    innerDataSource = [],
    currentRowKey,
    rowExpandable,
    expandOpenIcon,
    expandCloseIcon,
    defaultExpandAllRows,
    defaultExpandedRowKeys,
    expandRowByClick,
    expandComponents,
    renderExpandComponents,
    onExpand,
    onExpandedRowsChange,
    sandBoxSafeRun,
    funcExpExecute,
    engineApis,
    isTree = false,
    getEngineApis,
  } = expandCfg || {};

  const CommIcon = isED ? CommIconED : CommIconEG;

  const { getLocale } = useLocale(engineApis);

  const [childrenColumnName, setChildrenColumnName] = useState<string>('');
  const realChildrenColumnName = childrenColumnName || 'children'; // 默认为 children

  const hasExpandContent =
    Array.isArray(expandComponents) && expandComponents.length;
  const [expandedRowKeys, setExpandedRowKeys] = useState(() => {
    if (!defaultExpandAllRows && defaultExpandedRowKeys) {
      try {
        const arr = JSON.parse(defaultExpandedRowKeys);
        if (Array.isArray(arr) && arr.length) {
          return arr;
        }
        return [];
      } catch (e) {
        console.error(
          '默认展开行 defaultExpandedRowKeys 必须配置为合理的数组字符串',
          e,
        ); // eslint-disable-line no-console
      }
    }
    return [];
  });

  const expandable: any = {
    childrenColumnName: realChildrenColumnName,
    expandRowByClick,
    expandedRowKeys,
    // 配置了扩展图标才进行自定义渲染处理，否则走表格默认的扩展图标逻辑
    expandIcon: (props: any) => {
      const { prefixCls, expanded, onExpand, record, expandable } = props;
      let { isLeaf } = props;

      const iconClassName = `${prefixCls}-row-expand-icon`;

      // 非树形表格调用时，isLeaf 为 undefined
      if (!isTree) {
        // 需要兼容表格存量树形数据判断
        isLeaf =
          !Array.isArray(record?.[realChildrenColumnName]) ||
          (Array.isArray(record?.[realChildrenColumnName]) &&
            record?.[realChildrenColumnName]?.length === 0);
      }

      // 若没有下级
      if (isLeaf) {
        const expandIconSpaceCls = `${iconClassName} ${prefixCls}-row-expand-icon-spaced`;
        const space = <span className={expandIconSpaceCls} />;
        // 树形结构数据，要保留空白
        if (isTree || record?.[realChildrenColumnName]) {
          return space;
        }

        // 如果没有行扩展内容，则没有图标, 要保留缩进前缀
        if (!hasExpandContent) {
          return null;
        }

        // 如果有行扩展内容，但不满足行扩展内容展开条件，则没有图标
        if (!expandable) {
          return null;
        }
      }

      const handleIconClick = (e: any) => {
        e.stopPropagation();
        // 如果没有行扩展内容，且设置点击行展开时，不能加 onClick，会导致点击图标关闭不了
        if (!hasExpandContent && expandRowByClick && expanded) {
          return undefined;
        }
        return onExpand(record, e);
      };

      // 还原树形表格原生的展开/收缩按钮
      const iconExpandCls = `${prefixCls}-row-expand-icon-${
        expanded ? 'expanded' : 'collapsed'
      }`;
      const iconClsConnect = `${iconClassName} ${iconExpandCls}`;
      const customIconCls = `${iconClsConnect} ued-table-row-expand-custom-icon`;

      if (!expanded) {
        let openIcon = (
          <button
            type="button"
            className={iconClsConnect}
            onClick={handleIconClick}
          />
        );

        if (handleIsValidIconCfg(expandOpenIcon)) {
          openIcon = (
            // @ts-ignore
            <CommIcon
              icon={expandOpenIcon}
              className={customIconCls}
              engineApis={engineApis}
              onClick={handleIconClick}
            />
          );
        }

        return openIcon;
      }

      let closeIcon = (
        <button
          type="button"
          className={iconClsConnect}
          onClick={handleIconClick}
        />
      );

      if (handleIsValidIconCfg(expandCloseIcon)) {
        closeIcon = (
          // @ts-ignore
          <CommIcon
            icon={expandCloseIcon}
            className={customIconCls}
            engineApis={engineApis}
            onClick={handleIconClick}
          />
        );
      }

      return closeIcon;
    },
    onExpand: (expanded: boolean, record: any) => {
      if (typeof onExpand === 'function') {
        onExpand(expanded, record[currentRowKey], record);
      }
    },
    onExpandedRowsChange: (newExpanedRowKeys = []) => {
      if (typeof onExpandedRowsChange === 'function') {
        onExpandedRowsChange(newExpanedRowKeys);
      }
      setExpandedRowKeys(newExpanedRowKeys);
    },
  };

  if (hasExpandContent) {
    // 有内容设置才有(且开启之后，展开的按钮会有个单独的单元格)
    expandable.expandedRowRender = (
      record: any,
      index: number,
      indent: any,
      expanded: any,
    ) => {
      if (Array.isArray(expandComponents) && expandComponents.length) {
        let newExpandComponents = [];
        if (!isED) {
          newExpandComponents = expandComponents.map((c) => {
            const busiCompStates = c?.props?.busiCompStates;
            if (
              typeof busiCompStates === 'object' &&
              !Array.isArray(busiCompStates)
            ) {
              const busiCompStatesKeys = Object.keys(busiCompStates);
              const newBusiCompStates: any = {};

              busiCompStatesKeys.forEach((k) => {
                if (typeof busiCompStates[k] === 'string') {
                  const originExp = busiCompStates[k];
                  busiCompStates[k] = (row: any, rowId: any, index: number) =>
                    sandBoxSafeRun(originExp, {
                      row,
                      rowId,
                      index,
                    });
                }

                if (typeof busiCompStates[k] === 'function') {
                  try {
                    newBusiCompStates[k] = busiCompStates[k](
                      record,
                      record[currentRowKey],
                      index,
                    );
                  } catch (e) {
                    console.error(e);
                  }
                }
              });

              return {
                ...c,

                /**
                 * remark：由于运行态引擎的 renderComponents 对组件属性做了缓存持久化处理
                 * 所以相同id 会导致非第一次展开的业务组件属性 与 第一次展开的相同，需要对 id 进行特殊处理
                 */
                id: `${c.id}_${record[currentRowKey]}`,
                props: {
                  ...(c.props || {}),
                  busiCompStates: newBusiCompStates,
                },
              };
            }
            return c;
          });

          if (typeof renderExpandComponents === 'function') {
            // remark: 目前只支持绑定一个
            const busiCompSimpleDSL = newExpandComponents[0] || {};
            const busiComp = renderExpandComponents(
              busiCompSimpleDSL,
              getEngineApis,
            );
            return busiComp;
          }
        } else {
          let remark = getLocale('Table.expand.component');
          expandComponents.forEach((c, i) => {
            remark = `${remark}${c.label || ''}(${c.id || ''})${
              i !== expandComponents.length - 1 ? '、' : ''
            }`;
          });
          return remark;
        }
      }
      return undefined;
    };

    // 用于控制行扩展内容展开，根据条件来决定是否有扩展内容
    expandable.rowExpandable = (record: any) => {
      // 存量：配置态生成的DSL是对象，code存储函数代码，但不是$$包裹的表达式
      if (funcExpExecute && rowExpandable?.code) {
        return funcExpExecute(rowExpandable.code, [
          {
            key: 'row',
            value: record,
          },
        ]);
      }
      if (funcExpExecute && rowExpandable) {
        /**
         * 新版：配置态生成的DSL就是一个$$包含函数的表达式
         * 但会经过预处理移除 $$
         */
        return funcExpExecute(rowExpandable, [
          {
            key: 'row',
            value: record,
          },
        ]);
      }

      return true;
    };
  } else {
    // 没有配置行扩展内容时，设置行内容展开都为false
    expandable.rowExpandable = () => {
      return false;
    };
  }

  const handleAllExpandRowKeys = (rows: any[]) => {
    const currPageRowKeys: any[] = rows
      .map((row: any) => {
        // 树形数据时，存在多级
        if (row?.[realChildrenColumnName]) {
          return [
            row?.[currentRowKey],
            ...handleAllExpandRowKeys(row[realChildrenColumnName]),
          ];
        }

        return row?.[currentRowKey];
      })
      .reduce((prev: any, curr: any) => {
        // 将数组数据打平
        if (Array.isArray(curr)) {
          return [...prev, ...curr];
        }
        return [...prev, curr];
      }, []);
    return currPageRowKeys || [];
  };

  useEffect(() => {
    // 设置了全部展开，则展开当前页所有行
    if (innerDataSource.length && defaultExpandAllRows) {
      const currPageRowKeys = handleAllExpandRowKeys(innerDataSource);
      setExpandedRowKeys(currPageRowKeys);
    }
  }, [innerDataSource]);

  return {
    expandable,
    childrenColumnName: realChildrenColumnName,
    setChildrenColumnName,
  };
};

export default useExpandable;
