import px2rem from '@lingxiteam/engine-app/es/utils/px2rem';
import Popover, {
  PopoverMenuProps,
  PopoverProps,
} from 'antd-mobile-5/es/components/popover';
import React, { FC, useState } from 'react';
import Pageview from '../Pageview';
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
  //     close: () => setPopVisible(false),
  //   };
  //   lcdpApi.setPopover(ref);
  //   return () => {
  //     lcdpApi.removePopover(ref);
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
        className={`dynamic_popover_${pageId || ''}`}
        content={<Pageview pageSrc={pageId} />}
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
          <span style={{ fontSize: `${contentTextFont}px` }}>
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
