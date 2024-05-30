import classNames from 'classnames';
import React from 'react';

export interface GhostTagProps {
  fontColor: string;
  backgroundColor: string;
  borderColor: string;
  content: any;
  onClick: any;
}

const ghostTagClassName = 'ued-table-cell-ghostTag';

const GhostTag: React.FC<GhostTagProps> = (props) => {
  const {
    fontColor,
    backgroundColor,
    borderColor,
    content,
    onClick,
  } = props;

  return (
    <span
      className={classNames(
        ghostTagClassName,
        { [`${ghostTagClassName}-click`]: !!onClick }
      )}
      style={{
        color: fontColor,
        backgroundColor,
        borderColor,
      }}
      onClick={onClick}
    >
      {content}
    </span>
  );
};

export default GhostTag;
