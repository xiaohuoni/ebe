import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'index',
    'tsx',
    `
    import { useAppData } from 'alita';
    import React, { FC } from 'react';
    import styles from './index.less';
    interface HomePageProps {}
    
    const HomePage: FC<HomePageProps> = (props) => {
      const { clientRoutes } = useAppData();
      return (
        <div className={styles.indexPage}>
          <div className={styles.indexText}>
            欢迎登录使用{process.env.SYSTEM_NAME || '灵犀平台'}
          </div>
          <div
            onClick={() => {
              // @ts-ignore
              props.history.push(\`/\${clientRoutes[0]?.children[0]?.path}\`);
            }}
          >
            暂无登录,尝试跳转到可用页面
          </div>
        </div>
      );
    };
    
    export default HomePage;
    `,
  );

  return [['src', 'pages', 'index'], file];
}
