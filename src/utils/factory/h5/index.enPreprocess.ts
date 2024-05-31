/**
 * 组件渲染前预处理逻辑(仅仅运行态生效)
 */
import { ProcessFunctionType } from '@lingxiteam/types';
import comH5 from './index.enCommonPreprocess';

/**
 * FIXME:
 * 移除 表达式两头包裹的 $$
 * 请注意，这里的目的是：一些特殊属性配置需要保留“表达式的内容“，防止携带 $$ 会在 DSL解析时，在 processProps 被解析掉
 * 请考虑之后是否可以优化 props 的表达式解析，可以指定特殊的属性不被解析，解析方式统一用沙箱处理而不是 eval
 */
const removeExpressWrapper = (exp: string) =>
  /^\$.*\$$/g.test(exp) ? exp.replace(/\$/g, '') : exp;

const processPropsWithStaticData = (
  key = 'dataSource',
  originProps: any,
  compId: string,
  extraData: any,
) => {
  if (originProps.staticData?.type === 'static') {
    // 上报静态数据关联关系
    originProps[key] = extraData?.collectRelationKey(
      compId,
      originProps?.staticData?.data?.attrNbr,
      originProps?.staticData?.data?.childKeys,
    );
  } else if (originProps.staticData?.type === 'custom') {
    originProps[key] = originProps.staticData.data;
  } else if (originProps.staticData?.type === 'val') {
    originProps[key] = originProps.staticData.data;
  } else if (originProps.staticData?.type === 'dataSource') {
    const ds = originProps.staticData?.data?.dataSource.replace(/\$/g, '');
    originProps[
      key
    ] = `$getStaticDataSourceService(${ds}, "${originProps.staticData?.data?.labelKey}", "${originProps.staticData?.data?.valueKey}")$`;
  } else if (originProps.staticData?.type === 'service') {
    // 目前应该已经没有service了
    originProps[key] = originProps.staticData.data;
  }
  delete originProps.staticData;
};

/**
 * 处理选项设置属性的垃圾dsl
 * @param originProp
 */
const handleStaticData = (originProps: any) => {
  if (originProps?.attr?.attrNbr) {
    originProps.staticData = {};
    originProps.attr.selectedKeyTags = undefined;
    originProps.staticData.data = originProps.attr;
    originProps.staticData.type = 'static';
    delete originProps.attr;
  } else if (originProps?.options) {
    originProps.staticData = {};
    originProps.staticData.data = originProps.options;
    originProps.staticData.type = 'custom';
    delete originProps.options;
  } else if (originProps?.valName) {
    originProps.staticData = {};
    originProps.staticData.data = originProps?.valName;
    originProps.staticData.type = 'val';
    delete originProps.valName;
  } else if (originProps?.staticDataSourceService?.dataSource) {
    originProps.staticData = {};
    originProps.staticData.data = originProps?.staticDataSourceService;
    originProps.staticData.type = 'dataSource';
    delete originProps.staticDataSourceService;
  } else if (originProps?.staticService) {
    originProps.staticData = {};
    originProps.staticData.data = originProps?.staticService;
    originProps.staticData.type = 'service';
    delete originProps.staticService;
  }
};

/**
 * 组件渲染前预处理逻辑(仅仅运行态生效)
 * 请注意，这个会和index.enCommonPreprocess 合并导出，如果存在相同的key，会被覆盖。
 */
