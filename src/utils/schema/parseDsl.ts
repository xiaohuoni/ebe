import { SandBoxContext } from '@lingxiteam/types';
import { boframer } from './compat';
import { parseExpr } from './parseExpr';
import parseEventCtx from './parseEventCtx';

export declare type IPublicSchemaType = Record<string, any>;

const getEvents = (_events: any) => {
  // 收集打开自定义弹窗的动作
  const [modalActions, drawerActions] = [[], []];
  let ind = 0;

  const getConditionCode = (_condition: any) => {
    const {
      children = [],
      condition,
      dataId,
      shielding,
      elseIfs,
      path,
    } = _condition;
    ind += 1;
    _condition.line_number = ind;
    const _res: any = {
      type: 'ifelse',
      shielding,
      condition,
      path,
      dataId,
      elseIfs,
      line_number: ind,
    };

    // 有callback
    if (Array.isArray(children) && children.length) {
      _res.callback1 = [];
      children.map((ca) => {
        // eslint-disable-next-line
        _res.callback1.push(getActionCode(ca));
        return ca;
      });
    }

    if (elseIfs && elseIfs.length) {
      elseIfs.forEach((_e: any) => {
        // 有callback
        if (Array.isArray(_e.children) && _e.children.length) {
          _e.callback = [];
          _e.children.map((ca: any) => {
            // eslint-disable-next-line
            _e.callback.push(getActionCode(ca));
            return ca;
          });
        }
      });
    }

    return _res;
  };
  const getActionCode = (_action: any) => {
    const {
      value,
      options,
      children = [],
      dataName,
      shielding,
      dataId,
      path,
    } = _action;
    if (dataName === 'condition') {
      return getConditionCode(_action);
    }

    // if (options && options.paramsObj) {
    //   // 对需要设置详细参数的动作进行数据转换
    //   processCustomParams(options, value, appId);
    // }
    if (options?.compid) {
      // 如果指令的options内出现了小写compid的现象，那么用后者覆盖前者
      // WARNING：这可能是个历史遗留问题，通常情况下，compId指的是页面上的组件id，但是编辑器传达的compId是指令类名，
      // 小写的compid才是组件ID
      options.compId = options.compid;
    }
    ind += 1;
    _action.line_number = ind;
    const _res: any = {
      type: value || dataName,
      dataId,
      shielding,
      options,
      path,
      line_number: ind,
    };
    // 有callback
    if (Array.isArray(children) && children.length) {
      children.map((ca) => {
        // eslint-disable-next-line
        _res[ca.value] = getCallBack(ca);
        return ca;
      });
    }
    if (_res.type === 'showCustomModal') {
      // @ts-ignore
      modalActions.push({ ..._res });
    }
    if (_res.type === 'showDrawer') {
      // @ts-ignore
      drawerActions.push({ ..._res });
    }
    return _res;
  };
  const getCallBack = (_callBack: any) => {
    const { children, dataId, params } = _callBack;
    const cb = children.map((c: any) => getActionCode(c));
    [cb.id, cb.params] = [dataId, params];
    return cb;
  };

  const eName = _events.value;
  const eChildren = _events.children || [];
  // 处理事件下面的 actions
  const eValue = eChildren.map((c: any) => {
    if (c.dataName === 'action') {
      return getActionCode(c);
    }
    if (c.dataName === 'condition') {
      return getConditionCode(c);
    }
    return null;
  });
  eValue.params = _events.params;
  return {
    eName,
    eValue,
    modalActions,
    drawerActions,
  };
};

// 预处理数据源
const pareseDataSoure = (schema: IPublicSchemaType) => {
  // 数据源处理，存在initialData为null的，处理成undefined
  // 以避免在数据源里的null值破坏默认值表现
  schema?.dataSource?.forEach((d: any) => {
    d?.filterParams?.forEach((i: any) => {
      if (i?.initialData?.type === 'static' && i?.initialData?.value === null) {
        i.initialData.value = undefined;
      }
    });
    d?.outParams?.forEach((i: any) => {
      if (i?.initialData?.type === 'static' && i?.initialData?.value === null) {
        i.initialData.value = undefined;
      }
    });
  });
};

