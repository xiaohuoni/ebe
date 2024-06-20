import _ from 'lodash';

export const isEmptyStaticData = (props: {
  attr: any;
  data: any;
  options: any;
}) => !props.attr && !props.data && !props.options;

export const getAreaItemById = (id: string, data: any[] = []) =>
  data.find((item) => item.value === id);

export const findAreaPage = async (alias: any, commonFetch: any) => {
  return commonFetch('post', '/lcdp/area/findAreaPage', {
    pageNum: 1,
    pageSize: 1000,
    divisionLevel: '1',
  }).then((res: any) => {
    const { list = [] } = res || {};
    return list.map((item: { divisionName: any; divisionCode: any }) => ({
      ...item,
      [alias?.label || 'label']: item.divisionName,
      [alias?.value || 'value']: item.divisionCode,
    }));
  });
};

export const findAreaByCode = async (
  params: any,
  alias: any,
  commonFetch: any,
) => {
  return commonFetch('post', '/lcdp/area/findAreaByCode', params).then(
    (res: any) =>
      (res || []).map((item: { divisionName: any; divisionCode: any }) => ({
        ...item,
        [alias?.label || 'label']: item.divisionName,
        [alias?.value || 'value']: item.divisionCode,
      })),
  );
};

export const findAreaNameWithStaticData = (
  staticData: any[] = [],
  ids = [],
  alias: any,
) => {
  let targetData = _.cloneDeep(staticData);
  const target: any[] = [];
  ids.forEach((id) => {
    if (targetData?.length > 0) {
      const item =
        targetData.find((data: any) => {
          return data[alias?.value || 'value'] === id;
        }) || {};
      const { children = [] } = item;
      const label = item[alias?.label || 'label'];
      targetData = children;
      if (label) {
        target.push(label);
      }
    }
  });
  return target;
};

export const getDivisionCodeList = (origin: any) => {
  let divisionCodeList = [];
  if (Object.prototype.toString.call(origin) === '[object Array]') {
    divisionCodeList = origin;
  } else if (Object.prototype.toString.call(origin) === '[object Object]') {
    divisionCodeList = origin.value;
  }
  return divisionCodeList;
};

export const setPickerValue = (
  shouldDefaultData: boolean,
  defaultValue: string[] | undefined,
  callback: any = () => {},
  data: any[],
  alias: any,
  commonFetch: any,
) => {
  const findAreaNameByCode = (divisionCodeList: any) => {
    if (divisionCodeList?.length) {
      findAreaByCode(
        {
          divisionCodeList,
        },
        alias,
        commonFetch,
      ).then((result: any[]) => {
        // @ts-ignore
        const label = result.map(
          (item: { label: any }) => item[alias?.label || 'label'],
        );
        // @ts-ignore
        const value = result.map(
          (item: { value: any }) => item[alias?.value || 'value'],
        );
        if (label.length === value.length) {
          callback(
            {
              // @ts-ignore
              label: result.map(
                (item: { label: any }) => item[alias?.label || 'label'],
              ),
              // @ts-ignore
              value: result.map(
                (item: { value: any }) => item[alias?.value || 'value'],
              ),
            },
            result,
          );
        }
      });
    }
  };

  const setDefaultValue = (origin: string | string[] = '') => {
    const divisionCodeList = getDivisionCodeList(origin);
    if (shouldDefaultData) {
      findAreaNameByCode(divisionCodeList);
    } else {
      const areaName = findAreaNameWithStaticData(
        data,
        divisionCodeList,
        alias,
      );
      if (areaName.length === divisionCodeList.length) {
        callback({
          label: areaName,
          value: divisionCodeList,
        });
      }
    }
  };
  setDefaultValue(defaultValue);
};
