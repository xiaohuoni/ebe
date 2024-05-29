import { Col, Row } from 'antd';
import classNames from 'classnames';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react';
// @ts-ignore
import { IconCheckSvg, IconNormalCheckSvg } from '@lingxiteam/assets';
import useBackgroundStyle from '../View/useBackgroundStyle';

const basicStyle = { backgroundColor: '#fff' };
export interface WrapperProps {
  children: React.ReactElement;
}

export interface MyLoopList {
  [x: string]: any;
  gridData?: never[] | undefined;
  valueKey?: 'value' | undefined;
  children: any;
  defaultValue: any;
  selectStyle: any;
  normalStyle: any;
  selectImg: any;
  normalImg: any;
  isChecked: any;
  isMultiple: any;
  vspace?: 0 | undefined;
  hspace?: 0 | undefined;
  style: any;
  mediaLayout: any;
  onChange?: ((e: any, dataList: any[]) => void) | undefined;
  fixedWidth?: false | undefined;
  span: any;
  isEditor?: true | undefined;
  onValueRelease: any;
  form: any;
  fieldName: any;
  value: any;
  formUnique: any;
  mode: 1 | 2 | 3; // 1 无  2单选  3 多选
  backgroundType?: any;
  appId?: string;
  gridMode?: boolean;
  getEngineApis?: any;
}

const loopListCls = 'ued-loop-list';

const WrapperEditorComp: React.FC<WrapperProps> = ({ children }) =>
  React.cloneElement(children, {
    className: `${loopListCls}-item ${loopListCls}-item-edit ${
      children.props.className || ''
    }`,
  });

const WrapperDisableComps: React.FC<WrapperProps> = ({ children }) =>
  React.cloneElement(children, {
    className: `${loopListCls}-item ${children.props.className || ''}`,
  });

const renderIcon = ({
  checked,
  selectImg,
  normalImg,
  getAppFileUrlByFileCode,
}: any) => {
  if (checked) {
    if (selectImg) {
      return (
        <img
          src={getAppFileUrlByFileCode(selectImg)}
          className={`${loopListCls}-icon`}
          alt=""
        />
      );
    }
    return <img src={IconCheckSvg} className={`${loopListCls}-icon`} alt="" />;
  }
  if (normalImg) {
    return (
      <img
        src={getAppFileUrlByFileCode(normalImg)}
        className={`${loopListCls}-icon`}
        alt=""
      />
    );
  }
  return (
    <img src={IconNormalCheckSvg} className={`${loopListCls}-icon`} alt="" />
  );
};

const NoCheckBox = (item: {
  children: any;
  checked: any;
  itemStyle: any;
  index: any;
  disabled?: false | undefined;
  onChange: any;
  onClick: any;
}) => {
  const { children, itemStyle, onClick, onChange } = item;
  return (
    <div
      style={itemStyle}
      className={classNames(
        `${loopListCls}-blockSelect`,
        `${loopListCls}-nobox`,
      )}
      onClick={() => {
        onClick?.();
        onChange?.();
      }}
    >
      <div className={classNames(`${loopListCls}-content`)}>{children}</div>
    </div>
  );
};

const CheckBox = (item: {
  children: any;
  selectImg: any;
  normalImg: any;
  checked: any;
  itemStyle: any;
  index: any;
  disabled?: false | undefined;
  onChange: any;
  onClick: any;
  getAppFileUrlByFileCode?: (name: string) => string;
}) => {
  const {
    children,
    selectImg,
    normalImg,
    checked,
    itemStyle,
    onChange,
    onClick,
    getAppFileUrlByFileCode,
  } = item;

  return (
    <div
      style={itemStyle}
      className={classNames(
        `${loopListCls}-blockSelect`,
        `${loopListCls}-showIcon`,
      )}
      onClick={onClick}
    >
      <div onClick={() => onChange(item)}>
        {renderIcon({ checked, selectImg, normalImg, getAppFileUrlByFileCode })}
      </div>
      <div className={classNames(`${loopListCls}-content`)}>{children}</div>
    </div>
  );
};

