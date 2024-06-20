import { DformRate } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { RateProps } from 'antd-mobile-5/es/components/rate/index';
import React, { useMemo } from 'react';
import { DFormWrapper, FormItem } from '../BasicComponents';
import Icon from '../Icon';
import { useFormItem } from '../utils/hooks/useFormItem';
import { withTransformProps } from '../utils/withTransformProps';
import { ctmCoverStyle } from './ctmCoverStyle';
import transformProps from './transformProps';

export interface MyStarProps extends RateProps {
  visible: boolean;
  character?: React.ReactNode;
  characterIcon?: any;
  stringCharacter?: string;
  style: any;
  fieldProps: string;
  title: string;
}

export interface ImperativeProps {
  setVal: (value: number) => void;
}

const MyStar = LingxiForwardRef<ImperativeProps, MyStarProps>((props, ref) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChange = () => {},
    character,
    characterIcon,
    stringCharacter,
    style = {},
    defaultValue,
    getEngineApis,
    ...restProps
  } = props;
  const {
    disabled,
    val,
    getRules,
    required,
    visible,
    onInputChange,
    readOnly,
    // @ts-ignore
  } = useFormItem(ref, props);
  const { inputFontSize } = style;

  // eslint-disable-next-line consistent-return
  // @ts-ignore
  // eslint-disable-next-line consistent-return
  const mCharacter: React.ReactNode = useMemo(() => {
    if (character === 'icon') {
      return (
        // @ts-ignore
        <Icon
          icon={{
            type: characterIcon?.type,
            theme: characterIcon?.theme,
            isIconFont: characterIcon?.isIconFont,
            fontAddress: characterIcon?.fontAddress,
            iconFileInfo: characterIcon?.iconFileInfo,
            iconFile: characterIcon?.iconFile,
          }}
          className="cust-icon-theme"
          style={{
            fontSize: inputFontSize,
            width: inputFontSize,
            height: inputFontSize,
          }}
          getEngineApis={getEngineApis}
          name=""
        />
      );
    }
    if (character === 'string') {
      return stringCharacter;
    }
  }, [character, characterIcon, stringCharacter]);

  const coverStyle = useMemo(() => {
    const target = {};

    Object.keys(ctmCoverStyle).forEach((key) => {
      // @ts-ignore
      const themeVar = ctmCoverStyle[key];
      if (style[key]) {
        // @ts-ignore
        target[themeVar] = style[key];
      }
    });

    return target;
  }, [style, ctmCoverStyle]);

  return (
    <FormItem>
      <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
        <DformRate
          {...restProps}
          onChange={onInputChange}
          required={required}
          disabled={disabled}
          defaultValue={val}
          character={mCharacter}
          rules={getRules()}
          style={style}
          readonly={readOnly}
          validateTrigger="onChange"
          coverStyle={coverStyle}
        />
      </DFormWrapper>
    </FormItem>
  );
});

export default withTransformProps(MyStar, transformProps);
