import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';

  const file = createResultFile(
    'index',
    'tsx',
    `
      import { Popover } from '${isMobile ? 'antd-mobile-5' : 'antd'}';
import classnames from 'classnames';
import React, { FC, useEffect, useMemo, useState } from 'react';
import lcdpApi from '@/utils/lcdpApi';
import { getSafePage } from '@/components/common/Pageview';
import PopoverMap from '@/components/popover';

export interface DynamicPopoverProps {
  page?: {
    pageId: string;
    options?: any[];
    placement: string;
    trigger?: string;
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
    id,
    children,
    parentEngineId,
  } = props;
  // 气泡卡片显隐受控，提供给关闭所有气泡卡片动作
  const [visible, setVisible] = useState<boolean>(false);
  const content = useMemo(() => {
    if (page?.pagePath) {
      const Page = getSafePage(page.pagePath, PopoverMap);
      return (
        <Page pageSrc={page.pagePath} parentEngineId={parentEngineId} />
      );
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
        trigger: page.trigger || 'click',
        arrowPointAtCenter: true,
      };
    }
    if (popoverOptions?.content) {
      const { maxWidth, ...resOptions } = popoverOptions;
      return {
        overlayClassName: maxWidth ? 'dynamicPage-popver' : '',
        key: \`\${id}_popover\`,
        overlayStyle: {
          maxWidth: maxWidth || 'none',
          wordBreak: 'break-word',
        },
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
      open={visible}
      onOpenChange={setVisible}
    >
      {children}
    </Popover>
  );
};
export default DynamicPopover;
`,
  );

  return [['src', 'components', 'common', 'Popover'], file];
}