const EditorComp = (props: {
  isChecked: any;
  children: any;
  item: any;
  index: any;
  valueKey: any;
  colProps?: {} | undefined;
  onChange: any;
  itemStyle: any;
  checked: any;
  className?: any;
  onClick: any;
  gridMode: boolean;
  selectImg?: string;
  normalImg?: string;
  getAppFileUrlByFileCode?: (name: string) => string;
}) => {
  const {
    isChecked,
    children,
    item,
    index,
    valueKey,
    colProps = {},
    onChange,
    itemStyle,
    checked,
    className,
    gridMode, // 栅格模式
    selectImg,
    normalImg,
    getAppFileUrlByFileCode,
  } = props;
  const render = isChecked ? (
    <CheckBox
      index={index}
      key={item[valueKey]}
      {...item}
      checked={checked}
      itemStyle={itemStyle}
      onChange={() => onChange(item, index)}
      onClick={props.onClick}
      selectImg={selectImg}
      normalImg={normalImg}
      getAppFileUrlByFileCode={getAppFileUrlByFileCode}
    >
      {children}
    </CheckBox>
  ) : (
    <NoCheckBox
      index={index}
      key={item[valueKey]}
      {...item}
      itemStyle={itemStyle}
      onChange={() => onChange(item, index)}
      checked={checked}
      onClick={props.onClick}
    >
      {children}
    </NoCheckBox>
  );
  return gridMode ? (
    <Col {...colProps} className={className}>
      {render}
    </Col>
  ) : (
    render
  );
};

const DisabledComps = (props: {
  children: any;
  index: any;
  itemStyle: any;
  colProps: any;
  className: any;
  onClick: any;
  gridMode: boolean;
}) => {
  const { children, index, itemStyle, colProps, className, gridMode } =
    props || {};
  const item = children?.props?.$props;
  const render = (
    <NoCheckBox
      index={index}
      {...item}
      itemStyle={itemStyle}
      disabled
      onClick={props.onClick}
    >
      {children}
    </NoCheckBox>
  );

  return gridMode ? (
    <Col {...colProps} className={className}>
      {render}
    </Col>
  ) : (
    render
  );
};

