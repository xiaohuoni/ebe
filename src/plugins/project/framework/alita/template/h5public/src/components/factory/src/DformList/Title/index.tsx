import './index.less';

const prefixCls = 'lcdp-dformlist-title';
const Title = (props: any) => {
  const { title, disabled = false, required = false, onAdd, getLocale } = props;
  return (
    <div className={`${prefixCls}-box`}>
      <div className={`${prefixCls}-wrapper`}>
        <div className={`${prefixCls}-title`}>
          {required && <span className={`${prefixCls}-redStar`}>*</span>}
          {title}
        </div>
        {!disabled && (
          <div className={`${prefixCls}-btnText`} onClick={onAdd}>
            {getLocale?.('add', '添加') || '添加'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Title;
