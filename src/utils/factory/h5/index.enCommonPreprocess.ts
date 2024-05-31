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
 * 组件渲染前预处理逻辑(配置态运行态都生效)
 */
const h5 = {
  Button: (component: JSONType = {}) => {
    const { props = {} } = component;
    // 兼容存量数据不存在 hasIcon（是否有图标开关标识）
    if (props?.icontype && JSON.stringify(props.icontype) !== '{}') {
      props.btnIcon = true;
    } else {
      props.btnIcon = false;
    }
    if (props.name && !props.children) {
      props.children = props.name;
    }
    if (props.disabled !== undefined) {
      if (props.disabled) {
        props.status = '3';
      } else {
        props.status = '1';
      }
      delete props.disabled;
    }
    return component;
  },
  Icon: (component: JSONType = {}) => {
    const { props = {} } = component;
    if (props.type && typeof props.type === 'object') {
      props.icon = props.type;
      delete props.type;
    }
    if (props.hasOwnProperty('state')) {
      props.status = props.state;
      delete props.state;
    }
    return component;
  },
  Divider: (component: JSONType = {}) => {
    const { props = {} } = component;
    if (props.status !== undefined) {
      props.visible = props.status;
      delete props.status;
    }
    return component;
  },
  'DatePicker|Calendar|Picker': (component: JSONType = {}) => {
    // TODO: 1.0.9 版本数据兼容
    if (!component.props.hasOwnProperty('visible')) {
      component.props.visible = false;
    }
    return component;
  },
  DMultiplePicker: (component: JSONType = {}) => {
    // 多项选择的最多可选项合并到最大选中数中，取两者最小值
    if (component.props.maxValueLength !== undefined) {
      component.props.max = component.props.max
        ? Math.min(component.props.max, component.props.maxValueLength)
        : component.props.maxValueLength;
      component.props.maxValueLength = undefined;
    }
    return component;
  },
  DformDate: (component: JSONType = {}) => {
    const { props = {} } = component;
    const { isCurrent, defaultValue, customTime } = props;
    // props中存在isCurrent/customTime属性，就转化。
    if (hasSomeOwnProperty(props, ['isCurrent', 'customTime'])) {
      props.defaultValue = {
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
      delete props.isCurrent;
      delete props.customTime;
    }
    return component;
  },
  // 处理icon 图标
  'DMultiplePicker|DformDate|DformInput|DformSelect|DformPicker': (
    component: JSONType = {},
  ) => {
    const { props = {} } = component;
    if (props.hasOwnProperty('type')) {
      delete props.type;
      delete props.theme;
      delete props.fontAddress;
      delete props.isIconFont;
      delete props.iconFileInfo;
      delete props.svgContent;
      delete props.iconFile;
    }
    return component;
  },
  DformFile: (component: JSONType = {}) => {
    // 新数据改成  accept、acceptExtension 从uploadAccepType当中获取  eg uploadAccepType = {accept,acceptExtension}
    const { props = {} } = component;
    const { accept, acceptExtension } = props;

    // fix: 因DSL中无uploadAccepType属性导致的报错
    props.uploadAccepType = props.uploadAccepType ?? {};

    if (props.hasOwnProperty('accept')) {
      props.uploadAccepType.accept = accept;
      delete props?.accept;
    }
    if (props.hasOwnProperty('acceptExtension')) {
      props.uploadAccepType.acceptExtension = acceptExtension;
      delete props?.acceptExtension;
    }
    // 存量数据文件最大上传大小为数字类型 单位MB，转成字符串
    if (typeof props.singleFileMaxSize === 'number') {
      props.singleFileMaxSize += 'MB';
    }
    return component;
  },
  // 兼容处理下存量的身份证校验规则
  'DformInput|Input': (component: JSONType) => {
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
  // 处理backgroundType的存量数据
  'Accordion|Animation|Audio|BlockSelect|Card|DForm|Donut|Loop|NoticeBarPlus|Pageview|Selector|View':
    (component: JSONType) => {
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

export default h5;
