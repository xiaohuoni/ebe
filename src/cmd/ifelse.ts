import {
  CMDGeneratorPrames,
  CompositeValueGeneratorOptions,
} from '../core/types';
import { CMDGeneratorFunction } from '../core/utils/CMDGenerator';
import { generateVarString } from '../core/utils/compositeType';
import { isJSVar } from '../core/utils/deprecated';
import { getImportFrom } from '../utils/depsHelper';

const utilsFilePath = '@/utils/cmd';

const getVarStr = (str: any) => {
  if (isJSVar(str)) {
    return generateVarString(str);
  }
  return `'${str}'`;
};

interface IConditionOptions {
  operate?: string;
  useManual?: boolean;
  useObject?: boolean;
  // useManual:true
  manualValue?: string;
  // useObject:true
  objType?: string;
  objId?: string;
  objOperate?: string;
  stateVal?: string;
  context?: string;
}
// const condTypeStr: any = {
//   checkValue: '判断当前的值',
//   checkContextValue: '判断上下文的值',
//   isVisible: '处于可见状态',
//   notVisible: '处于隐藏状态',
// };
type IconditionType =
  | 'checkValue'
  | 'checkContextValue'
  | 'isVisible'
  | 'notVisible';

type IconditionConnector = '&&' | '||' | undefined;

export interface Icondition {
  options: IConditionOptions;
  condId?: string;
  conditionType?: IconditionType;
  objType?: string;
  objId?: string;
  connector?: IconditionConnector;
}
export const getConditionOption = (
  value: string,
  options: IConditionOptions,
  config: CompositeValueGeneratorOptions,
) => {
  const {
    operate,
    useManual,
    useObject,
    manualValue,
    objId,
    objOperate,
    stateVal,
  } = options;
  let v = manualValue;
  if (useObject) {
    if (objOperate && ['setValue', 'value'].includes(objOperate)) {
      // 如果使用对象，修改 v
      v = `safeNumber(getValue('${objId}'))`;
      config?.ir?.deps?.push(getImportFrom(utilsFilePath, 'safeNumber'));
    } else if (stateVal) {
      v = getVarStr(stateVal);
    } else {
      // 都没有数据错误
      console.error('都没有,数据错误');
      return '';
    }
  }
  switch (operate) {
    case 'empty':
      config?.ir?.deps?.push(getImportFrom(utilsFilePath, 'checkIsEmpty'));
      return `checkIsEmpty(${value})`;
    case 'notEmpty':
      config?.ir?.deps?.push(getImportFrom(utilsFilePath, 'checkIsEmpty'));
      return `!checkIsEmpty(${value})`;
    case 'contains':
      config?.ir?.deps?.push(getImportFrom(utilsFilePath, 'checkIsContains'));
      return `checkIsContains(${value}, ${v})`;
    case 'notContains':
      config?.ir?.deps?.push(getImportFrom(utilsFilePath, 'checkIsContains'));
      return `!checkIsContains(${value}, ${v})`;
    case '>':
      return `${value} > ${v}`;
    case '>=':
      return `${value} >= ${v}`;
    case '<':
      return `${value} < ${v}`;
    case '<=':
      return `${value} <= ${v}`;
    case '==':
      // eslint-disable-next-line eqeqeq
      return `${value} == ${v}`;
    case '!=':
      // eslint-disable-next-line eqeqeq
      return `${value} != ${v}`;
    // eslint-disable-next-line no-duplicate-case
    case '== true':
      // eslint-disable-next-line eqeqeq
      return `${value} == true`;
    case '== false':
      // eslint-disable-next-line eqeqeq
      return `${value} == false`;
    default:
      console.error('找不到条件');
      return '';
  }
};
export const getCondition = (
  conditions: Icondition[],
  config: CompositeValueGeneratorOptions,
) => {
  return conditions
    .map((condition) => {
      const {
        options,
        conditionType,
        objId,
        objType,
        connector = '',
      } = condition;
      let code = '';

      switch (conditionType) {
        case 'checkContextValue':
          code = getConditionOption(
            getVarStr(options.context),
            options,
            config,
          );
          break;
        case 'checkValue':
          code = getConditionOption(`getValue('${objId}')`, options, config);
          break;
        case 'isVisible':
          code = `getVisible('${objId}')`;
          break;
        case 'notVisible':
          code = `!getVisible('${objId}')`;
          break;
        default:
          // 如果 connector 不为空，则给加一个 true 条件，不影响
          code = connector === '' ? '' : 'true';
          break;
      }
      return `${connector === '' ? '' : connector + ' '}${code}`;
    })
    .join(' ');
};
export const getElseIf = ({
  value,
  params,
  platform,
  scope,
  config = {},
}: CMDGeneratorPrames): string => {
  if (!value || value.length === 0) {
    return '';
  }
  return value
    .map((v1: any) => {
      const { condition, callback = [], elseIfs } = v1;
      const hasCondition = condition && condition.length > 0;
      // 没有条件了，就是 else
      let prefix = hasCondition ? ' else if ' : ' else ';
      return `${prefix}${
        hasCondition ? `(${getCondition(condition, config)}){` : '{'
      }
    ${CMDGeneratorFunction(callback, params, platform, scope, config)}
  }${getElseIf({
    value: elseIfs,
    params,
    platform,
    scope,
    config,
  })}`;
    })
    .join(' ');
};

export function getIfelse({
  value,
  params,
  platform,
  scope,
  config = {},
}: CMDGeneratorPrames): string {
  const { condition, callback1 = [], elseIfs } = value;
  if (!condition) return '';
  return `if(${getCondition(condition, config)}){
${CMDGeneratorFunction(callback1, params, platform, scope, config)}
  }${getElseIf({
    value: elseIfs,
    params,
    platform,
    scope,
    config,
  })}`;
}
