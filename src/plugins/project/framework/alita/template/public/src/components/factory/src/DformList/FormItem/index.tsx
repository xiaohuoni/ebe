import { Form } from '@lingxiteam/dform';
import { EngineBaseProps } from '@lingxiteam/types';
import { isEqual } from 'lodash';
import cloneDeep from 'lodash/cloneDeep';
import type { ValidatorRule } from 'rc-field-form/es/interface';
import type { ListField } from 'rc-field-form/es/List';
import React, { FC, useEffect, useRef } from 'react';
import { DFormContext } from '../../utils/form';

const { List, Field } = Form;
interface FormItemProps {
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
   * 字段名
   */
  fieldProps: string;

  /**
   * 变化回调
   * @param v
   * @returns
   */
  onChange?: (v?: any[]) => void;

  rules: ValidatorRule[];

  disabled: boolean;

  /**
   * 当前组件id
   */
  compId: string;

  /**
   * 是否显示
   */
  visible?: boolean;
}

interface FormListProps {
  index: number;
  getEngineApis: EngineBaseProps['getEngineApis'];

  /**
   * 唯一字段编码
   */
  uniqueField: string;

  /**
   * 索引字段别名
   */
  indexKey: string;

  itemKey: string;

  item: any;

  __render__: EngineBaseProps['__render__'];

  compId: string;

  disabled: boolean;

  data: any;

  onHandleChange?: (v: any) => void;

  /**
   * 字段名
   */
  fieldProps: string;

  /**
   * 是否显示
   */
  visible?: boolean;

  [key: string]: any;
}

const FormList: FC<FormListProps> = (props) => {
  const {
    getEngineApis,
    index,
    uniqueField,
    itemKey,
    item,
    indexKey,
    __render__,
    compId,
    disabled,
    data,
    onHandleChange,
    fieldProps,
    value,
    visible,
  } = props;
  const { MemoRenderer, onlySyncValue } = getEngineApis();
  const { MemoLoopItem, renderer } = MemoRenderer;
  const currentItem = value[fieldProps][index];

  const preCurrentItemRef = useRef(currentItem);

  if (!isEqual(preCurrentItemRef.current, currentItem)) {
    preCurrentItemRef.current = currentItem;
    if (onlySyncValue) {
      onlySyncValue(value[fieldProps]);
    }
    if (onHandleChange) {
      onHandleChange(value[fieldProps]);
    }
  }

  const newItem = {
    ...data,
  };

  const replaceComponents = (item: ListField, i: number, field: ListField) => {
    const recursive = (schemas: Record<string, any>[] = []) => {
      return schemas.map((schema) => {
        const {
          components = [],
          props: schemaProps,
          isAppChildForm = false,
        } = schema;
        schema.components = recursive(components);
        if (isAppChildForm) {
          schema.props = {
            ...schemaProps,
            fieldProps: [field.name, schemaProps.fieldProps],
            defaultValue: newItem?.[schemaProps.fieldProps],
            ...field,
            ...item,
            // 隐藏逻辑按照dformList隐藏，则所有子节点隐藏。否则就是用最上层逻辑
            status: visible === false ? '2' : schemaProps.status,
          };

          if (disabled) {
            schema.props.status = '3';
          }
        }

        if (schema.compName === 'DForm') {
          schema.compName = 'View';
          schema.type = 'View';
        }
        return schema;
      });
    };
    return recursive(cloneDeep(renderer.components));
  };

  const itemProps = {
    key: newItem[uniqueField] ?? index,
    item: newItem,
    i: index,
    itemKey,
    renderer: {
      ...renderer,
      components: replaceComponents(newItem, index, item),
    },
    indexKey,
    __render__: {
      forceUpdate: __render__?.forceUpdate ?? false,
    },
    itemId: newItem[uniqueField] ?? index,
    compId,
  };

  return <MemoLoopItem {...itemProps} />;
};

const MemoFormList = React.memo(FormList, (prevProps, nextProps) => {
  if (isEqual(prevProps, nextProps)) {
    return true;
  }
  return prevProps === nextProps;
});

const FormItem: FC<FormItemProps> = ({
  fieldProps,
  list,
  getEngineApis,
  uniqueField,
  itemKey,
  indexKey,
  __render__,
  onChange,
  disabled,
  rules,
  compId,
  visible,
}) => {
  const { form } = React.useContext(DFormContext) || {};
  const listLength = list?.length;
  const lastValueRef = useRef<any>();

  useEffect(() => {
    // 首次不处理
    lastValueRef.current = null;
    // 这里调用reset是因为删除控件重新setField时并不能保证表单组件正确刷新
    form?.resetFields([fieldProps]);
    form?.setFieldValue(fieldProps, list);
  }, [listLength]);

  return (
    <List name={fieldProps} initialValue={list} rules={rules}>
      {(fields = []) => {
        return fields.map((item, index) => (
          <Field key={item.key}>
            <MemoFormList
              index={index}
              item={item}
              indexKey={indexKey}
              itemKey={itemKey}
              __render__={__render__}
              getEngineApis={getEngineApis}
              data={list![index]}
              disabled={disabled}
              uniqueField={uniqueField}
              compId={compId}
              onHandleChange={(v) => {
                if (onChange) {
                  onChange(v);
                }
              }}
              fieldProps={fieldProps}
              visible={visible}
            />
          </Field>
        ));
      }}
    </List>
  );
};

FormItem.defaultProps = {
  list: [],
};

export default FormItem;
