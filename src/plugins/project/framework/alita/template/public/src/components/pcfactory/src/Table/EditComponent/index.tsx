import { DatePicker, Input, InputNumber, Select, Radio, Switch, Form } from 'antd';
import moment, { Moment } from 'moment';
import React, { useCallback, useMemo, useState } from 'react';
import ComSelect from '../../SuperSelect/ComSelect';
import ModalSelect from '../../ModalSelect';
import { initMomentLocale, getRegExp } from '../../utils/common';
import { ExpressionRenderingParams } from '../../utils/PropsType';
import { cloneDeep } from 'lodash';
import { useLocale } from '../../utils/hooks/useLocale';
import { EDIT_COMPONENT_STOP_PROPAGATION_CLS } from '../constant';

export interface MyEditComponent {
  inlineVChange: (date: any, _label: any) => void;
  c?: any;
  disabled: boolean;
  currentRowKey: any;
  rowId?: string | number;
  rowData?: any;
  form: any;
  compId: any;
  sandBoxSafeRun?: any;
  engineApis?: any;
  editoption: {
    [key: string]: any;
    limitRange?: LimitRangeType;
    startTime?: string;
    endTime?: string;
    timeMode: 'time' | 'date' | 'month' | 'year';
    customExpression: ExpressionRenderingParams;
    customExpressionErrorMsg: ExpressionRenderingParams;
  };
  modalSelectParams?: any;
  appId?: any;
}

type LimitRangeType = '' | 'no' | 'afterToday' | 'beforeToday' | 'period' | 'custom';
const supportEditComponents = ['Select', 'Radio', 'TimePicker', 'DatePicker', 'Switch', 'InputNumber', 'TextArea', 'Input', 'SuperSelect', 'ModalSelect'];

