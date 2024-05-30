import React from 'react';
import classNames from 'classnames';

export interface PureFadeColorTagProps {
  fontColor?: string
  backgroundColor?: string;
  content?: any;
  onClick: any;
}

const pureColourTagClassName = 'ued-table-cell-pureColourTag';
const fadeColourTagClassName = 'ued-table-cell-fadeColourTag';

const PureFadeColorTag: React.FC<PureFadeColorTagProps> = (props) => {
  const {
    fontColor,
    backgroundColor,
    content,
    onClick,
  } = props;

  return (
    <span
      className={classNames(
        pureColourTagClassName,
        fadeColourTagClassName,
        { [`${pureColourTagClassName}-click ${fadeColourTagClassName}-click`]: !!onClick }
      )}
      style={{
        color: fontColor,
        backgroundColor,
      }}
      onClick={onClick}
    >
      {content}
    </span>
  );
};

export default PureFadeColorTag;
