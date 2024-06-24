import { Cascader, Tooltip } from 'antd';
import classNames from 'classnames';
import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
  useListenProps,
} from '../utils';
import EmptyComp from '../utils/Empty';
import { useLocale } from '../utils/hooks/useLocale';
import { renderCommonList } from '../utils/renderReadOnly';

const CASCADER_WRAPPER_CLASSNAME = 'ued-cascader-wrap';
const WrapperCascader = ({ children }: { children: JSX.Element }) =>
  React.cloneElement(children, {
    className: `${CASCADER_WRAPPER_CLASSNAME} ${
      children.props.className || ''
    }`,
  });

export interface MyCascaderProps {
  value?: any;
  defaultValue?: any;
  visible?: boolean;
  onChange?: (value: any, options: any[]) => void;
  onValueRelease?: (value: any) => void;
  getCompPropMapState?: (id: string, type: string) => any;
  compId?: string;
  name?: string;
  fieldName: string;
  required?: any;
  hidden?: boolean;
  regexp?: any;
  message?: any;
  label?: any;
  labelCol?: any;
  wrapperCol?: any;
  text?: any;
  selfSpan?: number;
  colSpan?: number;
  style?: React.CSSProperties;
  dataSource?: any[] | undefined;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  colon?: boolean;
  popoverStyle: 'default' | 'auto'; //  default下拉宽度跟输入款一致   auto 根据内容自适应
  showSearch: boolean;
  allowClear: boolean;
  multiple: '1' | '2'; // 1单选  2 多选
  onSearch?: (
    searchVal: string,
    selectedOptionIds: any,
    selectedOptions: any,
  ) => void;
  onClickOption?: (
    openKey: string,
    childrenKeys: any,
    selectedOptionIds: any,
    selectedOptions: any,
  ) => void;
  onClickStaticOption?: (zattrNbrValueMap: any) => Promise<any[]>;
  childOptions: {
    key: string;
    options: any[];
  };
  className: string;
  isFormChild?: boolean | undefined;
  readOnly: boolean;
  rules?: any[];
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  getEngineApis?: any;
}

const prefixCls = 'cascader';

/**
 * @description: 根据长度截断字符串，用省略号补充
 */
const sliceWordsByWidth = (text = '', width: number) => {
  let wid = width;
  if (typeof text === 'string' && typeof wid === 'number' && wid - 20 > 0) {
    wid -= 10;
    const [wordsArr, textLength] = [[...text], text.length];
    const sliceWordsArr = [];
    while (wordsArr.length) {
      const w: string = wordsArr.shift() || '';
      if (/[\u4e00-\u9fa5]/.test(w) && wid - 11 > 0) {
        if (wid - 11 > 0) {
          sliceWordsArr.push(w);
          wid -= 11;
        } else {
          break;
        }
      }
      if (!/[\u4e00-\u9fa5]/.test(w) && wid - 6 > 0) {
        if (wid - 11 > 0) {
          sliceWordsArr.push(w);
          wid -= 6;
        } else {
          break;
        }
      }
    }
    const finalText =
      sliceWordsArr.length === textLength
        ? sliceWordsArr.join('')
        : [...sliceWordsArr, '.', '.', '.'].join('');
    return finalText;
  }
  return text;
};