const h5: { [key: string]: ProcessFunctionType } = {
  '*': (compDSL) => {
    const { props: originProps = {} } = compDSL;
    // @note: 所有组件各自处理自己的展开逻辑
    // 扩展属性平铺
    const _extendProps = originProps.extendProps;
    if (_extendProps) {
      const extendProps = {};
      _extendProps.forEach((p: Record<string, any>) => {
        originProps[p.key] = p.value;
      });
      originProps.extendProps = extendProps;
    }
    return compDSL;
  },
  Table: (compDSL, extraData) => {
    const { props: originProps = {} } = compDSL;
    if (originProps.rowKey) {
      originProps.rowKey = originProps.rowKey.split('.').pop();
    }
    if (originProps.columns && originProps.columns.length) {
      originProps.columns.forEach(
        (
          c: {
            attr: any;
            options: any;
            staticService: any;
            valName: any;
            editoption: any;
          },
          i: string | number,
        ) => {
          const { attr, options, staticService, valName, editoption } = c;
          if (
            editoption &&
            editoption.selectoption &&
            editoption.selectoption.attr
          ) {
            originProps.columns[
              i
              // eslint-disable-next-line max-len
            ].editoption.selectoption.options = extraData?.collectRelationKey(
              compDSL.id,
              editoption.selectoption.attr.attrNbr,
              editoption.selectoption.attr?.childKeys,
            );
            originProps.columns[
              i
              // eslint-disable-next-line max-len
            ].staticDataSource = extraData?.collectRelationKey(
              compDSL.id,
              editoption.selectoption.attr.attrNbr,
              editoption.selectoption.attr?.childKeys,
            );
            delete originProps.columns[i].editoption.selectoption.attr;
          }
          if (attr && attr.attrNbr) {
            originProps.columns[i].staticDataSource =
              extraData?.collectRelationKey(
                compDSL.id,
                attr.attrNbr,
                attr.childKeys,
              );
            delete originProps.columns[i].attr;
          } else if (options && options.length) {
            originProps.columns[i].staticDataSource = options;
            delete originProps.columns[i].options;
          } else if (staticService) {
            originProps.columns[i].staticService = {
              labelKey: staticService.labelKey,
              valueKey: staticService.valueKey,
            };
          } else if (valName) {
            originProps.columns[i].staticDataSource = valName;
            delete originProps.columns[i].valName;
          }
        },
      );
    }
    originProps.rowSelection = originProps.rowSelection
      ? {
          type: originProps.selectType,
        }
      : undefined;
    originProps.pagination = originProps.page
      ? { pageSize: originProps.pageSize }
      : undefined;
    originProps.style = compDSL.style;
    if (!originProps.scroll || (originProps.scroll && !originProps.scroll.x)) {
      delete originProps.scroll;
    }
    return compDSL;
  },
  Donut: (compDSL) => {
    const { props: originProps = {}, functors = {} } = compDSL;

    if (typeof originProps.customProgressCode === 'string') {
      originProps.customProgressCode = removeExpressWrapper(
        functors.customProgressCode?.value || originProps.customProgressCode,
      );
      if (functors?.customProgressCode) {
        delete originProps.customProgressCode;
      }
    } else if (
      originProps.customProgressCode &&
      typeof originProps.customProgressCode === 'object'
    ) {
      const { targetVal, jsx } = originProps.customProgressCode;
      originProps.customProgressCode = {
        targetVal: removeExpressWrapper(targetVal),
        jsx,
      };
    }
    return compDSL;
  },
  DGroup: (compDSL) => {
    const { props: originProps = {} } = compDSL;
    if (Array.isArray(originProps.rowActions)) {
      originProps.rowActions = originProps.rowActions.map(
        (action: { customCode: { tVal: string } }) => {
          if (action?.customCode?.tVal) {
            action.customCode.tVal = removeExpressWrapper(
              action.customCode.tVal,
            );
          }
          return action;
        },
      );
    }
    return compDSL;
  },
  StaticTabs: (compDSL) => {
    const { props: originProps = {} } = compDSL;
    if (Array.isArray(originProps.tabs)) {
      originProps.tabs = originProps.tabs.map(
        (tab: {
          badgeRendering: string;
          jsx: { key: string };
          originCustomRendering: string;
        }) => {
          tab.badgeRendering = removeExpressWrapper(tab.badgeRendering);
          if (tab?.jsx) {
            // 运行态渲染jsx不需要原代码，清除后可加速属性转化速度
            tab.originCustomRendering = '';
          }
          return tab;
        },
      );
    }
    return compDSL;
  },

  /**
   * 处理选项设置统一
   * @param compDSL
   * @returns
   */
  'DformRadio|Picker|DMultiplePicker|StepProcess|DAddressPicker|DformSelect|DformPicker|DCheckbox':
    (compDSL, extraData) => {
      let key = 'dataSource';
      const { props: originProps = {}, compName } = compDSL;
      if (compName === 'Picker' || compName === 'DformSelect') {
        key = 'data';
      }
      handleStaticData(originProps);
      processPropsWithStaticData(key, originProps, compDSL.id, extraData);
      return compDSL;
    },
  'Image|DformFile|DformImagePicker|Signature': (component = {}) => {
    const { props = {} } = component;
    if (props.hasOwnProperty('action')) {
      // 旧数据含有action,实际用到的值和columns当中的api是相同
      props.columns.api = props.action;
      delete props.action;
    }
    return component;
  },
  DynamicTable: (compDSL) => {
    const { props } = compDSL;
    const { columns } = props;
    columns.forEach((item: any) => {
      if (item.jsx) {
        item.customRendering = removeExpressWrapper(item.customRendering);
        try {
          delete item.originCustomRendering;
        } catch (err) {
          console.log(err);
        }
      }
      if (item?.colorFormatInfo) {
        item.colorFormatInfo.forEach((c: Record<string, any>) => {
          const searchParam = c?.page?.searchParams;
          if (searchParam) {
            Object.keys(searchParam).forEach((key: string) => {
              const value = searchParam[key];
              // 使用正则表达式去掉字符串开头和结尾的 $ 符号
              searchParam[key] = value.replace(/^[$]|[$]$/g, '%');
            });
          }
        });
      }
    });
    return compDSL;
  },
  Text: (compDSL, extraData) => {
    const { props: originProps = {} } = compDSL;
    //
    if (originProps.textReg?.attr?.attrNbr) {
      const staticVar = extraData?.collectRelationKey(
        compDSL.id,
        originProps.textReg?.attr?.attrNbr,
      );

      /**
       * 如果有静态数据，增加attrNbrInfo给组件
       */
      originProps.textReg.attrNbrInfo = staticVar;
    }
    return compDSL;
  },
  'DynamicList|BlockSelect': (compDSL, extraData) => {
    const { props: originProps = {} } = compDSL;
    // 覆盖swipeAction内的rule表达式配置
    if (originProps?.swipeAction) {
      originProps.swipeAction.forEach((_action: any) => {
        if (typeof _action.rule === 'string') {
          const stringrule = _action.rule;
          _action.rule = removeExpressWrapper(stringrule);
        }
        if (typeof _action.disabled === 'string') {
          const stringdisabled = _action.disabled;
          _action.disabled = removeExpressWrapper(stringdisabled);
        }
      });
    }
    return compDSL;
  },
  DForm: (compDSL, extraData) => {
    if (
      compDSL?.busiObjectId &&
      extraData.initialRuleMap?.[compDSL.busiObjectId] &&
      extraData.openLinkageRule
    ) {
      const attrs = extraData.initialRuleMap?.[compDSL.busiObjectId];
      const attrMap: any = {};
      attrs.forEach((el: any) => {
        attrMap[el.attrCode] = el;
      });
      compDSL.components?.forEach((childComp: any = {}) => {
        const { props, compName } = childComp;
        const { fieldProps } = props || {};
        if (fieldProps && attrMap[fieldProps]) {
          const { isRequired, checkCode, checkMessage, isReadonly, isHidden } =
            attrMap[fieldProps];
          // 控件配置了隐藏优先级高于规则
          if (isHidden || Number(props.status) === 2) {
            props.status = 2;
          } else if (isReadonly) {
            props.status = 4;
          } else {
            props.status = 1;
          }
          if (isRequired && !isHidden) {
            props.required = true;
          }
          if (compName === 'DformInput' && checkCode) {
            if (Array.isArray(props.regexp)) {
              !props.regexp.find((i: any) => i.pattern === checkCode) &&
                props.regexp.unshift({
                  pattern: checkCode.substring(1, checkCode.length - 1),
                  message: checkMessage || '格式不正确',
                });
            } else {
              [props.regexp, props.message] = [
                checkCode.substring(1, checkCode.length - 1),
                checkMessage || '格式不正确',
              ];
            }
          }
        }
      });
    }

    return compDSL;
  },
  ...comH5,
};

export default h5;
