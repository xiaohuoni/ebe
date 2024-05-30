import classNames from 'classnames';
import React from 'react';

export interface PureColourFillProps {
  fontColor: string;
  backgroundColor: string;
  content: any;
  onClick: any;
}

const pureColourFillClassName = 'ued-table-cell-pureColourFill';

const PureColourFill: React.FC<PureColourFillProps> = (props) => {
  const {
    fontColor,
    backgroundColor,
    content,
    onClick,
  } = props;

  return (
    <div
      className={classNames(
        pureColourFillClassName,
        { [`${pureColourFillClassName}-click`]: !!onClick }
      )}
      style={{
        backgroundColor,
        color: fontColor,
      }}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default PureColourFill;
