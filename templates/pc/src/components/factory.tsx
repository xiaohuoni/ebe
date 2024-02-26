import { useComponentHoc } from '@lingxiteam/engine-render-core/es/hooks/useComponentHoc';
import type { ImperativeHandleReturn } from '@lingxiteam/types';
import { isEqual } from 'lodash';
import React, { useImperativeHandle, useMemo } from 'react';

import {
  Alert as _Alert,
  Animation as _Animation,
  Audio as _Audio,
  BarChart as _BarChart,
  Button as _Button,
  Card as _Card,
  Cascader as _Cascader,
  ChartBar as _ChartBar,
  ChartLine as _ChartLine,
  Checkbox as _Checkbox,
  CheckboxGroup as _CheckboxGroup,
  Collapse as _Collapse,
  CollapsePanel as _CollapsePanel,
  Condition as _Condition,
  DatePicker as _DatePicker,
  Description as _Description,
  Divider as _Divider,
  Dropdown as _Dropdown,
  Form as _Form,
  FreeLayout as _FreeLayout,
  Gantt as _Gantt,
  GridView as _GridView,
  HorizontalView as _HorizontalView,
  Icon as _Icon,
  Img as _Img,
  Input as _Input,
  InputNumber as _InputNumber,
  Layout as _Layout,
  LineChart as _LineChart,
  Link as _Link,
  LoopList as _LoopList,
  LXPieChart as _LXPieChart,
  LXRadarChart as _LXRadarChart,
  Menu as _Menu,
  ModalSelect as _ModalSelect,
  MultipleSelect as _MultipleSelect,
  Pagination as _Pagination,
  Password as _Password,
  PictureVerifyCode as _PictureVerifyCode,
  PieChart as _PieChart,
  Progress as _Progress,
  QRCode as _QRCode,
  QuillEditor as _QuillEditor,
  RadarChart as _RadarChart,
  Radio as _Radio,
  RangePicker as _RangePicker,
  Rate as _Rate,
  RemoteComponent as _RemoteComponent,
  Result as _Result,
  RichTextEditor as _RichTextEditor,
  Row as _Row,
  Select as _Select,
  Slider as _Slider,
  StdUpload as _StdUpload,
  Steps as _Steps,
  SuperSelect as _SuperSelect,
  Swiper as _Swiper,
  Switch as _Switch,
  Table as _Table,
  TabPane as _TabPane,
  Tabs as _Tabs,
  Tag as _Tag,
  Text as _Text,
  TextArea as _TextArea,
  TimePicker as _TimePicker,
  TlrView as _TlrView,
  Transfer as _Transfer,
  Tree as _Tree,
  TreeSelect as _TreeSelect,
  TreeTable as _TreeTable,
  Upload as _Upload,
  VerificationCode as _VerificationCode,
  VerticalView as _VerticalView,
  VideoPlayer as _VideoPlayer,
  View as _View,
  VirtualGroup as _VirtualGroup,
  Webview as _Webview,
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
export const Alert = Hoc(_Alert);
export const Animation = Hoc(_Animation);
export const Audio = Hoc(_Audio);
export const BarChart = Hoc(_BarChart);
export const Button = Hoc(_Button);
export const Card = Hoc(_Card);
export const ChartBar = Hoc(_ChartBar);
export const ChartLine = Hoc(_ChartLine);
export const Collapse = Hoc(_Collapse);
export const CollapsePanel = Hoc(_CollapsePanel);
export const Condition = Hoc(_Condition);
export const Description = Hoc(_Description);
export const Divider = Hoc(_Divider);
export const Dropdown = Hoc(_Dropdown);
export const Form = Hoc(_Form);
export const FreeLayout = Hoc(_FreeLayout);
export const Gantt = Hoc(_Gantt);
export const GridView = Hoc(_GridView);
export const HorizontalView = Hoc(_HorizontalView);
export const Icon = Hoc(_Icon);
export const Img = Hoc(_Img);
export const LXPieChart = Hoc(_LXPieChart);
export const LXRadarChart = Hoc(_LXRadarChart);
export const Layout = Hoc(_Layout);
export const LineChart = Hoc(_LineChart);
export const Link = Hoc(_Link);
export const Menu = Hoc(_Menu);
export const Pagination = Hoc(_Pagination);
export const PictureVerifyCode = Hoc(_PictureVerifyCode);
export const PieChart = Hoc(_PieChart);
export const RadarChart = Hoc(_RadarChart);
export const RemoteComponent = Hoc(_RemoteComponent);
export const Result = Hoc(_Result);
export const Row = Hoc(_Row);
export const Steps = Hoc(_Steps);
export const Swiper = Hoc(_Swiper);
export const TabPane = Hoc(_TabPane);
export const Table = Hoc(_Table);
export const Tabs = Hoc(_Tabs);
export const TlrView = Hoc(_TlrView);
export const Tree = Hoc(_Tree);
export const TreeTable = Hoc(_TreeTable);
export const VerticalView = Hoc(_VerticalView);
export const VideoPlayer = Hoc(_VideoPlayer);
export const View = Hoc(_View);
export const VirtualGroup = Hoc(_VirtualGroup);
export const Webview = Hoc(_Webview);
