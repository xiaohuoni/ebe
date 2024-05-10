export const getDSFilterName = (name: string) => `${name}Filter`;
export const GetReqParamValues = (value: { type: string[]; code: string }) => {
  const { type = [], code: valueCode } = value;
  let targetVal: unknown;
  switch (type[0]) {
    case 'globaldatasource':
    case 'datasource': {
      const [dsName, place] = [type[1], type[2]];
      const dataSourceName =
        place === 'filterData' ? getDSFilterName(dsName) : dsName;
      targetVal = valueCode
        ? `${dataSourceName}?.${valueCode}`
        : `${valueCode}`;
      break;
    }
    case '$function$':
    case 'EMPTY_DATA':
    case 'functionLib':
    case 'functorsMap':
    case 'customize': {
      if (typeof valueCode === 'string' && /^\$.*\$$/.test(valueCode)) {
        targetVal = valueCode.slice(1, valueCode.length - 1);
      } else {
        targetVal = valueCode;
      }
      break;
    }
    case 'page': {
      switch (type[1]) {
        case 'url': {
          targetVal = `${urlParam}?.${valueCode}`;
          break;
        }
        default:
          break;
      }
      break;
    }
    case 'context': {
      let valueStr = type[1];
      if (/^\$.*\$$/.test(valueStr)) {
        valueStr = valueStr.slice(1, valueStr.length - 1);
      }
      if (valueCode) {
        valueStr = `${valueStr} === null || ${valueStr} === void 0 ? void 0 : ${valueStr}.${valueCode}`;
      }
      targetVal = valueStr;
      break;
    }
    default:
      targetVal = '';
      // childParams[code] = '';
      break;
  }
  return targetVal;
};
