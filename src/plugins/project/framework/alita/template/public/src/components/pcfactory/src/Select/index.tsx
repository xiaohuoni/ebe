import { CheckOutlined } from '@ant-design/icons';
import { EngineBaseProps } from '@lingxiteam/types';
import { Empty, Select as AntdSelect, Spin, Tag } from 'antd';
import type { SelectProps } from 'antd/es/select';
import classNames from 'classnames';
import { isEqual } from 'lodash';
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
  useForm,
} from '../utils';
import { useMemoizedFn } from '../utils/ahooks';
import CustomModule from '../utils/CustomModule';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';
import { useLocale } from '../utils/hooks/useLocale';
import { renderCommonList } from '../utils/renderReadOnly';
import {
  checkIfSelectedAll,
  CHECK_ALL_VALUE,
  getChangeSelectData,
  getRules,
  getSelectedAllData,
  handleDataSource,
  handleFormValue,
  isLabelInValue,
  localFilterOption,
  transformValueType,
} from './selectUtils';

export interface MySelectProps extends EngineBaseProps {
  value?: any;
  visible?: any;
  onChange?: any;
  onValueRelease?: any;
  getCompPropMapState?: any;
  compId?: any;
  name?: any;
  fieldName?: any;
  required?: any;
  hidden?: any;
  regexp?: any;
  message?: any;
  label?: any;
  labelCol?: any;
  wrapperCol?: any;
  selfSpan?: any;
  colSpan?: any;
  defaultValue?: any;
  filter?: any;
  filterOption?: any;
  valueKey?: any;
  labelKey?: any;
  rangeLimit?: any;
  validateStatus?: any;
  help?: any;
  style?: React.CSSProperties;
  mode: 'multiple' | undefined;
  dataSource?: any;
  classification?: any;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  rules?: any[];
  colon?: boolean;
  min?: number;
  max?: number;
  isFormChild?: boolean | undefined;
  customRenderLabel?: any;
  customRenderOption?: any;
  readOnly: boolean;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  getEngineApis: any;
  checkedAll?: boolean; // 下拉多选时是否支持全选

  /**
   * 是否输入触发，默认fasel，也就是回车键触发, 为true的时候表示实时搜索
   */
  isInputSearch?: boolean;
}

interface WrapperSelectProps {
  children: React.ReactElement;
}

const SELECT_WRAPPER_CLASSNAME = 'ued-select-wrap';
const WrapperSelect: React.FC<WrapperSelectProps> = ({ children }) =>
  React.cloneElement(children, {
    className: `${SELECT_WRAPPER_CLASSNAME} ${children.props.className || ''}`,
  });

