import React from 'react';
import {
  BODY_CELL_MODE_ED,
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
  RELATION_OR,
  SET_ROW_ALL_CELL_BACKGROUND_COLOR,
  SET_ROW_ALL_CELL_CONTENT_STYLE,
  SET_ROW_SPECIAL_CELL_BACKGROUND_COLOR,
  SET_ROW_SPECIAL_CELL_CONTENT_STYLE,
} from '../constant';
import FormatCell from '../FormatCell';
import { MyBodyCellProps } from '../types/bodyCell';
import type { ContentStyle } from '../types/contentStyle';

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
      return row[code] === undefined || row[code] === null || row[code] === '';
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

const MyBodyCell: React.FC<MyBodyCellProps> = (props) => {
  const {
    mode,
    editable,
    isExtend,
    dataIndex,
    row: record,
    children,
    colorFormatInfo = [],
    isCustomRendering,
    funcExpExecute,
    engineApis,
    onTableCellClick,
    ...restProps
  } = props;

  const commonCellOnClick = () => {
    if (onTableCellClick) {
      onTableCellClick(record, record?.[dataIndex], dataIndex);
    }
  };

  // 编辑单元格和扩展单元格忽略样式
  if (editable || isExtend) {
    return <td {...restProps}>{children}</td>;
  }

  if (colorFormatInfo?.length) {
    let bgColorStyle: any = {};
    let contentStyle: ContentStyle | undefined;

    // 遇到单元格样式作用范围一样的，取最后匹配的单元格样式
    for (let i = 0; i < colorFormatInfo.length; i += 1) {
      const item = colorFormatInfo[i];
      const {
        conditions,
        formStyle: formatStyle,
        contentType,
        field,
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

      // 背景相关
      if (
        [
          SET_ROW_ALL_CELL_BACKGROUND_COLOR,
          SET_ROW_SPECIAL_CELL_BACKGROUND_COLOR,
        ].includes(formatStyle)
      ) {
        /**
         * 1、属于列单元格的单元格背景样式，需要多判断是否为当前列
         * 2、运行态时，单元格背景样式配置符合条件才生效
         */
        if (
          (SET_ROW_SPECIAL_CELL_BACKGROUND_COLOR === formatStyle
            ? dataIndex === field
            : true) &&
          (mode === BODY_CELL_MODE_ED
            ? true
            : collectCondition(conditions, record))
        ) {
          bgColorStyle = {
            formatStyle,
            fontColor,
            backgroundColor,
          };

          /**
           * 兼容存量：
           * 如果前面的内容样式不存在 contentType，说明是旧版配置，此时，需要让前面的内容样式配置置空，不能同时生效
           */
          if (
            contentStyle &&
            typeof (contentStyle as ContentStyle)?.contentType === 'undefined'
          ) {
            contentStyle = undefined;
          }
        }
      } else if (
        // 内容相关
        [
          SET_ROW_ALL_CELL_CONTENT_STYLE,
          SET_ROW_SPECIAL_CELL_CONTENT_STYLE,
        ].includes(formatStyle)
      ) {
        // 当存在 contentType 时，表明是新版的内容样式，如果有自定义函数，则内容样式都不生效
        if (typeof contentType === 'string' && isCustomRendering) {
          // eslint-disable-next-line no-continue
          continue;
        }

        /**
         * 1、属于列单元格的单元格内容样式，需要多判断是否为当前列
         * 2、运行态时，单元格内容样式配置符合条件才生效
         */
        if (
          (SET_ROW_SPECIAL_CELL_CONTENT_STYLE === formatStyle
            ? dataIndex === field
            : true) &&
          (mode === BODY_CELL_MODE_ED
            ? true
            : collectCondition(conditions, record))
        ) {
          contentStyle = {
            formatStyle,
            contentType,
            fontColor,
            backgroundColor,
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
            modalWidth,
            modalHeight,
          };

          /**
           * 兼容存量：
           * 如果当前应用的内容样式不存在 contentType，说明是旧版配置，此时，需要让前面的背景配置置空，不能同时生效
           */
          if (typeof contentType === 'undefined') {
            bgColorStyle.isValid = false;
          } else {
            bgColorStyle.isValid = true;
          }
        }
      }
    }

    if (typeof bgColorStyle.isValid === 'boolean') {
      if (bgColorStyle.isValid) {
        delete bgColorStyle.isValid;
      } else {
        bgColorStyle = undefined;
      }
    }

    return (
      <FormatCell
        bgColorStyle={bgColorStyle}
        contentStyle={contentStyle}
        tdProps={{
          ...restProps,
          row: record,
        }}
        funcExpExecute={funcExpExecute}
        engineApis={engineApis}
        commonCellClick={commonCellOnClick}
      >
        {children}
      </FormatCell>
    );
  }

  return (
    <td {...restProps} onClick={commonCellOnClick}>
      {children}
    </td>
  );
};

export default MyBodyCell;
