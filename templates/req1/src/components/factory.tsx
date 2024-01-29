import { useComponentHoc } from '@lingxiteam/engine-render-core/es/hooks/useComponentHoc';
import type { ImperativeHandleReturn } from '@lingxiteam/types';
import { isEqual } from 'lodash';
import React, { useImperativeHandle, useMemo } from 'react';

import {
  Cascader as _Cascader,
  Checkbox as _Checkbox,
  CheckboxGroup as _CheckboxGroup,
  DatePicker as _DatePicker,
  Input as _Input,
  InputNumber as _InputNumber,
  LoopList as _LoopList,
  ModalSelect as _ModalSelect,
  MultipleSelect as _MultipleSelect,
  Password as _Password,
  Progress as _Progress,
  QRCode as _QRCode,
  QuillEditor as _QuillEditor,
  Radio as _Radio,
  RangePicker as _RangePicker,
  Rate as _Rate,
  RichTextEditor as _RichTextEditor,
  Select as _Select,
  Slider as _Slider,
  StdUpload as _StdUpload,
  SuperSelect as _SuperSelect,
  Switch as _Switch,
  Tag as _Tag,
  Text as _Text,
  TextArea as _TextArea,
  TimePicker as _TimePicker,
  Transfer as _Transfer,
  TreeSelect as _TreeSelect,
  Upload as _Upload,
  VerificationCode as _VerificationCode,
} from '@lingxiteam/pcfactory/es/index.component';
export {
  Alert,
  Animation,
  Audio,
  BarChart,
  Button,
  Card,
  ChartBar,
  ChartLine,
  Collapse,
  CollapsePanel,
  Condition,
  Description,
  Divider,
  Dropdown,
  Form,
  FreeLayout,
  Gantt,
  GridView,
  HorizontalView,
  Icon,
  Img,
  LXPieChart,
  LXRadarChart,
  Layout,
  LineChart,
  Link,
  Menu,
  Pagination,
  PictureVerifyCode,
  PieChart,
  RadarChart,
  RemoteComponent,
  Result,
  Row,
  Steps,
  Swiper,
  TabPane,
  Table,
  Tabs,
  TlrView,
  Tree,
  TreeTable,
  VerticalView,
  VideoPlayer,
  View,
  VirtualGroup,
  Webview,
} from '@lingxiteam/pcfactory/es/index.component';

export const syncInputValue = (
  e: unknown,
  preValue: unknown,
  setValue: (v: unknown) => void,
) => {
  if (!isEqual(e, preValue)) {
    setValue(e);
    return true;
  }
  return false;
};

const Hoc = (Component: any, fieldProps: any) => {
  const fieldPropsChange = () => {};

  const HOC = React.forwardRef<unknown, HOCProps>((props, ref) => {
    // 自定义组件HOC hooks  保持visible逻辑
    //@ts-ignore
    const { state, setState, onChangeHandle } = useComponentHoc(props, {
      // @ts-ignore
      config: { fieldProps },
      fieldPropsChange,
    });

    const compProps: any = { ...props, visible: state.visible };

    compProps.ref = ref;

    if (onChangeHandle) {
      compProps[fieldProps?.trigger!] = onChangeHandle;
    }

    if (fieldProps?.valuePropName) {
      compProps[fieldProps?.valuePropName] = state.value;
    }

    // 引擎能力增加仅同步数据的方法
    compProps.getEngineApis = useMemo(() => {
      return () => {
        return {
          ...props.getEngineApis(),
          onlySyncValue: (v: unknown) => {
            syncInputValue(v, state.value, (v) => setState({ value: v }));
          },
        };
      };
    }, [state.value]);

    let imperative: ImperativeHandleReturn = {
      get compName() {
        return compProps.$$componentItem.type;
      },
      get visible() {
        return state.visible;
      },
      get compId() {
        return compProps.$$componentItem.id;
      },
      setVisible(show: boolean | 'toggle') {
        setState({
          visible: show === 'toggle' ? !state.visible : show,
        });
      },
      get value() {
        return state.value;
      },
      setValue(v: unknown) {
        syncInputValue(v, state.value, (v) => setState({ value: v }));
        // if (onChangeHandle) {
        //   onChangeHandle(v);
        // }
      },
    };

    useImperativeHandle(compProps.ref, () => imperative);

    // 统一处理部分逻辑
    return <Component {...compProps} {...(compProps?.extendProps || {})} />;
  });

  return HOC;
};
// 低代码组件中，表单组件，要根据 fieldProps 配置，操作 value 和 setValue
export const Cascader = Hoc(_Cascader, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Checkbox = Hoc(_Checkbox, {
  trigger: 'onChange',
  valuePropName: 'checked',
});
export const CheckboxGroup = Hoc(_CheckboxGroup, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const DatePicker = Hoc(_DatePicker, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Input = Hoc(_Input, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const InputNumber = Hoc(_InputNumber, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const LoopList = Hoc(_LoopList, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const ModalSelect = Hoc(_ModalSelect, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const MultipleSelect = Hoc(_MultipleSelect, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Password = Hoc(_Password, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Progress = Hoc(_Progress, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const QRCode = Hoc(_QRCode, {
  trigger: 'onChange',
  valuePropName: 'content',
});
export const QuillEditor = Hoc(_QuillEditor, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Radio = Hoc(_Radio, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const RangePicker = Hoc(_RangePicker, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Rate = Hoc(_Rate, { trigger: 'onChange', valuePropName: 'value' });
export const RichTextEditor = Hoc(_RichTextEditor, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Select = Hoc(_Select, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Slider = Hoc(_Slider, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const StdUpload = Hoc(_StdUpload, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const SuperSelect = Hoc(_SuperSelect, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Switch = Hoc(_Switch, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Tag = Hoc(_Tag, { trigger: 'onChange', valuePropName: 'title' });
export const Text = Hoc(_Text, {
  trigger: 'onChange',
  valuePropName: 'content',
});
export const TextArea = Hoc(_TextArea, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const TimePicker = Hoc(_TimePicker, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Transfer = Hoc(_Transfer, {
  trigger: 'onTransferChange',
  valuePropName: 'value',
});
export const TreeSelect = Hoc(_TreeSelect, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Upload = Hoc(_Upload, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const VerificationCode = Hoc(_VerificationCode, {
  trigger: 'onChange',
  valuePropName: 'value',
});
