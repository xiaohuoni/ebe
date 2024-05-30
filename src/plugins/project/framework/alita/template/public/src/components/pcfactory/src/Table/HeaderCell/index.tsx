import React from 'react';
// @ts-ignore
import { Resizable } from 'react-resizable';
import type { HeaderCellProps } from '../types/headerCell';

const HeaderCell = (props: HeaderCellProps) => {
  const { onResize, width, isFlexColumn, ...restProps } = props;

  if (!isFlexColumn) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

export default HeaderCell;
