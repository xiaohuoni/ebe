import classNames from 'classnames';
import React from 'react';

export interface HyperlinkProps {
  content?: any;
  onClick: any;
}

const hyperlinkClassName = 'ued-table-cell-hyperlink';

const Hyperlink: React.FC<HyperlinkProps> = (props) => {
  const { content, onClick } = props;

  return (
    <span
      className={classNames(hyperlinkClassName, {
        [`${hyperlinkClassName}-click`]: !!onClick,
      })}
      onClick={onClick}
    >
      {content}
    </span>
  );
};

export default Hyperlink;