const EditComponent: React.FC<MyEditComponent> = (props) => {
  const {
    disabled,
    inlineVChange,
    c,
    currentRowKey,
    rowId, // 编辑空白行数据时，rowData为空，需要使用临时行id
    rowData,
    compId,
    editoption,
    modalSelectParams,
    appId,
    sandBoxSafeRun,
    engineApis,
  } = props;
  const { dataIndex } = c;
  const {
    edittype,
    format,
    selectoption = {},
    __staticService__ = {},
    __mode__ = '',
    timeMode,
    rules = [],
    limitRange, // 可选时间限制
    startTime,
    endTime,
    customExpression,
    customExpressionErrorMsg,
  } = editoption;

  const [tempInputValue, updateTempInputValue] = useState<string | undefined>();

  const { getLocale } = useLocale(engineApis || {});

  const limitRangeTime: {
    startTime: Moment;
    endTime: Moment;
  } = useMemo(() => {
    const res: { startTime: Moment; endTime: Moment; } = {
      startTime: moment(),
      endTime: moment(),
    };
    switch (timeMode) {
      case 'time':
        res.startTime = moment(startTime);
        res.endTime = moment(endTime);
        break;
      case 'date':
        if (startTime) {
          res.startTime = moment(new Date(startTime).setHours(0, 0, 0, 0));
        }
        if (endTime) {
          res.endTime = moment(new Date(endTime).setHours(23, 59, 59, 999));
        }
        break;
      default:
        break;
    }

    return res;
  }, [startTime, endTime, format, timeMode]);

  const initValue = rowData[dataIndex];

  const initialValue = useMemo(() => {
    switch (edittype) {
      case 'Select':
      case 'Radio':
      case 'InputNumber':
      case 'TextArea':
      case 'Input':
      case 'SuperSelect':
      case 'ModalSelect':
        return initValue;
      case 'TimePicker': {
        const value = initValue ? moment(initValue, format || 'YYYY-MM-DD HH:mm:ss') : null;
        return value;
      }
      case 'DatePicker': {
        const value = initValue ? moment(initValue, format || 'YYYY-MM-DD') : null;
        return value;
      }
      case 'Switch': {
        const checked =
          typeof initValue === 'string' && ['null', 'undefined', 'false', '0'].includes(initValue)
            ? false
            : !!initValue;
        return checked;
      }
      default:
        return initValue || '';
    }
  }, [format, edittype, initValue]);

  const initialValueType = typeof initialValue;

  const validateDateCustomExpress = useMemo<any>(() => {
    if (customExpression && customExpression.code && sandBoxSafeRun) {
      const res = sandBoxSafeRun(customExpression.code);
      const errorMsg = customExpressionErrorMsg.code ? String(sandBoxSafeRun(customExpressionErrorMsg.code)) : customExpressionErrorMsg.value;
      const transform = (source: any) => {
        const _tmp = cloneDeep(source);
        if (typeof _tmp === 'object' && _tmp.format) {
          return _tmp.format(format);
        }
        return source;
      };
      if (res instanceof RegExp) {
        return {
          pattern: res,
          message: errorMsg,
          transform,
        };
      } if (typeof res === 'string') {
        return {
          pattern: getRegExp(res),
          message: errorMsg,
          transform,
        };
      }
    }
    return null;
  }, [customExpression, customExpressionErrorMsg]);

  const validateRules = useMemo(() => {
    let res: any[] = [];
    if (rules?.length > 0) {
      res = rules.map((rule: any, idx: number) => {
        if (!Array.isArray(rule) && typeof rule !== 'function' && typeof rule === 'object') {
          const { pattern } = rule || {};
          if (pattern && typeof pattern === 'string') {
            rule.pattern = getRegExp(pattern);
          }
          return rule;
        }

        return rule;
      });
    }
    // 添加日期相关校验规则
    if (validateDateCustomExpress) {
      res.push(validateDateCustomExpress);
    }
    // 移除规则中干扰字段
    const getRules = (res: any[]) => {
      return cloneDeep(res).map(item => {
        delete item.type;
        delete item.id;
        delete item.title;
        delete item.regexpType;
        delete item.ruleType;
        return item;
      });
    };
    res = getRules(res);
    // 添加数组类型校验
    if (rules?.[0]?.type && rules?.[0]?.type !== initialValueType) {
      res.push({
        type: rules?.[0]?.type,
        message: getLocale?.('Table.dateTypeWarning'),
      });
    }
    return res?.length > 0 ? res : null;
  }, [initialValueType, rules, validateDateCustomExpress]);

  const getDisabledDate = useCallback((current: Moment) => {
    // custom 自定义规则通过form表单进行校验
    if (!limitRange || limitRange === 'no' || limitRange === 'custom') {
      return false;
    }
    switch (limitRange) {
      case 'beforeToday':
        return current > moment(new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1);
      case 'afterToday':
        return current < moment(new Date().setHours(0, 0, 0, 0));
      case 'period':
        if (!startTime && !endTime) {
          return false;
        }
        if (startTime && endTime && limitRangeTime.startTime <= limitRangeTime.endTime) {
          if (current >= limitRangeTime.startTime && current <= limitRangeTime.endTime) {
            return false;
          }
          return true;
        }
        if (startTime && current > limitRangeTime.startTime) {
          return false;
        }
        if (endTime && current < limitRangeTime.endTime) {
          return false;
        }
        break;
      default:
        return true;
    }
    return undefined;
  }, [limitRange, format, limitRangeTime]);

  initMomentLocale();

  const renderComponent = (isFormItem = false) => {
    const commonProps: any = isFormItem ? {} : { value: tempInputValue ?? initialValue, className: EDIT_COMPONENT_STOP_PROPAGATION_CLS };
    switch (edittype) {
      case 'Select':
        // eslint-disable-next-line no-case-declarations
        let sltoptions = selectoption.options || [];
        if (Array.isArray(selectoption.valName)) {
          sltoptions = selectoption.valName;
        } else if (selectoption.staticService && selectoption.colServiceData) {
          // 如果是已选服务
          sltoptions = selectoption.colServiceData;
        }
        return (
          // <WrapperSelect>
          <Select
            // style={{ minWidth: '100px' }}
            {...commonProps}
            disabled={disabled}
            onChange={(v: any) => {
              inlineVChange(v, {});
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {sltoptions.map((opt: any) => (
              <Select.Option key={opt.value} value={opt.value}>
                {opt.label}
              </Select.Option>
            ))}
          </Select>
          // </WrapperSelect>
        );
      case 'Radio':
        // eslint-disable-next-line no-case-declarations
        let radioSltoptions = selectoption.options || [];
        if (Array.isArray(selectoption.valName)) {
          radioSltoptions = selectoption.valName;
        } else if (selectoption.staticService && selectoption.colServiceData) {
          // 如果是已选服务
          radioSltoptions = selectoption.colServiceData;
        }
        return (
          <Radio.Group
            {...commonProps}
            disabled={disabled}
            onChange={(v: any) => {
              inlineVChange(v.target.value, {});
            }}
            onClick={(e: any) => {
              e.stopPropagation();
            }}
          >
            {radioSltoptions.map((opt: any) => (
              <Radio key={opt.value} value={opt.value}>
                {opt.label}
              </Radio>
            ))}
          </Radio.Group>
        );
      case 'TimePicker': {
        return (
          // <WrapperDatePicker>
          <DatePicker
            {...commonProps}
            disabled={disabled}
            showTime
            format={format || 'YYYY-MM-DD HH:mm:ss'}
            disabledDate={getDisabledDate}
            onChange={(date, dateString) => {
              inlineVChange(date ? moment(date).format(format || 'YYYY-MM-DD HH:mm:ss') : date, {});
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          // </WrapperDatePicker>
        );
      }
      case 'DatePicker': {
        return (
          // <WrapperDatePicker>
          <DatePicker
            {...commonProps}
            disabled={disabled}
            format={format || 'YYYY-MM-DD'}
            disabledDate={getDisabledDate}
            picker={__mode__ || timeMode}
            onChange={(date, dateString) => {
              inlineVChange(date ? moment(date).format(format || 'YYYY-MM-DD') : date, {});
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          // </WrapperDatePicker>
        );
      }
      case 'Switch': {
        return <Switch
          disabled={disabled}
          checked={initialValue}
          onChange={(v) => {
            inlineVChange(v, {});
          }}
        />;
      }
      case 'InputNumber':
        return (
          <InputNumber
            {...commonProps}
            disabled={disabled}
            onBlur={(e) => {
              // 行主键字段编辑时tr被卸载，光标会被重置
              inlineVChange(e.target.value, {});
            }}
            onStep={(v: number, { type }) => {
              inlineVChange(type === 'up' ? v + 1 : v - 1, {});
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        );
      case 'TextArea':
        return (
          // <WrapperTextArea>
          <Input.TextArea
            {...commonProps}
            disabled={disabled}
            rows={4}
            onBlur={(e) => {
              // 行主键字段编辑时tr被卸载，光标会被重置
              inlineVChange(e.target.value, {});
              updateTempInputValue(undefined);
            }}
            onChange={(e) => {
              updateTempInputValue(e.target.value);
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          // </WrapperTextArea>
        );
      case 'Input':
        return (
          // <WrapperInput>
          <Input
            {...commonProps}
            disabled={disabled}
            onBlur={(e) => {
              // 行主键字段编辑时tr被卸载，光标会被重置
              inlineVChange(e.target.value, {});
              updateTempInputValue(undefined);
            }}
            onChange={(e) => {
              updateTempInputValue(e.target.value);
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          // </WrapperInput>
        );
      case 'SuperSelect':
        return (
          <ComSelect
            {...c}
            disabled={disabled}
            selcetMode="select"
            showMode="pop"
            mode={__mode__}
            staticService={__staticService__}
            style={{ width: 'auto' }}
            selectWidth="auto"
            ignoreValueType
            labelInValue
            showLabel={rowData[`${c.dataIndex}_introduce`]}
            label={c.title}
            value={initialValue}
            engineApis={engineApis}
            getEngineApis={() => { }}
            onChange={(e: any, _label: any) => {
              inlineVChange(e, {
                [`${c.dataIndex}_introduce`]: _label,
              });
            }}
            onClick={(e: any) => {
              e.stopPropagation();
            }}
          />
        );
      case 'ModalSelect':
        return (
          <ModalSelect
            {...c}
            {...commonProps}
            visible
            appId={appId}
            disabled={disabled}
            fieldName={c.key}
            postfixIcon={c?.editoption?.postfixIcon || {}}
            clearIcon={c?.editoption?.clearIcon}
            modalInfo={{
              ...(c?.editoption?.modalInfo || {}),
              responseObj: modalSelectParams,
            }}
            mode={c?.editoption?.mode}
            postfix={c?.editoption?.postfix}
            allowClear
            postfixStyle={c?.editoption?.postfixStyle}
            size="sm"
            engineApis={engineApis}
            getEngineApis={() => { }}
            onChange={(val: any, options: any) => {
              const labels = (options || [])?.map((v: any) => v.label);
              inlineVChange(val, {
                [`${c.dataIndex}_introduce`]: labels,
              });
            }}
          />
        );
      default:
        return initialValue;
    }
  };

  if (supportEditComponents.includes(edittype) && validateRules) {
    const fieldName = `${compId}_${currentRowKey}_${rowData[currentRowKey] || rowId}_${dataIndex}`;
    return (
      <Form.Item
        style={{ height: 'auto' }}
        // TODO: ComSelect 控件 value 是手动设置的 可能会导致控制台错误告警
        // TODO: 设置的 filedName 目前实际没作用，只是为了防止formitem错误告警
        name={fieldName}
        initialValue={initialValue}
        rules={validateRules}
      >
        {renderComponent(true)}
      </Form.Item>
    );
  }

  return renderComponent();
};

export default EditComponent;
