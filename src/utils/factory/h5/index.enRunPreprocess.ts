import type { PatchPropsFunctionType } from '@lingxiteam/types';
import { dateToFormatter } from './utils/date';
import useMobileVisible from './utils/useMobileVisible';

/**
 * 组件渲染时预处理逻辑
 * 配置规则 - 同个组件存在多个配置项都会处理
 * '*' 全部组件预处理
 * 'Button' 单个组件预处理
 * 'Button|Input' 多个组件预处理
 */

const h5: { [key: string]: PatchPropsFunctionType } = {
  '*': (instance, originProps, Sandbox, extraData) => {
    const { id } = instance || {};
    originProps.visible = useMobileVisible(
      originProps.visible,
      instance.compName,
    );
    // 将status 转换成对应的显示隐藏规则
    const { status } = originProps;
    if (status) {
      let visibleProp;
      let disabledProp;
      let readOnlyProp;
      switch (+status) {
        case 2:
          disabledProp = false;
          visibleProp = false;
          readOnlyProp = false;
          break;
        case 3:
          disabledProp = true;
          visibleProp = true;
          readOnlyProp = false;
          break;
        case 4:
          disabledProp = false;
          visibleProp = true;
          readOnlyProp = true;
          break;
        case 1:
        default:
          disabledProp = false;
          visibleProp = true;
          readOnlyProp = false;
          break;
      }
      originProps.disabled = disabledProp;
      originProps.visible = visibleProp;
      originProps.readOnly = readOnlyProp;
    }

    // 权限规则处理
    const { pageControlShowRuleList } = extraData || {};
    const controlItem =
      pageControlShowRuleList?.length &&
      pageControlShowRuleList.find((con: any) => con.controlCode === id);
    if (controlItem) {
      // 根据场景进行区分控件权限，如果页面场景不限的，不做按钮控件权限的控制
      const setControlItemOptions = (it: any, obj: any) => {
        switch (it.showRule) {
          case 'DISABLE':
            obj.disabled = true;
            break;
          case 'HIDE':
            obj.visible = false;
            break;
          // case 'NORMAL': options.readOnly = true; break;
          default:
            break;
        }
      };
      if (controlItem.controlSubType !== 'BUTTON') {
        [
          ...(originProps?.rowActions || []),
          ...(originProps?.extend || []),
        ].forEach((extend) => {
          if (extend.id === controlItem.controlSubType) {
            setControlItemOptions(controlItem, extend);
          } else {
            const newControlItem = pageControlShowRuleList.find(
              (con: any) =>
                con.controlCode === id && con.controlSubType === extend.id,
            );
            if (newControlItem) {
              setControlItemOptions(newControlItem, extend);
            }
          }
        });
      } else {
        setControlItemOptions(controlItem, originProps);
      }
    }

    return originProps;
  },
  'BOFramer|Pageview| RemoteComponent': (instance, originProps, Sandbox) => {
    originProps.lcdpParentRenderId = Sandbox.renderId;
    return originProps;
  },
  BOFramer: (instance, originProps, Sandbox) => {
    originProps.appId = Sandbox.appId;
    originProps.pageId = Sandbox.pageId;
    return originProps;
  },
  DformDate: (instance, originProps, Sandbox) => {
    if (
      originProps.defaultValue &&
      typeof originProps.defaultValue === 'object'
    ) {
      if (originProps.defaultValue.defaultValue) {
        originProps.defaultValue = originProps.defaultValue.defaultValue;
      } else {
        // 如果是运行时间
        // eslint-disable-next-line no-lonely-if
        if (originProps.defaultValue.type === 'isCurrent') {
          const formatter = originProps.formatter || 'YYYY-MM-DD HH:mm:ss';
          originProps.defaultValue = dateToFormatter(formatter, new Date());
        } else if (
          originProps.defaultValue.type === 'custom' &&
          !originProps.defaultValue.defaultValue
        ) {
          originProps.defaultValue = undefined;
        }
      }
    }
    // 兼容HJA数据
    if (originProps.defaultCurrent) {
      const formatter = originProps.formatter || 'YYYY-MM-DD HH:mm:ss';
      originProps.defaultValue = dateToFormatter(formatter, new Date());
      // originProps.defaultValue = new Date().toUTCString()
    }
    return originProps;
  },
  DformRangePicker: (instance, originProps, Sandbox) => {
    if (!originProps.modeType && originProps.timeMode) {
      originProps.modeType = originProps.timeMode;
    }
    if (!originProps.formatter && originProps.format) {
      originProps.formatter = originProps.format;
    }
    // 兼容HJA数据
    if (originProps.defaultCurrent && !originProps.defaultValue) {
      const formatter = originProps.formatter || 'YYYY-MM-DD ';
      originProps.defaultValue = [
        dateToFormatter(formatter, new Date()),
        dateToFormatter(formatter, new Date()),
      ];
    }
    return originProps;
  },
  DformFile: (instance, originProps, Sandbox) => {
    // 兼容fileIdKey 逻辑
    if (originProps.fileIdKey) {
      if (originProps.alias?.title) {
        originProps.alias.id = originProps.fileIdKey;
      } else {
        originProps.alias = {
          id: originProps.fileIdKey,
          title: 'fileName',
        };
      }
    }
  },
  'TabBar|SideBar': (instance, originProps, Sandbox) => {
    originProps.lcdpParentRenderId = Sandbox.renderId;
    return originProps;
  },
};

export default h5;
