import { EngineBaseProps } from '@lingxiteam/types';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../Icon';
import { evalMyFunction } from '../utils';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';

interface CustomBtnProps {
  customCode: any;
  icon: any;
  title: string;
  isIcon?: boolean;
  onClick?: () => void;
  isEngine?: boolean;
  getEngineApis?: EngineBaseProps['getEngineApis'];
}
const CustomBtn: React.FC<CustomBtnProps> = (props) => {
  const {
    customCode,
    icon,
    title,
    isIcon,
    onClick,
    isEngine = false,
    getEngineApis,
  } = props;
  const [dangerHTML, setDangerHTML] = useState('');

  const {
    sandBoxSafeRun = () => {
      console.warn('sandBoxSafeRun 引擎能力未配置');
    },
  } = getEngineApis?.() || {};
  const funcExpExecute = useFuncExpExecute(sandBoxSafeRun);

  useEffect(() => {
    getReactHTMLText(icon);
  }, [customCode]);

  const getReactHTMLText = (props: any) => {
    const tempDOM = document.createElement('div');
    tempDOM.id = '__ICON_TYPE_ID__';
    tempDOM.style.display = 'none';
    document.body.appendChild(tempDOM);
    ReactDOM.render(
      <Icon {...props} getEngineApis={getEngineApis} />,
      tempDOM,
      () => {
        const htmlText = tempDOM.innerHTML;

        if (Array.isArray(customCode) && customCode.length) {
          // 兼容旧数据 原先获取弹窗的数据是取数组的格式
          const codeStr = customCode.join('');
          const targetStr = codeStr.replace('{{code}}', htmlText);
          setDangerHTML(targetStr);
        } else if (customCode?.tVal) {
          // 改造之后，取的数据则是实际可以添加条件的函数
          if (isEngine) {
            let targetStr = '';
            // 自定义渲染函数
            if (customCode?.tVal && typeof customCode.tVal === 'string') {
              targetStr = customCode?.tVal.replace(
                '{{code}}',
                htmlText.replace(/"/g, '\\"'),
              );
            }
            setDangerHTML(targetStr);
          } else {
            const targetStr = customCode?.valueArr
              .join('')
              .replace('{{code}}', htmlText);
            setDangerHTML(targetStr);
          }
        }
      },
    );
    document.querySelector('#__ICON_TYPE_ID__')?.remove();
    return '';
  };

  if (isEngine) {
    if (funcExpExecute) {
      return (
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: funcExpExecute(dangerHTML, [
              {
                key: 'title',
                value: title,
              },
              {
                key: 'isIcon',
                value: isIcon,
              },
            ]),
          }}
          onClick={onClick}
        />
      );
    }
  }
  return (
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `${evalMyFunction(dangerHTML, [
          {
            key: 'title',
            value: title,
          },
          {
            key: 'isIcon',
            value: isIcon,
          },
        ])}`,
      }}
      onClick={onClick}
    />
  );
};
export default CustomBtn;
