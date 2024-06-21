import React from 'react';

import type { FuncExpExeCuteType } from '../../utils/hooks/useFuncExpExecute';
import {
  FADE_COLOUR_TAG,
  GHOST_TAG,
  HYPER_LINK,
  POINT_TAG,
  PURE_COLOUR_FILL,
  PURE_COLOUR_TAG,
} from '../constant';
import { useFormatCell } from '../hooks';
import type { ContentStyle } from '../types/contentStyle';
import GhostTag from './GhostTag';
import Hyperlink from './Hyperlink';
import PointTag from './PointTag';
import PureColourFill from './PureColourFill';
import PureFadeColourTag from './PureFadeColourTag';

export interface MyFormatCell {
  contentStyle: ContentStyle | undefined | {};
  bgColorStyle: {
    formatStyle: number;
    contentType: string;
    fontColor: string;
    borderColor: string;
    backgroundColor: string;
  };
  tdProps: any;
  funcExpExecute?: FuncExpExeCuteType;
  engineApis: any;
  commonCellClick?: () => void;
}

export interface CellContentProps {
  engineApis: any;
  appId: string;
  pageId: string;
  row: any;
  rowId: string | number;
  rowIndex: number;
  children: any;
  contentStyle: ContentStyle;
  funcExpExecute?: FuncExpExeCuteType;
}

const CellContent = (props: CellContentProps) => {
  const {
    engineApis,
    appId,
    pageId,
    row,
    rowId,
    rowIndex,
    contentStyle,
    funcExpExecute,
  } = props;
  const {
    contentType,
    fontColor,
    borderColor,
    backgroundColor,
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
  } = contentStyle;

  let { children } = props;

  const isClickSetted = !!clickType;
  const { handleCellContent, onCellClick } = useFormatCell({
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

  children = content ? handleCellContent(row, rowIndex) : children;

  const handleOnCellClick = (e: any) => {
    e.stopPropagation();
    if (typeof onCellClick === 'function') {
      onCellClick(row, rowId, rowIndex);
    }
  };

  const onClick = isClickSetted ? handleOnCellClick : undefined;

  // 当没有 contentType 时，说明是最旧版的内容样式配置
  if (typeof contentType === 'undefined') {
    /**
     * 兼容存量个性样式
     * 配置了：“设置xx单元格里内容的颜色” 默认 -> “纯色填充”
     * 注：此情况下，children 有可能为 自定义渲染函数返回的内容
     */
    return (
      <PureColourFill
        content={children}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        onClick={onClick}
      />
    );
  }

  // 新版内容样式（注：此时 children 不可能为自定义函数）
  switch (contentType) {
    case PURE_COLOUR_FILL:
      return (
        <PureColourFill
          content={children}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          onClick={onClick}
        />
      );
    case POINT_TAG:
      return (
        <PointTag
          content={children}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          onClick={onClick}
        />
      );
    case GHOST_TAG:
      return (
        <GhostTag
          content={children}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          onClick={onClick}
        />
      );
    case FADE_COLOUR_TAG:
    case PURE_COLOUR_TAG:
      return (
        <PureFadeColourTag
          content={children}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          onClick={onClick}
        />
      );
    case HYPER_LINK:
      return <Hyperlink content={children} onClick={onClick} />;
    default:
      break;
  }

  return null;
};

const FormatCell: React.FC<MyFormatCell> = (props) => {
  const {
    bgColorStyle,
    contentStyle,
    children, // 可能为自定义渲染函数返回的内容
    tdProps,
    funcExpExecute,
    engineApis,
    commonCellClick,
  } = props;

  const { history, appId, pageId, row, rowId, rowIndex, ...restTdProps } =
    tdProps;

  // 如果条件全部为假，直接返回
  if (!bgColorStyle && !contentStyle) {
    return <td {...restTdProps}>{children}</td>;
  }

  return (
    <td
      {...restTdProps}
      style={{
        backgroundColor: bgColorStyle?.backgroundColor,
        color: bgColorStyle?.fontColor,
        ...(restTdProps?.style || {}),
      }}
      onClick={() => {
        if (commonCellClick) {
          commonCellClick();
        }
      }}
    >
      {contentStyle ? (
        <CellContent
          contentStyle={contentStyle as ContentStyle}
          funcExpExecute={funcExpExecute}
          engineApis={engineApis}
          appId={appId}
          pageId={pageId}
          row={row}
          rowId={rowId}
          rowIndex={rowIndex}
        >
          {children}
        </CellContent>
      ) : (
        children
      )}
    </td>
  );
};

export default FormatCell;
