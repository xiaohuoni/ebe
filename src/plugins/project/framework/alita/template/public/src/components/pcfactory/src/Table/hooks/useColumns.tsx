/* eslint-disable no-nested-ternary */
import CustomModule from '../../utils/CustomModule';
import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { Icon as LegacyIcon } from '@lingxiteam/icons';
import { Button, Divider, Popconfirm, Popover, Skeleton, Table, Tooltip } from 'antd';
import type { ColumnProps } from 'antd/lib/table';
import { FilterDropdownProps } from 'antd/lib/table/interface';
import classnames from 'classnames';
import { cloneDeep } from 'lodash';
import React, { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import CommIcon from '../../Icon';
import EditComponent from '../EditComponent';
import HeaderCellTitle from '../HeaderCell/HeaderCellTitle';
import { compareFn, handleExpandColumn, handleMultiLevelHeader, handleRecursiveParseColumns, treeRootName } from '../utils';

const ACTION_COL_KEY = '_actions';

const actionsMapFn = (getLocale: any) => ({
  edit: [getLocale('edit'), 'edit'],
  delete: [getLocale('delete'), 'delete'],
  detail: [getLocale('detail'), 'file-search'],
});

const useColumns = (props: any) => {
  const {
    form,
    appId,
    pageId,
    compId,
    size,
    innerDataSource,
    columns,
    editMode,
    extend,
    currentRowKey,
    extendNum, // 操作栏按钮最大展示数
    rowActions,
    fixedAction,
    hiddenAction,
    nowInlineEditKey,
    nowEditingData,
    actionWidth,
    colServiceData,
    colServiceDataForEdit,
    hasSortEvent,
    page,
    pagination,
    colorFormatInfo,
    rowSpanMap,
    rowClassMap,
    rowSpanColMap,
    expandIconPositionRef,
    expandIconPosition,
    expandComponents,
    getEditVisible,
    getDetailVisible,
    getDeleteVisible,
    isFlexColumn,
    onRowDetailClick,
    onRowDeleteClick,
    onRowEditClick,
    onRowSaveClick,
    onRowCancelClick,
    onRowAttrValsChange,
    sandBoxSafeRun,
    funcExpExecute,
    engineApis,
    loading,
    handleIsRowEditableCanUse,
    filters,
    filterDropdownOpen,
    onFilterDropdownVisibleChange,
    renderFilterDropDown,
    rowSelection,
    tableGroupColorInfo,
    getLocale,
    onTableCellClick,
    getRealIndexById,
  } = props;

  const actionsMap: any = actionsMapFn(getLocale);

  // const api = getApis();

  const tableRef = useRef<any>();
  const [pageData, setPageData] = useState<any>({});
  const [colCustomOrder, setColCustomOrder] = useState<any>([]); // 自定义列顺序记录
  const [customSelectedCols, setCustomSelectedCols] = useState<any>(); // 自定义列显隐记录
  const [popVisible, setPopVisible] = useState({});
  const [columnWidth, setColumnWidth] = useState<any[]>([]);
  // 初始加载列宽
  const [initLoadColWidth, setInitLoadColWidth] = useState(false);

  const getInnerRowAction = (rowAction: any, row: any, index: number | null, rowId: any) => {
    let visible = false;
    let clickText = rowAction.value;
    rowAction.btnType = 'builtIn';
    try {
      let ruleFunc = rowAction.rule;
      if (typeof rowAction.rule === 'string') {
        const stringrule = rowAction.rule;
        ruleFunc = (row: any, index: number | null, rowId: string | number) =>
          sandBoxSafeRun(stringrule, {
            ...row,
            row,
            index,
            rowId,
          });
      }

      if (rowAction.type) {
        visible = typeof ruleFunc === 'function' ? !ruleFunc(row, index, rowId) : true;
      }
    } catch (e) {
      console.log(e);
    }
    const propsVisibleFn: any = {
      edit: getEditVisible,
      delete: getDeleteVisible,
      detail: getDetailVisible,
    };

    const propsClickFn: any = {
      edit: 'onRowEditClick',
      delete: 'onRowDeleteClick',
      detail: 'onRowDetailClick',
    };
    clickText = propsClickFn[rowAction.type] || clickText;
    return [typeof propsVisibleFn[rowAction.type] === 'function' ? getEditVisible(row) : visible, clickText];
  };

  const getRealRowActions = useCallback((row: any, index: number | null) => {
    const rowId = row[currentRowKey];
    if (Array.isArray(rowActions) && rowActions.length) {
      let editVisible = false;
      let detailVisible = false;
      let deleteVisible = false;
      rowActions.forEach((rowAction) => {
        const [visible] = getInnerRowAction(rowAction, row, index, rowId);
        switch (rowAction.type) {
          case 'edit': {
            editVisible = visible;
            break;
          }
          case 'detail': {
            detailVisible = visible;
            break;
          }
          case 'delete': {
            deleteVisible = visible;
            break;
          }
          default:
        }
      });

      editVisible = typeof getEditVisible === 'function' ? getEditVisible(row) : editVisible;
      detailVisible =
        typeof getDetailVisible === 'function' ? getDetailVisible(row) : detailVisible;
      deleteVisible =
        typeof getDeleteVisible === 'function' ? getDeleteVisible(row) : deleteVisible;

      // 过滤掉隐藏的按钮，得到真正的按钮数据
      const actualRowActions = (rowActions || []).filter((btn) => {
        if (typeof btn === 'string' ? btn === 'delete' : btn.type === 'delete') {
          return deleteVisible && btn.checked;
        }
        if (typeof btn === 'string' ? btn === 'detail' : btn.type === 'detail') {
          return detailVisible && btn.checked;
        }
        return editVisible && btn.checked;
      }).map(item => {
        if (item.disabled) {
          const disabledFunc = (row: any, index: number | null, rowId: string | number) => sandBoxSafeRun(item.disabled, {
            ...row,
            row,
            index,
            rowId,
          });

          return {
            ...item,
            disabled: disabledFunc(row, index, rowId),
          };
        }
        return item;
      });

      return actualRowActions;
    }
    return [];
  }, [rowActions, sandBoxSafeRun, getEditVisible, getDetailVisible, getDeleteVisible]);

  const getRealExtendRowActions = useCallback((row: any, index: number | null) => {
    const rowId = row[currentRowKey];
    if (Array.isArray(extend) && extend.length) {
      const btnVisible: any = [];
      let eventIndex = 0;
      extend.forEach((item, i) => { // 扩展的按钮事件改成动态生成，而不是固定的5个
        if (!item.type) {
          eventIndex += 1;
        }
        const visibleText = `getBtn${eventIndex}Visible`;
        let clickText = item?.value || `onClickBtn${eventIndex}`; // 兼容旧数据
        let visible;
        if (props[visibleText] && typeof props[visibleText] === 'function') {
          visible = props[visibleText](row);
        } else if (item.type) {
          // 内置按钮合并到extend中，当存在type时，表示为内置按钮
          [visible, clickText] = getInnerRowAction(item, row, index, rowId);
        }
        btnVisible.push(visible);

        if (props[clickText]) {
          item.onClick = props[clickText];
        }
        item.btnType = 'extend';
      });
      // 过滤掉隐藏的扩展按钮，得到真正的扩展按钮数据
      const actualExtendData = extend.filter((extd, i) => {
        if (typeof extd.rule === 'string') {
          const stringrule = extd.rule;
          extd.rule = (row: any, index: number) => sandBoxSafeRun(stringrule, {
            ...row,
            row,
            index,
          });
        }

        const ruleVis = typeof extd.rule === 'function' ? !extd.rule(row, index) : !extd.rule;

        return btnVisible[i] === undefined
          ? ruleVis
          : btnVisible[i];
      }).map(item => {
        if (item.disabled) {
          const disabledFunc = (row: any, index: number | null, rowId: string | number) => sandBoxSafeRun(item.disabled, {
            ...row,
            row,
            index,
            rowId,
          });

          return {
            ...item,
            disabled: disabledFunc(row, index, rowId),
          };
        }
        return item;
      });
      return actualExtendData;
    }
    return [];
  }, [extend, sandBoxSafeRun]);

  const calcRowActionWidth = useCallback(
    (actions = []) => {
      let width = 0;
      const titleArr: any = [];
      let actList = actions;

      if (actList?.length > extendNum) {
        // 只保留 extendNum 数量的按钮，其他在更多中
        actList = actList.filter((_: any, index: number) => index + 2 <= extendNum);
        actList = [...actList, { title: getLocale('more'), icon: true }];
      }

      let iconNum = 0;
      actList.forEach((child: any) => {
        if (child.title) {
          titleArr.push(child.title);
        }
        if (child.icon) {
          iconNum += 1;
        }
      });
      const fontWidth = 14;
      const smFontWidth = 12;
      const defaultIconWidth = 14; // 默认图标宽度
      const space = 4; // 图标与文字间隔
      const defaultPadding = 20; // 默认左右 padding
      const mdsmPadding = 16; // 中小尺寸左右 padding
      const dividerWidth = 17; // 分割线占位宽度（含margin）
      const realPadding = ['small', 'middle'].includes(size || '')
        ? mdsmPadding
        : defaultPadding;
      const realFontWidth = size === 'small' ? smFontWidth : fontWidth;
      const realDividerWidth = dividerWidth * (titleArr.length - 1);
      width =
        realDividerWidth +
        (defaultIconWidth + space) * iconNum +
        realFontWidth * titleArr.join('').length +
        realPadding;
      return width;
    },
    [size],
  );

  const handleResize = (index: number) => (_: React.SyntheticEvent<Element>, { size }: any) => {
    const newColumns = [...columnWidth];
    newColumns[index] = Number.isNaN(size.width) ? 200 : size.width;
    setColumnWidth(newColumns);
  };

  // 操作栏扩展按钮
  const renderExtendBtns = (btnList: any, isPopover = false, row: any, index: number) => {
    return btnList.map((c: any, i: number) => {
      if (c.type) {
        return renderBuiltInSingleBtn(c, row, index, i, btnList, undefined, btnList?.slice(i));
      }
      const { icon, iconPos, id, isIcon, onClick, visible: buttonVisible = true } = c;
      const iconClassName = iconPos
        ? iconPos === 'left'
          ? 'actIcon-left'
          : 'actIcon-right' : '';
      const BtnIcon = icon ? <CommIcon
        getEngineApis={props?.getEngineApis}
        $$componentItem={props?.$$componentItem}
        className={iconClassName}
        icon={icon}
        engineApis={engineApis}
      /> : undefined;
      return buttonVisible ? isPopover ? (
        <div>
          <Tooltip title={c.title} visible={!!isIcon && undefined}>
            <Button
              type="link"
              className="ued-table-actions-antBtn"
              disabled={c.disabled}
              key={id}
              onClick={(e) => {
                e.stopPropagation();
                if (typeof onClick === 'function') {
                  onClick(currentRowKey ? row[currentRowKey] : row, row, index);
                }
              }}
            >
              <div className="ued-table-actions-extendBtn">
                {iconPos && iconPos === 'left' && BtnIcon}
                {!isIcon && c.title}
                {iconPos && iconPos === 'right' && BtnIcon}
              </div>
            </Button>
          </Tooltip>
        </div>) : (
          <Fragment key={id}>
            <Tooltip title={c.title} visible={!!isIcon && undefined}>
              <Button
                type="link"
                className="ued-table-actions-antBtn"
                disabled={c.disabled}
                key={id}
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof onClick === 'function') {
                    onClick(currentRowKey ? row[currentRowKey] : row, row, index);
                  }
                }}
              >
                <div className="ued-table-actions-extendBtn">
                  {iconPos && iconPos === 'left' && BtnIcon}
                  {!isIcon && c.title}
                  {iconPos && iconPos === 'right' && BtnIcon}
                </div>
              </Button>
            </Tooltip>
            {i !== btnList.length - 1 && <Divider type="vertical" />}
          </Fragment>
      ) : null;
    });
  };

  // 操作栏更多按钮
  const renderExtendMoreBtns = (
    showBuiltInBtns: any[],
    showExtendBtns: any[],
    moreBuiltInBtns: any[],
    moreExtendBtns: any[],
    row: any,
    index: any,
  ) => {
    return (
      <>
        {
          // 扩展
          showExtendBtns?.length > 0 ? (
            <>
              {!!showBuiltInBtns?.length && <Divider type="vertical" />}
              {renderExtendBtns(showExtendBtns, false, row, index)}
            </>
          ) : null
        }
        {
          // 更多
          moreBuiltInBtns?.length + moreExtendBtns?.length > 0 && (
            <>
              {/* TODO:  是什么？ showBuiltInBtns[showBuiltInBtns.length - 1]?.visible !== false */}
              {(!!showBuiltInBtns?.length || !!showExtendBtns?.length) && <Divider type="vertical" />}
              <Popover
                overlayClassName="ued-table-more-pop"
                content={(
                  <div style={{ maxHeight: '300px', overflow: 'auto', padding: '12px 16px' }} onClick={e => e.stopPropagation()}>
                    {
                      moreBuiltInBtns?.length ? moreBuiltInBtns.map((child: any, idx: number) => {
                        return renderBuiltInSingleBtn(child, row, index, idx, showBuiltInBtns, true);
                      }) : null
                    }
                    {renderExtendBtns(moreExtendBtns, true, row, index)}
                  </div>
                )}
                trigger="click"
                placement="topRight"
              >
                <Button
                  type="link"
                  className="ued-table-actions-antBtn"
                  key="more"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="ued-table-actions-extendBtn">
                    {getLocale?.('more')}
                    <LegacyIcon className="actIcon-left" type="down" />
                  </div>
                </Button>
              </Popover>
            </>
          )
        }
      </>
    );
  };

  // 操作栏单个内置按钮
  const renderBuiltInSingleBtn = (
    c: any,
    row: any,
    rowIndex: number | null,
    idx: number,
    defaultBtnList: any,
    isPopover = false,
    showExtendBtns?: any[],
    moreBuiltInBtns?: any[],
    moreExtendBtns?: any[]
  ) => {
    // eslint-disable-next-line no-nested-ternary
    const iconClassName = c?.iconPos
      ? c.iconPos === 'left'
        ? 'actIcon-left'
        : 'actIcon-right'
      : '';
    const { visible: buttonVisible = true } = c;
    const BtnIcon = c.icon ? (
      <CommIcon
        className={iconClassName}
        icon={c.icon}
        getEngineApis={props?.getEngineApis}
        $$componentItem={props?.$$componentItem}
      />
    ) : undefined;

    const type = typeof c === 'string' ? c : c?.type;

    let buildInBtn = (
      <Button
        type="link"
        disabled={c.disabled}
        className={classnames('ued-table-actions-antBtn', type ? `ued-table-actions-${type}` : undefined)}
        key={typeof c === 'string' ? c : c.type}
        onClick={(e) => {
          e.stopPropagation();
          if (
            (typeof c === 'string' ? c === 'detail' : c.type === 'detail') &&
            typeof onRowDetailClick === 'function'
          ) {
            onRowDetailClick(row, rowIndex);
          } else if (
            (typeof c === 'string' ? c === 'edit' : c.type === 'edit') &&
            typeof onRowEditClick === 'function'
          ) {
            onRowEditClick(row, rowIndex);
          }
          setPopVisible({ ...popVisible, [popKey]: false });
        }}
        onDoubleClick={(e) => {
          e.stopPropagation();
        }}
      >
        {typeof c === 'string' ? (
          <div className="ued-table-actions-extendBtn">
            <LegacyIcon className="actIcon-left" type={actionsMap[c][1]} />
            {actionsMap[c][0]}
          </div>
        ) : (
          <div className="ued-table-actions-extendBtn">
            {c.iconPos && c.iconPos === 'left' && BtnIcon}
            {!c.isIcon && c.title}
            {c.iconPos && c.iconPos === 'right' && BtnIcon}
          </div>
        )}
      </Button>
    );
    const popKey = `${rowIndex}-${idx}`;
    buildInBtn = c.isIcon ? (
      <Tooltip
        title={c.title}
        // @ts-ignore
        visible={popVisible?.[popKey]}
        onVisibleChange={v => setPopVisible({ ...popVisible, [popKey]: v })}
      >
        {buildInBtn}
      </Tooltip>
    ) : buildInBtn;

    const btn = buttonVisible ? (
      <Fragment key={idx}>
        {
          (
            (typeof c === 'string' ? c === 'delete' : c.type === 'delete') &&
            !c.disabled
          ) ? (
            <span
              style={{ lineHeight: '0px' }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Popconfirm
                onVisibleChange={v => v && setPopVisible({ ...popVisible, [popKey]: false })}
                placement={
                  (moreBuiltInBtns?.length || moreExtendBtns?.length || showExtendBtns?.length)
                    ? 'top' : 'topRight'
                }
                title={getLocale('deleteConfirm')}
                onConfirm={(e: any) => {
                  e.stopPropagation();
                  if (typeof onRowDeleteClick === 'function') {
                    onRowDeleteClick(row, rowIndex);
                  }
                }}
              >
                {buildInBtn}
              </Popconfirm>
            </span>
            ) : buildInBtn
        }
        {!isPopover && idx !== defaultBtnList.length - 1 && <Divider type="vertical" />}
      </Fragment>
    ) : null;
    return isPopover ? <div>{btn}</div> : btn;
  };

  // 递归解析列信息
  const recursiveColumns = (columns: any) => {
    const resolveColumns = columns.map((col: any, index: number) => {
      if (col === Table.EXPAND_COLUMN) {
        return col;
      }

      // 解析动态列配置，根据动态列数据源，得到真正的列配置数组数据
      if (col.type === 'dynamicCol') {
        if (col?.dataSource?.length) {
          return col.dataSource.map((c: any, index: number) => {
            const dataIndex = c[col.dataIndex];
            const realCol = {
              ...col, // 动态列所有配置行为（排序、固定等）相同
              dataIndex,
              title: () => (
                <HeaderCellTitle
                  size={size}
                  column={{ ...col, title: c[col.title] }}
                  mode="engine"
                  funcExpExecute={funcExpExecute}
                  engineApis={engineApis}
                />
              ),
              onHeaderCell: () => ({
                style: col?.style,
              }),
            };
            // 是否开启筛选
            if (realCol.filter) {
              realCol.onCell = (_: any, rowIndex: number) => ({
                'td-dataIndex': dataIndex,
                rowIndex,
              });

              realCol.filteredValue = filters[dataIndex];
              realCol.filterDropdown = (filtersParams: FilterDropdownProps) =>
                renderFilterDropDown(filtersParams, dataIndex, resolveColumns);
              realCol.filterDropdownVisible = !!filterDropdownOpen[dataIndex];
              realCol.onFilterDropdownVisibleChange = (open: boolean) => {
                onFilterDropdownVisibleChange(dataIndex, open);
              };
            }

            // key增强，拼接index，防止重复
            realCol.key = `${realCol.key}_${index}`;

            // 移除动态列标识字段，和动态列数据源字段
            delete realCol.type;
            delete realCol.dataSource;
            return realCol;
          });
        }
        return [];
      }

      if (col?.children?.length) {
        col.children = recursiveColumns(col?.children);
      }

      return {
        ...col,
        onCell: (record: any, rowIndex: number) => {
          const __rowSpan = rowSpanMap?.get(record) || {};
          const __rowClass = rowClassMap?.get(record) || {};
          const rowSpan = __rowSpan && __rowSpan[col.dataIndex] === undefined ? 1 : __rowSpan[col.dataIndex];
          const rowClass = __rowClass && __rowClass[col.dataIndex];

          const cellProps: any = {
            engineApis,
            funcExpExecute,
            appId,
            pageId,
            row: record,
            rowId: record[currentRowKey],
            rowIndex,
            editable:
              !!col.editoption &&
              currentRowKey &&
              nowInlineEditKey &&
              record[currentRowKey] === nowInlineEditKey,
            isExtend: col.isExtend,
            dataIndex: col.dataIndex,
            colorFormatInfo: [...(colorFormatInfo || []), ...(col.colorFormatInfo || [])],
            isCustomRendering: !!col.customRendering,
            rowSpan,
            className: rowClass,
            onTableCellClick,
          };

          if (col.filter) {
            // 开启过滤时，在td元素上记录对应的字段编码
            cellProps['td-dataIndex'] = col.dataIndex;
          }

          const { translateContent } = parseTranslateContent(col, { text: record[col.dataIndex], row: record, index });

          // 单元格提示 -> 默认提示
          if (
            col?.editContent?.edittype === 'title' &&
            col?.editContent?.title &&
            col.key !== ACTION_COL_KEY // 操作列不需要默认提示
          ) {
            if (col?.editContent?.title?.code && col?.editContent?.title?.jsx) {
              cellProps.title = undefined;
            } else if (col?.editContent?.title?.code && funcExpExecute && !col?.editContent?.title?.jsx) {
              // 如果是这个函数表示默认名称（因为垃圾DSL中，如果是这个code表示提示标题）
              if (col.editContent.title.code === 'function main(text, row, index) { return text;}') {
                cellProps.title = translateContent;
              } else {
                // 以下这个方法执行'function main(text, row, index) { return text;}'会报错, 先不兼容处理，先使用新版的jsx进行
                cellProps.title = funcExpExecute(col.editContent.title.code, [
                  {
                    key: 'rowId',
                    value: translateContent,
                  },
                  {
                    key: 'row',
                    value: record,
                  },
                  {
                    key: 'index',
                    value: rowIndex,
                  },
                ]);
              }
            } else {
              cellProps.title = col?.editContent?.title;
            }
            // 当editContent是false表示不提示，否则默认提示标题
          } else if (col.editContent !== false) {
            // 默认进行标题的提示
            cellProps.title = translateContent;
          }

          return cellProps;
        },
        onHeaderCell: (record: any) => ({
          width: record.width,
          isFlexColumn,
          onResize: handleResize(index),
          style: record?.style,
        }),
      };
    })
      .reduce((prev: any, curr: any) => {
      // 将动态列的列配置数组数据打平
        if (Array.isArray(curr)) {
          return [...prev, ...curr];
        }
        return [...prev, curr];
      }, []);
    return resolveColumns;
  };

  const actionsColWidth = useMemo(() => {
    if (!actionWidth && innerDataSource && innerDataSource.length) {
      let width = 0;
      innerDataSource.forEach((row: any, index: number) => {
        // 过滤掉隐藏的按钮，得到真正的内置的默认按钮数据(详情、编辑、删除)
        const actualRowActions = getRealRowActions(row, index);
        // 过滤掉隐藏的扩展按钮，得到真正的扩展按钮数据
        const actualExtendRowActions = getRealExtendRowActions(row, index);

        const currRowActionWidth = calcRowActionWidth([
          ...actualRowActions,
          ...actualExtendRowActions,
        ]);
        width = currRowActionWidth > width ? currRowActionWidth : width;
      });

      return width || undefined;
    }
    return actionWidth;
  }, [innerDataSource, actionWidth, getRealRowActions, getRealExtendRowActions, calcRowActionWidth]);

  /**
   * 符合非隐藏规则列
   * customCols：左右固定列 + 已选的、自定义顺序的列
   * customizableCols：可自定义(显隐、顺序)的列
   */
  const [customCols, customizableCols] = useMemo(() => {
    const fixedLeft: any[] = [];
    const fixedRight: any[] = [];
    let newColumns = [...columns];
    let hiddenCount = 0;
    // 当前用户设置过的自定义列顺序
    const orderMap: any = {};
    // @ts-ignore
    colCustomOrder.forEach((o, i) => {
      orderMap[o] = i;
    });
    // 记录表格列内容
    const colMap: any = {};
    // 记录重新调整列内容后之前没有的列
    const extendCols: any[] = [];
    columns.forEach((c: any, i: number) => {
      try {
        let isHidden;
        const colHiddenRule = c?.hiddenRule;
        if (colHiddenRule) {
          isHidden = sandBoxSafeRun(colHiddenRule);
        }

        const newCol = {
          ...c,
          originTitle: c.title,
        };

        if (isHidden) {
          newColumns.splice(i - hiddenCount, 1);
          hiddenCount += 1;
        } else if (c.fixed) {
          if (c.fixed === 'left') {
            fixedLeft.push(newCol);
          } else {
            fixedRight.push(newCol);
          }
        } else {
          colMap[c.dataIndex] = newCol;
          if (orderMap[c.dataIndex] === undefined) {
            extendCols.push(newCol);
          }
        }
      } catch (e) {
        console.log(e);
      }
    });
    newColumns = [];
    colCustomOrder.forEach((c: any) => {
      if (colMap[c]) {
        newColumns.push(colMap[c]);
      }
    });
    const customizableCols = newColumns.concat(extendCols);
    // 只展示选中列
    let customCols = customizableCols.filter(
      (c) => customSelectedCols === undefined || customSelectedCols?.includes(c.dataIndex),
    );
    // 固定列与自定义列拼接在一起组成最终展示列
    customCols = fixedLeft.concat(customCols).concat(fixedRight);
    return [customCols, customizableCols];
  }, [columns, colCustomOrder, customSelectedCols]);

  const actionRowFlag = useRef<boolean>(false);

  const parseTranslateContent = (
    c: any,
    rowInfo: {
      text: any;
      row: any;
      index: number;
    }
  ) => {
    const { text, row, index } = rowInfo;
    const { staticDataSource, staticService, editoption, dataIndex } = c;
    const isOrderCol = !!(c.type && c.type === 'orderCol'); // 判断是否为内置序号列

    // 行编辑规则当列所有行共用，现改为某行当列专用,实现数据联动
    const rowEditoption = JSON.parse(JSON.stringify(editoption || '{}'));
    // 此时为下拉框绑定表达式场景，需要通过沙箱编译
    const baseValName = rowEditoption?.selectoption?.valName;
    const childKeys = rowEditoption?.selectoption?.attr?.childKeys; // 绑定静态数据时，可能选择了某几个项

    if (typeof baseValName === 'string') {
      editoption.selectoption.renderValName = (row: any, index: number) =>
        sandBoxSafeRun(baseValName, {
          ...row,
          row,
          index,
        });

      let _valName;
      const _row =
        // eslint-disable-next-line eqeqeq
        editMode == 'multiple' && row[currentRowKey] === nowInlineEditKey
          ? nowEditingData
          : innerDataSource.find((r: any) => r[currentRowKey] === row[currentRowKey]);
      try {
        _valName = editoption.selectoption.renderValName(_row, index);
      } catch (e) {
        console.error(e);
      }

      rowEditoption.selectoption = {
        ...rowEditoption.selectoption,
        valName: Array.isArray(_valName) ? _valName : [],
      };
    } else if (Array.isArray(childKeys) && childKeys.length) {
      // 如果选项设置中设置了静态编码，并且指勾选了其中几项属性，则需要过滤
      rowEditoption.selectoption.options = rowEditoption.selectoption.options.filter((d: any) => childKeys.includes(d.value));
    } else if (rowEditoption?.selectoption?.staticService && colServiceDataForEdit) {
      // 绑定了服务
      const { labelKey, valueKey } = rowEditoption.selectoption.staticService;
      const optionskey = Object.keys(colServiceDataForEdit).find(k => {
        if (k === c.dataIndex && Array.isArray(colServiceDataForEdit[k])) {
          return true;
        }
        return false;
      });
      if (optionskey) {
        rowEditoption.selectoption.colServiceData = colServiceDataForEdit[optionskey].map((o: any) => ({
          value: o[valueKey],
          label: o[labelKey],
          key: o[valueKey],
        }));
      }
    }

    let translateContent = text;

    // 内容不为空进行数据翻译
    if (translateContent !== undefined && translateContent !== null) {
      // 静态数据翻译
      if (Array.isArray(staticDataSource)) {
        // 支持数组或逗号分支字符翻译
        translateContent = (Array.isArray(text) ? text : String(text).split(','))
          .map(n => {
            // 弱等保证 Number 与 String 可比较
            const obj = staticDataSource.find(o => o.value == n); // eslint-disable-line
            return obj ? obj.label : n;
          })
          .join(',');
      } else if (editoption && editoption?.__staticService__ && editoption.edittype === 'SuperSelect') {
        // 高级选择框选用后端翻译好的字段值
        const _introduce = row[`${dataIndex}_introduce`];
        translateContent = _introduce ? (Array.isArray(_introduce) ? _introduce : [_introduce]).join(',') : text;
      }
      // 服务数据翻译
      if (staticService && colServiceData) {
        const { labelKey, valueKey } = staticService;
        const needtranskey = Object.keys(colServiceData).find(k => k === c.dataIndex && Array.isArray(colServiceData[k]));
        if (needtranskey) {
          // 支持数组或逗号分支字符翻译
          translateContent = (Array.isArray(text) ? text : String(text).split(','))
            .map(n => {
              // 弱等保证 Number 与 String 可比较
              const obj = colServiceData[needtranskey].find((o: any) => o[valueKey] == n); // eslint-disable-line
              return obj ? obj[labelKey] : n;
            })
            .join(',');
        }
      }
      if (editoption?.edittype === 'ModalSelect') {
        const _introduce = row[`${dataIndex}_introduce`];
        translateContent = _introduce ? (Array.isArray(_introduce) ? _introduce : [_introduce]).join(',') : text;
      }
    }

    // 内置序号列，数据内容自增规则为 1 2 3 4
    if (isOrderCol) {
      const beforeNums = page ? (pagination.current - 1) * pagination.pageSize : 0;
      translateContent = beforeNums + index + 1; // 暂不支持翻译（咨询欢姐），所以放在翻译后面，进行覆盖
    }

    return {
      translateContent,
      rowEditoption,
    };
  };

  const finalcolumns: any[] = useMemo(() => {
    const newColumns = [...customCols];
    const finalCols: ColumnProps<any>[] = [];

    // 用于表格头分组的数据结构：左树根节点，为第0层
    const leftTree: any = {
      title: treeRootName,
    };

    newColumns.forEach((c, i) => {
      const {
        editoption,
        dataIndex,
        editContent,
      } = c;

      // 按照条件，初始化生成实际的列定义
      newColumns[i].render = (text: any, row: any, index: any) => {
        const rowId = row[currentRowKey];
        const { translateContent, rowEditoption } = parseTranslateContent(c, { text, row, index });

        // 编辑内容
        if (editoption && editoption.edittype) {
          // 行编辑规则
          const isRowEditableCanUse = !!handleIsRowEditableCanUse && handleIsRowEditableCanUse(row, index);

          // 列可编辑规则
          let isColEditable = true;
          if (typeof editoption.editable === 'string') {
            const editoptionEditableRule = editoption.editable;
            editoption.editable = (row: any, rowId: string | number, index: number) => sandBoxSafeRun(
              editoptionEditableRule,
              {
                row,
                rowId,
                index,
              }
            );
          }

          if (typeof editoption.editable === 'function') {
            isColEditable = editoption.editable(row, rowId, index);
          }

          // 弹窗选择控件，组件状态入参处理
          const responseObj = editoption?.modalInfo?.responseObj;
          if (
            Array.isArray(responseObj) &&
            editoption?.edittype === 'ModalSelect' &&
            responseObj?.length
          ) {
            editoption.modalInfo.responseObj = (row: any, rowId: string | number, index: number) => (
              responseObj?.map((d: any) => {
                if (typeof d?.value === 'string') {
                  const rule = d.value;
                  d.value = sandBoxSafeRun(
                    rule,
                    {
                      row,
                      rowId,
                      index,
                    }
                  );
                }
                return d;
              })
            );
          }

          let modalSelectParams = [];
          if (typeof editoption?.modalInfo?.responseObj === 'function') {
            modalSelectParams = editoption?.modalInfo?.responseObj(row, rowId, index);
          }

          const editDisabled = !isColEditable || !isRowEditableCanUse;
          const isWholeTableEdit = editMode === 'multiple'; // 整表：多行编辑模式
          const isSingleRowEdit = currentRowKey && nowInlineEditKey && row[currentRowKey] === nowInlineEditKey; // 单行编辑模式

          if (isWholeTableEdit || isSingleRowEdit) {
            const inlineVChange = (value: any, otherProps = {}) => {
              if (typeof onRowAttrValsChange === 'function') {
                onRowAttrValsChange(row, dataIndex, value, otherProps);
              }
            };

            return (
              <EditComponent
                c={c}
                disabled={editDisabled}
                editoption={rowEditoption}
                form={form}
                appId={appId}
                compId={compId}
                currentRowKey={currentRowKey}
                rowId={rowId}
                rowData={isWholeTableEdit ? row : nowEditingData}
                inlineVChange={inlineVChange}
                modalSelectParams={modalSelectParams}
                sandBoxSafeRun={sandBoxSafeRun}
                engineApis={engineApis}
              />
            );
          }
        }

        let content = translateContent;

        // 表格单元格内-行数控制控制
        let controllLineStyle = {};
        const isLineNumSet = c.lineNum && typeof c.lineNum === 'number' && c.lineNum > 0;
        if (isLineNumSet) {
          const lineHeight = size === 'small' ? 16 : 20;
          controllLineStyle = {
            lineHeight: `${lineHeight}px`,
            maxHeight: `${lineHeight * c.lineNum}px`,
            WebkitLineClamp: c.lineNum,
          };
        }

        let shouldRenderEdittypeTitle = false;

        if (
          c?.editContent?.edittype === 'title' &&
          c?.editContent?.title &&
          c.key !== ACTION_COL_KEY // 操作列不需要默认提示
        ) {
          if (c?.editContent?.title?.code && c?.editContent?.title?.jsx) {
            shouldRenderEdittypeTitle = true;
          }
        }
        if (isLineNumSet && !c.customRendering) {
          if (shouldRenderEdittypeTitle) {
            content = (
              <span className="ued-control-line-number" style={controllLineStyle}>
                <Tooltip
                  title={
                    <CustomModule
                      code={c?.editContent?.title?.code}
                      sandBoxLoadModule={engineApis.sandBoxLoadModule}
                      errorInfo={{
                        id: props.$$componentItem.id,
                      }}
                      compProps={{
                        text: translateContent,
                        item: row,
                        index,
                      }}
                    />
                  }
                >
                  <span>{translateContent}</span>
                </Tooltip>
              </span>
            );
          } else {
            content = (
              <span className="ued-control-line-number" style={controllLineStyle}>
                {translateContent}
              </span>
            );
          }
        }

        // 自定义渲染函数
        if (c.jsx) {
          content = (
            <CustomModule
              code={c.customRendering}
              sandBoxLoadModule={engineApis.sandBoxLoadModule}
              errorInfo={{
                id: props.$$componentItem.id,
              }}
              compProps={{
                text: translateContent,
                item: row,
                index,
              }}
            />
          );
        } else if (c.customRendering && funcExpExecute) {
          content = (
            <span
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: funcExpExecute(c.customRendering, [
                  {
                    key: 'text',
                    value: translateContent,
                  },
                  {
                    key: 'row',
                    value: row,
                  },
                  {
                    key: 'index',
                    value: index,
                  },
                ]),
              }}
              className={classnames({ 'ued-control-line-number': isLineNumSet })}
              style={controllLineStyle}
            />
          );
        }

        // 单元格提示 -> 气泡卡片
        if (editContent?.edittype === 'Popover' && editContent?.selectoption) {
          const { page, options } = editContent.selectoption;
          // 页面
          if (page && page.pageId && engineApis?.renderPopover) {
            if (!Object.keys(pageData).length || !pageData[page.pageId]) {
              return {
                children: content,
              };
            }

            try {
              const pageRule = page.rule;
              if (pageRule) {
                if (typeof pageRule === 'string') {
                  page.rule = (row: any, rowId: string, index: number) => sandBoxSafeRun(
                    pageRule,
                    {
                      row,
                      rowId,
                      index,
                    }
                  );
                }

                if (
                  typeof page?.rule === 'function' &&
                  page.rule(row, rowId, index)
                ) {
                  return {
                    children: content,
                  };
                }
              }
            } catch (e) {
              console.error(e);
            }

            const params: any = {};

            if (page.options) {
              page.options.forEach((_c: any) => {
                try {
                  const stateParamRule = _c?.paramFunc ?? _c?.stateParam;
                  if (stateParamRule) {
                    if (typeof stateParamRule === 'string') {
                      _c.paramFunc = (row: any, rowId: string, index: number) => sandBoxSafeRun(
                        stateParamRule,
                        {
                          row,
                          rowId,
                          index,
                        }
                      );
                    }

                    if (typeof _c.paramFunc === 'function') {
                      params[_c.code] = _c.paramFunc(row, rowId, index);
                      _c.stateParam = params[_c.code];
                    }
                  }
                } catch (e) {
                  console.error(e);
                }
              });
            }
            content = engineApis.renderPopover({
              childElement: content,
              props,
              popoverSetting: {
                page,
                options: page.options,
                state: params,
              },
              uid: compId,
            });
          } else if (options.content) { // 自定义
            const { maxWidth, content: popContent, rule: popRule, ...resOptions } = options;

            // 隐藏规则
            try {
              if (popRule) {
                if (typeof popRule === 'string') {
                  options.rule = (row: any, rowId: string, index: number) => sandBoxSafeRun(
                    popRule,
                    {
                      row,
                      rowId,
                      index,
                    }
                  );
                }

                if (
                  typeof options?.rule === 'function' &&
                  options.rule(row, rowId, index)
                ) {
                  return {
                    children: content,
                  };
                }
              }
            } catch (e) {
              console.error(e);
            }

            let newPopContent = popContent;
            try {
              if (popContent) {
                if (typeof popContent === 'string') {
                  options.content = (row: any, rowId: string, index: number) => sandBoxSafeRun(
                    popContent,
                    {
                      row,
                      rowId,
                      index,
                    }
                  );
                }

                if (typeof options?.content === 'function') {
                  newPopContent = options.content(row, rowId, index);
                }
              }
            } catch (e) {
              console.error(e);
            }

            content = (
              <Popover
                overlayStyle={{ maxWidth: maxWidth || 'none', wordBreak: 'break-word' }}
                content={newPopContent}
                {...resOptions}
                arrowPointAtCenter
              >
                {content}
              </Popover>
            );
          }
        }

        return {
          children: content,
        };
      };

      // 是否开启排序（判断标准：1、配置态配置 sorter: true 2、存量数据存在 defaultSortOrder)
      if (c.sorter || c.defaultSortOrder) {
        // 判断是根据前端默认排序函数排序，还是受控排序
        if (hasSortEvent || Object.keys(rowSpanColMap).length > 0) {
          newColumns[i].sorter = true;
        } else {
          newColumns[i].sorter = (a: any, b: any) => {
            return compareFn(a[c.dataIndex || c.key], b[c.dataIndex || c.key]);
          };
        }
      }

      // 是否开启筛选
      if (c.filter) {
        newColumns[i].filteredValue = filters[dataIndex];
        newColumns[i].filterDropdown = (filtersParams: FilterDropdownProps) => renderFilterDropDown(filtersParams, dataIndex, newColumns);
        newColumns[i].filterDropdownVisible = !!filterDropdownOpen[dataIndex];
        newColumns[i].onFilterDropdownVisibleChange = (open: boolean) => onFilterDropdownVisibleChange(dataIndex, open);
      }

      // 处理表头标题（动态列单独处理）
      if (c.type !== 'dynamicCol') {
        newColumns[i].title = () => (
          <HeaderCellTitle
            size={size}
            column={{ ...c, title: c.originTitle }}
            mode="engine"
            funcExpExecute={funcExpExecute}
            engineApis={engineApis}
          />
        );
      }

      // 处理分组逻辑
      handleMultiLevelHeader(leftTree, newColumns[i]);
    });

    // 存在表格头分组后的数据
    if (leftTree?.children?.length) {
      finalCols.push(...leftTree?.children);
    } else {
      finalCols.push(...newColumns);
    }

    if (
      !hiddenAction &&
      ((rowActions && rowActions.length) || (extend && extend.length))
    ) {
      actionRowFlag.current = true;
      const actionColumn: any = {
        title: getLocale('ctrl'),
        key: ACTION_COL_KEY,
        width: actionsColWidth,
        // className: preColIsGroup ? '' : 'divider',
        editable: false,
        isExtend: true,
        id: ACTION_COL_KEY,
        render: (text: any, row: any, index: number | null) => {
          const isNowEditRow = currentRowKey && nowInlineEditKey && row[currentRowKey] === nowInlineEditKey;

          // 过滤掉隐藏的按钮，得到真正的内置的默认按钮数据(详情、编辑、删除)
          const builtInBtns = getRealRowActions(row, getRealIndexById(row[currentRowKey]));
          // 过滤掉隐藏的扩展按钮，得到真正的扩展按钮数据
          const extendBtns = getRealExtendRowActions(row, getRealIndexById(row[currentRowKey]));

          const allBtns = [
            ...builtInBtns,
            ...extendBtns,
          ]?.filter(btn => btn?.checked !== false); // 只展示选中的按钮;

          let showBtns: any[] = [];
          let moreBtns: any[] = [];

          // 当按钮数量超过 设置最大展示的数量两个时，超过的两个及以上部分放到更多中
          const allBtnsLen = allBtns?.length;
          if (allBtnsLen > extendNum) {
            showBtns = allBtns.slice(0, extendNum - 1);
            moreBtns = allBtns.slice(extendNum - 1, allBtnsLen);
          } else {
            showBtns = allBtns;
          }

          const showBuiltInBtns = showBtns.filter(b => b.btnType === 'builtIn');
          const showExtendBtns = showBtns.filter(b => b.btnType === 'extend');
          const moreBuiltInBtns = moreBtns.filter(b => b.btnType === 'builtIn');
          const moreExtendBtns = moreBtns.filter(b => b.btnType === 'extend');

          return (
            <div className="ued-table-actions">
              {
                // 行内编辑部分
                isNowEditRow ? (
                  <>
                    <div
                      className="ued-table-actions-extendBtn"
                      onClick={e => {
                        e.stopPropagation();
                        if (typeof onRowSaveClick === 'function') {
                          onRowSaveClick(row, getRealIndexById(row[currentRowKey]), false);
                        }
                      }}
                    >
                      <SaveOutlined rev="" className="actIcon-left" />
                      {getLocale('save')}
                    </div>
                    <Divider type="vertical" />
                    <Popconfirm
                      title={getLocale('cancelConfirm')}
                      placement="topRight"
                      overlayClassName="ued-table-actions-overlay"
                      onConfirm={(e: any) => {
                        e.stopPropagation();
                        if (typeof onRowCancelClick === 'function') {
                          onRowCancelClick(row);
                        }
                      }}
                    >
                      <div
                        className="ued-table-actions-extendBtn"
                        onClick={e => {
                          e.stopPropagation();
                        }}
                      >
                        <CloseOutlined rev="" className="actIcon-left" />
                        {getLocale('cancel')}
                      </div>
                    </Popconfirm>
                  </>
                ) : (
                  <>
                    {showBuiltInBtns.map((c: any, idx: number) => {
                      return renderBuiltInSingleBtn(c, row,
                        getRealIndexById(row[currentRowKey]), idx, showBuiltInBtns, false, showExtendBtns, moreBuiltInBtns, moreExtendBtns);
                    })}
                    {renderExtendMoreBtns(showBuiltInBtns, showExtendBtns, moreBuiltInBtns, moreExtendBtns, row,
                      getRealIndexById(row[currentRowKey]))}
                  </>
                )
              }
            </div>
          );
        },
      };
      if (fixedAction) {
        actionColumn.fixed = 'right';
      }
      finalCols.push(actionColumn);
    } else {
      actionRowFlag.current = false;
    }

    handleExpandColumn({
      expandComponents,
      expandIconPosition,
      expandIconPositionRef,
      columns: finalCols,
    });

    // 处理表头背景色
    if (tableGroupColorInfo) {
      const { colIdMap }: any = tableGroupColorInfo?.colorType === 'single' ? {}
        : handleRecursiveParseColumns(tableGroupColorInfo?.customColorColumns);
      handleRecursiveParseColumns(finalCols, 1, {
        colorType: tableGroupColorInfo?.colorType,
        customColorSetting: colIdMap,
        singleColorSetting: tableGroupColorInfo?.singleColorSetting,
      });
    }

    const resolvedColumns = recursiveColumns(finalCols);
    // loading的时候改成鱼骨屏
    if (loading) {
      const myColumns: any[] = [];
      resolvedColumns.forEach((item: any) => {
        const column: any = cloneDeep(item);
        column.render = () => <Skeleton.Input active size="small" />;
        myColumns.push(column);
      });
      return myColumns;
    }
    return resolvedColumns;
  }, [
    // TODO: 简单补充并修正一下依赖项，有问题再看怎么改
    form,
    actionsColWidth,
    innerDataSource,
    getRealExtendRowActions,
    getRealRowActions,
    handleResize,
    hasSortEvent,
    page,
    pagination?.current,
    pagination?.pageSize,
    size,
    compId,
    rowClassMap,
    rowSpanMap,
    // DynamicPopover,
    colServiceData,
    colServiceDataForEdit,
    colorFormatInfo,
    customCols,
    currentRowKey,
    rowSpanColMap,
    editMode,
    extend,
    fixedAction,
    hiddenAction,
    nowEditingData,
    nowInlineEditKey,
    pageData,
    renderExtendMoreBtns,
    rowActions,
    onRowDetailClick,
    onRowDeleteClick,
    onRowEditClick,
    onRowSaveClick,
    onRowCancelClick,
    onRowAttrValsChange,
    expandComponents,
    expandIconPosition,
    expandIconPositionRef,
    filters,
    filterDropdownOpen,
    loading,
  ]);

  const printColumns: any[] = useMemo(() => {
    if (actionRowFlag.current) {
      return finalcolumns.slice(0, finalcolumns.length - 2);
    }
    return finalcolumns;
  }, [finalcolumns]);

  useEffect(() => {
    if (tableRef.current && isFlexColumn) {
      // 当前执行时，antd表格列虽展示，但列宽按指定宽度渲染，需等下一次render，目前解决办法先延迟执行
      setTimeout(() => {
        const thList = tableRef?.current?.querySelectorAll('colgroup')[1].children || [];
        for (let i = 0; i < thList.length; i += 1) {
          const rowWidth = thList[i].offsetWidth;
          columnWidth[i] = rowWidth;
        }
        // TODO: 这里是啥意思？？
        if (rowSelection) {
          columnWidth.shift();
        }
        setColumnWidth([...columnWidth]);
        setInitLoadColWidth(true);
      });
    }
  }, [tableRef.current, isFlexColumn]);

  // 将自定义列地相关操作记录到sessionStorage中，刷新时保留
  useEffect(() => {
    if (compId && (colCustomOrder?.length > 0 || customSelectedCols !== undefined)) {
      const tableStr: string = window.sessionStorage.getItem('TABLE_CUSTOM') || '{}';
      try {
        const tableInfo = JSON.parse(tableStr);
        if (!tableInfo[compId]) {
          tableInfo[compId] = {};
        }
        const target = tableInfo[compId];
        target.ORDER = colCustomOrder;
        target.SELECTED = customSelectedCols;
        const newRes = JSON.stringify(tableInfo);
        if (tableStr !== newRes) {
          window.sessionStorage.setItem('TABLE_CUSTOM', newRes);
        }
      } catch (e) {
        //
      }
    }
  }, [colCustomOrder, customSelectedCols, compId]);

  useEffect(() => {
    if (compId) {
      const tableStr: string = window.sessionStorage.getItem('TABLE_CUSTOM') || '{}';
      const tableInfo = JSON.parse(tableStr);
      const { ORDER = [], SELECTED } = tableInfo[compId] || {};
      setColCustomOrder(ORDER);
      setCustomSelectedCols(SELECTED);
    }
  }, [compId]);

  useEffect(() => {
    const newColumns = [...columns];
    // const pages = {};
    const popoverPageIds: any[] = [];
    newColumns.forEach((c, i) => {
      const { editContent } = c;
      if (editContent) {
        if (editContent.edittype === 'Popover' && editContent?.selectoption) {
          const { page } = editContent.selectoption;
          if (page?.pageId && !popoverPageIds.includes(page.pageId)) {
            popoverPageIds.push(page.pageId);
          }
        }
      }
    });

    popoverPageIds.forEach(async (c) => {
      const res = await engineApis?.service?.getPageVersionById({ pageId: c });
      setPageData((pre: any) => ({ ...pre, [c]: res }));
    });
  }, [columns.length]);

  return {
    tableRef,
    finalcolumns,
    customizableCols,
    customSelectedCols,
    setCustomSelectedCols,
    setColCustomOrder,
    columnWidth,
    setColumnWidth,
    initLoadColWidth,
    printColumns,
    fixedAction,
  };
};

export default useColumns;
