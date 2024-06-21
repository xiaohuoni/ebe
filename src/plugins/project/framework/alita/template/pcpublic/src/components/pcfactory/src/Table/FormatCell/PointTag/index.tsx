import classNames from 'classnames';
import React from 'react';

export interface PointTagProps {
  fontColor: string;
  backgroundColor: string;
  content: any;
  onClick: any;
}

const pointTagClassName = 'ued-table-cell-pointTag';

const PointTag: React.FC<PointTagProps> = (props) => {
  const { fontColor, backgroundColor, content, onClick } = props;

  return (
    <div
      className={classNames(pointTagClassName, {
        [`${pointTagClassName}-click`]: !!onClick,
      })}
      onClick={onClick}
    >
      <span
        className="ued-table-cell-pointTag-point"
        style={{
          backgroundColor,
        }}
      />
      <span
        className="ued-table-cell-pointTag-text"
        style={{
          color: fontColor,
        }}
      >
        {content}
      </span>
    </div>
  );
};

export default PointTag;
