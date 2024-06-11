import { JSONType } from '@lingxiteam/types';

/**
 * 是否包含某属性，或的关系。 包含`propertyNames`中的一个值即可
 * @param target
 * @param propertyNames
 */
export const hasSomeOwnProperty = (target: Object, propertyNames: string[]) => {
  return propertyNames.some((property) => target.hasOwnProperty(property));
};

/**
 * 是否包含某属性，且的关系。 必须包含`propertyNames`中的所有属性
 * @param target
 * @param propertyNames
 * @returns
 */
export const hasEveryOwnProperty = (
  target: Object,
  propertyNames: string[],
) => {
  return propertyNames.every((property) => target.hasOwnProperty(property));
};

/**
 * 组件渲染前预处理逻辑(配置态运行态都会执行)
 */
const pc = {
  Button: (component: JSONType = {}) => {
    const { props = {} } = component;
    // const { popoverSetting, showPopover } = props;
    if (props.iconType && !props.icon) {
      const { theme, fontAddress, isIconFont, svgContent, iconFile } = props;
      props.icon = {
        type: props.iconType,
        theme,
        fontAddress,
        isIconFont,
        svgContent,
        iconFile,
      };
      props.icon.type = props.iconType;
      delete props.iconType;
    }
    delete props.theme;
    delete props.fontAddress;
    delete props.isIconFont;
    delete props.iconFileInfo;
    delete props.svgContent;
    delete props.iconFile;
    // 删除垃圾dsl
    delete props.classification;
    delete props.autoProcessFlow;
    delete props.flowProcessResult;
    delete props.btnIcon;

    // 兼容存量数据不存在 hasIcon（是否有图标开关标识）
    if (props?.icon && JSON.stringify(props.icon) !== '{}') {
      props.hasIcon = true;
    } else {
      // props.hasIcon = false;
    }

    return component;
  },
  'Dropdown|Menu': (component: JSONType = {}) => {
    const { props = {} } = component;
    // 存量垃圾数据的删除Menu
    if (props.extendRules && component.type === 'Menu') {
      delete props.extendRules;
    }
    delete props.iconInfo;
    return component;
  },
  'Input|Card|Collapse': (component: JSONType = {}) => {
    const { props = {} } = component;
    if (!props.icon) {
      props.icon = {
        type: props.type,
        theme: props.theme || 'outlined',
        fontAddress: '',
        isIconFont: false,
        iconFileInfo: {},
      };
    }
    delete props.type;
    delete props.theme;
    delete props.fontAddress;
    delete props.isIconFont;
    delete props.iconFileInfo;
    delete props.svgContent;
    delete props.iconFile;
    if (!props.prefixIcon) {
      props.prefixIcon = {
        type: props.prefixIconType,
        theme: props.prefixIconTheme || 'outlined',
        fontAddress: '',
        isIconFont: false,
        iconFileInfo: {},
      };
    }
    delete props.prefixIconIconFileInfo;
    delete props.prefixIconIsIconFont;
    delete props.prefixIconType;
    delete props.prefixIconTheme;
    delete props.prefixIconFontAddress;
    delete props.prefixIconiconFile;
    return component;
  },
  'StdUpload|Icon': (component: JSONType = {}) => {
    const { props = {} } = component;
    if (!props.icon) {
      // 存量数据新增icon属性
      props.icon = {
        type: props.type,
        theme: props.theme || 'outlined',
        fontAddress: '',
        isIconFont: false,
        iconFileInfo: {},
      };
    } else if (typeof props.icon.type === 'undefined') {
      // 部分存量数据存在props.icon但type缺失
      props.icon.type = props.type;
    }
    delete props.type;
    delete props.theme;
    delete props.fontAddress;
    delete props.isIconFont;
    delete props.iconFileInfo;
    delete props.svgContent;
    delete props.iconFile;
    return component;
  },
  Upload: (component: JSONType) => {
    const { props = {} } = component;
    if (props.hasOwnProperty('action')) {
      // 旧数据含有action
      props.columns.api = props.action;
      delete props.action;
    }
    if (hasEveryOwnProperty(props, ['accept', 'acceptType'])) {
      // 实际数据是取acceptType
      delete props.accept;
    }
    return component;
  },
  StdUpload: (component: JSONType) => {
    const { props } = component;
    const { accept, acceptExtension, action } = props;
    // 旧数据含有action
    if (props.hasOwnProperty('action')) {
      props.columns.api = action;
      delete props.action;
    }
    // 新数据改成  accept、acceptExtension 从uploadAccepType当中获取  eg uploadAccepType = {accept,acceptExtension}
    if (props.hasOwnProperty('accept')) {
      props.uploadAccepType = Object.assign({}, props.uploadAccepType, {
        accept,
      });
      delete props.accept;
    }
    if (props.hasOwnProperty('acceptExtension')) {
      props.uploadAccepType = Object.assign({}, props.uploadAccepType, {
        acceptExtension,
      });
      delete props.acceptExtension;
    }
    if (typeof props.singleFileMaxSize === 'number') {
      props.singleFileMaxSize += 'MB';
    }
    if (typeof props.singleFileMinSize === 'number') {
      props.singleFileMinSize += 'MB';
    }
    return component;
  },
  TreeSelect: (component: JSONType) => {
    const { props } = component;
    const {
      multiple,
      treeNodeFilterProp,
      treeCheckable,
      filter = 'local',
    } = props;
    if (props.hasOwnProperty('multiple')) {
      // 废除multiple，多选统一设置为treeCheckable
      component.props.treeCheckable = multiple || treeCheckable;
      delete props.multiple;
    }
    if (props.hasOwnProperty('treeNodeFilterProp')) {
      // 以前设置了过滤搜索值的，统一设置为本地过滤
      component.props.filter = treeNodeFilterProp ? 'local' : filter;
      delete props.treeNodeFilterProp;
    }
    return component;
  },
  Input: (component: JSONType) => {
    // 兼容处理下存量的身份证校验规则
    const { regexp } = component?.props;
    if (Array.isArray(regexp)) {
      const oldRegStr =
        '/^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[12])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|X)$/';
      const newRegStr =
        '/^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|X)$/';
      // 运行态会给正则加上$$符号
      const idCardRegexp = regexp.find(
        (reg: any) =>
          reg.pattern === `$${oldRegStr}$` || reg.pattern === oldRegStr,
      );
      if (idCardRegexp) {
        if (/^\$.+\$$/.test(idCardRegexp.pattern)) {
          idCardRegexp.pattern = `$${newRegStr}$`;
        } else {
          idCardRegexp.pattern = newRegStr;
        }
      }
    }
    return component;
  },
  Description: (component: JSONType) => {
    // 描述列表标签宽度增加多种单位，将存量属性同步到新属性上
    const { labelWidth } = component?.props;
    if (labelWidth !== undefined && labelWidth !== null) {
      component.props.labelSize = `${labelWidth}px`;
      component.props.labelWidth = undefined;
    }
    return component;
  },
  Steps: (component: JSONType) => {
    const { props = {} } = component;
    // 删除遗留存量无用数据
    delete props.showInfo;

    /** ****2023.9.19之前的旧存量处理逻辑，9.19之后删除无用的数据，方便后续删除这段旧逻辑 ******* */
    // HJD使用dataSource，但是HJE已经弃用dataSource，按理无需该存量处理，删除
    if (props?.options && !props.dataSource) {
      // 自定义的
      // props.dataSource = props.options;
      delete props.options;
    }

    if (props.stepsOptions) {
      // 兼容存量数据
      if (props.stepsOptions.type === 'custom') {
        props.stepsOptions = props.stepsOptions.data;
      }
      // 兼容存量服务数据
      if (props.stepsOptions.type === 'service') {
        props.alias = props.stepsOptions.data;
        props.stepsOptions = props.defaultStepsOptions;
      }
    }

    if (props?.defaultStepsOptions) {
      delete props.defaultStepsOptions;
    }

    /** ***************************************************************************** */
    // 存量处理1:是否为点状，要修改为样式传入
    if (!props.stepStyle) {
      if (typeof props.progressDot === 'boolean') {
        props.stepStyle = props.progressDot ? 'dot' : 'number';
        // 删除存量是否为点状数据
        delete props.progressDot;
      } else {
        props.stepStyle = 'number';
      }
    }
    return component;
  },
  Rate: (component: JSONType) => {
    const { props } = component;
    const { tooltipType } = props;
    // 存量没有tooltipType,默认给custom，配置表走默认的number
    if (!tooltipType) {
      props.tooltipType = 'custom';
    }
    return component;
  },
  Table: (component: JSONType) => {
    const { props } = component;
    const { rowActions = [], extend = [], headExtends = [] } = props;
    [...rowActions, ...extend, ...headExtends].forEach((action: any) => {
      // 兼容存量数据，转 checked undefined 为 true
      if (typeof action.checked === 'undefined') {
        action.checked = true;
      }
      if (typeof action.id === 'number') {
        action.id = `${action.id}`;
      }
    });
    return component;
  },
  // 处理backgroundType的存量数据
  'Animation|Audio|Card|CollapsePanel|Form|FreeLayout|LoopList|Row|View': (
    component: JSONType,
  ) => {
    // 如果style存在了，将style数据转化成在props上，并删除style上的数据
    if (
      component?.style?.backgroundColor &&
      !component?.props?.backgroundType
    ) {
      component.props.backgroundType = {
        type: 'cleanColor',
        color: component?.style?.backgroundColor,
      };
      delete component?.style?.backgroundColor;
      // style上有值，props有值，删除style垃圾数据
    } else if (
      component?.style?.backgroundColor &&
      component?.props?.backgroundType
    ) {
      delete component?.style?.backgroundColor;
    }
    return component;
  },
};

export default pc;
