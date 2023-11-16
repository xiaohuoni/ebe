import { generateCode, init } from 'ebe';
// import * as CodeCreator from '@alilc/lowcode-code-generator/standalone-loader';
import MonacoEditor from '@monaco-editor/react';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import lingxidsl from './lingxi-page-h5.json';
// import lingxidsl from './example-schema.json';
import styles from './index.css';
console.log(lingxidsl);

export default function ({}) {
  const [code, setCode] = useState('');
  const ii = async () => {
    await init({
      // workerJsUrl: '/ebe/standalone-worker.js',
    });
  };
  useEffect(() => {
    ii();
  }, []);
  return (
    <div className={styles.normal}>
      <MonacoEditor
        height="350px"
        width="100%"
        options={{ autoFocus: true, automaticLayout: true }}
        language="json"
        value={JSON.stringify(lingxidsl)}
      />
      <Button
        onClick={async () => {
          console.log(1232132131);
          const result = await generateCode({
            solution: 'alita', // 出码方案
            schema: lingxidsl, // 编排搭建出来的 schema
            // workerJsUrl: '/ebe/worker.js',
          } as any);
          // src/pages/ceshi1071/index.tsx
          if (result?.dirs?.[0]?.dirs?.[0]?.dirs?.[0]?.files?.[0]?.content) {
            setCode(result?.dirs?.[0]?.dirs?.[0]?.dirs?.[0]?.files?.[0]?.content);
          }
          console.log(result); // 出码结果(默认是递归结构描述的，可以传 flattenResult: true 以生成扁平结构的结果)
        }}
      >
        出码
      </Button>
      <a></a>
      <MonacoEditor
        height="350px"
        width="100%"
        options={{ autoFocus: true, automaticLayout: true,moduleResolution:'nodenext' }}
        language="typescript"
        value={code}
      />
    </div>
  );
}
