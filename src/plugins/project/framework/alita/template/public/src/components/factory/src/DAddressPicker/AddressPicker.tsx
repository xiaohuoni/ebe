import {
  AddressPicker,
  CASCADER_LOADING,
  IAddressPickerProps,
} from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DFormWrapper } from '../BasicComponents';
import { useFormItem } from '../utils/hooks/useFormItem';
import { findAreaByCode, findAreaPage, setPickerValue } from './utils';

export interface AddressPickerProps
  extends Omit<IAddressPickerProps, 'defaultValue' | 'onChangeLevel'> {
  title: string;
  shouldDefaultData: boolean;
  error?: any;
  dataSource?: any[];
  value?: any[];
  level?: number;
  defaultValue: string[];
  alias?: { label: string; value: string };
  postfix?: any;
  type?: string;
  theme?: string;
  isIconFont?: boolean;
  fontAddress?: any;
  postfixIconPosition?: string;
  formItem: ReturnType<typeof useFormItem>;
  onChangeLevel?: (values: any) => void;
  imperativeHandleRef: React.ForwardedRef<any>;
}

const LEVEL_FIRST_CODE = 'parentCode';

const MyDAddressPicker = LingxiForwardRef<any, AddressPickerProps>(
  (props, ref) => {
    const {
      defaultValue,
      onChange = () => {},
      shouldDefaultData,
      level,
      dataSource,
      alias,
      placeholderList,
      getEngineApis,
      $$componentItem,
      formItem,
      imperativeHandleRef,
      title,
      leftContent,
      rightContent,
      ...restProps
    } = props;
    const { service, getLocale } = getEngineApis?.() || {};
    const [value, setValue] = useState();

    useImperativeHandle(imperativeHandleRef, () => ({
      clearValue: () => {
        if (onChange) {
          onChange([]);
        }
      },
    }));

    const { visible, getRules, disabled, required, readOnly, onInputChange } =
      formItem;
    // 是否正在加载该级数据
    const isLoading = useRef('');
    // 每一级节点的子数据
    const [valueToOptions, setValueToOptions] = useState({});
    const data = useMemo(() => {
      const generate = (v: string, levelIndex: number) => {
        // @ts-ignore
        const options = valueToOptions[v];
        if (level !== undefined && levelIndex > level - 1) {
          return undefined;
        }
        if (
          (Array.isArray(options) && options?.length === 0) ||
          options === null
        ) {
          return undefined;
        }
        if (options === undefined) {
          // 加载的是当前层，才出现loading
          // 初始值回填时，查当前初始值末级数据，若不限制将导致末级的下一级也出现待加载
          return isLoading.current === v ? CASCADER_LOADING : undefined;
        }
        return options.map((option: any) => ({
          ...option,
          label: option[alias?.label || 'label'],
          value: option[alias?.value || 'value'],
          children: generate(option[alias?.value || 'value'], levelIndex + 1),
        }));
      };
      return generate(LEVEL_FIRST_CODE, 0) ?? [];
    }, [valueToOptions, alias, level]);

    const latestValueOptionRef = useRef<Record<string, any>>({});
    const setLoading = (v: string, loading: boolean, res?: any[]) => {
      isLoading.current = loading ? v : '';
      setValueToOptions((pre) => ({
        ...pre,
        [v]: loading ? undefined : res,
      }));
    };

    useEffect(() => {
      latestValueOptionRef.current = valueToOptions;
    }, [valueToOptions]);

    // 从选项值中转换层级对象
    const generateValueToOptionsFromDataSource = (
      source: any,
      prev: string,
      dataMap = {},
    ) => {
      const preLevenCode = prev;
      const map: any = dataMap;
      source.forEach((item: any) => {
        if (!map[preLevenCode]) {
          map[preLevenCode] = [];
        }
        const newItem = {
          ...item,
          label: item[alias?.label || 'label'],
          value: item[alias?.value || 'value'],
        };
        map[preLevenCode].push(newItem);
        if (newItem.children && newItem.children?.length) {
          generateValueToOptionsFromDataSource(
            newItem.children,
            newItem.value,
            map,
          );
        }
      });
      return map;
    };

    useEffect(() => {
      if (dataSource?.length) {
        // 从选项值获取层级对象
        const map = generateValueToOptionsFromDataSource(
          dataSource,
          LEVEL_FIRST_CODE,
        );
        setValueToOptions(map);
      }
    }, [dataSource, alias]);

    // 值初始化时设置层级数据
    const generateValueToOptionsFromLevel = (
      originData: any[],
      prev: string,
    ) => {
      let prevLevelCode = prev;
      const map: any = {};
      (originData || []).forEach((item: any) => {
        if (!map[prevLevelCode]) {
          map[prevLevelCode] = [];
        }
        map[prevLevelCode].push(item);
        prevLevelCode = item[alias?.value || 'value'];
      });
      setValueToOptions(map);
    };

    const initPickerValue = (val: string[], changeFunc = setValue) => {
      // 赋值/值更新时判断该值对应的层级是否已经加载，是的话不再进行设置
      const checkIfReq = (v: string[]) => {
        let preValueOpt: any = [];
        return (v || []).every((item: string, index: number) => {
          if (index !== v?.length - 1) {
            preValueOpt = (latestValueOptionRef.current || {})[item];
            return !!preValueOpt;
          }
          return !!preValueOpt?.find((c: any) => c.value === item);
        });
      };
      if (val) {
        const defaultVal = val;
        if (Array.isArray(defaultVal)) {
          if (!checkIfReq(defaultVal)) {
            setPickerValue(
              shouldDefaultData,
              defaultVal,
              (valMap: any, curLevelData: any[]) => {
                changeFunc(valMap);
                // 根据值请求
                if (curLevelData) {
                  generateValueToOptionsFromLevel(
                    curLevelData,
                    LEVEL_FIRST_CODE,
                  );
                }
              },
              dataSource || [],
              alias,
              service?.commonFetch,
            );
          } else {
            // 已经存在层级数据，从层级中拼接label
            let preLevelCode = LEVEL_FIRST_CODE;
            const labelList = defaultVal.reduce((p: string[], n: string) => {
              const opt = (latestValueOptionRef.current || {})[preLevelCode];
              const target = (opt || []).find(
                (c: any) => c[alias?.value || 'value'] === n,
              )?.[alias?.label || 'label'];
              preLevelCode = n;
              return p.concat(target);
            }, []);
            changeFunc({
              // @ts-ignore
              label: labelList,
              value: defaultVal,
            });
          }
        }
      } else {
        setValue({
          // @ts-ignore
          label: [],
          value: [],
        });
      }
    };

    // 初始化默认值/赋值操作时,初始化时应只触发一次
    useEffect(() => {
      initPickerValue(defaultValue);
    }, [dataSource, defaultValue, shouldDefaultData, alias]);

    const requestProvinces = async (isSetLoading = true) => {
      let areaList = [];
      try {
        // 加载中效果
        if (isSetLoading) {
          setLoading(LEVEL_FIRST_CODE, true);
        }
        areaList = await findAreaPage(alias, service.commonFetch);
        setLoading(LEVEL_FIRST_CODE, false, areaList);
      } catch (error) {
        setLoading(LEVEL_FIRST_CODE, false, []);
        console.error(error);
      }
      return areaList;
    };

    const requestArea = async (values: any[] = [], isSetLoading = true) => {
      let areaList: any = [];
      const parCode = values[values.length - 1];
      try {
        if (parCode) {
          if (isSetLoading) {
            setLoading(parCode, true);
          }
          areaList = await findAreaByCode(
            {
              parentDivisonCode: parCode,
            },
            alias,
            service.commonFetch,
          );
          setLoading(parCode, false, areaList);
        }
      } catch (error) {
        setLoading(parCode, false, []);
        console.error(error);
      }
      return areaList;
    };

    const setServiceData = async (values: any[], isSetLoading = true) => {
      const { length } = values || [];
      if (length === 0) {
        // eslint-disable-next-line no-return-await
        return await requestProvinces(isSetLoading);
      }
      // eslint-disable-next-line no-return-await
      return await requestArea(values, isSetLoading);
    };

    const onChangeLevel = async (values: any[], isSetLoading = true) => {
      // 默认选项值切换下一级时
      const parCode = values?.length ? values[values.length - 1] : undefined;
      // 设置了总层级数时，加载到对应层级后不再请求接口获取
      if (level !== undefined && values?.length >= level) {
        setLoading(parCode, false, []);
        return [];
      }
      // 切换层级时触发，参数为当前层级
      if (typeof props.onChangeLevel === 'function') {
        props.onChangeLevel(values);
      }
      // 需要调用默认服务进行设置
      if (shouldDefaultData) {
        // eslint-disable-next-line no-return-await
        return await setServiceData(values, isSetLoading);
      }
      if ((values || []).length > 0) {
        // @ts-ignore
        if (valueToOptions[parCode] === undefined) {
          // 下一级没有元素时，设置为空数组
          setValueToOptions((pre) => ({ ...pre, [parCode]: [] }));
        }
      }
      // @ts-ignore
      return valueToOptions[parCode] || [];
    };
    // 内部定义属性不全，导致value参数报错。这里类型强转下
    const IAddressPicker: any = AddressPicker;

    // 切换tab面板时上级选中项值和当前tab选中项值
    // @ts-ignore
    const handleOnTabsChange = (
      parLevelValues: any,
      curLevelValues: string[],
    ) => {
      // 设置了总层级数时，加载到对应层级后不再请求接口获取
      if (level !== undefined && curLevelValues?.length >= level) {
        return;
      }
      // 切换层级的时候，重新查询数据
      if (isLoading?.current === '') {
        // eslint-disable-next-line consistent-return
        return onChangeLevel(parLevelValues, false);
      }
    };

    const finalPlaceholderList = useMemo(() => {
      if (Array.isArray(placeholderList)) {
        return placeholderList;
      }
      if (typeof placeholderList === 'string') {
        return (placeholderList as string).split(',');
      }
      return [];
    }, [placeholderList]);

    return (
      <DFormWrapper visible={visible} getEngineApis={props.getEngineApis}>
        <IAddressPicker
          {...restProps}
          alias={alias}
          rules={getRules()}
          placeholderList={finalPlaceholderList}
          defaultValue={value}
          disabled={disabled}
          required={required}
          data={data}
          level={level}
          title={title}
          valueToOptions={valueToOptions}
          rightContent={
            leftContent || getLocale?.('DAddressPicker.confirm', '确定')
          }
          leftContent={
            rightContent || getLocale?.('DAddressPicker.cancelText', '取消')
          }
          onChangeLevel={onChangeLevel}
          onTabsChange={handleOnTabsChange}
          onChange={(add: { value: any }) => {
            onInputChange(add?.value, true, add?.value);
          }}
          readonly={readOnly}
          getLocale={(
            t: string,
            tempValue: Record<string, any> | undefined,
          ) => {
            return getLocale?.(`DAddressPicker.${t}`, '', tempValue);
          }}
        />
      </DFormWrapper>
    );
  },
);

MyDAddressPicker.displayName = 'addressPicker';

export default MyDAddressPicker;
