import { LingxiForwardRef } from '@lingxiteam/types';
import { Badge } from 'antd';
import React, { useCallback, useImperativeHandle } from 'react';
import { useListenProps } from '../utils';
import { useDeepCompareEffect } from '../utils/ahooks';
import CustomModule from '../utils/CustomModule';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';
import { useLocale } from '../utils/hooks/useLocale';

export interface MyTabPaneProps {
  value: string;
  visible: boolean;
  style: React.CSSProperties;
  [key: string]: any;
}

const MyTabPane = LingxiForwardRef<any, MyTabPaneProps>((props, ref) => {
  const {
    value,
    children,
    style,
    getEngineApis,
    $$componentItem,
    uploadChannelProps,
    visited, // 当前组件在Tabs下，是否已经被渲染过
    currentIndex,
    ...restProps
  } = props;

  const [badge, setBadge] = useListenProps(props.badge);
  const [title, setTitle] = useListenProps(props.tab);

  /**
   * visible 表示用户是否设置了隐藏
   */
  const [visible, setVisible] = useListenProps(
    typeof props.visible === 'undefined' ? true : props.visible,
  );

  const { sandBoxSafeRun, sandBoxLoadModule } = getEngineApis();
  const { getLocale } = useLocale(getEngineApis());

  const funcExpExecute = useFuncExpExecute(sandBoxSafeRun, getLocale);

  const getTab = useCallback(() => {
    if (currentIndex !== -1) {
      const { badgeRendering } = props;
      let _tab = title;
      if (badge !== '' && badge !== null && badge !== undefined) {
        // 自定义渲染函数
        if (typeof badgeRendering === 'object' && badgeRendering.jsx) {
          // FIXME: funcExpExecute给属性传递的item应该是一个错误的数据，给自定义渲染组件传递没有转化的dsl没有任何意义。
          const item = {
            badge,
            tab: props.tab,
          };
          _tab = (
            <div style={{ position: 'relative', display: 'flex' }}>
              {title}
              <CustomModule
                sandBoxLoadModule={sandBoxLoadModule}
                errorInfo={{ id: $$componentItem.id }}
                code={badgeRendering.targetVal}
                compProps={{ text: badge, item, index: currentIndex }}
              />
            </div>
          );
        } else if (badgeRendering) {
          _tab = (
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
                    value: props,
                  },
                  {
                    key: 'index',
                    value: currentIndex,
                  },
                ])}`,
              }}
            />
          );
        } else {
          _tab = (
            <div style={{ position: 'relative' }}>
              {title}
              <Badge
                count={badge}
                overflowCount={999}
                style={{ position: 'absolute', top: '-20px', right: '-20px' }}
              />
            </div>
          );
        }
      }
      return _tab;
    }
    return undefined;
  }, [currentIndex, props, badge]);

  useDeepCompareEffect(() => {
    if (uploadChannelProps) {
      uploadChannelProps({
        ...restProps,
        tab: getTab(),
        'data-extends': {
          setBadge,
          setTitle,
          setVisible,
        },
        visible,
      });
    }
  }, [getTab, visible, restProps, currentIndex, badge]);

  useImperativeHandle(ref, () => ({
    // 设置角标
    setBadge(data: any) {
      setBadge(data);
    },
  }));

  /**
   * Tabs下的组件还没渲染完成时，子组件应该禁止渲染，手动实现按需加载问题
   */
  if (!visited || !visible) {
    return null;
  }

  return (
    <div style={style} className="ued-tabs-tabpane-content">
      {children}
    </div>
  );
});

export default MyTabPane;
