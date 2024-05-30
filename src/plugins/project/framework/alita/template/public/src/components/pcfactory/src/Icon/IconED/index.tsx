import { LingXiEdFC } from '@lingxiteam/types';
import { useEffect, useState } from 'react';
import { useIcon } from '../hooks';
import type { IconEDProps } from '../PropsType';

const IconED: LingXiEdFC<IconEDProps> = (props) => {
  const { getMaterialFile, getAppFileUrlById, getAppFileUrlByFileCode } =
    props?.getEdEngineApi?.() || {};
  const [fun, setFun] = useState<{
    getFileIconUrl: any;
    getDesignPlatormIconUrl: any;
  }>({
    getFileIconUrl: {},
    getDesignPlatormIconUrl: {},
  });
  useEffect(() => {
    const fetchFun = async () =>
      setFun({
        getFileIconUrl: {
          getFileIconUrlByCode: (fileCode: string) =>
            getAppFileUrlByFileCode({
              fileCode,
              appId: props.$$componentItem?.appId || window.appId,
            }),
          getFileIconUrlById: getAppFileUrlById,
        },
        getDesignPlatormIconUrl: (materialId: string, fileName: string) =>
          getMaterialFile({ materialId, fileName }),
      });
    fetchFun();
  }, []);

  const icon = useIcon({
    ...props,
    getFileIconUrl: () => fun.getFileIconUrl,
    getDesignPlatormIconUrl: () => fun.getDesignPlatormIconUrl,
  });

  return icon;
};

export default IconED;
