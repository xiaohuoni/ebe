/* eslint-disable no-continue */
import { EngineRelationMethods } from '@lingxiteam/types';
import { RefsManager } from './Context/context';

type RefsType = Record<string, any>;

const getFormsIdByUid = (uid: string, refs: RefsType) => {
  // 不是表单组件
  if (refs[uid].compName !== 'Form') {
    return null;
  }

  const list = uid.match(/@@@([\d\w_]*)&&&/g);
  if (!Array.isArray(list)) {
    return list;
  }
  return list.map((it) => it.replace(/(@@@)|(&&&)/g, ''));
};

/**
 * 通过循环容器id获取 循环容器内的表单
 * @param loopId
 * @param refs
 */
export const getFormOfInLoopByLoopId = (options: {
  loopId: string;
  engineRelation: EngineRelationMethods;
  routerId: string;
  refs: RefsType;
  forms?: RefsType[];
  inLoop?: boolean;
}) => {
  const {
    loopId,
    routerId,
    engineRelation,
    forms = [],
    refs,
    inLoop = false,
  } = options;
  const uids = Object.keys(refs);
  for (let index = 0; index < uids.length; index += 1) {
    const uid = uids[index];

    if (inLoop) {
      if (refs[uid].compName === 'Form') {
        forms.push(refs[uid]);
        continue;
      }
    }

    // 先用---分割，解决多层循环块嵌套问题
    const result = uid
      .split('---')
      .filter(Boolean)
      .find((id) => {
        const [compId] = id.split('@@@');
        return compId === loopId;
      });

    const engineRefs = engineRelation.getEngineRefsByUid(uid, routerId);
    // 页面容器或者BOFramer在循环容器下
    if ((result || inLoop) && engineRefs) {
      // 页面容器和业务组件下也可能存在表单
      getFormOfInLoopByLoopId({
        loopId,
        routerId,
        engineRelation,
        refs: engineRelation.getEngineRefsByUid(uid, routerId)?.refs || {},
        forms,
        inLoop: true,
      });
    }

    // 不是表单 或者不在循环容器内
    if (refs[uid].compName !== 'Form' || !/[@@@|&&&]/.test(uid)) {
      continue;
    }

    if (result) {
      forms.push(refs[uid]);
    }
  }
  return forms;
};

/**
 * 获取gridview组件
 * @param forms
 * @param getFieldsValue
 * @returns
 */
export const getLoopForms = async (
  forms: RefsType[],
  getFieldsValue: (form: any) => void,
) => {
  const fieldValues: any = {};
  let firstErrorInfo: any = null;
  for (let index = 0; index < forms.length; index += 1) {
    const form = forms[index];
    const { formCode, scrollToErrorField } = form;
    fieldValues[formCode] = fieldValues[formCode] ?? [];
    try {
      const values = await getFieldsValue(form);
      fieldValues[formCode].push(values);
    } catch (error) {
      if (!firstErrorInfo) {
        firstErrorInfo = {
          error,
          form,
          scrollToErrorField,
        };
      }
    }
  }

  if (firstErrorInfo) {
    const { scrollToErrorField, error } = firstErrorInfo;
    scrollToErrorField(error);
    return Promise.reject(error);
  }
  return Promise.resolve(fieldValues);
};

/**
 * 通过组件id获取表单列表
 */
export const getFormByCompId = (compId: string, refs: RefsType) => {
  // 获取是否是表单
  const form = refs[compId];
  if (form) {
    return form;
  }
  const uidArr = Object.keys(refs).filter((uid) => {
    const ids = getFormsIdByUid(uid, refs);
    if (!ids) {
      return false;
    }
    return ids.includes(compId);
  });

  if (uidArr.length === 0) {
    return null;
  }

  return uidArr.map((uid) => refs[uid]);
};

export const getFieldsValue = async (
  forms: RefsType | RefsType[],
  getFieldsValue: (form: any) => void,
) => {
  // 当表单不存在时，应该获取的是undefined
  if (!forms) {
    return undefined;
  }

  if (Array.isArray(forms)) {
    return Promise.all(forms.map((form) => getFieldsValue(form)));
  }
  return getFieldsValue(forms);
};

/**
 * 获取表单类型
 */
export const getFormType = (uid: string) => {
  // uid中包含@符号包含&符号
  const hasAtOrAnd = /[@@@|&&&]/.test(uid);
  const [loopId, formId, itemId] = uid.split(/@@@|&&&/g);
  return {
    type: hasAtOrAnd ? 'inLoop' : 'default',
    loopId,
    formId,
    itemId,
  };
};

interface FirstErrorInfoType {
  error: any;
  form?: any;
  scrollToErrorField: any;
}

/**
 * 当前的refs
 * @param options
 * @param getFieldsValue
 */
