import { LingxiForwardRef } from '@lingxiteam/types';
import { Badge } from 'antd-mobile-5';
import classNames from 'classnames';
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { StickyHeader } from '../BasicComponents';
import { useSyncState } from '../common/hooks';
import Icon from '../Icon';
import basicStatusTransfer from '../utils/basicStatusTransfer';
import CustomModule from '../utils/CustomModule';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import { withTransformProps } from '../utils/withTransformProps';
import './index.less';
import type { TabBarProps } from './TabBar';
import TabBar from './TabBar';
import Tabs from './Tabs';
import transformProps from './transformProps';

const prefixCls = 'appTabs';
export interface StaticTabsProps extends TabBarProps {
  underlineType?: TabBarProps['underlineType'];
  underlineWidth?: TabBarProps['underlineWidth'];
  initialPage?: any;
  isOpenSticky: boolean; // 是否开启吸顶效果
  stickyTop: string | number;
  visible: boolean;
  // $$componentItem: $$componentItem;
  tabBarPage: number;
  tabBarSelectedBackgroundColor?: string;
  onChange: (item: any, page: number) => void;
}

const StaticTabs = LingxiForwardRef<any, StaticTabsProps>((props, ref) => {
  const {
    underlineType,
    underlineWidth,
    initialPage: myInitialPage,
    isOpenSticky = false,
    stickyTop = 45,
    visible = true,
    // $$componentItem,
    tabBarPage = 5,
    className,
    tabBarSelectedBackgroundColor = 'transparent',
    getEngineApis,
    tabBarUnderlineStyle,
    tabBarTextStyle,
    ...restProps
  } = props;

  const { sandBoxSafeRun, sandBoxLoadModule, px2rem } = getEngineApis();
  const funcExpExecute = useFuncExpExecute(sandBoxSafeRun);

  // const { $$engineEvalExp } = $$componentItem || {};
  const [tabs, setTabs] = useState<any[]>([]);

  // 根据id进行查找
  const initialPage = (p: any) => {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < tabs?.length; index++) {
      const element = tabs[index];
      // eslint-disable-next-line eqeqeq
      if (element.id == p) {
        return index;
      }
    }
    return undefined;
  };

  const [page, setPage] = useSyncState<number | string>(
    props.page || initialPage(myInitialPage) || 0,
  );
  const hiddenStyle = useHiddenStyle(visible);

  // 修复函数中使用数据源无法刷新的bug
  const renderTabs = (() => {
    const mTabs = [] as any;
    // eslint-disable-next-line consistent-return
    tabs?.forEach((item: any, index: number) => {
      const { isShow = true } = item;

      if (isShow) {
        const { badge, title, badgeRendering, jsx, ...other } = item;
        // 自定义渲染函数
        if (badge && badgeRendering) {
          let titleNode: React.ReactNode = title;

          if (jsx) {
            titleNode = (
              <div style={{ position: 'relative', display: 'flex' }}>
                {title}
                <CustomModule
                  code={badgeRendering}
                  compProps={{
                    text: badge,
                    item,
                    index,
                  }}
                  sandBoxLoadModule={sandBoxLoadModule}
                  errorInfo={{ id: props.$$componentItem.id }}
                />
              </div>
            );
          } else if (funcExpExecute) {
            titleNode = (
              <div
                style={{ position: 'relative', display: 'flex' }}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `${title}${funcExpExecute(badgeRendering, [
                    {
                      key: 'text',
                      value: badge,
                    },
                    {
                      key: 'row',
                      value: item,
                    },
                    {
                      key: 'index',
                      value: index,
                    },
                  ])}`,
                }}
              />
            );
          }

          return mTabs.push({
            ...other,
            title: titleNode,
          });
        }

        if (badge && !badgeRendering) {
          let content = badge;
          if (content) {
            const num = Number(content);
            if (!isNaN(num)) {
              if (num > 99) {
                content = '99+';
              }
            }
          }
          return mTabs.push({
            ...other,
            title: (
              <Badge
                content={content}
                style={{ '--top': '20%', '--right': '-20%' }}
              >
                {title}
              </Badge>
            ),
          });
        }

        mTabs.push(item);
      }
    });

    if (
      (mTabs.length < tabBarPage && props.tabBarPosition === 'left') ||
      props.tabBarPosition === 'right'
    ) {
      /**
       * 因为 rmc-tabs 的源码设置了tabBar子项高度或宽度是根据数据源长度，将每个tab均等分，若希望实现非均等分的tabBar子项，需要引入虚拟tabBar
       * 虚拟tabBar数量,根据设置的一屏展示tabBar数量，若大于数据源长度，说明希望展示的每一个tab不可均等分，需要插入虚拟tab
       * 根据差值，插入对应的虚拟tabBar，注意：虚拟的tabBar需要将所有的设置清空，即不可点击，不可设置样式等等
       */
      const virtual = tabBarPage - mTabs.length;
      let i = 0;
      while (i < virtual) {
        mTabs.push({});
        // eslint-disable-next-line no-plusplus
        i++;
      }
    }

    return mTabs;
  })();

  const tabchildren = useMemo(() => {
    const newChildren = Array.isArray(props.children)
      ? [...(props.children || [])]
      : [props.children];
    const temTabchildren: any = [];
    tabs?.forEach((v: any, index: number) => {
      const { isShow = true } = v;
      if (isShow) {
        if (newChildren?.[index]) {
          temTabchildren.push(newChildren[index]);
        } else if (newChildren.length > 0) {
          temTabchildren.push(newChildren[0]);
        }
      }
    });
    return temTabchildren;
  }, [JSON.stringify(tabs), props.children]);

  useEffect(() => {
    if (props?.tabs) {
      setTabs(props?.tabs);
    }
  }, [JSON.stringify(props?.tabs)]);

  useEffect(() => {
    const np = initialPage(myInitialPage) || Number(myInitialPage || '0');
    if (np !== page) {
      setPage(np);
    }
  }, [JSON.stringify(props?.tabs), myInitialPage]);

  useImperativeHandle(ref, () => ({
    goToTab: (p: any, completeHandle?: () => void) => {
      const nP = initialPage(p) || Number(p);
      setPage(nP, completeHandle);
    },
    setTabsData: (tabsDataOptions: any = {}) => {
      const { data, key, title, status, badge } = tabsDataOptions;

      const resolvedData = data.map((tab: any) => {
        const tabKey = tab[key || 'id'];
        const tabTitle = tab[title || 'title'];
        const tabIsShow = tab.isShow;
        const tabBadge = tab[badge || 'badge'];

        const matchTab: any = tabs?.find((t: any) => t.id === tabKey) || {};
        const newTab = { ...matchTab };

        if (typeof tabKey !== 'undefined') {
          newTab.id = tabKey;
        }

        if (typeof tabTitle !== 'undefined') {
          newTab.title = tabTitle;
        }

        if (typeof status !== 'undefined') {
          newTab.isShow = basicStatusTransfer(tab?.[status])?.visible;
        } else {
          newTab.isShow = tabIsShow;
        }

        if (typeof tabBadge !== 'undefined') {
          newTab.badge = tabBadge;
        }

        return newTab;
      });

      setTabs(resolvedData);
    },
  }));

  const renderTabBar = (p: any) => {
    return (
      <StickyHeader isOpenSticky={isOpenSticky} top={stickyTop}>
        {({ style = {} }) => (
          <div
            // id={id}
            className={classNames({
              [`${prefixCls}-wrapper`]: !isOpenSticky,
            })}
            style={
              isOpenSticky
                ? {
                    ...style,
                    zIndex: 1,
                  }
                : {}
            }
          >
            <TabBar
              {...p}
              realTablength={renderTabs?.length}
              page={
                props.tabBarPosition === 'left' ||
                props.tabBarPosition === 'right'
                  ? tabBarPage
                  : 5
              }
              onGoToTab={(index) => {
                // if (index + 1 > props?.tabs?.length) return;
                if (page !== index) {
                  setPage(index);
                  if (props.onChange) {
                    props.onChange(renderTabs[index], index);
                  }
                }
              }}
              // initialPage={props.initialPage}
              underlineType={underlineType}
              underlineWidth={underlineWidth}
              // @ts-ignore
              renderIcon={(iconProps) => (
                <Icon {...iconProps} getEngineApis={props.getEngineApis} />
              )}
            />
          </div>
        )}
      </StickyHeader>
    );
  };
  if (renderTabs.length) {
    return (
      <div
        className={`use-app-statictabs ${className}`}
        style={
          {
            '--myTabs-selected-background': tabBarSelectedBackgroundColor,
            ...hiddenStyle,
          } as any
        }
      >
        <Tabs
          {...restProps}
          tabBarUnderlineStyle={px2rem(tabBarUnderlineStyle)}
          tabBarTextStyle={px2rem(tabBarTextStyle)}
          tabs={renderTabs}
          page={page}
          // eslint-disable-next-line react/no-children-prop
          children={tabchildren}
          onChange={(tab, index) => {
            if (page !== index) {
              setPage(index);
              if (props.onChange) {
                props.onChange(renderTabs[index], index);
              }
            }
          }}
          renderTabBar={(p) => renderTabBar(p)}
        />
      </div>
    );
  }
  return null;
});

export default withTransformProps(StaticTabs, transformProps);
