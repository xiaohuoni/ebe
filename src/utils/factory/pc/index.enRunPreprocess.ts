import type { PatchPropsFunctionType } from '@lingxiteam/types';
import { hasSomeOwnProperty } from './index.enCommonPreprocess';
import basicStatusTransfer from './utils/basicStatusTransfer';

/**
 * 组件渲染时候的预处理逻辑-组件每次渲染都会处理
 */

/**
 * 组件渲染前预处理逻辑
 * 配置规则 - 同个组件存在多个配置项都会处理
 * '*' 全部组件预处理
 * 'Button' 单个组件预处理
 * 'Button|Input' 多个组件预处理
 */

const pc: { [key: string]: PatchPropsFunctionType } = {
  // 全部控件状态处理
  // @ts-ignore
  '*': (instance, originProps, Sandbox, extraData) => {
    const { id } = instance || {};
    // 如果数据绑定了数据源，有对象的则按对象上的的显隐规则展示，绑定数据源但没有对象的和普通组件，则按属性状态展示，
    // 如果状态绑定数据则根据值更改属性：普通、隐藏、禁用、只读
    const basicStatusValue = originProps.basicStatus;
    if (basicStatusValue) {
      const statObject = basicStatusTransfer(basicStatusValue);
      Object.assign(originProps, statObject);
      // 存量数据不兼容，以下的判断存量数据和事件控制显隐的判断冲突
      //   originProps.disabled =
      //     originProps.disabled !== undefined
      //       ? originProps.disabled
      //       : disabledProp;
      //   originProps.visible =
      //     originProps.visible !== undefined ? originProps.visible : visibleProp;
      //   originProps.readOnly =
      //     originProps.readOnly !== undefined
      //       ? originProps.readOnly
      //       : readOnlyProp;
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
          ...(originProps?.headExtends || []),
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
  // 'BOFramer|Pageview|RemoteComponent|DynamicTabs': (
  //   instance,
  //   originProps,
  //   Sandbox,
  // ) => {
  //   originProps.appId = Sandbox.appId;
  //   originProps.lcdpParentRenderId = Sandbox.renderId;
  //   return originProps;
  // },
  // BOFramer: (instance, originProps, Sandbox) => {
  //   originProps.appId = Sandbox.appId;
  //   originProps.pageId = Sandbox.pageId;
  //   originProps.lcdpParentRenderId = Sandbox.renderId;
  //   return originProps;
  // },
  'Table|TreeTable': (instance, originProps) => {
    if (originProps.rowSelection) {
      // 新配置格式
      if (['radio', 'checkbox'].includes(originProps.rowSelection)) {
        originProps.rowSelection = {
          type: originProps.rowSelection,
        };
      } else {
        // 否则，兼容存量配置
        originProps.rowSelection = {
          type: originProps.selectType,
        };
      }
    } else {
      originProps.rowSelection = undefined;
    }

    return originProps;
  },
  'DatePicker|TimePicker': (instance, originProps) => {
    let newDefaultValue: any = '';
    const { isCurrent, defaultValue, customTime } = originProps;
    // props中存在isCurrent/customTime属性，就转化。兼容HJB数据, 存在props上有isCurrent和customTime 同时defaultValue还是对象，时候不处理
    if (
      hasSomeOwnProperty(originProps, ['isCurrent', 'customTime']) &&
      typeof originProps.defaultValue !== 'object'
    ) {
      originProps.defaultValue = {
        isCurrent,
        defaultValue,
        customTime,
        type: (() => {
          if (isCurrent) {
            return 'isCurrent';
          }
          if (customTime) {
            return 'custom';
          }
          return 'now';
        })(),
      };
      delete originProps.isCurrent;
      delete originProps.customTime;
    }
    if (
      originProps.defaultValue &&
      typeof originProps.defaultValue === 'object' &&
      originProps.defaultValue.type
    ) {
      switch (originProps.defaultValue.type) {
        case 'isCurrent':
          newDefaultValue = new Date();
          break;
        // now custom
        default:
          newDefaultValue = originProps.defaultValue.defaultValue;
          break;
      }
      originProps.defaultValue = newDefaultValue;
    }
    return originProps;
  },
  // Divider: (instance, originProps, Sandbox, extraData) => {
  //   // 说明是3.3.1 之前的数据
  //   if (Sandbox?.compatConfig?.isFormCompat === true) {
  //     if (!originProps.dividerColor) {
  //       // 默认是灰色
  //       originProps.dividerColor = 'rgba(0,0,0,0.15)';
  //     }
  //   }
  //   return originProps;
  // },
};

export default pc;