const MyGrid = (props: MyLoopList) => {
  const {
    gridData = [],
    valueKey = 'value',
    children,
    defaultValue,
    selectStyle,
    normalStyle,
    selectImg,
    normalImg,
    vspace = 0,
    hspace = 0,
    style,
    mediaLayout,
    onChange: uOnChange = (e: any, datas: any[]) => {},
    fixedWidth = false,
    span,
    isEditor = true,
    onValueRelease,
    form,
    fieldName,
    value,
    formUnique,
    mode,
    onClickLoopItem,
    backgroundType,
    appId,
    gridMode = true, // 存量数据为true
    getEngineApis,
    $$componentItem,
    ...restProps
  } = props;

  const engineApis = getEngineApis?.() || {};

  const {
    service: { getAppFileUrlByFileCode },
  } = engineApis;

  const isChecked: boolean = mode !== 1;
  const isMultiple: boolean = mode === 3;

  // const [values, setValues] = useState(defaultValue);
  const { backgroundStyle } = useBackgroundStyle({
    engineApis,
    backgroundType,
    appId,
    mode: 'engine',
  });
  // useEffect(() => {
  //   if (value !== undefined) {
  //     if (form && form.setFieldsValue) {
  //       form.setFieldsValue({ [fieldName]: value });
  //     }
  //     setValues(value);
  //   }
  // }, [value]);

  const getLoopDataByKeys = (keys: any[]) => {
    return Array.isArray(keys)
      ? keys.map((id) => {
          return props?.gridData?.find((data) => data[valueKey] === id);
        })
      : [];
  };

  const onChange = (restItem: Record<string, any>, index: any) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const val =
      typeof restItem === 'object' ? restItem[valueKey || 'value'] : index;
    if (!isMultiple) {
      // setValues([value]);
      if (uOnChange) {
        uOnChange([val], getLoopDataByKeys([val]));
      }
      return;
    }
    // 多选
    let tempValues = value || [];
    if (!value?.includes(val)) {
      tempValues = tempValues.concat(val);
    } else {
      tempValues = tempValues.filter((v: any) => v !== val);
    }
    // setValues([...tempValues]);
    if (uOnChange) {
      uOnChange([...tempValues], getLoopDataByKeys(tempValues));
    }
  };

  const getChecked = (item: Record<string, any>, index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const _value = typeof item === 'object' ? item[valueKey || 'value'] : index;
    const checked = value?.includes(_value);
    return checked;
  };

  const getItemStyle = (checked: any) => {
    const itemstyle = { ...basicStyle, ...normalStyle };
    if (checked) {
      const source = { ...selectStyle };
      Object.assign(itemstyle, source);
    }
    return itemstyle;
  };

  const getColProps = useCallback(
    (item, index) => {
      const p: any = {};
      if (!fixedWidth && gridMode) {
        p.span = span;
        Object.assign(p, { ...mediaLayout, ...restProps });
      } else {
        p.style = { marginLeft: `${vspace}px` };
        Object.assign(p, restProps);
      }
      return p;
    },
    [mediaLayout, span, fixedWidth],
  );

  // 循环列表配置key
  const [itemKey, indexKey] = useMemo(() => {
    return [props.itemKey || 'rowData', props.indexKey || 'rowIndex'];
  }, []);

  const { MemoRenderer } = props.getEngineApis?.();
  const { MemoLoopItem, renderer } = MemoRenderer;

  return (
    <Row gutter={[vspace, hspace]} style={{ ...backgroundStyle, ...style }}>
      {Array.isArray(gridData) &&
        gridData.map((item, index) => {
          const restItem = item || {};
          const checked = getChecked(restItem, index);
          const itemStyle = !isEditor ? basicStyle : getItemStyle(checked);
          const gridViewIndex =
            restItem[valueKey] || `${props.compId}_${index}`;
          const onClick = () =>
            onClickLoopItem?.(restItem[valueKey], restItem, index);

          const renderProps = {
            itemKey,
            indexKey,
            item,
            i: index,
            __render__: props.__render__,
            renderer,
            itemId: gridViewIndex,
            compId: $$componentItem.uid,
            context: {
              item,
              i: index,
            },
          };

          return (
            <>
              {!props.disabled ? (
                <WrapperEditorComp>
                  <EditorComp
                    colProps={getColProps(restItem, index)}
                    itemStyle={itemStyle}
                    valueKey={valueKey}
                    key={restItem[valueKey]}
                    selectImg={selectImg}
                    normalImg={normalImg}
                    getAppFileUrlByFileCode={getAppFileUrlByFileCode}
                    item={restItem}
                    index={index}
                    onChange={onChange}
                    isChecked={isChecked}
                    checked={checked}
                    onClick={onClick}
                    gridMode={gridMode}
                  >
                    <MemoLoopItem {...renderProps} />
                    {/* {renderChildren(item, index)} */}
                  </EditorComp>
                </WrapperEditorComp>
              ) : (
                <WrapperDisableComps>
                  <DisabledComps
                    colProps={getColProps(restItem, index)}
                    itemStyle={itemStyle}
                    key={restItem[valueKey]}
                    {...({ valueKey } as any)}
                    item={restItem}
                    index={index}
                    checked={checked}
                    onClick={onClick}
                    gridMode={gridMode}
                  >
                    <MemoLoopItem {...renderProps} />
                  </DisabledComps>
                </WrapperDisableComps>
              )}
            </>
          );
        })}
    </Row>
  );
};

const SyncLoopList = forwardRef((props: any, ref) => {
  const { defaultValue, value, valueKey = 'value', onChange } = props;

  useEffect(() => {
    if (defaultValue && value === undefined) {
      if (onChange) {
        onChange(defaultValue);
      }
    }
  }, []);

  const getDataAndIndex = () => {
    const list: any = [];
    const idx: number[] = [];
    if (Array.isArray(value)) {
      value.forEach((key) => {
        props.gridData?.forEach((d: Record<string, any>, i: any) => {
          if (typeof d === 'object' ? d[valueKey] === key : i === key) {
            list.push(d);
            idx.push(i);
          }
        });
      });
    }
    return [list, idx];
  };

  useImperativeHandle(ref, () => ({
    getValues: () => {
      const [list, idx] = getDataAndIndex();
      return [value, list, idx];
    },
  }));

  return (
    <MyGrid
      {...props}
      value={(value ?? defaultValue) || []}
      onClickLoopItem={props?.onClickLoopItem}
      onChange={(vals, dataList) => {
        if (onChange) {
          onChange(vals, dataList);
        }
      }}
    />
  );
});

export default SyncLoopList;