const Select = React.forwardRef<any, MySelectProps>((props, ref) => {
  const {
    value: originValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible = true,
    onChange,
    onValueRelease,
    getCompPropMapState,
    compId,
    name,
    fieldName: rawFieldName,
    hidden,
    regexp,
    message,
    label,
    labelCol,
    wrapperCol,
    selfSpan,
    colSpan,
    defaultValue: _defaultValue,
    filter,
    filterOption,
    rangeLimit,
    validateStatus,
    help,
    classification,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rules: externalRules = [],
    min,
    max,
    isFormChild,
    customRenderLabel,
    customRenderOption,
    tipSize,
    tipWidth,
    tipHeight,
    getEngineApis,
    checkedAll,
    isInputSearch,
    dataSource: propsDataSource,
    labelKey = 'label',
    valueKey = 'value',
    mode,
    $$componentItem,
    ...restProps
  } = props;

  const defaultValue = useMemo(() => {
    if (
      (_defaultValue === null || _defaultValue === '') &&
      mode === 'multiple'
    ) {
      return undefined;
    }
    return _defaultValue;
  }, []);

  const { sandBoxSafeRun, sandBoxLoadModule, onlySyncValue, compatConfig } =
    getEngineApis() || {};
  const { getLocale, lang } = useLocale(getEngineApis());
  const CHECK_ALL_TEXT = getLocale?.('all', '全选');
  const funcExpExecute = useFuncExpExecute(sandBoxSafeRun, getLocale);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [lKey, setLKey] = useState(labelKey);
  const [vKey, setVKey] = useState(valueKey);
  const [searching, setSearching] = useState(false);
  const [open, setOpen] = useState(false);
  const searchTextRef = useRef<string>();
  const [isCheckedAll, setCheckedAll] = useState(false);

  // 配置了全选后增加一个全选项
  const hasCheckAll = useMemo(
    () => mode === 'multiple' && checkedAll,
    [mode, checkedAll],
  );

  const value = useMemo(() => {
    const temValue = handleFormValue(originValue, props.mode);
    // TODO 实验性 理论上上是统一处理的, 如果值和hoc传下来不一致需要同步到hoc
    if (!isEqual(temValue, originValue)) {
      onlySyncValue?.(temValue);
    }
    return temValue;
  }, [JSON.stringify(originValue)]);

  const formContext = useForm();

  // FIX: 兼容旧逻辑 通过表单设置值时表单项的值需要预处理，否则会导致值和预想的值不一致
  if (formContext.inForm) {
    formContext.preproccessSetFormValues(props.fieldName, (v) =>
      handleFormValue(v, props.mode),
    );
  }

  const {
    required,
    disabled,
    finalRules,
    setExtendRules,
    formFieldsRef,
    readOnly,
  } = useCommonImperativeHandle(ref, props, {
    clearValue: [],
    getSelectedData: () => {
      return getChangeSelectData(dataSource, value, mode);
    },
    // 清空选项
    clearOptions: () => {
      setDataSource([]);
    },
    // 联动设置下拉框选项
    setDataSource: (_dataSource: any[]) => {
      setDataSource(_dataSource || []);
    },
    // 加载数据
    setDataWithLabelAndValue: (data: {
      dataSource: any[];
      labelKey: any;
      valueKey: any;
    }) => {
      setVKey(data.valueKey);
      setLKey(data.labelKey);
      const dataSoure = handleDataSource(
        data.dataSource,
        [],
        data.valueKey,
        data.labelKey,
      );
      // 3.3.1 之前，为空不进行赋值
      if (compatConfig?.isFormCompat === true) {
        if (Array.isArray(dataSource) && dataSoure.length > 0) {
          setDataSource(dataSoure);
        }
      } else {
        setDataSource(dataSoure || []);
      }
    },
  });
  const handleLocalSearch = useMemoizedFn((input: string) => {
    try {
      if (hasCheckAll) {
        // 搜索值变化时更新全选状态
        const checked = checkIfSelectedAll(dataSource, value, input);
        setCheckedAll(checked);
      }
      searchTextRef.current = input;
    } catch (err) {
      searchTextRef.current = '';
      console.log('err', err);
    }
  });

  useLayoutEffect(() => {
    setExtendRules(getRules(min, max, getLocale), false);
  }, [min, max, lang]);

  // 处理列表数据
  useEffect(() => {
    const newData = handleDataSource(
      propsDataSource,
      isLabelInValue(originValue) ? originValue : [],
      vKey,
      lKey,
    );
    setDataSource(newData);
  }, [JSON.stringify(propsDataSource)]);
  const filterObject: SelectProps = useMemo(() => {
    if (filter === 'local') {
      return {
        defaultActiveFirstOption: false,
        showSearch: true,
        optionFilterProp: 'children',
        filterOption: localFilterOption,
        onSearch: handleLocalSearch,
      };
    }
    if (filter === 'remote') {
      return {
        defaultActiveFirstOption: false,
        showSearch: true,
        notFoundContent: searching ? <Spin size="small" /> : <Empty />,
        filterOption: false,
        onKeyDown: (e) => {
          // 兼容旧浏览器使用keyCode
          if (e.key === 'Enter' || e.keyCode === 13) {
            try {
              setSearching(true);
              if (filterOption) {
                // filterOption(searchText);
                filterOption(searchTextRef?.current || '');
              }
              setSearching(false);
            } catch (err) {
              setSearching(false);
              // setSearchText('');
              searchTextRef.current = '';
              console.log('err', err);
            }
          }
        },
        onSearch: (input) => {
          try {
            // setSearchText(input);
            searchTextRef.current = input;
            if (input) {
              // 一输入搜索就要打开
              setOpen(true);
            }
            // 下拉单选，失去焦点的时候，会触发，多选不触发，导致下拉单选在失去焦点时，会多触发一次，所以input?.length > 0 判断下
            if (filterOption && isInputSearch === true) {
              // filterOption(searchText);
              filterOption(input);
            }
          } catch (err) {
            // setSearchText('');
            searchTextRef.current = '';
            console.log('err', err);
          }
        },
      };
    }
    return {};
  }, [filter]);

  const renderLabel = (c: any, index: number) => {
    if (
      customRenderLabel &&
      typeof customRenderLabel === 'object' &&
      customRenderLabel.jsx
    ) {
      return (
        <CustomModule
          code={customRenderLabel.targetVal}
          compProps={{
            text: c.label,
            item: c,
            index,
          }}
          sandBoxLoadModule={sandBoxLoadModule}
          errorInfo={{
            id: props?.$$componentItem?.id,
          }}
        />
      );
    }
    if (customRenderLabel) {
      // 自定义渲染函数-旧数据格式兼容 || 自定义渲染函数-新数据格式
      const code = customRenderLabel?.code || customRenderLabel;
      return (
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: funcExpExecute(code, [
              {
                key: 'text',
                value: c.label,
              },
              {
                key: 'item',
                value: c,
              },
              {
                key: 'index',
                value: index,
              },
            ]),
          }}
        />
      );
    }

    return c.label;
  };

  const renderOption = (c: any, index: number) => {
    let context: React.ReactNode = c.label;

    if (
      customRenderOption &&
      typeof customRenderOption === 'object' &&
      customRenderOption.jsx
    ) {
      context = (
        <CustomModule
          code={customRenderOption.targetVal}
          compProps={{
            text: context,
            item: c,
            index,
          }}
          sandBoxLoadModule={sandBoxLoadModule}
          errorInfo={{
            id: props.$$componentItem.id,
          }}
        />
      );
    } else if (customRenderOption) {
      // 自定义渲染函数-旧数据格式兼容 || 自定义渲染函数-新数据格式
      const code = customRenderOption?.code || customRenderOption;
      context = (
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: funcExpExecute(code, [
              {
                key: 'text',
                value: context,
              },
              {
                key: 'item',
                value: c,
              },
              {
                key: 'index',
                value: index,
              },
            ]),
          }}
        />
      );
    }
    return context;
  };

  const extraProps = {
    // 选中数据时过滤掉全选
    tagRender: (p: any) =>
      p?.value !== CHECK_ALL_VALUE ? (
        <Tag {...p} className="ued-select-checked-tag">
          {p?.label}
        </Tag>
      ) : null,
    ...restProps,
  };

  // 判断是否选中全选项，当开启全选时，若选项都勾上时则视为全选，本地或远程过滤后，全选表示的是过滤后的数据
  useEffect(() => {
    if (hasCheckAll) {
      const checked = checkIfSelectedAll(
        dataSource,
        value,
        searchTextRef.current,
      );
      setCheckedAll(checked);
    }
  }, [JSON.stringify(dataSource), hasCheckAll, value]);

  const renderCheckAll = () => {
    if (hasCheckAll) {
      return (
        <AntdSelect.Option
          className={classNames(
            'ued-check-all',
            isCheckedAll && 'ued-check-all-checked',
          )}
          title={CHECK_ALL_TEXT}
          key={CHECK_ALL_VALUE}
          label={CHECK_ALL_TEXT}
          value={CHECK_ALL_VALUE}
          disabled
        >
          <div
            className="ued-check-all-content"
            onClick={(e) => {
              e.stopPropagation();
              handleCheckedAll();
            }}
          >
            {CHECK_ALL_TEXT}
            {isCheckedAll && (
              <span className="ued-check-all-option">
                {/** @ts-ignore */}
                <CheckOutlined />
              </span>
            )}
          </div>
        </AntdSelect.Option>
      );
    }
    return null;
  };

  const resetRemoteFilter = () => {
    // 当选中后，需要重新调用远程过滤
    if (filter === 'remote') {
      if (filterOption) {
        filterOption('');
      }
    }
  };

  const handleAfterClose = () => {
    if (searchTextRef.current) {
      // 点击时需要重置过滤条件
      if (filter === 'local') {
        handleLocalSearch('');
      }

      resetRemoteFilter();
    }
    // 关闭之后，需要置空搜索值
    searchTextRef.current = '';
  };

  const handleOnChange = (v: any[]) => {
    if (onChange) {
      onChange(v);
    }
  };

  const handleCheckedAll = () => {
    if (hasCheckAll) {
      const localFilterData = dataSource.filter((d) =>
        localFilterOption(searchTextRef.current, d),
      );
      const data = getSelectedAllData(
        !isCheckedAll,
        localFilterData,
        value,
        max,
      );
      handleOnChange(data);
    }
  };

  return (
    <FormFields
      {...getFieldsProps(props)}
      wrapperClassName={SELECT_WRAPPER_CLASSNAME}
      render={(val) => renderCommonList(val, dataSource)}
      required={required}
      disabled={disabled}
      ref={formFieldsRef}
      rules={finalRules}
      clearValue={null}
      value={value}
      readOnly={readOnly}
      defaultValue={defaultValue}
    >
      {/** @ts-ignore */}
      <AntdSelect
        showArrow
        {...restProps}
        // value无值时不配置value属性，避免defaultValue渲染失败
        defaultValue={defaultValue}
        {...extraProps}
        {...filterObject}
        value={value}
        open={open}
        mode={mode}
        optionLabelProp="label"
        onChange={(v) => {
          if (filter === 'local' && searchTextRef.current) {
            // 点击时需要重置过滤条件
            handleLocalSearch('');
          }
          // 单选选完要关闭
          if (typeof v !== 'undefined' && mode !== 'multiple') {
            setOpen(false);
            resetRemoteFilter();
          }

          handleOnChange(v);
        }}
        onClick={(e) => {
          let targetParent = (e?.target as HTMLBaseElement)?.parentNode;
          const curretTarget = e?.currentTarget;
          while (targetParent && targetParent !== curretTarget) {
            targetParent = targetParent.parentNode;
          }
          if (targetParent === curretTarget) {
            setOpen(!open);
            if (open) {
              handleAfterClose();
            }
          }
          // @ts-ignore
          restProps?.onClick?.(e);
        }}
        onBlur={() => {
          setOpen(false);
          handleAfterClose();
        }}
        onClear={() => {
          // setOpen(false);
          if (searchTextRef.current) {
            // 需要置空搜索值
            searchTextRef.current = '';
            resetRemoteFilter();
          }
        }}
      >
        {renderCheckAll()}
        {(dataSource || []).map((c: any, index: number) => {
          return (
            <AntdSelect.Option
              label={renderLabel(c, index)}
              title={c.label}
              key={c.value || Math.random()}
              value={transformValueType(c.value, value ?? [])}
              disabled={
                rangeLimit &&
                rangeLimit.length > 0 &&
                !rangeLimit.includes(+c.value)
              }
            >
              {renderOption(c, index)}
            </AntdSelect.Option>
          );
        })}
      </AntdSelect>
    </FormFields>
  );
});

export default Select;
export { SELECT_WRAPPER_CLASSNAME, WrapperSelect };
