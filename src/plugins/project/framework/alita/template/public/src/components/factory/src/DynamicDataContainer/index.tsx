import Form, { type FormInstance } from '@lingxiteam/dform';
import { DynamicDataType, LingxiForwardRef } from '@lingxiteam/types';
import { SpinLoading } from 'antd-mobile-5';
import {
  CSSProperties,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  DynamicDataContext,
  DynamicDataProvider,
} from '../utils/dynamicUtils/DynamicContext';
import './index.less';
import { useDynamicDataContainer } from './useDynamicDataContainer';

type RuleParameter = {
  paramId: string;
  valueCode?: string;
  originValueCode?: string;
  paramCode?: string;
};
export interface DynamicDataContainerProps {
  className: string;
  style: CSSProperties;
  engineRule?: Array<Array<RuleParameter>>;
  name: string;
  onValuesChange?: (
    formCode: string,
    changedFieldName: string,
    changedFieldValue: any,
    allValues: Record<string, Record<string, any>>,
  ) => void;
  dynamicCode: string;
  visible?: boolean;
  scene?: 'edit' | 'readonly';
}

const DynamicDataContainer = LingxiForwardRef<any, DynamicDataContainerProps>(
  (props, ref) => {
    const {
      className,
      getEngineApis,
      style = {},
      engineRule,
      $$componentItem,
      name,
      onValuesChange,
      dynamicCode,
    } = props || {};
    const engineApis = getEngineApis?.() || {};
    const [loading, setLoading] = useState<boolean>(false);
    const { service, dynamicDataUtils, renderDynamicPage } = engineApis;
    const { dynamicData2DSL, diffChange } = dynamicDataUtils || {};
    const dynamicHelperRef = useRef<ReturnType<typeof dynamicData2DSL>>();
    const [pageData, setPageData] = useState<any>();
    const formsRef = useRef<
      Record<
        string,
        {
          form: FormInstance<any>;
          validateFormAndScroll?: () => Promise<any>;
          getFieldsValue?: FormInstance['getFieldsValue'];
          setFieldsValue?: (values: any, refs: Record<string, any>) => void;
          resetFields?: FormInstance['resetFields'];
          setDisabled?: (v: boolean) => void;
          setReadOnly?: (v: boolean) => void;
        }
      >
    >({});

    const { dynamicPageRef, staticAttrKeys } = useDynamicDataContainer({
      dynamicHelper: dynamicHelperRef.current,
    });

    const getDynamicData = async (
      rules: DynamicDataContainerProps['engineRule'],
    ) => {
      try {
        setLoading(true);
        if (rules && rules?.length) {
          const res = await service.batchMatchDynamicData({
            terminalType: 'h5',
            findDataDetail: true,
            paramGroupList: rules,
          });
          if (res) {
            if (res && typeof dynamicData2DSL === 'function') {
              const dataHelper = dynamicData2DSL(res as DynamicDataType[], {
                uid: $$componentItem.uid,
                name,
              });
              setPageData(dataHelper.pageDSL);
              dynamicHelperRef.current = dataHelper;
            }
          }
        }
      } finally {
        setLoading(false);
      }
    };

    const getDynamicFormValue = async () => {
      const allValues: Record<string, any> = {};
      if (formsRef.current) {
        const promise = Object.keys(formsRef.current).map((formCode) => {
          const form = formsRef.current[formCode] || {};
          return form?.getFieldsValue?.().then((res: any) => {
            allValues[formCode] = res;
          });
        });
        await Promise.all(promise);
      }
      return allValues;
    };

    useEffect(() => {
      if (formsRef.current) {
        Object.keys(formsRef.current).forEach((key) => {
          const form = formsRef.current[key];
          if (form?.setReadOnly) {
            form.setReadOnly(props.scene === 'readonly');
          }
        });
      }
    }, [props.scene]);

    const resetFields = async () => {
      const beforeData = await getDynamicFormValue();
      if (formsRef.current) {
        for (
          let index = 0;
          index < Object.keys(formsRef.current).length;
          index += 1
        ) {
          const formCode = Object.keys(formsRef.current)[index];
          const form = formsRef.current[formCode] || {};
          const values = await form?.getFieldsValue?.();
          const obj: any = {};
          Object.keys(values).forEach((key) => {
            obj[key] = undefined;
          });
          form?.setFieldsValue?.(
            obj,
            dynamicPageRef?.current?.sandboxContext?.refs,
          );
        }
      }
      const updateData = await getDynamicFormValue();
      const { event } = dynamicHelperRef.current || {};
      diffChange(beforeData, updateData, (diff) => {
        // 执行事件处理变更联动
        event?.eval(diff.formCode, diff.changeFieldName);
      });
    };

    const setFieldsValue = async (
      assignData: Record<string, unknown>,
      format: boolean = true,
    ) => {
      let formalFormData = assignData;
      const { assign2FormData, event } = dynamicHelperRef.current || {};
      if (format) {
        // 解析赋值数据
        formalFormData = assign2FormData?.(assignData) || {};
      }
      const beforeData = await getDynamicFormValue();
      if (formsRef.current) {
        Object.keys(formsRef.current).forEach((formCode) => {
          const form = formsRef.current[formCode] || {};
          form?.setFieldsValue?.(
            formalFormData[formCode] || {},
            dynamicPageRef?.current?.sandboxContext?.refs,
          );
        });
      }
      const updateData = await getDynamicFormValue();
      diffChange(beforeData, updateData, (diff) => {
        // 执行事件处理变更联动
        event?.eval(diff.formCode, diff.changeFieldName);
      });
    };

    const providerValue: DynamicDataContext = useMemo(() => {
      return {
        onFormChange: async (formName, changedFieldName, changedFieldValue) => {
          const { formData2Retrieve, event } = dynamicHelperRef.current || {};
          const allValues = await getDynamicFormValue();
          event?.eval(formName, changedFieldName);
          if (typeof onValuesChange === 'function') {
            onValuesChange(
              formName,
              changedFieldName,
              changedFieldValue,
              formData2Retrieve?.(allValues) || allValues,
            );
          }
        },
        _innerDynamicDataContainer: true,
        get formsRefMap() {
          return formsRef.current;
        },
        updateFormChildRef: (formCode, formRef) => {
          // 只读时每次上报设置表单控件为只读状态
          if (props?.scene === 'readonly') {
            formRef?.setReadOnly(props?.scene === 'readonly');
          }
          formsRef.current[formCode] = formRef;
        },
        form: {
          getFieldsValue: () => getDynamicFormValue(),
          resetFields,
          setFieldsValue: (assignData: Record<string, unknown>) => {
            return setFieldsValue(assignData, false);
          },

          useWatch: (formCode: string, fieldCode: string) => {
            return Form.useWatch(fieldCode, formsRef.current[formCode]?.form);
          },
        },
      };
    }, [props?.scene]);

    useEffect(() => {
      getDynamicData(engineRule);
    }, [engineRule]);

    useImperativeHandle(ref, () => ({
      dynamicCode,
      // 更新动态数据
      setRules: (newRules: DynamicDataContainerProps['engineRule']) => {
        return getDynamicData(newRules);
      },
      // 获取动态数据表单转换协议后的值
      getFieldsValue: async () => {
        const allValues = await getDynamicFormValue();
        const { formData2Retrieve } = dynamicHelperRef.current || {};
        return formData2Retrieve?.(allValues) || allValues;
      },
      // 获取动态数据表单原始值
      getOriginValue: () => {
        return getDynamicFormValue();
      },
      // 校验表单并取值
      validateFormAndScroll: async () => {
        const allValues: Record<string, any> = {};
        if (formsRef.current) {
          const validatePromiseList = Object.keys(formsRef.current).map(
            (formCode) => {
              const form = formsRef.current[formCode] || {};
              return form?.validateFormAndScroll?.().then((res) => {
                allValues[formCode] = res;
              });
            },
          );
          await Promise.all(validatePromiseList);
          const { formData2Retrieve } = dynamicHelperRef.current || {};
          return formData2Retrieve?.(allValues) || allValues;
        }
        return undefined;
      },
      resetFields,
      setFieldsValue: (assignData: Record<string, unknown>) => {
        return setFieldsValue(assignData, true);
      },
    }));

    const dynamicStyle = {
      ...(style || {}),
      display: props?.visible ? undefined : 'none',
    };
    return (
      <div className={className} style={dynamicStyle}>
        <DynamicDataProvider value={providerValue}>
          {pageData &&
            renderDynamicPage(
              pageData,
              { uid: $$componentItem.uid },
              { ref: dynamicPageRef, staticAttrKeys },
            )}
        </DynamicDataProvider>
        {loading && <SpinLoading />}
      </div>
    );
  },
);

export default DynamicDataContainer;
