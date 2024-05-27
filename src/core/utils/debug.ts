import * as cmd from '../../cmd';
interface AllDebugDataProps {
  cmdHash?: typeof cmd;
}
const allDebugData: AllDebugDataProps = {};

export const getDebugData = () => {
  return allDebugData;
};

const debugPrintCmd = true;
export const printCmdList = () => {
  if (!debugPrintCmd) return;
  const { cmdHash = {} } = allDebugData;

  const cmdList = Object.keys(cmdHash)?.filter(
    (key) => typeof (cmd as any)[key] !== 'function',
  );
  console.log('当前源码缺少的指令数:', cmdList.length);
  console.log('当前源码缺少的指令: ', [...cmdList]);
};
