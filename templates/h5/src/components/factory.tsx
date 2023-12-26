import { useComponentHoc } from '@lingxiteam/engine-render-core/es/hooks/useComponentHoc';
import type { ImperativeHandleReturn } from '@lingxiteam/types';
import { isEqual } from 'lodash';
import React, { useImperativeHandle, useMemo } from 'react';

import {
  DAddressPicker as _DAddressPicker,
  DCheckbox as _DCheckbox,
  DformCustom as _DformCustom,
  DformDate as _DformDate,
  DformFile as _DformFile,
  DformImagePicker as _DformImagePicker,
  DformInput as _DformInput,
  DformInputNumber as _DformInputNumber,
  DformList as _DformList,
  DformPicker as _DformPicker,
  DformRadio as _DformRadio,
  DformRangePicker as _DformRangePicker,
  DformSelect as _DformSelect,
  DformSwitch as _DformSwitch,
  DformTextArea as _DformTextArea,
  DMultiplePicker as _DMultiplePicker,
  Input as _Input,
  ProgressBar as _ProgressBar,
  QRCode as _QRCode,
  SearchView as _SearchView,
  SingleProgress as _SingleProgress,
  Star as _Star,
  Text as _Text,
  VerificationCode as _VerificationCode,
} from '@lingxiteam/factory/es/index.component';
export {
  Accordion,
  AccordionHeader,
  AccordionPanel,
  ALink,
  Animation,
  Audio,
  BlockSelect,
  Button,
  Calendar,
  Card,
  CardBody,
  CardFooter,
  Carousel,
  Condition,
  DatePicker,
  DForm,
  DGroup,
  Divider,
  Donut,
  DynamicList,
  DynamicTable,
  FilterItems,
  Flex,
  Grid,
  GroupColumn,
  Icon,
  Image,
  JSBridgeView,
  LevelView,
  Line,
  LineColumn,
  LoadMore,
  Loop,
  MultipleProgress,
  NoticeBarPlus,
  Notification,
  Picker,
  PictureVerifyCode,
  ProcessTrack,
  RemoteComponent,
  Selector,
  Signature,
  SmallColumnar,
  StackColumn,
  StaticTabs,
  StepBar,
  StepProcess,
  TabBar,
  Table,
  VideoPlayer,
  View,
  Webview,
} from '@lingxiteam/factory/es/index.component';

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
    return <Component {...compProps} />;
  });

  return HOC;
};
export const DAddressPicker = Hoc(_DAddressPicker, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DCheckbox = Hoc(_DCheckbox, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DMultiplePicker = Hoc(_DMultiplePicker, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformCustom = Hoc(_DformCustom, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformDate = Hoc(_DformDate, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformFile = Hoc(_DformFile, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformImagePicker = Hoc(_DformImagePicker, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformInput = Hoc(_DformInput, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformInputNumber = Hoc(_DformInputNumber, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformList = Hoc(_DformList, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformPicker = Hoc(_DformPicker, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformRadio = Hoc(_DformRadio, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformSelect = Hoc(_DformSelect, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformSwitch = Hoc(_DformSwitch, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformTextArea = Hoc(_DformTextArea, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const Input = Hoc(_Input, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const ProgressBar = Hoc(_ProgressBar, {
  trigger: 'onChange',
  valuePropName: 'percent',
});
export const QRCode = Hoc(_QRCode, {
  trigger: 'onChange',
  valuePropName: 'content',
});
export const SearchView = Hoc(_SearchView, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const SingleProgress = Hoc(_SingleProgress, {
  trigger: 'onChange',
  valuePropName: 'value',
});
export const Star = Hoc(_Star, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const Text = Hoc(_Text, {
  trigger: 'onChange',
  valuePropName: 'children',
});
export const VerificationCode = Hoc(_VerificationCode, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
export const DformRangePicker = Hoc(_DformRangePicker, {
  trigger: 'onChange',
  valuePropName: 'defaultValue',
});
