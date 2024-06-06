import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/customComponent';
import { expectValueIgnoreWhitespace } from '../../../../../../utils';
describe('template files customComponent', () => {
  test('should return the correct file customComponent', () => {
    const config: any = {
      platform: 'h5',
      appId: '12345',
    };

    const expectedFileContent = `import { getAppFileUrlByFileCode } from '@/services/api/getAppFileUrlByFileCode';
    import { LingxiForwardRef } from '@lingxiteam/types';
    import { createRequires } from '@paciolan/remote-component/dist/createRequires';
    import { createUseRemoteComponent } from '@paciolan/remote-component/dist/hooks/useRemoteComponent';
    import React from 'react';
    export interface MyCustomComponentProps {
      fileCode: string;
      visible: boolean;
      type: string;
      style?: React.CSSProperties;
    }
    
    const presetDependencies = {
      React: require('react'),
react: require('react'),
ReactDOM: require('react-dom'),
'react-dom': require('react-dom'),
antdMobile: require('antd-mobile-5')
// TODO: 依赖清理
// classnames: require('classnames'),
// 'rc-tween-one': require('rc-tween-one'),
// 'react-player': require('react-player'),
// 'react-soundplayer': require('react-soundplayer'),
// ahooks: require('ahooks'),
// lodash: require('lodash'),
// '@ant-design/icons': require('@ant-design/icons'),
// '@lingxiteam/icons': require('@lingxiteam/icons'),
// moment: require('moment'),
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
        return <Component {...restProps} style={{ ...restProps.style}}/>;
      },
    );
    `;

    const [directories, file] = getFile(config);

    expect(directories).toEqual(['src', 'components', 'CustomComponent']);
    expect(file.name).toEqual('index');
    expect(file.ext).toEqual('tsx');
    expectValueIgnoreWhitespace(file.content, expectedFileContent);
  });
});
