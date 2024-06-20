import classNames from 'classnames';
import type { FC } from 'react';
import './index.less';

interface SpinProps {
  spinning: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  tip?: string;
  size?: 'small' | 'large' | 'default';
}

const prefixCls = 'lcdp-spin';
const SpinItem = (props: SpinProps) => {
  const { spinning = true, size } = props;
  return (
    <div
      className={classNames(prefixCls, {
        [`${prefixCls}-spinning`]: spinning,
        [`${prefixCls}-small`]: size === 'small',
        [`${prefixCls}-large`]: size === 'large',
        [`${prefixCls}-default`]: size === 'default',
      })}
    >
      <span
        className={classNames(
          `${prefixCls}-dotSpin`,
          `${prefixCls}-spinning-dotSpin`,
        )}
      >
        <i className={`${prefixCls}-dotSpin-spinDotItem`} />
        <i className={`${prefixCls}-dotSpin-spinDotItem`} />
        <i className={`${prefixCls}-dotSpin-spinDotItem`} />
        <i className={`${prefixCls}-dotSpin-spinDotItem`} />
      </span>
    </div>
  );
};

const Spin: FC<SpinProps> = (props) => {
  const { spinning = true, tip, children, size = 'default' } = props;

  const SpinWrapper = (
    <div className={`${prefixCls}-wrapper`}>
      <SpinItem spinning={spinning} size={size} />
      {tip && <div className={`${prefixCls}-wrapper-tips`}>{tip}</div>}
    </div>
  );

  return spinning ? SpinWrapper : <>{children}</>;
};

export default Spin;
