import classnames from 'classnames';
import './index.less';

const prefixCls = 'lcdp-dformlist-group';
const Group = (props: any) => {
  const { children, style, hidden, error, fieldProps } = props;
  return (
    <div
      className={classnames(`${prefixCls}-wrapper`, {
        [`${prefixCls}-hidden`]: hidden,
      })}
      style={style}
      aria-label={props['aria-label']}
      aria-disabled={props['aria-disabled']}
    >
      {children}
      {error && !!error[fieldProps] && (
        <div className={`${prefixCls}-error`}>{error[fieldProps]}</div>
      )}
    </div>
  );
};

export default Group;
