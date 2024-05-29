import { LingxiForwardRef } from '@lingxiteam/types';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import React, {
  createContext,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
// @ts-ignore
import { IconCheckSvg, IconNormalCheckSvg } from '@lingxiteam/assets';
import { useListenProps } from '../utils';

const basicStyle = { backgroundColor: '#fff' };

export const GridViewIndexContext = createContext(undefined);

export interface WrapperProps {
  children: React.ReactElement;
}

export interface MyGridView {
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
  onChange?: ((e: any) => void) | undefined;
  fixedWidth?: false | undefined;
  span: any;
  isEditor?: true | undefined;
  onValueRelease: any;
  form: any;
  fieldName: any;
  value: any;
  formUnique: any;
}

const gridViewCls = 'ued-grid-view';

const WrapperEditorComp: React.FC<WrapperProps> = ({ children }) =>
  React.cloneElement(children, {
    className: `${gridViewCls}-item ${gridViewCls}-item-edit ${
      children.props.className || ''
    }`,
  });

const WrapperDisableComps: React.FC<WrapperProps> = ({ children }) =>
  React.cloneElement(children, {
    className: `${gridViewCls}-item ${children.props.className || ''}`,
  });

const renderIcon = ({ checked, selectImg, normalImg }: any) => {
  if (checked) {
    if (selectImg) {
      return <img src={selectImg} className={`${gridViewCls}-icon`} alt="" />;
    }
    return <img src={IconCheckSvg} className={`${gridViewCls}-icon`} alt="" />;
  }
  if (normalImg) {
    return <img src={normalImg} className={`${gridViewCls}-icon`} alt="" />;
  }
  return (
    <img src={IconNormalCheckSvg} className={`${gridViewCls}-icon`} alt="" />
  );
};

const NoCheckBox = (item: {
  children: any;
  checked: any;
  itemStyle: any;
  index: any;
  disabled?: false | undefined;
  onChange: any;
}) => {
  const { children, checked, itemStyle, onChange } = item;
  return (
    <div
      style={itemStyle}
      className={classNames(
        `${gridViewCls}-blockSelect`,
        `${gridViewCls}-nobox`,
        {
          [`${gridViewCls}-select`]: checked,
        },
      )}
      onClick={onChange}
    >
      <div className={classNames(`${gridViewCls}-content`)}>{children}</div>
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
}) => {
  const { children, selectImg, normalImg, checked, itemStyle, onChange } = item;

  return (
    <div
      style={itemStyle}
      className={classNames(
        `${gridViewCls}-blockSelect`,
        `${gridViewCls}-showIcon`,
      )}
    >
      <div onClick={() => onChange(item)}>
        {renderIcon({ checked, selectImg, normalImg })}
      </div>
      <div className={classNames(`${gridViewCls}-content`)}>{children}</div>
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
  className: any;
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
  } = props;
  return (
    <Col {...colProps} className={className}>
      {isChecked ? (
        <CheckBox
          index={index}
          key={item[valueKey]}
          {...item}
          checked={checked}
          itemStyle={itemStyle}
          onChange={() => onChange(item, index)}
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
        >
          {children}
        </NoCheckBox>
      )}
    </Col>
  );
};

const DisabledComps = (props: {
  children: any;
  index: any;
  itemStyle: any;
  colProps: any;
  className: any;
}) => {
  const { children, index, itemStyle, colProps, className } = props || {};
  const item = children?.props?.$props;
  return (
    <Col {...colProps} className={className}>
      <NoCheckBox index={index} {...item} itemStyle={itemStyle} disabled>
        {children}
      </NoCheckBox>
    </Col>
  );
};

const MyGrid = (props: MyGridView) => {
  const {
    gridData = [],
    valueKey = 'value',
    children,
    defaultValue,
    selectStyle,
    normalStyle,
    selectImg,
    normalImg,
    isChecked,
    isMultiple,
    vspace = 0,
    hspace = 0,
    style,
    mediaLayout,
    onChange: uOnChange = (e: any) => {},
    fixedWidth = false,
    span,
    isEditor = true,
    onValueRelease,
    form,
    fieldName,
    value,
    formUnique,
    $$componentItem,
    ...restProps
  } = props;
  const [values, setValues] = useState(defaultValue);
  const { MemoRenderer } = props.getEngineApis?.();
  const { MemoLoopItem, renderer } = MemoRenderer;

  useEffect(() => {
    if (value !== undefined) {
      if (form && form.setFieldsValue) {
        form.setFieldsValue({ [fieldName]: value });
      }
      setValues(value);
    }
  }, [value]);

  const onChange = (restItem: Record<string, any>, index: any) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const value =
      typeof restItem === 'object' ? restItem[valueKey || 'value'] : index;
    if (!isMultiple) {
      setValues([value]);
      if (uOnChange) {
        uOnChange([value]);
      }
      return;
    }
    // 多选
    let tempValues = values || [];
    if (!values?.includes(value)) {
      tempValues = tempValues.concat(value);
    } else {
      tempValues = values.filter((v: any) => v !== value);
    }
    setValues([...tempValues]);
    if (uOnChange) {
      uOnChange([...tempValues]);
    }
  };

  const getChecked = (item: Record<string, any>, index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const value = typeof item === 'object' ? item[valueKey || 'value'] : index;
    const checked = values?.includes(value);
    return checked;
  };

  const getItemStyle = (checked: any) => {
    const itemstyle = { ...basicStyle, ...normalStyle };
    if (checked) {
      let source = { ...selectStyle };
      if (isChecked !== true) {
        source = {
          color: '#1677ff',
          border: '1px solid #1677ff',
          ...selectStyle,
        };
      }
      Object.assign(itemstyle, source);
    }

    return itemstyle;
  };

  const getColProps = useCallback(
    (item, index) => {
      const p: any = {};
      if (!fixedWidth) {
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
    return [props.itemKey || 'item', props.indexKey || 'i'];
  }, []);

  return (
    <Row gutter={[vspace, hspace]} style={style}>
      {(Array.isArray(gridData) ? gridData : []).map((item, index) => {
        const restItem = item;
        const checked = getChecked(restItem, index);
        const itemStyle = !isEditor ? basicStyle : getItemStyle(checked);
        const gridViewIndex =
          restItem[valueKey] ?? `${$$componentItem.uid}_${index}`;

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
            {isEditor ? (
              <WrapperEditorComp>
                <EditorComp
                  colProps={getColProps(restItem, index)}
                  itemStyle={itemStyle}
                  valueKey={valueKey}
                  key={restItem[valueKey]}
                  {...({ selectImg } as any)}
                  normalImg={normalImg}
                  item={restItem}
                  index={index}
                  onChange={onChange}
                  isChecked={isChecked}
                  checked={checked}
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
                >
                  <MemoLoopItem {...renderProps} />
                  {/* {renderChildren(item, index)} */}
                </DisabledComps>
              </WrapperDisableComps>
            )}
          </>
        );
      })}
    </Row>
  );
};

const SyncGridView = LingxiForwardRef((props: any, ref) => {
  const {
    defaultValue,
    value,
    valueKey = 'value',
    onChange,
    refGridData,
    gridViewRef,
  } = props;
  const [gridData, setGridData] = useListenProps(props.gridData || []);
  const values = useRef(defaultValue || []);
  useEffect(() => {
    if (value !== undefined) {
      values.current = value;
    }
  }, [value]);

  const getValues = () =>
    gridData?.filter((d: Record<string, any>, i: any) =>
      typeof d === 'object'
        ? values.current?.includes(d[valueKey])
        : values.current?.includes(i),
    );
  useEffect(() => {
    if (Array.isArray(refGridData)) {
      setGridData(refGridData);
    }
  }, [refGridData]);
  useImperativeHandle(
    gridViewRef,
    () => ({
      getValues: () => [values.current, getValues()],
      // setBlockSelectData: (list: any[]) => {
      //   setGridData(list || []);
      // }
    }),
    [gridData],
  );

  return (
    <MyGrid
      {...props}
      gridData={gridData}
      onChange={(vals) => {
        values.current = vals;
        if (onChange) {
          onChange(vals);
        }
      }}
    />
  );
});

export default SyncGridView;
