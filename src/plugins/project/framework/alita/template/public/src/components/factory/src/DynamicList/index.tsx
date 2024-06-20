/* eslint-disable no-nested-ternary */
import { LingxiForwardRef } from '@lingxiteam/types';
import {
  DotLoading,
  InfiniteScroll,
  List,
  PullToRefresh,
  Toast,
} from 'antd-mobile-5';
import {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Empty, SpinComp } from '../BasicComponents';
import './index.less';
import MySwipe, { SwipeActionProps } from './MySwipe';

function isWindow(element: any | Window): element is Window {
  return element === window;
}
export interface MyDynamicListProps {
  columnNum: number;
  style: any;
  title?: string;
  onDynamicListItemClick?: (currentData: any, currentKey: any) => void;
  onDynamicListRefresh?: (currentPage: number, pageSize: number) => void;
  onDynamicListLoadMore?: (currentPage: number, pageSize: number) => void;
  dataId: string;
  pulling: boolean;
  pullingText?: string;
  canReleaseText?: string;
  refreshingText?: string;
  completeText?: string;
  paging: boolean;
  pageSize?: number;
  pageNum?: number;
  total?: number;
  // renderComponents: (components: any, item: any, i: number) => React.ReactElement;
  // components: any[];
  styleType?: string;
  dataSource?: any[];
  status: string;
  swipe?: boolean; // 是否开启滑动
  closeOnAction?: boolean;
  closeOnTouchOutside?: boolean;
  swipeAction?: [SwipeActionProps]; // 滑动展开按键
  [key: string]: any;
}

interface DataRefProps {
  refreshing: boolean;
  total: number;
  currentPage: number;
  pageLoad: boolean;
  resolve?: any;
}

const prefixCls = 'lcdp-dynamicList';

