import { LingxiForwardRef } from '@lingxiteam/types';
import { Tag } from 'antd';
import type { TagProps } from 'antd/lib/tag';
import classnames from 'classnames';
import React from 'react';

const WrapperTag = ({ children }: Record<string, any>) =>
  React.cloneElement(children, {
    className: `ued-tag-wrap ${children.props.className || ''}`,
  });
export interface MyTagProps extends TagProps {
  name?: string;
  tagType?: any;
  visible?: boolean;
}

const MyTag = LingxiForwardRef<any, MyTagProps>((props, ref) => {
  const { name, visible = true, title, ...restProps } = props;

  return visible ? (
    <WrapperTag>
      <div>
        <Tag
          {...restProps}
          color={restProps?.tagType?.color || restProps.color}
          className={classnames(
            restProps.className,
            restProps?.tagType?.classname,
          )}
        >
          {title}
        </Tag>
      </div>
    </WrapperTag>
  ) : null;
});

export default MyTag;
export { WrapperTag };
