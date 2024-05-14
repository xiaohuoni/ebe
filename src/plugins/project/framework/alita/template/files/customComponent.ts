import { ResultFile, LXProjectOptions } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';

  const file = createResultFile(
    'index',
    'tsx',
    `import { getAppFileUrlByFileCode } from '@/services/api/getAppFileUrlByFileCode';
      import { LingxiForwardRef } from '@lingxiteam/types';
      import { createRequires } from '@paciolan/remote-component/dist/createRequires';
      import { createUseRemoteComponent } from '@paciolan/remote-component/dist/hooks/useRemoteComponent';
      import React from 'react';
      export interface MyCustomComponentProps {
        fileCode: string;
        visible: boolean;
        type: string;
      }
      
      const presetDependencies = {
        React: require('react'),
  react: require('react'),
  ReactDOM: require('react-dom'),
  'react-dom': require('react-dom'),
  classnames: require('classnames'),
  'rc-tween-one': require('rc-tween-one'),
  'react-player': require('react-player'),
  'react-soundplayer': require('react-soundplayer'),
  ahooks: require('ahooks'),
  lodash: require('lodash'),
  '@ant-design/icons': require('@ant-design/icons'),
  '@lingxiteam/icons': require('@lingxiteam/icons'),
  moment: require('moment'),
  ${
    isMobile
      ? `DynamicForm: require('@lingxiteam/dform'),
  '@lingxiteam/dform': require('@lingxiteam/dform'),
  '@lingxiteam/antd-mobile-plus': require('@lingxiteam/antd-mobile-plus'),
  '@lingxiteam/charts': require('@lingxiteam/charts'),
  'ag-grid-react': require('ag-grid-react'),
  'ag-grid-community': require('ag-grid-community'),
  antdMobile: require('antd-mobile-5'),
  'antd-mobile-5': require('antd-mobile-5'),
  'rc-field-form': require('rc-field-form'),
  '@alitajs/f2': require('@alitajs/f2'),
  'react-loadable': require('react-loadable'),`
      : `antd: require('antd'),
  echarts: require('echarts'),
  'react-quill': require('react-quill'),
  'react-resizable': require('react-resizable'),
  'size-sensor': require('size-sensor'),
  'qr-code-with-logo': require('qr-code-with-logo'),
  'echarts/core': require('echarts/core'),
  'echarts/charts': require('echarts/charts'),
  'echarts/components': require('echarts/components'),
  'echarts/renderers': require('echarts/renderers'),`
  }
      };
      const Error = ({ type, fileCode }: { type: string; fileCode: string }) => {
        return (
          <div>
            自定义组件加载失败，类型{type},远程文件ID {fileCode}
          </div>
        );
      };
      export const getUseRemoteComponent = (config: any) => {
        const requires = createRequires(() => config);
        return createUseRemoteComponent({ requires });
      };
      const useRemoteComponent = getUseRemoteComponent(presetDependencies);
      export const CustomComponent = LingxiForwardRef<any, MyCustomComponentProps>(
        (props, ref) => {
          const { fileCode, visible = true, type, ...restProps } = props;
          const url = getAppFileUrlByFileCode(fileCode);
          const [loading, err, Component] = useRemoteComponent(url, 'component');
      
          if (!visible) {
            return <></>;
          }
          if (loading) {
            return <div>加载中...</div>;
          }
          if (err || !Component) {
            return <Error {...props} />;
          }
          return <Component {...restProps} />;
        },
      );
      `,
  );

  return [['src', 'components', 'CustomComponent'], file];
}
