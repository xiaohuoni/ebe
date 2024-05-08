const allDebugData: any = {};

export const getDebugData = () => {
  return allDebugData;
};
const hasCmdCode = ['console'];
const debugPrintCmd = false;
export const printCmdList = () => {
  if (!debugPrintCmd) return;
  const { cmdHash = {} } = allDebugData;
  const cmdList = Object.keys(cmdHash)?.filter(
    (key: any) => !hasCmdCode.includes(key),
  );
  console.log(cmdList.length);
  console.log(cmdList);
};