export const getOwnFormValues = async (
  options: { currentRefs: RefsType; renderRefs: RefsManager },
  getFieldsValue: (form: any) => void,
) => {
  const { currentRefs, renderRefs } = options;

  let firstErrorInfo: FirstErrorInfoType | null = null;
  const values: any = {};

  const formCodeTypes: Record<string, 'default' | 'array'> = {};

  /**
   * 获取单个引擎下的表单值
   */
  const getRenderRefsFormValues = async (refs: RefsType = {}) => {
    const uidArr = Object.keys(refs);

    for (let index = 0; index < uidArr.length; index += 1) {
      const uid = uidArr[index];

      const ref = refs[uid];
      if (['BOFramer', 'Pageview'].includes(ref.compName)) {
        // 需要处理BOFramer和PageView这种渲染逻辑
        const uidRefs = renderRefs.getComRefs(uid);
        // const uidRefs = engineRelation.getEngineRefsByUid(uid, routerId);
        if (uidRefs) {
          await getRenderRefsFormValues(uidRefs);
        }
      } else if (ref.compName === 'Form') {
        const {
          formCode,
          form,
          scrollToErrorField,
          compName,
          _innerDynamicDataContainer,
        } = ref;
        if (!formCode) {
          continue;
        }

        if (compName === 'Form' && _innerDynamicDataContainer) {
          continue;
        }

        const { type } = getFormType(uid);
        try {
          const value = await getFieldsValue(ref);
          if (type === 'default') {
            // 1. 首次赋值， 包含循环容器内逻辑
            if (!values[formCode]) {
              values[formCode] = value;
              formCodeTypes[formCode] = 'default';
              continue;
            }
            // 2. 存在编码相同时，切换成数组类型
            if (formCodeTypes[formCode] === 'default') {
              // 处理页面中存在多个相同的表单，但是表单编码一样。这时候表现为数组形式
              values[formCode] = [values[formCode]];
              formCodeTypes[formCode] = 'array';
            }

            // 3. 给数组添加当前值
            if (formCodeTypes[formCode] === 'array') {
              values[formCode].push(value);
            }
          } else if (type === 'inLoop') {
            // 1. 或许存在一个没包含在循环容器内表单，并且该表单和循环容器下的表单编码相同，
            if (formCodeTypes[formCode] === 'default') {
              values[formCode] = [values[formCode]];
            }

            formCodeTypes[formCode] = 'array';
            values[formCode] = Array.isArray(values[formCode])
              ? values[formCode]
              : [];
            values[formCode].push(value);
          }
        } catch (error) {
          if (!firstErrorInfo) {
            firstErrorInfo = {
              error,
              form,
              scrollToErrorField,
            };
          }
        }
      }
    }
  };

  await getRenderRefsFormValues(currentRefs);

  // 存在错误时，滚动到第一个出现错误的位置
  if (firstErrorInfo) {
    const { scrollToErrorField, error } = firstErrorInfo as FirstErrorInfoType;
    scrollToErrorField(error);
    return Promise.reject(error);
  }
  return Promise.resolve(values);
};

export const getAllForm = (options: {
  currentRefs: RefsType;
  renderRefs: RefsManager;
}) => {
  const { currentRefs, renderRefs } = options;
  const forms: RefsType[] = [];
  const getRenderRefsFormValues = (refs: RefsType = {}) => {
    const uidArr = Object.keys(refs);

    for (let index = 0; index < uidArr.length; index += 1) {
      const uid = uidArr[index];

      const ref = refs[uid];
      if (ref.compName !== 'Form') {
        // 需要处理BOFramer和PageView这种渲染逻辑
        const refs = renderRefs.getComRefs(uid);
        if (refs) {
          getRenderRefsFormValues(refs);
        }
      } else if (ref.has) {
        forms.push(ref);
      }
    }
  };
  getRenderRefsFormValues(currentRefs);
  return forms;
};

/**
 * 获取业务组件列表 可能存在
 * @param compId
 * @param refs
 */
export const getBOFramers = (compId: string, refs: RefsType = {}) => {
  const boframerUids = Object.keys(refs).filter(
    (id) => refs[id].compId === compId,
  );
  // 如果没找到组件，就返回null
  if (!boframerUids.length) {
    return null;
  }

  const boframerRefs: RefsType = {};

  boframerUids.forEach((uid) => {
    boframerRefs[uid] = refs[uid];
  });

  return boframerRefs;
};

export const getBOFramerOwnFormValues = async (
  options: {
    refs: RefsType;
    renderRefs: RefsManager;
    compId: string;
  },
  getFieldsValue: (form: any) => void,
) => {
  const { renderRefs, refs, compId } = options;

  // 2种情况 1只有单个业务组件 2 业务组件放在循环容器下
  const boframerRefs = getBOFramers(compId, refs);

  let values = {};
  if (boframerRefs) {
    values = await getOwnFormValues(
      { currentRefs: boframerRefs, renderRefs },
      getFieldsValue,
    );
  }

  // 理论上获取业务组件 应该都带有表单编码，但是由于需要兼容旧数据 需要把值展开
  if (Object.keys(values).length === 1) {
    const val = Object.values(values)[0] as Object;
    if (Object.prototype.toString.call(val) === '[object Object]') {
      values = val;
    }
  }
  return values;
};

// 获取BOFramer下所有表单
export const getBoframerOwnForms = (options: {
  currentRefs: RefsType;
  renderRefs: RefsManager;
  compId: string;
}) => {
  const { compId, currentRefs, renderRefs } = options;
  const boframers = getBOFramers(compId, currentRefs);

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
            if (r.compName === 'Form') {
              forms.push(r);
            }
          });
        }
      }
    });
  };

  getAllForms(boframers);
  return forms;
};
