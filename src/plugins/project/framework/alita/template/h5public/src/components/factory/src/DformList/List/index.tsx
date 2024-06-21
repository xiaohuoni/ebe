import { EngineBaseProps } from '@lingxiteam/types';
import { FC } from 'react';

interface ListProps {
  getEngineApis: EngineBaseProps['getEngineApis'];

  /**
   * list数据
   */
  list?: unknown[];
  __render__: EngineBaseProps['__render__'];

  /**
   * 数据项字段别名
   */
  itemKey: string;

  /**
   * 索引字段别名
   */
  indexKey: string;

  /**
   * 唯一字段编码
   */
  uniqueField: string;

  /**
   * 当前组件的唯一id
   */
  compId: string;
}

const List: FC<ListProps> = ({
  list = [],
  getEngineApis,
  __render__,
  itemKey,
  indexKey,
  uniqueField,
  compId,
}) => {
  const { MemoRenderer } = getEngineApis();
  const { MemoLoopItem, renderer } = MemoRenderer;

  return (
    <>
      {list.map((item: any, index) => {
        const itemProps = {
          key: item[uniqueField] ?? index,
          item,
          i: index,
          itemKey,
          renderer,
          indexKey,
          __render__,
          itemId: item[uniqueField] ?? index,
          compId,
        };
        return <MemoLoopItem {...itemProps} />;
      })}
    </>
  );
};

export default List;
