import { Select } from 'antd';
import classnames from 'classnames';

const BaseModalSelect = (props: any) => {
  const {
    className,
    postfixStyleClsName,
    restProps,
    value,
    propsOnChange,
    mode,
    ClearIcon,
    options,
    handleChangeVal,
    handleClickVisible,
    lastValue,
    onIconClick,
    getAddonAfterBtn,
    disabled,
    readOnly,
    allowClear,
    InputNumber,
  } = props;

  return (
    <span
      className={classnames(className, {
        'pcfactory-input-group-wrapper': true,
        [`pcfactory-input-affix-wrapper-${
          restProps?.size === 'large' ? 'lg' : 'sm'
        }`]: ['large', 'small'].includes(restProps?.size),
        [`${postfixStyleClsName}`]: postfixStyleClsName,
      })}
      style={restProps?.style}
      onChange={(val) => {
        propsOnChange?.(val);
      }}
    >
      <span
        className={classnames({
          'pcfactory-input-wrapper': true,
          'pcfactory-input-group': true,
        })}
      >
        <Select
          {...restProps}
          disabled={disabled}
          size={restProps?.size}
          mode={mode}
          value={value}
          onChange={(e) => handleChangeVal(e)}
          allowClear={allowClear}
          maxTagTextLength={InputNumber}
          clearIcon={ClearIcon()}
          showArrow={false}
          open={false}
          options={options}
          tagRender={(item) => {
            return (
              <span>
                {item?.label}
                {item.value !== lastValue?.value ? ',' : ''}
              </span>
            );
          }}
          onClick={(e) => {
            !disabled && handleClickVisible();
            e.stopPropagation();
          }}
          style={{
            width: '100%',
          }}
        />
        {!readOnly && (
          <span
            className={classnames({
              'pcfactory-input-group-addon': true,
              'pcfactory-input-group-addon-disabled': disabled,
            })}
            onClick={(e) => {
              e.stopPropagation();
              if (!onIconClick && !disabled) {
                handleClickVisible();
              }
            }}
          >
            {getAddonAfterBtn()}
          </span>
        )}
      </span>
    </span>
  );
};

export default BaseModalSelect;
