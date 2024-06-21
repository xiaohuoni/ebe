import {
  LoadMoreListView,
  LoadMoreListViewProps,
} from '@lingxiteam/antd-mobile-plus';
import { ErrorBlock } from 'antd-mobile-5';
import { useImperativeHandle, useMemo, useRef, useState } from 'react';
import { AppForwardRef } from '../BasicComponents';
import './index.less';

export interface MyListViewProps extends LoadMoreListViewProps {
  components: any[];
  // loadMoreParams: any;
  pageData: any;
  // loadMoreRef: any;
  [key: string]: any;
  columnNum?: number;
}

const prefixCls = 'lcdp-loadmore';

const LoadMore = AppForwardRef<MyListViewProps>((props, ref) => {
  const {
    height,
    children,
    alias,
    components,
    // loadMoreParams,
    pageData,
    // loadMoreRef,
    requestFunc,
    columnNum = 1,
    ...otherProps
  } = props;

  const { MemoRenderer } = props.getEngineApis();
  const { MemoLoopItem, renderer } = MemoRenderer;

  const loadMoreParamsRef = useRef({});
  const loadMoreRef = useRef<any>(null);
  const [listData, setListData] = useState<any[]>([]);
  let aliasUser = {};
  if (Array.isArray(alias) && alias.length > 0) {
    const [ali] = alias;
    aliasUser = ali;
  }
  const renderColumn = (columnData: any, i: any) => {
    const renderProps = {
      item: columnData,
      i,
      __render__: props.__render__,
      renderer,
      itemId: i,
      compId: props.$$componentItem.uid,
    };
    return (
      <div className={`${prefixCls}-column`} key={i}>
        <MemoLoopItem {...renderProps} />
      </div>
    );
  };
  const renderColumnPlaceholder = (key: number) => {
    return <div className={`${prefixCls}-columnPlaceholder`} key={key} />;
  };
  const renderRow = (item: any, sectionID: any, rowId: any) => {
    const rowID = parseInt(rowId, 10);
    let realColumnNum = columnNum;
    if (!(typeof realColumnNum === 'number' && realColumnNum > 0)) {
      realColumnNum = 1;
    }
    if (rowID % realColumnNum > 0) return <></>;
    const columns: any = [];
    for (let i = 0; i < realColumnNum; i += 1) {
      const columnData = listData[rowID + i];
      if (columnData) {
        columns.push(renderColumn(columnData, rowID + i));
      } else {
        columns.push(renderColumnPlaceholder(rowID + i));
      }
    }
    return (
      <div className={`${prefixCls}-row`} key={sectionID}>
        {columns}
      </div>
    );
  };

  const wrapperHeight = useMemo(() => {
    return props.type === 'inhert' ? '100%' : undefined;
  }, [props.type]);

  const style = useMemo(() => {
    const tStyle = props.style || {};
    if (wrapperHeight) {
      tStyle.height = wrapperHeight;
    }
    return tStyle;
  }, [props.style, wrapperHeight]);

  useImperativeHandle(ref, () => ({
    refreshLoadMore: () => loadMoreRef?.current?.reloadDataSource(),
    setLoadMoreParams: (params: any) => {
      loadMoreParamsRef.current = params;
    },
    getLoadMoreParams: () => loadMoreParamsRef.current,
  }));

  return (
    <div
      className={`${prefixCls}-loadMore`}
      style={wrapperHeight ? { height: wrapperHeight } : {}}
    >
      <LoadMoreListView
        {...otherProps}
        /* @ts-ignore */
        // eslint-disable-next-line react/jsx-props-no-multi-spaces
        type={props.type}
        ref={loadMoreRef}
        requestFunc={requestFunc}
        noData={<ErrorBlock status="empty" />}
        style={style}
        alias={aliasUser}
        renderRow={renderRow}
        onChange={(data: any) => {
          setListData(data);
        }}
      />
    </div>
  );
});

export default LoadMore;
