import { EngineApisType, EngineBaseProps } from '@lingxiteam/types';
import { ICellRendererParams } from 'ag-grid-community';
import { Button, Popover } from 'antd-mobile-5';
import React from 'react';
import Icon from '../../Icon';
import IconEd from '../../Icon/IconED';
import CustomModule from '../../utils/CustomModule';
import { useFuncExpExecute } from '../../utils/hooks/useFuncExpExecute';
import useFormatCell from '../hooks/useFormatCell';
import {
  FADE_COLOUR_TAG,
  GHOST_TAG,
  HYPER_LINK,
  OPERATOR_ENDS_WITH,
  OPERATOR_EQUAL,
  OPERATOR_GREATER_THAN,
  OPERATOR_INCLUDE,
  OPERATOR_LESS_THAN,
  OPERATOR_NOT_EQUAL,
  OPERATOR_NOT_INCLUDE,
  OPERATOR_NOT_NULL,
  OPERATOR_NULL,
  OPERATOR_STARTS_WITH,
  POINT_TAG,
  PROGRESS_BAR,
  PURE_COLOUR_FILL,
  PURE_COLOUR_TAG,
  RELATION_OR,
} from '../utils/constant';
import './index.less';

export interface CellProps {
  params: ICellRendererParams;
  item: any;
  isEditor: boolean;
  appId: string;
  pageId: string;
  tableRowKey?: string;
  sandBoxLoadModule: EngineApisType['sandBoxLoadModule'];
  extendActions?: Record<string, any>;
  getEngineApis?: any;
  $$componentItem: EngineBaseProps['$$componentItem'];
}

interface extendItem {
  id: string;
  title: string; //
  iconPos: 'left' | 'right' | string; // 按钮图标位置
  value: string; // 按钮事件
  isIcon?: boolean; // 是否纯图标
  icon?: Record<string, any>; // 图标信息
  checked: boolean; // 是否勾选中，未勾选中不渲染
  rule?: string; // 是否显示
  disabled?: string | boolean; // 是否禁用
  visible?: boolean;
}

const prefixCls = 'appDynamicTable-cell';

