import { RefsManager } from '@/utils/Context/context';

type RefsType = Record<string, any>;

export const formSubmit = async (form: RefsType, isFormList?: boolean) =>
  new Promise((resolve, reject) => {
    form.submit(resolve, reject, isFormList);
  });

export const formCodeSubmit = async (form: Record<string, any>) =>
  new Promise(form.submitByCode);

export const getFieldsValueByCode = (form: Record<string, any>) =>
  new Promise(form.getFieldsValueByCode);

/**
 * 通过组件id获取所有的组件
 * @param options
 * @returns
 */
export const getComponentsByCompId = (options: {
  compId: string;
  refs: RefsType;
}) => {
  const { refs, compId } = options;
  return Object.keys(refs)
    .filter((uid) => refs[uid]?.compId === compId)
    .map((uid) => refs[uid]);
};

/**
 * 通过业务组件id获取表单列表
 * @param engineRelation
 * @param routerId
 * @param uid
 * @returns
 */
export const getFormsByBoframerId = (options: {
  renderRefs: RefsManager;
  compId: string;
  refs: RefsType;
}) => {
  const { renderRefs, compId, refs } = options;
  const boframerUids = Object.keys(refs).filter(
    (id) => refs[id].compId === compId,
  );

  // 如果没找到组件，就返回null
  if (!boframerUids.length) {
    return [];
  }

  const forms: RefsType[] = [];
  const getAllForms = (refs: RefsType | null) => {
    Object.keys(refs || {}).forEach((uid) => {
      // const engineRef = engineRelation.getEngineRefsByUid(uid, routerId);
      const renderId = uid;
      if (renderId) {
        const engineRefs = renderRefs.getComRefs(renderId);
        if (engineRefs) {
          Object.keys(engineRefs).forEach((compUid) => {
            const r = engineRefs[compUid];
            getAllForms(r);
            if (r.compName === 'Form' && !r.isFormList) {
              forms.push(r);
            }
          });
        }
      }
    });
  };

  getAllForms(
    boframerUids.reduce((pre, uid) => {
      pre[uid] = refs[uid];
      return pre;
    }, {} as RefsType),
  );

  return forms;
};

/**
 * 通过内部组件内的表单列表获取表单值
 * @param forms
 * @param getFieldsValue
 * FIXME: 若需要兼容表单切套在循环列表的情况，可以修改本方法
 */
export const getBoframerValueByForms = async (forms: RefsType[] = []) => {
  const errorValues: Record<string, any> = {};

  try {
    const values = await Promise.all(forms.map((form) => formSubmit(form)));
    return values.reduce((pre, item) => Object.assign(pre as any, item), {});
  } catch (error) {
    const { errorFields, values } = (error || {}) as any;
    if (Array.isArray(errorFields)) {
      return {
        errorFields: [...(errorValues.errorFields || []), ...errorFields],
        values: {
          ...(errorValues.values || {}),
          ...(values || {}),
        },
      };
    }
  }
};

/**
 * 通过表单列表获取表单值
 * @param forms
 * @param getFieldsValue
 * FIXME: 若需要兼容表单切套在循环列表的情况，可以修改本方法
 */
export const getFormsValueByForms = async (forms: RefsType[] = []) => {
  const errorValues: Record<string, any> = {};

  try {
    const values = await Promise.all(forms.map((form) => formSubmit(form)));
    return values.reduce((pre, item) => Object.assign(pre as any, item), {});
  } catch (error) {
    const { errorFields, values } = (error || {}) as any;
    if (Array.isArray(errorFields)) {
      return {
        errorFields: [...(errorValues.errorFields || []), ...errorFields],
        values: {
          ...(errorValues.values || {}),
          ...(values || {}),
        },
      };
    }
  }
};

/**
 * 通过业务组件id获取表单值，
 * 注：所有表单的值不走formCode逻辑。 若同一个业务组件中多个表单则将所有表单放到一起
 * @param options
 * @returns
 */
export const getFormValueByBOFramerId = async (options: {
  refs: RefsType;
  renderRefs: RefsManager;
  compId: string;
}) => {
  const forms = getFormsByBoframerId(options);
  return getBoframerValueByForms(forms);
};

/**
 * 通过表单id 获取表单值
 * @param options
 * @returns
 */
export const getFormValueByFormId = async (options: {
  refs: RefsType;
  compId: string;
}) => {
  const { compId, refs } = options;
  const formUids = Object.keys(refs).filter((id) => refs[id].compId === compId);

  // 如果没找到组件，就返回null
  if (!formUids.length) {
    return [];
  }

  return getFormsValueByForms(formUids.map((uid) => refs[uid]));
};

/**
 * 通过组件名 获取所有表单
 * @param options
 * @returns
 */
export const getFormsByCompName = (
  options: {
    refs: RefsType;
    renderRefs: RefsManager;
  },
  forms: any[] = [],
) => {
  const { refs, renderRefs } = options;

  Object.keys(refs).forEach((uid) => {
    const item = refs[uid];
    if (!item) return;
    if (item.compName === 'DForm') {
      forms.push(item);
    }
    if (['Pageview', 'BOFramer'].includes(item.compName)) {
      getFormsByCompName(renderRefs.getComRefs(uid));
    }
  });

  return forms;
};

