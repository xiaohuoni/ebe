import classNames from 'classnames';
import React, { FC, useMemo } from 'react';
import Col from '../Col';
import { PRIVATE_SYMBOL, regroupNum } from '../utils';
import './index.less';

interface RowProps {
  /**
   * 索引行号
   */
  index?: number;

  /**
   * 样式
   */
  style?: React.CSSProperties;

  /**
   * 类名
   */
  className?: string;

  /**
   * 间隙，0 为row的间隔   1为col的间隔
   */
  gutter?: [x: string, y: string];

  /**
   * 每行的数据
   */
  cols: { span: number; [key: string]: any }[];

  /**
   * 渲染列内容
   * @param item
   * @returns
   */
  render: (item: { span: number; [key: string]: any }) => React.ReactNode;

  /**
   * 基数， 全行等分数量
   */
  base: number;
}

const prefixCls = 'lcdp-row';
const Row: FC<RowProps> = (props) => {
  const { style, className, gutter, cols, render, base, index = 0 } = props;

  // 数据重组
  const calculateCols = useMemo(() => regroupNum(base, cols), [cols, base]);

  return (
    <div
      style={{
        marginTop: index === 0 ? 0 : `${gutter?.[0] || '0px'}`,
        ...style,
      }}
      className={classNames(prefixCls, className)}
    >
      {calculateCols.map((col, index) => {
        const { span } = col;
        return (
          <Col
            key={`${index}`}
            index={index}
            gutter={gutter?.[1]}
            style={{ flex: span }}
          >
            {!col[PRIVATE_SYMBOL] && render(col)}
          </Col>
        );
      })}
    </div>
  );
};

Row.defaultProps = {
  style: {},
  gutter: ['0px', '1px'],
  index: 0,
};
export default Row;