const DynamicList = LingxiForwardRef<any, MyDynamicListProps>((props, ref) => {
  const {
    title,
    columnNum,
    style,
    dataId,
    onDynamicListItemClick,
    onDynamicListRefresh,
    onDynamicListLoadMore,
    pulling = false,
    pullingText,
    canReleaseText,
    refreshingText,
    completeText,
    paging,
    pageSize = 20,
    pageNum = 1,
    total,
    // renderComponents,
    // components,
    dataSource,
    status,
    swipe = false,
    swipeAction,
    closeOnAction = false,
    closeOnTouchOutside = false,
    getEngineApis,
    $$componentItem,
  } = props;

  const { MemoRenderer, getLocale, dataState } = getEngineApis?.() || {};
  const { MemoLoopItem, renderer } = MemoRenderer;
  const [pageReady, setPageReady] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [listData, setListData] = useState<any[]>([]);
  const listRef = useRef<any>({});
  const dynamicDataRef = useRef<DataRefProps>({
    total: total || 0,
    refreshing: false,
    currentPage: pageNum,
    pageLoad: false,
  });
  const [isFullOfView, setIsFullOfView] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [loading, setLoading] = useState(false);
  // 为了防止刷新数据源导致传下来的pageNum改变，只取第一次的
  const [myPageNum] = useState(Number(pageNum));
  // 处理一下样式设置
  const uStyle = useMemo(() => {
    let myStyle: any = {
      '--border-bottom': 'solid 0',
      '--border-inner': 'solid 0',
      '--border-top': 'solid 0',
      '--padding-left': 0,
      '--padding-right': 0,
    };
    if (style) {
      const backgourndColor = style.backgroundColor ?? '0';
      const selectBackgroundColor = style?.selectBackgroundColor;
      myStyle = {
        ...style,
        ...myStyle,
        '--adm-color-background': backgourndColor,
        '--active-background-color': selectBackgroundColor,
        '--header-font-size': `${style.titleFontSize}px`,
      };
    }
    return myStyle;
  }, [style]);

  // 列表配置key
  const [itemKey, indexKey] = useMemo(() => {
    return [props?.itemKey || 'item', props?.indexKey || 'i'];
  }, []);

  // 开启下拉刷新并且设置了刷新方法才启用pullToRefresh
  const headerDisable = useMemo(
    () => !pulling || !onDynamicListRefresh,
    [pulling, onDynamicListRefresh],
  );

  // 刷新及加载更多逻辑
  const dynamicListDataChange = (data: any) => {
    dynamicDataRef.current?.resolve?.();
    setLoading(false);
    if (Array.isArray(data)) {
      let allData: any[];
      try {
        if (dynamicDataRef.current.refreshing) {
          dynamicDataRef.current.currentPage = myPageNum + 1;
          dynamicDataRef.current.refreshing = false;
          allData = [...data];
          if (onDynamicListLoadMore && paging) {
            setShowFooter(true);
          }
        } else {
          dynamicDataRef.current.currentPage = dynamicDataRef.current
            .currentPage
            ? dynamicDataRef.current.currentPage + 1
            : myPageNum + 1;
          allData = [...listData, ...data];
        }
        // console.log('设置数据：', allData.length, dynamicDataRef.current.total > allData.length);
        setListData(allData);
        if (isFullOfView && paging) {
          setHasMore(dynamicDataRef.current.total > allData.length);
        }
        // 回来的数据是空则设置没有更多了，防止循环请求
        if (data.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        Toast.show({
          icon: 'fail',
          content: JSON.stringify(error),
        });
      }
    } else {
      Toast.show({
        icon: 'fail',
        content: getLocale('DynamicList.dataError') || '动态列表数据格式错误！',
      });
      setHasMore(false);
      setIsFullOfView(true);
    }
  };

  // 查看是否要显示加载更多
  const getLoadMoreAreaLayoutResult = () => {
    if (!isFullOfView && listRef.current) {
      // 监控数据是否充满组件
      const parent: any = listRef.current?.parentElement;
      if (parent) {
        let rect;
        if (props.styleType === 'inhert') {
          rect = listRef.current
            ?.getElementsByClassName(prefixCls)?.[0]
            .getBoundingClientRect();
        } else {
          rect = listRef.current?.getBoundingClientRect();
        }
        const elementBottom = rect.height;
        const current = isWindow(parent)
          ? window.innerHeight
          : parent.getBoundingClientRect().height;
        // 数据是否充满屏幕
        const isFull = elementBottom >= current;
        setIsFullOfView(isFull);
        setHasMore(false);
        if (isFull && paging) {
          setHasMore(dynamicDataRef.current.total > listData.length);
        }
      }
    }
  };

  useImperativeHandle(ref, () => ({
    setTotal: (total: string) => {
      // console.log('所有数据：', total);
      if (total) {
        dynamicDataRef.current.total = Number(total);
      }
    },
    setData: (data: any) => {
      setPageReady(true);
      dynamicListDataChange(data);
    },
    cleanData: cleanDynamicListData,
    stopLoading: () => {
      dynamicDataRef.current?.resolve?.();
      if (dataSource) {
        // dynamicListDataChange(dataSource);
        dynamicDataRef.current.pageLoad = false;
      } else {
        setHasMore(false);
      }
      dynamicDataRef.current.total = Number(total);
    },
  }));

  useEffect(() => {
    // todo: 目前没有想到哪个方法可以知道组件完全渲染完成，暂时先用延时替代。
    setTimeout(() => {
      getLoadMoreAreaLayoutResult();
    }, 150);
  }, [listData]);

  // 组件点击事件
  const onItemClick = (item: any, index: number) => {
    if (onDynamicListItemClick) {
      onDynamicListItemClick(item, item?.[dataId]);
    }
  };

  // 清空数据方法。
  const cleanDynamicListData = () => {
    dynamicDataRef.current.refreshing = true;
    dynamicDataRef.current.currentPage = myPageNum;
    setIsFullOfView(false);
    setHasMore(false);
    setListData([]);
    setPageReady(false);
  };

  const reloadDataPromise = () => {
    let reloadResolve;
    const promise = new Promise((resolve, reject) => {
      reloadResolve = resolve;
    });
    return { promise, resolve: reloadResolve };
  };

  // 加载更多
  const loadMore = async (isRetry: any) => {
    if (onDynamicListLoadMore) {
      const page = dynamicDataRef.current?.currentPage ?? myPageNum;
      // console.log('加载更多:', page);
      setLoading(true);
      await new Promise((resolve) => {
        resolve(onDynamicListLoadMore(page, Number(pageSize ?? '10')));
      });
      if (isRetry !== 'click') {
        const { promise, resolve } = reloadDataPromise();
        dynamicDataRef.current.resolve = resolve;
        await promise;
      }
    }
  };

  // 下拉刷新
  const onRefresh = async () => {
    // console.log('下拉刷新');
    if (onDynamicListRefresh) {
      setIsFullOfView(false);
      setShowFooter(false);
      setHasMore(false);
      dynamicDataRef.current.currentPage = myPageNum;
      onDynamicListRefresh(myPageNum, Number(pageSize ?? '10'));
      dynamicDataRef.current.refreshing = true;
      const { promise, resolve } = reloadDataPromise();
      dynamicDataRef.current.resolve = resolve;
      await promise;
    }
  };

  const swipActionClick = useMemo(() => {
    const myClickObject: any = {};
    swipeAction?.forEach((item: any) => {
      if (item.value) {
        myClickObject[item.value] = props?.[item.value];
      }
    });
    return myClickObject;
  }, [swipeAction]);

  // 初始化
  useEffect(() => {
    dynamicDataRef.current.total = Number(total);
    if (onDynamicListLoadMore && paging) {
      setShowFooter(true);
    }
    // 数据源的等级最高
    if (Array.isArray(dataSource)) {
      setHasMore(false);
    } else if (onDynamicListRefresh) {
      // 有刷新事件就默认刷新，没有就默认加载更多
      setHasMore(false);
      onRefresh();
    }
  }, []);

  useEffect(() => {
    if (dataSource && !dynamicDataRef.current.pageLoad) {
      setPageReady(true);
      dynamicDataRef.current.total = Number(total);
      dynamicDataRef.current.pageLoad = true;
      dynamicListDataChange(dataSource);
    }
  }, [dataSource]);

  const renderColumn = (columnData: any, i: any) => {
    const renderProps = {
      item: columnData,
      i,
      __render__: props.__render__,
      itemKey,
      indexKey,
      renderer,
      itemId: i,
      compId: props.$$componentItem.uid,
    };

    if (swipe && swipeAction?.length && status !== '3') {
      return (
        <MySwipe
          closeOnAction={closeOnAction}
          closeOnTouchOutside={closeOnTouchOutside}
          isEdit={false}
          swipeAction={swipeAction}
          getEngineApis={getEngineApis}
          $$componentItem={$$componentItem}
          rowData={columnData}
          index={i}
          swipActionClick={swipActionClick}
        >
          <MemoLoopItem {...renderProps} />
        </MySwipe>
      );
    }
    return <MemoLoopItem {...renderProps} />;
  };

  const renderListItem = () => {
    // console.log('renderListItem');

    if (typeof columnNum !== 'number' || columnNum === 1) {
      return listData.map((item: any, index: number) => (
        <List.Item
          onClick={() => onItemClick(item, index)}
          arrow={false}
          key={`${dataId}--${index}`}
          disabled={status === '3'}
        >
          {renderColumn(item, index)}
        </List.Item>
      ));
    }
    if (columnNum >= 2) {
      const columns: any = [];
      for (let i = 0; i < listData.length; i += 2) {
        const item = (
          <List.Item arrow={false}>
            <div className={`${prefixCls}-grid-view`}>
              <List.Item
                onClick={() => onItemClick(listData[i], i)}
                arrow={false}
                disabled={status === '3'}
              >
                <div
                  className={`${prefixCls}-grid-item`}
                  key={`${dataId}--${i}`}
                >
                  {renderColumn(listData[i], i)}
                </div>
              </List.Item>
              {i + 1 < listData.length && (
                <List.Item
                  onClick={() => onItemClick(listData[i + 1], i + 1)}
                  arrow={false}
                  disabled={status === '3'}
                >
                  <div
                    className={`${prefixCls}-grid-item`}
                    key={`${dataId}--${i + 1}`}
                  >
                    {renderColumn(listData[i + 1], i + 1)}
                  </div>
                </List.Item>
              )}
            </div>
          </List.Item>
        );
        columns.push(item);
      }
      return columns;
    }
    return <></>;
  };

  // const ItemView = useMemo(() => {
  //   return renderListItem();
  // }, [listData]);

  const infiniteScrollContent = useMemo(() => {
    if (!isFullOfView) {
      const isHasMore = dynamicDataRef.current.total > listData.length;
      return (
        <>
          {loading ? (
            <>
              <span>{getLocale('loadingText', '加载中')}</span>
              <DotLoading />
            </>
          ) : (
            <>
              {isHasMore && listData.length !== 0 && (
                <span
                  onClick={async () => {
                    dynamicDataRef.current.refreshing = false;
                    loadMore('click');
                  }}
                >
                  {getLocale('DynamicList.clickToMore', '点击加载更多')}
                </span>
              )}
              {!isHasMore && listData.length !== 0 && (
                <span>{getLocale('DynamicList.noMore', '没有更多了')}</span>
              )}
            </>
          )}
        </>
      );
    }

    return (
      <>
        {hasMore ? (
          <SpinComp dataState={dataState} />
        ) : listData.length !== 0 ? (
          <span>{getLocale('DynamicList.noMore', '没有更多了')}</span>
        ) : (
          <></>
        )}
      </>
    );
  }, [hasMore, isFullOfView, listData, loading]);

  return (
    <div
      ref={listRef}
      style={{ height: props.styleType === 'inhert' ? '100%' : undefined }}
    >
      <PullToRefresh
        onRefresh={onRefresh}
        disabled={headerDisable}
        pullingText={pullingText}
        canReleaseText={canReleaseText}
        refreshingText={refreshingText}
        completeText={completeText}
      >
        <List header={title} style={uStyle} className={prefixCls}>
          {renderListItem()}
          {listData.length === 0 && pageReady && (
            <List.Item>
              <Empty dataState={dataState} getLocale={getLocale} />
            </List.Item>
          )}
        </List>

        {showFooter && (
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={30}>
            {infiniteScrollContent}
          </InfiniteScroll>
        )}
      </PullToRefresh>
    </div>
  );
});

export default DynamicList;
