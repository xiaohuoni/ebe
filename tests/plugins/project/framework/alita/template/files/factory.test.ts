import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/factory';
import { expectValue } from '../../../../../../utils';

describe('template files factory', () => {
  test('should return the correct file factory', () => {
    const config: any = {
      platform: 'pc',
      frontendHookMap: {
        componentWillMount: null,
      },
    };

    const expectedFileContent = `import React, {
      useImperativeHandle,
      useMemo,
      useRef,
      useState,
      useEffect,
    } from 'react';
    import { isEqual } from 'lodash';
    import { mergeGetter } from '../utils/Context/context';
    import { Container } from '../utils/Context/Container';
    import { useComponentHoc } from '../utils/useComponentHoc';
    import { usePageProvider } from '@/utils/Context/Container';
    
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
      Alert as _Alert,
      Animation as _Animation,
      Audio as _Audio,
      BarChart as _BarChart,
      Button as _Button,
      Card as _Card,
      ChartBar as _ChartBar,
      ChartLine as _ChartLine,
      Collapse as _Collapse,
      CollapsePanel as _CollapsePanel,
      Condition as _Condition,
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
      LXPieChart as _LXPieChart,
      LXRadarChart as _LXRadarChart,
      Layout as _Layout,
      LineChart as _LineChart,
      Link as _Link,
      Menu as _Menu,
      Pagination as _Pagination,
      PictureVerifyCode as _PictureVerifyCode,
      PieChart as _PieChart,
      RadarChart as _RadarChart,
      RemoteComponent as _RemoteComponent,
      Result as _Result,
      Row as _Row,
      Steps as _Steps,
      Swiper as _Swiper,
      TabPane as _TabPane,
      Table as _Table,
      Tabs as _Tabs,
      TlrView as _TlrView,
      Tree as _Tree,
      TreeTable as _TreeTable,
      VerticalView as _VerticalView,
      VideoPlayer as _VideoPlayer,
      View as _View,
      VirtualGroup as _VirtualGroup,
      Webview as _Webview,
    } from './pcfactory/src/index.component';
    import { preprocessMethods } from '@/utils/preprocess';
    export { CustomComponent } from './CustomComponent';
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
    
    export const Hoc = (Component: any, config?: any) => {
      const fieldPropsChange = () => {};
      const { type, fieldProps, isContainer } = config;
      const { run } = preprocessMethods(type, {
        extraData: {},
      });
    
      const HOC = React.forwardRef<unknown, any>((initialProps, ref) => {
        // 属性预处理
        const props = useMemo(() => run(initialProps), [initialProps]);
    
        const { registerRefs, renderId, runAwaitQueue } = usePageProvider();
    
        // 自定义组件HOC hooks  保持visible逻辑
        //@ts-ignore
        const { state, setState, onChangeHandle } = useComponentHoc(props, {
          // @ts-ignore
          config: { fieldProps },
          fieldPropsChange,
          renderId,
        });
    
        const compProps: any = { ...props, visible: state.visible };
    
        const compRef = useRef<Record<string, any>>({}); // 组件库的ref
    
        if (onChangeHandle) {
          compProps[fieldProps?.trigger!] = onChangeHandle;
        }
    
        if (fieldProps?.valuePropName) {
          compProps[fieldProps?.valuePropName] = state.value;
        }
    
        // 引擎能力增加仅同步数据的方法
        compProps.getEngineApis = () => {
          return {
            ...props.getEngineApis(),
            onlySyncValue: (v: unknown) => {
              syncInputValue(v, state.value, (v) =>
                setState({
                  value: v,
                }),
              );
            },
          };
        };
    
        let imperative: any = {
          get compName() {
            return config.type;
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
        };
    
        if (fieldProps) {
          imperative = {
            ...imperative,
            get value() {
              return compProps[fieldProps.valuePropName!];
            },
            setValue(v: unknown) {
              syncInputValue(v, compProps[fieldProps.valuePropName!], (v) =>
                setState({ value: v }),
              );
            },
          };
        }
    
        // 更新refs
        const uploadRef = (refInstance?: Record<string, any>) => {
          if (refInstance) {
            compRef.current = refInstance;
          }
    
          const ref = mergeGetter(imperative, compRef.current);
          if (props?.$$componentItem?.uid) {
            registerRefs(ref, props?.$$componentItem?.uid);
          }
        };
    
        useEffect(() => {
          uploadRef();
        });
    
        useEffect(() => {
          runAwaitQueue(props?.$$componentItem?.uid);
          return () => {
            // 注销ref
            registerRefs(null, props?.$$componentItem?.uid);
          };
        }, []);
    
        // 容器类组件
        if (isContainer === true) {
          return (
            <Container visible={state.visible}>
              <Component
                {...compProps}
                {...(compProps?.extendProps || {})}
                ref={uploadRef}
              />
            </Container>
          );
        }
        // 统一处理部分逻辑
        return (
          <Component
            {...compProps}
            {...(compProps?.extendProps || {})}
            ref={uploadRef}
          />
        );
      });
    
      return HOC;
    };
    // 低代码组件中，表单组件，要根据 fieldProps 配置，操作 value 和 setValue
    export const Cascader = Hoc(_Cascader, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'Cascader',
    });
    export const Checkbox = Hoc(_Checkbox, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'Checkbox',
    });
    export const CheckboxGroup = Hoc(_CheckboxGroup, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'CheckboxGroup',
    });
    export const DatePicker = Hoc(_DatePicker, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'DatePicker',
    });
    export const Input = Hoc(_Input, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'Input',
    });
    export const InputNumber = Hoc(_InputNumber, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'InputNumber',
    });
    export const LoopList = Hoc(_LoopList, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
      // 容器类组件
      isContainer: true,
      type: 'LoopList',
    });
    export const ModalSelect = Hoc(_ModalSelect, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'ModalSelect',
    });
    export const MultipleSelect = Hoc(_MultipleSelect, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'MultipleSelect',
    });
    export const Password = Hoc(_Password, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'Password',
    });
    export const Progress = Hoc(_Progress, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'Progress',
    });
    export const QRCode = Hoc(_QRCode, {
      fieldProps: { trigger: 'onChange', valuePropName: 'content' },
    
      type: 'QRCode',
    });
    export const QuillEditor = Hoc(_QuillEditor, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'QuillEditor',
    });
    export const Radio = Hoc(_Radio, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'Radio',
    });
    export const RangePicker = Hoc(_RangePicker, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'RangePicker',
    });
    export const Rate = Hoc(_Rate, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'Rate',
    });
    export const RichTextEditor = Hoc(_RichTextEditor, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'RichTextEditor',
    });
    export const Select = Hoc(_Select, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'Select',
    });
    export const Slider = Hoc(_Slider, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'Slider',
    });
    export const StdUpload = Hoc(_StdUpload, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'StdUpload',
    });
    export const SuperSelect = Hoc(_SuperSelect, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'SuperSelect',
    });
    export const Switch = Hoc(_Switch, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'Switch',
    });
    export const Tag = Hoc(_Tag, {
      fieldProps: { trigger: 'onChange', valuePropName: 'title' },
    
      type: 'Tag',
    });
    export const Text = Hoc(_Text, {
      fieldProps: { trigger: 'onChange', valuePropName: 'content' },
    
      type: 'Text',
    });
    export const TextArea = Hoc(_TextArea, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'TextArea',
    });
    export const TimePicker = Hoc(_TimePicker, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'TimePicker',
    });
    export const Transfer = Hoc(_Transfer, {
      fieldProps: { trigger: 'onTransferChange', valuePropName: 'value' },
    
      type: 'Transfer',
    });
    export const TreeSelect = Hoc(_TreeSelect, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'TreeSelect',
    });
    export const Upload = Hoc(_Upload, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'Upload',
    });
    export const VerificationCode = Hoc(_VerificationCode, {
      fieldProps: { trigger: 'onChange', valuePropName: 'value' },
    
      type: 'VerificationCode',
    });
    export const Alert = Hoc(_Alert, {
      type: 'Alert',
    });
    export const Animation = Hoc(_Animation, {
      // 容器类组件
      isContainer: true,
      type: 'Animation',
    });
    export const Audio = Hoc(_Audio, {
      type: 'Audio',
    });
    export const BarChart = Hoc(_BarChart, {
      type: 'BarChart',
    });
    export const Button = Hoc(_Button, {
      type: 'Button',
    });
    export const Card = Hoc(_Card, {
      // 容器类组件
      isContainer: true,
      type: 'Card',
    });
    export const ChartBar = Hoc(_ChartBar, {
      type: 'ChartBar',
    });
    export const ChartLine = Hoc(_ChartLine, {
      type: 'ChartLine',
    });
    export const Collapse = Hoc(_Collapse, {
      // 容器类组件
      isContainer: true,
      type: 'Collapse',
    });
    export const CollapsePanel = Hoc(_CollapsePanel, {
      // 容器类组件
      isContainer: true,
      type: 'CollapsePanel',
    });
    export const Condition = Hoc(_Condition, {
      // 容器类组件
      isContainer: true,
      type: 'Condition',
    });
    export const Description = Hoc(_Description, {
      type: 'Description',
    });
    export const Divider = Hoc(_Divider, {
      type: 'Divider',
    });
    export const Dropdown = Hoc(_Dropdown, {
      type: 'Dropdown',
    });
    export const Form = Hoc(_Form, {
      // 容器类组件
      isContainer: true,
      type: 'Form',
    });
    export const FreeLayout = Hoc(_FreeLayout, {
      // 容器类组件
      isContainer: true,
      type: 'FreeLayout',
    });
    export const Gantt = Hoc(_Gantt, {
      type: 'Gantt',
    });
    export const GridView = Hoc(_GridView, {
      // 容器类组件
      isContainer: true,
      type: 'GridView',
    });
    export const HorizontalView = Hoc(_HorizontalView, {
      // 容器类组件
      isContainer: true,
      type: 'HorizontalView',
    });
    export const Icon = Hoc(_Icon, {
      type: 'Icon',
    });
    export const Img = Hoc(_Img, {
      type: 'Img',
    });
    export const LXPieChart = Hoc(_LXPieChart, {
      type: 'LXPieChart',
    });
    export const LXRadarChart = Hoc(_LXRadarChart, {
      type: 'LXRadarChart',
    });
    export const Layout = Hoc(_Layout, {
      // 容器类组件
      isContainer: true,
      type: 'Layout',
    });
    export const LineChart = Hoc(_LineChart, {
      type: 'LineChart',
    });
    export const Link = Hoc(_Link, {
      type: 'Link',
    });
    export const Menu = Hoc(_Menu, {
      type: 'Menu',
    });
    export const Pagination = Hoc(_Pagination, {
      // 容器类组件
      isContainer: true,
      type: 'Pagination',
    });
    export const PictureVerifyCode = Hoc(_PictureVerifyCode, {
      type: 'PictureVerifyCode',
    });
    export const PieChart = Hoc(_PieChart, {
      type: 'PieChart',
    });
    export const RadarChart = Hoc(_RadarChart, {
      type: 'RadarChart',
    });
    export const RemoteComponent = Hoc(_RemoteComponent, {
      type: 'RemoteComponent',
    });
    export const Result = Hoc(_Result, {
      type: 'Result',
    });
    export const Row = Hoc(_Row, {
      // 容器类组件
      isContainer: true,
      type: 'Row',
    });
    export const Steps = Hoc(_Steps, {
      type: 'Steps',
    });
    export const Swiper = Hoc(_Swiper, {
      type: 'Swiper',
    });
    export const TabPane = Hoc(_TabPane, {
      // 容器类组件
      isContainer: true,
      type: 'TabPane',
    });
    export const Table = Hoc(_Table, {
      type: 'Table',
    });
    export const Tabs = Hoc(_Tabs, {
      // 容器类组件
      isContainer: true,
      type: 'Tabs',
    });
    export const TlrView = Hoc(_TlrView, {
      // 容器类组件
      isContainer: true,
      type: 'TlrView',
    });
    export const Tree = Hoc(_Tree, {
      type: 'Tree',
    });
    export const TreeTable = Hoc(_TreeTable, {
      type: 'TreeTable',
    });
    export const VerticalView = Hoc(_VerticalView, {
      // 容器类组件
      isContainer: true,
      type: 'VerticalView',
    });
    export const VideoPlayer = Hoc(_VideoPlayer, {
      type: 'VideoPlayer',
    });
    export const View = Hoc(_View, {
      // 容器类组件
      isContainer: true,
      type: 'View',
    });
    export const VirtualGroup = Hoc(_VirtualGroup, {
      // 容器类组件
      isContainer: true,
      type: 'VirtualGroup',
    });
    export const Webview = Hoc(_Webview, {
      type: 'Webview',
    });
    `;

    const [directories, file] = getFile(config);

    expect(directories).toEqual(['src', 'components']);
    expect(file.name).toEqual('factory');
    expect(file.ext).toEqual('tsx');
    expectValue(file.content, expectedFileContent);
  });
});