/**
 * 校验并获取表单值
 */
export const validateFields = async (
  options: {
    refs: RefsType;
    renderRefs: RefsManager;
  },
  getFormValue: (form: Record<string, any>) => Promise<any>,
) => {
  const forms = getFormsByCompName(options);
  const actions: any = forms.map(getFormValue);
  const formValues: any = {};
  const values = await Promise.all(actions);
  values.forEach((val = {}) => {
    Object.keys(val || {}).forEach((key) => {
      const isIncludesKey = Object.keys(formValues).includes(key);
      if (isIncludesKey) {
        Object.assign(formValues[key], { ...(val[key] || {}) });
      } else {
        Object.assign(formValues, { [key]: val[key] });
      }
    });
  });
  return values;
};

// // eslint-disable-next-line max-len
// export const formSubmit = async (form: { submit: (arg0: (value: unknown) => void, arg1: (reason?: any) => void, arg2: any) => void; }, isFormList?: boolean) =>
//   new Promise((resolve, reject) => {
//     form.submit(resolve, reject, isFormList);
//   });

// const collectFomrms = (engineRelation: EngineRelationMethods, forms: any[], routerId: string, refs: any) => {
//   Object.keys(refs)?.forEach((key) => {
//     const comRef = refs[key];
//     if (
//       comRef?.compName === 'DForm' &&
//             typeof comRef.submit === 'function' &&
//             !comRef?.isFormList
//     ) {
//       forms.push(comRef);
//     } else if (comRef?.compName === 'Pageview' || comRef?.compName === 'BOFramer') {
//       const subRefs = engineRelation.getEngineRefsByUid(key, routerId)?.refs;
//       if (subRefs) {
//         collectFomrms(engineRelation, forms, routerId, subRefs);
//       }
//     }
//   });
// };
// export const getBOFramerForms = (engineRelation: EngineRelationMethods, routerId: string, uid: string) => {
//   const boframerRef = engineRelation.getEngineRefsByUid(uid, routerId)?.refs;
//   const forms: any[] = [];
//   collectFomrms(engineRelation, forms, routerId, boframerRef);
//   return forms;
// };

// // eslint-disable-next-line max-len
// export const boFramersubmit = async (onSuccess: (arg0: {}) => void, onFail: (arg0: {}) => void, engineRelation: EngineRelationMethods, routerId: string, uid: string) => {
//   const forms = getBOFramerForms(engineRelation, routerId, uid);
//   const formValues = {};
//   const errorValues: Record<string, any> = {};
//   // eslint-disable-next-line no-plusplus
//   for (let index = 0; index < forms.length; index++) {
//     const inForm = forms[index];
//     try {
//       const values = await formSubmit(inForm);
//       Object.assign(formValues, values);
//     } catch (error) {
//       const { errorFields, values } = (error || {}) as any;
//       if (Array.isArray(errorFields)) {
//         errorValues.errorFields = [
//           ...(errorValues.errorFields || []),
//           ...errorFields,
//         ];
//         errorValues.values = {
//           ...(errorValues.values || {}),
//           ...(values || {}),
//         };
//       }
//     }
//   }
//   if (Object.keys(errorValues).length > 0) {
//     onFail(errorValues);
//     return;
//   }
//   onSuccess(formValues);
// };

// export const boFramerResetFields = (engineRelation: EngineRelationMethods, routerId: string, uid: string) => {
//   const forms = getBOFramerForms(engineRelation, routerId, uid);
//   forms.forEach(form => {
//     form?.resetFields();
//   });
// };

// export const boFramerSetFieldsValue = (engineRelation: EngineRelationMethods, routerId: string, uid: string, v: any) =>
//   getBOFramerForms(engineRelation, routerId, uid)?.forEach(form => {
//     form?.setFieldsValue(v);
//   });

// // eslint-disable-next-line max-len
// export const boFramerGetFieldsValue = async (onSuccess: (arg0: {}) => void, onFail: (arg0: {}) => void, engineRelation: EngineRelationMethods, routerId: string, uid: string,) => {
//   const forms = getBOFramerForms(engineRelation, routerId, uid);
//   const formValues = {};
//   const errorValues: Record<string, any> = {};
//   // eslint-disable-next-line no-plusplus
//   for (let index = 0; index < forms.length; index++) {
//     const inForm = forms[index];
//     let errs: any = {};
//     try {
//       const values = await inForm.getFieldsValue();
//       Object.assign(formValues, values);
//     } catch (error) {
//       errs = error;
//     } finally {
//       const { errorFields, values } = errs;
//       if (Array.isArray(errorFields)) {
//         errorValues.errorFields = [
//           ...(errorValues.errorFields || []),
//           ...errorFields,
//         ];
//         errorValues.values = {
//           ...(errorValues.values || {}),
//           ...(values || {}),
//         };
//       }
//     }
//   }
//   if (Object.keys(errorValues).length > 0) {
//     onFail(errorValues);
//     return;
//   }
//   onSuccess(formValues);
// };

// export const boFramerSetDisabled = (engineRelation: EngineRelationMethods, routerId: string, uid: string, v: any) => {
//   return getBOFramerForms(engineRelation, routerId, uid).forEach(form => form?.setDisabled(v));
// };