// 自定义表达式替换真实value
const replaceFunctorValue = (comp: IPublicSchemaType = {}, isRoot = false) => {
  const functors = comp.functors || {};
  if (Object.keys(functors).length === 0) {
    return;
  }
  const compProps = isRoot ? comp : comp.props;
  Object.keys(compProps || {}).forEach((key) => {
    const val = compProps[key];
    // eslint-disable-next-line no-control-regex
    if (typeof val === 'string' && /^\$.+[^\x05]*\$.*/g.test(val)) {
      if (functors[key]) {
        compProps[key] = functors[key].value;
      }
    } else if (Object.prototype.toString.call(val) === '[object Object]') {
      Object.keys(val).forEach((valKey) => {
        const cVal = val[valKey];
        // eslint-disable-next-line no-control-regex
        if (typeof cVal === 'string' && /^\$.+[^\x05]*\$.*/g.test(cVal)) {
          if (functors[key] && functors[key][valKey]) {
            compProps[key][valKey] = functors[key][valKey].value;
          }
        }
      });
    }
  });
};

const parseDsl = (schema: IPublicSchemaType, isRoot: boolean) => {
  // 如果是跟节点，需要添加事件
  if (isRoot) {
    pareseDataSoure(schema);
    replaceFunctorValue(schema, true);
    let { setEvents = [] } = schema;
    // 业务组件事件名称和页面事件区分，做映射关系
    if (schema.pageContainerType === 'BusiComp') {
      setEvents = boframer.compatEngineEvents(setEvents);
    }
    (setEvents || []).forEach((e: any) => {
      const events = getEvents(e);
      const { eName, eValue } = events;
      schema.events[eName] = {
        id: `${eName}`,
        value: eValue,
      };
    });
  } else {
    // 函数表达式替换真实值
    replaceFunctorValue(schema);
    schema.events = {};
    // 处理控件动作
    schema.setEvents?.forEach((e: any) => {
      const events = getEvents(e);
      const { eName, eValue } = events;
      schema.events[eName] = {
        id: `${schema.compName}_${schema.id}_${eName}`,
        value: eValue,
      };
    });
    // 自定义配置的类名，customClass 会使用
    schema.originClassName = schema.props.className || '';
    schema.props['data-compid'] = schema.id;
  }
  return schema;
};

/**
 * 处理自定义函数
 * @param customFuctions
 * @returns
 */
const parseCustomFuction = (
  customFuctions: [],
  context: SandBoxContext,
  CMDParse: any,
) => {
  const customActionMap: any = {};
  customFuctions?.forEach((o: any) => {
    if (o.implementation === 'custom') {
      // eslint-disable-next-line prefer-destructuring
      let dynamicActionSource = o.dynamicActionSource;
      if (context.currentPlatform === 'h5') {
        dynamicActionSource = dynamicActionSource.replaceAll(
          'mobileLcdpApi',
          'lcdpApi',
        );
        dynamicActionSource = dynamicActionSource.replaceAll(
          'window.lcdpApi',
          'lcdpApi',
        );
      }
      // 这是自定义js代码，用eval的
      customActionMap[o.eventCode] = parseExpr(dynamicActionSource, {
        ...context,
        customActionMap,
        customEventCode: o.eventCode,
        customEventName: o.eventName,
      });

      /**
       * @deprecated 兼容DICT数据，新版不可能出现两次sandBoxRun
       */
      if (typeof customActionMap[o.eventCode] === 'string') {
        customActionMap[o.eventCode] = parseExpr(customActionMap[o.eventCode], {
          ...context,
        });
      }
    } else if (Array.isArray(o.setEvents) && o.setEvents[0]) {
      // 是事件编排的，要处理成指令执行
      const etData = getEvents(o.setEvents[0]).eValue;
      customActionMap[o.eventCode] = (...args: any[]) => {
        // 供指令集使用的内部方法集合（API系？）

        const topparam = parseEventCtx({
          eventCfg: etData,
          args,
        });

        return CMDParse(etData)(topparam, {
          ...context,
          customEventCode: o.eventCode,
          customEventName: o.eventName,
        });
      };
    }
  });
  return customActionMap;
};
export { parseDsl, parseCustomFuction };
