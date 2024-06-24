import {
  DynamicDataFieldItem,
  DynamicDataType,
  LingxiForwardRef,
} from '@lingxiteam/types';
import { Form, FormInstance, Spin } from 'antd';
import {
  CSSProperties,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DynamicDataContext, DynamicDataProvider } from '../utils';
import { useDynamicDataContainer } from './useDynamicDataContainer';

type RuleParameter = {
  paramId: string;
  valueCode?: string;
  originValueCode?: string;
};
export interface DynamicDataContainerProps {
  className: string;
  style: CSSProperties;
  'data-compid'?: string;
  engineRule?: Array<Array<RuleParameter>>;
  name: string;
  scene?: 'edit' | 'readonly';
  visible?: boolean;
  boxSpace?: string;

  /**
   * 编码
   */
  dynamicCode: string;
  onValuesChange?: (
    formCode: string,
    changedFieldName: string,
    changedFieldValue: any,
    allValues: Record<string, Record<string, any>>,
  ) => void;
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
      boxSpace,
    } = props || {};
    const engineApis = getEngineApis?.() || {};
    const [loading, setLoading] = useState<boolean>(false);
    const { service, dynamicDataUtils, renderDynamicPage } = engineApis;
    const { dynamicData2DSL, diffChange } = dynamicDataUtils || {};
    const formsRef = useRef<
      Record<
        string,
        {
          form: FormInstance;
          validateFormAndScroll?: () => Promise<any>;
          getFieldsValue?: FormInstance['getFieldsValue'];
          setFieldsValue?: (values: any, refs: Record<string, any>) => void;
          resetFields?: FormInstance['resetFields'];
          setDisabled?: (v: boolean) => void;
          setReadOnly?: (v: boolean) => void;
        }
      >
    >({});
    const [pageData, setPageData] = useState<any>();
    const dynamicHelperRef = useRef<ReturnType<typeof dynamicData2DSL>>();

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
            terminalType: 'pc',
            findDataDetail: true,
            paramGroupList: rules,
          });
          if (res && typeof dynamicData2DSL === 'function') {
            const dataHelper = dynamicData2DSL(
              res as DynamicDataType[],
              { uid: $$componentItem.uid, name },
              (
                DSLCore,
                dynamicData: DynamicDataType | DynamicDataFieldItem,
              ) => {
                if ('dataId' in dynamicData) {
                  const node = DSLCore?.query?.(`Card_${dynamicData.dataId}`);
                  if (node && boxSpace) {
                    node?.setStyle?.({
                      margin: `0 0 ${boxSpace} 0`,
                    });
                  }
                }
              },
            );
            setPageData(dataHelper.pageDSL);
            dynamicHelperRef.current = dataHelper;
          }
        }
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      getDynamicData(engineRule);
    }, [engineRule]);

    const getDynamicFormValue = () => {
      const allValues: Record<string, any> = {};
      if (formsRef.current) {
        Object.keys(formsRef.current).forEach((formCode) => {
          const form = formsRef.current[formCode] || {};
          allValues[formCode] = form?.getFieldsValue?.();
        });
      }
      return allValues;
    };

    const resetFields = () => {
      if (formsRef.current) {
        const beforeData = getDynamicFormValue();
        Object.keys(formsRef.current).forEach((formCode) => {
          const form = formsRef.current[formCode] || {};
          form?.resetFields?.();
        });
        const updateData = getDynamicFormValue();
        const { event } = dynamicHelperRef.current || {};
        diffChange(beforeData, updateData, (diff) => {
          // 执行事件处理变更联动
          event?.eval(diff.formCode, diff.changeFieldName);
        });
      }
    };

    const setFieldsValue = (
      assignData: Record<string, unknown>,
      format: boolean = true,
    ) => {
      let formalFormData = assignData;
      const { assign2FormData } = dynamicHelperRef.current || {};
      if (format) {
        // 解析赋值数据
        formalFormData = assign2FormData?.(assignData) || {};
      }

      const beforeData = getDynamicFormValue();
      if (formsRef.current) {
        Object.keys(formsRef.current).forEach((formCode) => {
          const form = formsRef.current[formCode] || {};
          form?.setFieldsValue?.(
            formalFormData[formCode] || {},
            dynamicPageRef?.current?.sandboxContext?.refs,
          );
        });
      }
      const updateData = getDynamicFormValue();
      const { event } = dynamicHelperRef.current || {};

      diffChange(beforeData, updateData, (diff) => {
        // 执行事件处理变更联动
        event?.eval(diff.formCode, diff.changeFieldName);
      });
    };

    useImperativeHandle(ref, () => ({
      formCode: dynamicCode,
      // 加载动态数据
      setRules: (newRules: DynamicDataContainerProps['engineRule']) => {
        return getDynamicData(newRules);
      },
      // 获取动态数据表单转换协议后的值
      getFieldsValue: () => {
        const allValues = getDynamicFormValue();
        const { formData2Retrieve } = dynamicHelperRef.current || {};
        return formData2Retrieve?.(allValues) || allValues;
      },
      // 获取动态数据表单原始值
      getOriginValue: () => {
        return getDynamicFormValue();
      },

      resetFields,
      // 校验表单并取值
      validateFormAndScroll: async () => {
        const allValues: Record<string, any> = {};
        if (formsRef.current) {
          const validatePromiseList = Object.keys(formsRef.current).map(
            (formCode) => {
              const form = formsRef.current[formCode] || {};
              return form?.validateFormAndScroll?.().then((res: any) => {
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
      setFieldsValue: (assignData: Record<string, unknown>) => {
        return setFieldsValue(assignData, true);
      },
    }));

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

    const providerValue: DynamicDataContext = useMemo(() => {
      return {
        onFormChange: (formName, changedFieldName, changedFieldValue) => {
          const { formData2Retrieve, event } = dynamicHelperRef.current || {};
          const allValues = getDynamicFormValue();
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
          if (props.scene === 'readonly') {
            // 只读时每次上报设置表单控件为只读状态
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
    }, [props.scene]);

    const dynamicStyle = {
      ...(style || {}),
      display: props?.visible ? undefined : 'none',
    };

    return (
      <div
        className={className}
        data-compid={props?.['data-compid']}
        style={dynamicStyle}
      >
        <Spin spinning={loading}>
          <DynamicDataProvider value={providerValue}>
            {pageData &&
              renderDynamicPage(
                pageData,
                { uid: $$componentItem.uid },
                { ref: dynamicPageRef, staticAttrKeys },
              )}
          </DynamicDataProvider>
        </Spin>
      </div>
    );
  },
);

export default DynamicDataContainer;