const TypeCells: React.FC<CellProps> = (props) => {
  const {
    params,
    item,
    isEditor,
    appId,
    pageId,
    tableRowKey,
    sandBoxLoadModule,
    $$componentItem,
    extendActions,
    getEngineApis,
  } = props;
  const engineApis = getEngineApis?.();
  const { colorFormatInfo, customRendering, extendInfo } = item;
  // console.log('TypeCell:', params);
  const validateCondition = (data: any, row: any) => {
    const { code, operator, value } = data;

    const toStringVal = (val: any) => `${val}`;

    switch (operator) {
      case OPERATOR_EQUAL:
        return toStringVal(row[code]) === toStringVal(value);
      case OPERATOR_NOT_EQUAL:
        return toStringVal(row[code]) !== toStringVal(value);
      case OPERATOR_GREATER_THAN:
        return row[code] > value;
      case OPERATOR_LESS_THAN:
        return row[code] < value;
      case OPERATOR_INCLUDE:
        if (typeof row[code].includes === 'function') {
          return row[code].includes(value);
        }
        return false;
      case OPERATOR_NOT_INCLUDE:
        if (typeof row[code].includes === 'function') {
          return !row[code].includes(value);
        }
        return false;
      case OPERATOR_STARTS_WITH:
        if (typeof row[code].startsWith === 'function') {
          return row[code].startsWith(value);
        }
        return false;
      case OPERATOR_ENDS_WITH:
        if (typeof row[code].endsWith === 'function') {
          return row[code].endsWith(value);
        }
        return false;
      case OPERATOR_NULL:
        return (
          row[code] === undefined || row[code] === null || row[code] === ''
        );
      case OPERATOR_NOT_NULL:
        return !(
          row[code] === undefined ||
          row[code] === null ||
          row[code] === ''
        );
      default:
        return false;
    }
  };

  const collectCondition: (data: string | any[], record: any) => any = (
    data: string | any[],
    record: any,
  ) => {
    if (!data || !data?.length) {
      return true;
    }
    let valid = true;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.length; i++) {
      const conditon = data[i];
      if (conditon.operator) {
        if (data[i - 1]?.relation === RELATION_OR) {
          valid = valid || validateCondition(conditon, record);
        } else {
          valid = valid && validateCondition(conditon, record);
        }
      } else if (data[i - 1]?.relation === RELATION_OR) {
        valid = valid || collectCondition(conditon.items, record);
      } else {
        valid = valid && collectCondition(conditon.items, record);
      }
    }
    return valid;
  };

  const getRuningResultFunc = (
    row: any,
    index: number | null,
    rowId: string | number,
    funcitonString: string,
  ) =>
    engineApis?.sandBoxSafeRun?.(funcitonString, {
      ...row,
      row,
      index,
      rowId,
    });

  const renderActionButtonView = (
    list: extendItem[],
    actionKeys: string[],
    data: { rowId: string; row: any; rowIndex: number },
  ) => {
    return list.map((item: extendItem) => {
      let btnOnClick: any = () => {};

      if (actionKeys.includes(item?.value)) {
        btnOnClick = () =>
          extendActions?.[item.value](data.rowId, data.row, data.rowIndex);
      }
      return (
        <Button
          color="primary"
          fill="none"
          disabled={(item.disabled || false) as boolean}
          onClick={btnOnClick}
        >
          <div className="buttonInsideView">
            {item.iconPos === 'left' &&
              item?.icon &&
              (isEditor ? (
                <IconEd
                  icon={item.icon}
                  className="buttonLeftIcon"
                  getEdEngineApi={getEngineApis}
                  $$componentItem={$$componentItem}
                />
              ) : (
                <Icon
                  icon={item.icon}
                  className="buttonLeftIcon"
                  name={item?.title}
                  getEngineApis={getEngineApis}
                  $$componentItem={$$componentItem}
                />
              ))}
            <div>{!item?.isIcon && item.title}</div>
            {item.iconPos === 'right' &&
              item?.icon &&
              (isEditor ? (
                <IconEd
                  icon={item.icon}
                  className="buttonRightIcon"
                  getEdEngineApi={getEngineApis}
                  $$componentItem={$$componentItem}
                />
              ) : (
                <Icon
                  icon={item.icon}
                  className="buttonRightIcon"
                  name={item?.title}
                  getEngineApis={getEngineApis}
                  $$componentItem={$$componentItem}
                />
              ))}
          </div>
        </Button>
      );
    });
  };

  const renderActionView = (
    extendInfo: any,
    params: any,
    extendActions?: Record<string, any>,
  ) => {
    const { extend = [], extendNum = 0 } = extendInfo;
    const row = params?.data || {};
    const rowId = tableRowKey
      ? row[tableRowKey]
      : params?.node?.id || params?.value;
    const rowIndex = params?.rowIndex;
    const actionKeys = Object.keys(extendActions || {});
    // 最后用于显示的按钮
    let finalButtons = extend
      .map((item: extendItem) => {
        const data: any = { ...item };
        data.disabled = false;
        data.visible = true;
        if (!isEditor) {
          if (typeof item.disabled === 'string') {
            if (item.disabled === 'false') {
              data.disabled = false;
            } else {
              data.disabled = getRuningResultFunc(
                row,
                rowIndex,
                rowId,
                item.disabled,
              );
            }
          }

          if (typeof item.rule === 'string') {
            if (item.rule === 'true') {
              data.visible = false;
            } else {
              // 当值为true时隐藏，false时显示
              data.visible = !getRuningResultFunc(
                row,
                rowIndex,
                rowId,
                item.rule,
              );
            }
          }
        }
        return data;
      })
      .filter((item: any) => {
        return item.checked && item.visible;
      });
    // 更多部分按钮
    let popoverButtons: extendItem[] = [];
    if (extendNum > 0 && finalButtons.length > extendNum) {
      popoverButtons = finalButtons.slice(extendNum - 1);
      finalButtons = finalButtons.slice(0, extendNum - 1);
    }
    return (
      <div className={prefixCls}>
        {renderActionButtonView(finalButtons, actionKeys, {
          row,
          rowId,
          rowIndex,
        })}
        {popoverButtons.length > 0 && (
          <Popover
            trigger="click"
            placement="bottom"
            className={`${prefixCls}-popover`}
            content={renderActionButtonView(popoverButtons, actionKeys, {
              row,
              rowId,
              rowIndex,
            })}
          >
            <Button color="primary" fill="none">
              更多
            </Button>
          </Popover>
        )}
      </div>
    );
  };

  // 自定义配置
  if (Array.isArray(colorFormatInfo) && colorFormatInfo.length > 0) {
    let cellContent = '';
    let myCellClick: any;
    let cellContentType = '';
    let cellFontColor = '';
    let cellBackgroundColor = '';
    let cellBorderColor = '';
    const rowId = tableRowKey
      ? params?.data?.[tableRowKey]
      : params?.node?.id || params?.value;
    colorFormatInfo.forEach((item: any) => {
      // 遇到单元格样式作用范围一样的，取最后匹配的单元格样式
      // const formatInfo = [...colorFormatInfo];
      // const lastContent: any = formatInfo.pop();
      const {
        conditions,
        contentType,
        foreColor: fontColor,
        backColor: backgroundColor,
        borderColor,
        content,
        clickType,
        page,
        modal,
        openType,
        fileIds,
        filename,
        previewType,
        downloadUrl,
        // 新窗口预览时，窗口的宽高信息
        modalWidth,
        modalHeight,
      } = item;
      cellContent = content || params?.value;

      if (collectCondition(conditions, params?.data || {})) {
        cellContentType = contentType;
        cellFontColor = fontColor;
        cellBackgroundColor = backgroundColor;
        cellBorderColor = borderColor;

        if (engineApis && !isEditor) {
          // 运行态才进行解析
          const funcExpExecute = useFuncExpExecute(
            engineApis?.sandBoxSafeRun || ({} as any),
          );
          const { onCellClick } = useFormatCell({
            funcExpExecute,
            engineApis,
            appId,
            pageId,
            content,
            clickType,
            page,
            modal,
            openType,
            fileIds,
            filename,
            previewType,
            downloadUrl,
            modalWidth,
            modalHeight,
          });
          myCellClick = onCellClick;
        }
      }
    });
    // eslint-disable-next-line default-case
    switch (cellContentType) {
      // 纯色填充
      case PURE_COLOUR_FILL:
        return (
          <div
            className="customer-cell-pure"
            style={{ color: cellFontColor, background: cellBackgroundColor }}
            onClick={() => {
              if (myCellClick) {
                myCellClick(params?.data || {}, rowId, params?.rowIndex);
              }
            }}
          >
            {cellContent}
          </div>
        );
      // 原点样式
      case POINT_TAG:
        return (
          <div
            className="customer-cell-point-tag"
            onClick={() => {
              if (myCellClick) {
                myCellClick(params?.data || {}, rowId, params?.rowIndex);
              }
            }}
          >
            <span
              className="point"
              style={{ background: cellBackgroundColor }}
            />
            <span
              className="customer-cell-common"
              style={{ color: cellFontColor }}
            >
              {cellContent}
            </span>
          </div>
        );
      // 描边标签
      case GHOST_TAG:
        return (
          <div
            className="customer-cell-gost-tag"
            style={{ color: cellFontColor }}
            onClick={() => {
              if (myCellClick) {
                myCellClick(params?.data || {}, rowId, params?.rowIndex);
              }
            }}
          >
            <span
              className="span-cell"
              style={{
                background: cellBackgroundColor,
                borderColor: cellBorderColor,
              }}
            >
              {cellContent}
            </span>
          </div>
        );
      // 方块，纯色标签
      case FADE_COLOUR_TAG:
      case PURE_COLOUR_TAG:
        return (
          <div
            className="customer-cell-color-tag"
            style={{ color: cellFontColor }}
            onClick={() => {
              if (myCellClick) {
                myCellClick(params?.data || {}, rowId, params?.rowIndex);
              }
            }}
          >
            <span
              className="span-cell"
              style={{ background: cellBackgroundColor }}
            >
              {cellContent}
            </span>
          </div>
        );
      // 超链接
      case HYPER_LINK:
        return (
          <div
            className="customer-cell-hyperlink"
            onClick={() => {
              if (myCellClick) {
                myCellClick(params?.data || {}, rowId, params?.rowIndex);
              }
            }}
          >
            {cellContent}
          </div>
        );
      // 进度条
      case PROGRESS_BAR: {
        const convertToPercentage = (newdata: any) => {
          let data = newdata;
          // 判断数据是否带有%
          if (data?.includes('%')) {
            // 去除%
            data = data.replace('%', '');
            // 转换为小数
            data = parseFloat(data) / 100;
          } else if (parseFloat(data) <= 1) {
            // 判断数据是否为小数0-1
            data = parseFloat(data);
          } else if (parseFloat(data) <= 100) {
            // 判断数据是否为整数1-100
            data = parseFloat(data) / 100;
          } else {
            // 数据不符合要求
            // console.log('数据不符合要求');
            return;
          }
          // 转换为百分比
          data = `${(data * 100).toFixed(2)}%`;
          // eslint-disable-next-line consistent-return
          return data;
        };
        const progressWidth = convertToPercentage(String(params?.value));
        if (progressWidth) {
          return (
            <div
              className="customer-cell-progress-bar"
              onClick={() => {
                if (myCellClick) {
                  myCellClick(params?.data || {}, rowId, params?.rowIndex);
                }
              }}
            >
              <div
                className="progressBar"
                style={{ backgroundColor: cellFontColor }}
              >
                <div
                  className="current"
                  style={{
                    backgroundColor: cellBackgroundColor,
                    width: progressWidth,
                  }}
                />
              </div>
            </div>
          );
        }
      }
    }
  } else if (customRendering && !isEditor) {
    // 自定义函数
    // const funcExpExecute = useFuncExpExecute(engineApis?.sandBoxSafeRun || ({} as any));
    // if (funcExpExecute) {
    const rowValue = params?.value || '';

    return (
      <div>
        <CustomModule
          code={customRendering}
          compProps={{
            text: rowValue,
            item: params?.data || {},
            index: params?.rowIndex,
          }}
          sandBoxLoadModule={sandBoxLoadModule}
          errorInfo={{
            id: $$componentItem?.id,
          }}
        />
      </div>
    );
  } else if (extendInfo) {
    return renderActionView(extendInfo, params, extendActions);
  }

  return <>{params?.value}</>;
};

export default TypeCells;
