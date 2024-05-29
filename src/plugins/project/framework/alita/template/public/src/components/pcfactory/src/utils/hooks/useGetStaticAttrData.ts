import { useEffect, useState } from 'react';

// 静态页面查询静态数据
const useGetStaticAttrData = ({
  attrNbrs = [],
  engineApis,
}: {
  attrNbrs: any;
  engineApis?: any;
}) => {
  const [attrDataMap, setAttrDataMap] = useState<any>([]);

  const getAttrData = async () => {
    const attrCodes =
      attrNbrs && attrNbrs.length ? attrNbrs?.filter((a: any) => a) : null;
    if (!attrCodes || !attrCodes.length) {
      return;
    }
    const attrMap: any = {};

    const res = await engineApis?.service?.batchGetAppStaticAttr({
      attrCodes,
    });
    Object.keys(res).forEach((key) => {
      attrMap[key] = (res[key] || []).map((item: any) => ({
        label: item.attrValueName,
        value: item.attrValue,
        relatedAttrSpecList: item.relatedAttrSpecList,
      }));
    });
    setAttrDataMap(attrMap);
  };

  useEffect(() => {
    getAttrData();
  }, []);

  return [attrDataMap];
};

export default useGetStaticAttrData;
