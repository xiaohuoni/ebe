import { useImperativeHandle, useMemo, useState } from 'react';
import { useIcon } from './hooks';
import type { IconProps } from './PropsType';
import { LingxiForwardRef } from '@lingxiteam/types';


const MyIcon = LingxiForwardRef<any, IconProps>((props, ref) => {
  const {
    visible = true,
    engineApis: receivedEngineApis,
    getEngineApis,
    $$componentItem,
    className = '',
    ...restProps
  } = props;

  const appId = $$componentItem?.appId || props.appId;

  const [changeContent, setChangeContent] = useState({});

  const engineApis = receivedEngineApis || getEngineApis?.() || {};

  const myClassName = useMemo(() => {
    if ($$componentItem?.type === 'Icon') {
    /**
    * 用于主题，如果是单独使用的是，在className 增加一个变量，防止在主题设置图标的时候，影响影响引用图标的其他控件
   */
      return `pcFactory-icon ${className || ''}`;
    }
    return className;
  }, [className]);

  useImperativeHandle(ref, () => ({
    changeContent(_content: any) {
      setChangeContent({ icon: { ..._content, type: _content.iconType } });
    },
  }));

  const getFileIconUrl = () => {
    return {
      getFileIconUrlByCode: (fileCode: string) => engineApis?.service?.getAppFileUrlByFileCode(fileCode, { appId }),
    };
  };

  const getDesignPlatormIconUrl = () => {
    return engineApis?.service?.getMaterialFile;
  };

  if (restProps?.style?.fill) {
    restProps.style.color = restProps.style.fill;
  }

  const icon = useIcon({
    ...restProps,
    ...changeContent,
    className: myClassName,
    getFileIconUrl,
    getDesignPlatormIconUrl,
    getEngineApis,
  });

  if (!visible) {
    return null;
  }

  return icon;
});

export default MyIcon;
