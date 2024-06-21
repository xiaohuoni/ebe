import { DformSelect } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useEffect, useState } from 'react';
import { DFormWrapper, FormItem } from '../BasicComponents';
import { reloadSelectDataType } from '../interfaces/types';
import useDefaultValue from '../utils/hooks/useDefaultValue';
import { useFormItem, UseFormItemProps } from '../utils/hooks/useFormItem';
import { withTransformProps } from '../utils/withTransformProps';
import transformProps from './transformProps';

export interface MyDformSelectProps extends UseFormItemProps {
  postfix?: any;
  type?: string;
  theme?: string;
  isIconFont?: boolean;
  fontAddress?: any;
  postfixIconPosition?: string;
  iconColor?: string;
  color?: string;
  onChange?: any;
  titleIcon?: any;
  prefixIcon?: any;
  title: string;
  fontSize?: any;
  icon?: any;
  data?: any;
  ellipsis?: boolean;
}

const MyDformSelect = LingxiForwardRef<any, MyDformSelectProps>(
  (props, ref) => {
    const { getEngineApis, defaultValue, title, ellipsis, ...restProps } =
      props;

    const findObjectsByValue = (data: any[], values: string[]) => {
      const result: any[] = [];
      const traverse = (
        node: { [x: string]: any; value?: any; children: any },
        remainingValues: string | any[],
      ) => {
        const currentValue = remainingValues[0];
        const nextValues = remainingValues.slice(1);
        if (node.value === currentValue) {
          const { children, ...res } = node;
          result.push(res);
          if (children) {
            children?.forEach(
              (child: { [x: string]: any; value?: any; children: any }) => {
                traverse(child, nextValues);
              },
            );
          }
        }
      };
      if (values?.length > 0) {
        data?.forEach((node) => {
          if (result.length === values.length) return;
          traverse(node, JSON.parse(JSON.stringify(values)));
        });
      }
      return result;
    };

    const {
      disabled,
      val,
      getRules,
      onInputChange,
      required,
      readOnly,
      visible,
    } = useFormItem(
      ref,
      {
        ...props,
        defaultValue: useDefaultValue(defaultValue),
      },
      {
        setDataWithLabelAndValue: (params: reloadSelectDataType) => {
          setData(
            initData(
              params.dataSource,
              params.labelKey,
              params.valueKey,
              params.childrenKey,
            ),
          );
        },
        valueInfo() {
          return findObjectsByValue(data, this.value);
        },
      },
    );
    const { getLocale } = getEngineApis?.() || {};
    const [data, setData] = useState<any[]>([]);

    // 初始化数据源
    const initData = (
      arr: any[],
      labelKey1 = 'label',
      valueKey1 = 'value',
      childrenKey1 = 'children',
    ) => {
      // 存在labelKey1 || valueKey1 || childrenKey1 为空字符串情况
      const labelKey = labelKey1 || 'label';
      const valueKey = valueKey1 || 'value';
      const childrenKey = childrenKey1 || 'children';
      const mArr: any[] = [];
      arr.forEach((row: any) => {
        if (Array.isArray(row)) {
          row.forEach((val) => {
            val.label = val[labelKey];
            val.value = val[valueKey];
          });
          mArr.push(row);
        } else if (row instanceof Object) {
          const children = row[childrenKey];
          const pushItem = { ...row };
          if (row[labelKey] || row.title) {
            pushItem.label = row[labelKey] || row.title;
            pushItem.value = row[valueKey];
          }
          if (children && children.length) {
            pushItem.children = initData(
              children,
              labelKey,
              valueKey,
              childrenKey,
            );
          }
          mArr.push(pushItem);
        }
      });
      return mArr;
    };

    useEffect(() => {
      setData(initData(props.data));
    }, [JSON.stringify(props.data)]);

    return (
      <FormItem>
        <DFormWrapper visible={visible} getEngineApis={props.getEngineApis}>
          <DformSelect
            {...restProps}
            ellipsis={ellipsis}
            defaultValue={val}
            rules={getRules()}
            data={data || []}
            required={required}
            title={title}
            disabled={disabled}
            onChange={(v: any) => onInputChange(v, true)}
            readonly={readOnly}
            getLocale={(
              t: string,
              tempValue: Record<string, any> | undefined,
            ) => {
              return getLocale(`DformSelect.${t}`, '', tempValue);
            }}
          />
        </DFormWrapper>
      </FormItem>
    );
  },
);

MyDformSelect.displayName = 'dformSelect';

export default withTransformProps(MyDformSelect, transformProps);
