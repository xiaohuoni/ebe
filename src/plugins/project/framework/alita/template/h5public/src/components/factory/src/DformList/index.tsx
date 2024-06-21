import { EngineBaseProps, LingxiForwardRef } from '@lingxiteam/types';
import React from 'react';
import { useFormItem } from '../utils/hooks/useFormItem';
import FormItem from './FormItem';
import Group from './Group';
import List from './List';
import Title from './Title';

export interface DformListProps extends Omit<EngineBaseProps, 'list'> {
  defaultValue?: unknown[];
  title: string;
  style: React.CSSProperties;
  fieldProps: string;
  formListType: 'list' | 'form';
  onClick: () => void;
  required: boolean;
  compId: string;
  onChange: (e: any[]) => void;
  itemKey: string;
  indexKey: string;
  uniqueField: string;
  visible: boolean;
  readOnly: boolean;
  disabled: boolean;
}

const DformList = LingxiForwardRef<any, DformListProps>((props, ref) => {
  const {
    title,
    style,
    defaultValue,
    fieldProps,
    formListType = 'list',
    onClick,
    required = false,
    getEngineApis,
    itemKey,
    indexKey,
    uniqueField,
    __render__,
  } = props;

  const { onlySyncValue, getLocale } = getEngineApis?.() || {};

  const {
    error,
    visible = true,
    disabled,
    getRules,
  } = useFormItem(ref, props, {
    clearValue() {
      if (onlySyncValue) {
        onlySyncValue([]);
      }
    },
  });

  return (
    <Group
      style={style}
      hidden={!visible}
      fieldProps={fieldProps}
      error={error}
      aria-label={fieldProps}
      aria-disabled={disabled}
    >
      <Title
        required={required}
        title={title}
        disabled={disabled}
        onAdd={onClick}
        getLocale={getLocale}
      />
      {formListType === 'list' ? (
        <List
          list={defaultValue}
          getEngineApis={getEngineApis}
          __render__={__render__}
          itemKey={itemKey}
          indexKey={indexKey}
          uniqueField={uniqueField}
          compId={props.$$componentItem.uid}
        />
      ) : (
        <FormItem
          fieldProps={fieldProps}
          list={defaultValue}
          getEngineApis={getEngineApis}
          __render__={__render__}
          itemKey={itemKey}
          indexKey={indexKey}
          uniqueField={uniqueField}
          // @ts-ignore
          onChange={props.onChange}
          // @ts-ignore
          disabled={disabled}
          rules={getRules()}
          compId={props.$$componentItem.uid}
          visible={visible}
        />
      )}
    </Group>
  );
});

export default DformList;