const MyCascader: React.FC<MyCascaderProps> = forwardRef((props, ref) => {
  const {
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible = true,
    onChange,
    onValueRelease,
    getCompPropMapState,
    compId,
    name,
    fieldName: rawFieldName,
    regexp,
    message,
    label,
    labelCol,
    wrapperCol,
    selfSpan,
    colSpan,
    hidden,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    multiple: _multiple,
    dataSource,
    popoverStyle,
    showSearch,
    className,
    defaultValue,
    isFormChild,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rules: externalRules = [],
    tipSize,
    tipWidth,
    tipHeight,
    getEngineApis,
    ...restProps
  } = props;
  const engineApis = getEngineApis?.() || {};

  const { dataState } = engineApis;
  const { getLocale } = useLocale(engineApis);

  const customStyle = restProps.style || {};
  const dropdownClassName = `dropdownClassName_${compId}`;
  const cascaderClassName = `cascader_cls_${compId}`;
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const setStyleRef = useRef<boolean>(false);
  const {
    margin: customMargin,
    display: customDisplay,
    visibility: customVisibility,
    ...restCusStyles
  } = customStyle;

  const [childOptions, setChildOptions] = useListenProps<{
    key: string;
    options: any[];
  }>(props.childOptions);

  // 是否多选
  const multiple = useMemo(() => {
    return _multiple === '2';
  }, [_multiple]);

  // 搜索关键词
  const [searchVal, setSearchVal] = useState<string>('');

  const [compData, setCompData] = useState<any[]>();

  const [sourceOptions, setSourceOptions] = useState<any[]>(dataSource || []);
  const [init, setInit] = useState(false);

  // 输入结果下拉框跟输入框同长度
  const matchInputWidth = useMemo(() => {
    return popoverStyle !== 'auto';
  }, [popoverStyle]);

  useEffect(() => {
    if (init) {
      if (Array.isArray(dataSource)) {
        setSourceOptions(dataSource);
      }
    }
    setInit(true);
  }, [dataSource]);

  useEffect(() => {
    if (childOptions?.key && sourceOptions?.length > 0) {
      const newOptions = [...sourceOptions];
      const replaceChildren = (list: any[]) => {
        list.forEach((item) => {
          if (item.value === childOptions.key) {
            item.children = childOptions?.options || [];
          } else if (item?.children?.length > 0) {
            replaceChildren(item.children);
          }
        });
      };
      replaceChildren(newOptions);
      setSourceOptions(newOptions);
    }
  }, [childOptions]);

  const options = useMemo(() => {
    const changeLabel: (list: any[]) => any = (list: any[]) =>
      list?.map?.((item) => {
        const _item: any = { ...item };
        const { title: _title, children: _children } = _item;

        let __label: JSX.Element | string = sliceWordsByWidth(_title, 320);
        if (__label !== _title) {
          __label = (
            <Tooltip title={_title} mouseLeaveDelay={0}>
              {__label}
            </Tooltip>
          );
        }

        let { isLeaf } = _item;
        if (isLeaf === undefined) {
          // children为非数组时且配置了展开事件时，视为需要异步加载
          isLeaf =
            !Array.isArray(_children) && props.onClickOption
              ? false
              : _item.isLeaf;
        }

        return {
          ..._item,
          label: __label,
          children:
            _children && _children.length ? changeLabel(_children) : _children,
          isLeaf,
        };
      }) || [];

    return changeLabel(sourceOptions) || [];
  }, [sourceOptions]);

  const renderDisplay = (_label: any[]) => {
    const target = _label.map((l) =>
      l instanceof Object ? l.props?.title : l,
    );
    return target.join(' / ');
  };

  useEffect(() => {
    if (matchInputWidth) {
      const node = document.querySelector(
        `.${dropdownClassName}`,
      ) as HTMLElement;
      const clsNode = document.querySelector(
        `.${cascaderClassName}`,
      ) as HTMLElement;
      if (showDropDown && searchVal?.length > 0) {
        if (!setStyleRef.current && node && clsNode) {
          node.style.setProperty('width', `${clsNode.clientWidth}px`);
          node.style.setProperty('overflow', 'auto', 'important');
          setStyleRef.current = true;
        }
      } else if (node && clsNode) {
        node.style.removeProperty('width');
        node.style.removeProperty('overflow');
        setStyleRef.current = false;
      }
    }
  }, [searchVal, showDropDown, matchInputWidth]);

  const { formFieldsRef, required, readOnly, disabled, finalRules } =
    useCommonImperativeHandle(ref, props, {
      selectAll: () => {
        // 多选模式下才能全选
        if (multiple) {
          const tmp: any = [];
          const tmpData: any = [];
          options?.forEach((item: any) => {
            tmp.push([item.value]);
            tmpData.push([item]);
          });
          setCompData(tmpData);
          if (onChange) {
            onChange(tmp, tmpData);
          }
        }
      },
      clearValue: [],
      // 加载数据
      setOptions(options: any) {
        if (Array.isArray(options)) {
          setSourceOptions(options);
        }
      },
      // 加载子节点数据
      setChildOptions(data: { key: string; options: any[] }) {
        setChildOptions(data);
      },
    });

  return (
    <FormFields
      {...getFieldsProps(props)}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      ref={formFieldsRef}
      wrapperClassName={CASCADER_WRAPPER_CLASSNAME}
      render={(val) => renderCommonList(val, options)}
      rules={finalRules}
      clearValue={null}
    >
      <Cascader
        dropdownClassName={classNames(
          dropdownClassName,
          `${prefixCls}-dropdown`,
        )}
        onDropdownVisibleChange={(visible) => {
          setShowDropDown(visible);
          if (!visible) {
            // 关闭浮层重置搜索条件
            setSearchVal('');
          }
        }}
        {...(restProps as any)}
        value={value}
        options={options}
        style={restCusStyles}
        multiple={multiple}
        displayRender={renderDisplay}
        notFoundContent={
          <EmptyComp
            getLocale={getLocale}
            dataState={dataState}
            clsName="pcfactory-empty-small"
          />
        }
        showSearch={
          showSearch
            ? {
                matchInputWidth: popoverStyle !== 'auto',
              }
            : false
        }
        onSearch={(words) => {
          setSearchVal(words);
          if (showSearch && props.onSearch) {
            props.onSearch(words, value, compData);
          }
        }}
        loadData={async (selectOptions: any[]) => {
          if (selectOptions?.length > 0 && props.onClickOption) {
            const currentRow = selectOptions[selectOptions.length - 1];
            const childrenKeys =
              currentRow?.children?.map?.((item: any) => item.value) || [];
            props.onClickOption(
              currentRow.value,
              childrenKeys,
              value,
              compData,
            );
          }
          if (selectOptions?.length > 0 && props.onClickStaticOption) {
            const currentRow = selectOptions[selectOptions.length - 1];
            const { zattrNbrValueMap } = currentRow;
            if (zattrNbrValueMap) {
              const children = await props.onClickStaticOption(
                zattrNbrValueMap,
              );
              currentRow.children = children;
              delete currentRow.zattrNbrValueMap;
              setSourceOptions(options);
            }
          }
        }}
        className={classNames(className, cascaderClassName)}
        onChange={(keys: any, selctOptions: any) => {
          // 选中数据时清除搜索词
          setSearchVal('');
          setCompData(selctOptions);
          if (onChange) {
            onChange(keys, selctOptions);
          }
        }}
      />
    </FormFields>
  );
});

export default MyCascader;
export { CASCADER_WRAPPER_CLASSNAME, WrapperCascader };
