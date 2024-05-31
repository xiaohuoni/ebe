import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';

  const file = createResultFile(
    'index',
    'tsx',
    isMobile
      ? `import px2rem from '@lingxiteam/engine-app/es/utils/px2rem';
import Popover, {
  PopoverMenuProps,
  PopoverProps,
} from 'antd-mobile-5/es/components/popover';
import React, { FC, useState } from 'react';
import { PageComent } from '../Pageview';
// @ts-ignore
import { Wrapper } from './Wrapper';

interface DynamicPopoverProps {
  options: {
    contentText: string;
    contentMenu: any[];
    contentType: '1' | '2';
    contentTextFont: string;
    trigger: 'click';
    placement: PopoverProps['placement'];
    mode: PopoverProps['mode'];
  };
  page?: {
    pageId: string;
    placement: PopoverProps['placement'];
    trigger: 'click';
    options?: {
      name: string;
      code: string;
      stateParam: string;
    }[];
  };
  api: Record<string, any>;
  appId: string;
  onAppPopoverClick: PopoverMenuProps['onAction'];
  lcdpParentRenderId: string;
  uid: string;
}

const DynamicPopover: FC<DynamicPopoverProps> = (props) => {
  const {
    children,
    onAppPopoverClick,
    api,
    page,
    options: popoverOptions,
    parentEngineId,
  } = props;
  const [visible, setVisible] = useState(false);
  const [popVisible, setPopVisible] = useState(false);
  const [, setElement] = useState(null);

  // 气泡卡片显隐受控，提供给关闭所有气泡卡片动作
  const popVisibleProps = {
    visible: popVisible,
    onVisibleChange: setPopVisible,
  };

  // useEffect(() => {
  //   const ref = {
  // close: () => setPopVisible(false),
  //   };
  //   lcdpApi.setPopover(ref);
  //   return () => {
  // lcdpApi.removePopover(ref);
  //   };
  // }, []);

  const WrapperComponent = (
    <Wrapper element={setElement} setVisible={setVisible} visible={visible}>
      {children}
    </Wrapper>
  );

  // 自定义页面
  if (page?.pageId) {
    const { placement, pageId, trigger = 'click' } = page;
    return (
      <Popover
        {...popVisibleProps}
        className={\`dynamic_popover_\${pageId || ''}\`}
   
    content={<PageComent pageSrc={pageId} parentEngineId={parentEngineId}/>}
        placement={placement}
        trigger={trigger}
      >
        {WrapperComponent}
      </Popover>
    );
  }

  const {
    contentText,
    contentMenu,
    contentType,
    contentTextFont,
    trigger = 'click',
    placement,
    mode,
  } = popoverOptions;

  // 文字模式
  if (contentType === '1' && contentText) {
    return (
      <Popover
        {...popVisibleProps}
        trigger={trigger}
        content={
          <span style={{ fontSize: \`\${contentTextFont}px\` }}>
        {contentText}
          </span>
        }
        placement={placement}
        mode={mode}
      >
        {WrapperComponent as React.ReactElement}
      </Popover>
    );
  }

  // 菜单模式
  if (contentType === '2' && Array.isArray(contentMenu)) {
    const actions = [...contentMenu];
    actions.forEach((item) => {
      let imgSrc = '';
      if (item.src && item.src.length > 0) {
        imgSrc = api.getAppFileUrlByFileCode(item.src);
      }
      const icon = (
        <img
          style={px2rem({ width: '16px', height: '16px' })}
          src={imgSrc}
          alt=""
        />
      );
      item.icon = icon;
    });
    return (
      <Popover.Menu
        {...popVisibleProps}
        trigger={trigger}
        actions={actions}
        onAction={(node) => {
          if (onAppPopoverClick) {
        onAppPopoverClick(node);
          }
        }}
        placement={placement}
        mode={mode}
      >
        {WrapperComponent}
      </Popover.Menu>
    );
  }

  return children as React.ReactElement;
};

export default DynamicPopover;
`
      : `
      import { Popover } from 'antd';
      import classnames from 'classnames';
      import React, { FC, useEffect, useMemo, useState } from 'react';
      import lcdpApi from '@/utils/lcdpApi';
      import { PageComent } from '../Pageview';
      
      export interface DynamicPopoverProps {
        page?: {
          pageId: string;
          options?: any[];
          placement: string;
          trigger: string;
          [key: string]: any;
        };
        options?: {
          content: any;
          maxWidth: number;
          [key: string]: any;
        };
        state?: Record<string, any>;
        id?: string;
        parentEngineId?: string;
        children?: any;
      }
      
      const DynamicPopover: FC<DynamicPopoverProps> = (props) => {
        const [update, forceUpdate] = useState({});
        const {
          page = {} as any,
          options: popoverOptions,
          state,
          id,
          children,
          parentEngineId,
        } = props;
        // 气泡卡片显隐受控，提供给关闭所有气泡卡片动作
        const [visible, setVisible] = useState<boolean>(false);
        const content = useMemo(() => {
          if (page?.pageId) {
            return <PageComent pageSrc={page?.pageId} parentEngineId={parentEngineId}/>;
          }
          if (popoverOptions?.content) {
            return popoverOptions.content;
          }
          return null;
        }, [page, update]);
      
        const options = useMemo<any>(() => {
          if (page?.pageId) {
            return {
              placement: page.placement,
              trigger: page.trigger,
              arrowPointAtCenter: true,
            };
          }
          if (popoverOptions?.content) {
            const { maxWidth, ...resOptions } = popoverOptions;
            return {
              overlayClassName: maxWidth ? 'dynamicPage-popver' : '',
              key: \`\${id}_popover\`,
              overlayStyle: { maxWidth: maxWidth || 'none', wordBreak: 'break-word' },
              ...resOptions,
            };
          }
          return {};
        }, [page, popoverOptions, update]);

        useEffect(() => {
          const ref = {
            close: () => setVisible(false),
          };
          lcdpApi?.refs?.PopoverManager?.setPopover?.(ref, 'lcdpParentRenderId');
          return () => {
            lcdpApi?.refs?.PopoverManager?.removePopover?.(ref, 'lcdpParentRenderId');
          };
        }, []);
      
        return (
          <Popover
            content={content}
            {...options}
            overlayClassName={classnames(
              options?.overlayClassName,
              \`dynamic_popover_\${page?.pageId || ''}\`,
            )}
            visible={visible}
            onVisibleChange={setVisible}
          >
            {children}
          </Popover>
        );
      };
      
      export default DynamicPopover;
`,
  );

  return [['src', 'components', 'Popover'], file];
}
