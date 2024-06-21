import { EngineBaseProps } from '@lingxiteam/types';
import { FC } from 'react';
import '../index.less';

interface TabPageProps {
  paths: any[];
  selectedPath?: string;
  getEngineApis: EngineBaseProps['getEngineApis'];
  $$componentItem: EngineBaseProps['$$componentItem'];
  lcdpParentRenderId: string;
}

const TabPage: FC<TabPageProps> = (props) => {
  const { paths, selectedPath, getEngineApis, lcdpParentRenderId } = props;
  const { PageView } = getEngineApis();

  const renderView = () => {
    return paths.map((item: any) => {
      if (item.key.length === 0 || item.key.includes('&=&=!')) {
        return (
          <div
            style={
              item.key === selectedPath
                ? {
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    background: '#e9ecf5',
                  }
                : { display: 'none' }
            }
          >
            {item.key}
          </div>
        );
      }
      return (
        // @ts-ignore
        <PageView
          key={item.id}
          pageSrc={item.key}
          appId={item.appId}
          pageViewCompState={{}}
          visible
          style={
            item.key === selectedPath
              ? { display: 'block', width: '100%', height: '100%' }
              : { display: 'none' }
          }
          platform="h5"
          $$componentItem={{
            ...props.$$componentItem,
            appId: item.appId,
            uid: `${props.$$componentItem.uid}_${item.id}`,
          }}
          lcdpParentRenderId={lcdpParentRenderId}
          // @ts-ignore
          getEngineApis={getEngineApis}
        />
      );
    });
  };

  return <>{renderView()}</>;
};
export default TabPage;
