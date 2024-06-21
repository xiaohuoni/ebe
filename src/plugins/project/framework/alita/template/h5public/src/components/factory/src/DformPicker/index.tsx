import { DformPicker } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useEffect, useRef, useState } from 'react';
import { DFormWrapper, Empty, FormItem } from '../BasicComponents';
import { useFormItem, UseFormItemProps } from '../utils/hooks/useFormItem';
import { withTransformProps } from '../utils/withTransformProps';
import './index.less';
import transformProps from './transformProps';

export interface MyDformPickerProps extends UseFormItemProps {
  dataSource: any[];
  filter: string;
  filterOption: any;
  labelKey?: string;
  valueKey?: string;
  title: string;
  onClick?: () => void;
  alias?: any;
  postfix?: any;
  type?: string;
  theme?: string;
  isIconFont?: boolean;
  fontAddress?: any;
  postfixIconPosition?: string;
  iconColor?: string;
  fontSize?: any;
  icon?: any;
  color?: any;
  titleIcon?: any;
  prefixIcon?: any;

  /**
   * 是否按搜索健触发，默认false，表示按下搜索健触发远程过滤回掉，为true时，表示输入就触发远程过滤回掉
   */
  isInputSearch?: boolean;

  ellipsis?: boolean;
}

const MyDformPicker = LingxiForwardRef<any, MyDformPickerProps>(
  (props, ref) => {
    const [data, setData] = useState<any[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const getValueInfo = (v: any) =>
      data?.find((d) => d[props?.alias?.value || 'value'] === v);
    const {
      defaultValue,
      onChange,
      dataSource,
      labelKey,
      valueKey,
      filter,
      filterOption,
      onClick,
      getEngineApis,
      isInputSearch,
      ellipsis,
      ...restProps
    } = props;
    const { getLocale, dataState } = getEngineApis?.() || {};
    const { disabled, val, onInputChange, required, readOnly, visible } =
      useFormItem(ref, props, {
        valueInfo() {
          return getValueInfo(this.value);
        },
        setData,
        setDataWithLabelAndValue: (params: {
          dataSource: any[];
          labelKey?: string;
          valueKey?: string;
        }) => {
          const temDataSoure = params.dataSource?.map((item) => {
            if (params.labelKey && params.valueKey) {
              if (item[params.labelKey]) {
                return {
                  ...item,
                  id: item[params.valueKey],
                  label: item[params.labelKey],
                  value: item[params.valueKey],
                };
              }
            }
            return item;
          });
          setData(temDataSoure);
        },
      });

    let dealProps: any = { ...restProps };
    if (!props?.icon) {
      dealProps = {
        icon: {
          isIconFont: false,
          theme: 'outlined',
          type: 'right',
        },
        isIconFont: false,
        theme: 'outlined',
        type: 'right',
        ...restProps,
      };
    }

    if ((filter === 'local' || filter === 'remote') && !data?.length) {
      dealProps.pickerProps = {
        ...(dealProps.pickerProps || {}),
        // 使用 loading 属性，实现显示空数据
        loading: true,
        loadingContent: <Empty getLocale={getLocale} dataState={dataState} />,
      };
    }

    const searchOnChange = (e: any) => {
      const inputValue = e.target.value;
      if (filter === 'remote') {
        try {
          // 根据搜索内容（包含空）进行远程搜索
          if (filterOption) {
            filterOption(inputValue);
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log('err', err);
        }
      } else {
        // 清空搜索内容时，恢复原有全部数据
        if (!inputValue?.length) {
          setData([...(dataSource || [])]);
          return;
        }

        let searchData = [];
        searchData = data?.filter((item) => {
          return (
            item.label?.toLowerCase().indexOf(inputValue?.toLowerCase()) >= 0
          );
        });

        setData(searchData);
      }
    };

    const setSearchView = (cType: string) => {
      if (filter === 'local' || filter === 'remote') {
        return (
          <input
            style={{
              width: 'auto',
              height: '32px',
              borderRadius: '16px',
              fontSize: '13px',
              backgroundColor: '#f5f5f9',
              padding: '0px 15px',
            }}
            type="search"
            placeholder={getLocale(
              'DformPicker.searchPlaceholder',
              '请输入要搜索的选项',
            )}
            onChange={(e) => {
              if (isInputSearch === true) {
                searchOnChange(e); // 输入搜索事件
              }
            }}
            ref={inputRef}
            autoComplete="off"
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e?.keyCode === 13) {
                // 点击搜索健进行搜索
                searchOnChange(e);
                const inputDOM: HTMLInputElement = inputRef.current!;
                if (inputDOM) {
                  inputDOM.blur();
                }
                // 回车搜索事件
              }
            }}
          />
        );
      }
      return null;
    };
    const handDataSoure = () => {
      const temDataSoure = dataSource?.map((item) => {
        if (labelKey && valueKey) {
          // 如果远程过滤和自定义数据都配置，同时还未启动远程过滤，走自定义数据
          if (item[labelKey]) {
            return {
              ...item,
              id: item[valueKey],
              label: item[labelKey],
              value: item[valueKey],
            };
          }
        }
        return item;
      });
      setData(temDataSoure);
    };
    useEffect(() => {
      if (Array.isArray(dataSource)) {
        handDataSoure();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(dataSource)]);

    return (
      <FormItem>
        <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
          <DformPicker
            {...dealProps}
            customTitle={setSearchView(filter)}
            defaultValue={val}
            ellipsis={ellipsis}
            data={data || []}
            required={required}
            disabled={disabled}
            onClick={() => {
              if (onClick) {
                onClick();
              } else {
                // handDataSoure();
              }
            }}
            insistOpenModal={filter === 'local' || filter === 'remote'}
            onChange={(v: any) => {
              onInputChange(v);
            }}
            cancelText={getLocale?.('cancelText', '取消')}
            confirmText={getLocale?.('confirm', '确定')}
            readonly={readOnly}
            getLocale={(
              t: string,
              tempValue: Record<string, any> | undefined,
            ) => {
              return getLocale(`DformPicker.${t}`, '', tempValue);
            }}
          />
        </DFormWrapper>
      </FormItem>
    );
  },
);

MyDformPicker.displayName = 'dformPicker';

export default withTransformProps(MyDformPicker, transformProps);
