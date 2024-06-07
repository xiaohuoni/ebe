import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/popover';
import { expectValue } from '../../../../../../utils';

describe('template files popover', () => {
  test('should return the correct file popover', () => {
    const config: any = {
      platform: 'pc',
      frontendHookMap: {
        routerChange: null,
      },
    };
    const expectedFileContent = `import { Popover } from 'antd';
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
          return (
            <PageComent pageSrc={page?.pageId} parentEngineId={parentEngineId} />
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
    `;

    const [directories, file] = getFile(config);

    expect(directories).toEqual(['src', 'components', 'common', 'Popover']);
    expect(file.name).toEqual('index');
    expect(file.ext).toEqual('tsx');
    expectValue(file.content, expectedFileContent);
  });
});
