// import registerFunctors, { getNormalFunc, getPresetFunctorsList } from '@lingxiteam/functors';
// import { wufengController } from '@wufengteam/core';

// class platformFunctions {
//   /**
//      * 注册平台函数
//      *
//      */
//   public registerFunctions() {
//     registerFunctors();
//   }

//   /**
//    * 全局函数库 内置名称
//    * @param innerName
//    * @returns
//    */
//   public getINFCFunction(innerName: string) {
//     const preset = getPresetFunctorsList(innerName);
//     const normal = getNormalFunc(innerName);
//     return {
//       ...preset.INFC,
//       ...normal.INFC,
//     };
//   }

//   /**
//    * 获取平台函数库
//    */
//   get functorsMap() {
//     const tmpMap: Record<string, any> = {};
//     Object.keys(wufengController.functions || {}).forEach((key) => {
//       const { type } = wufengController.getFunctionConfigByType(key);
//       const fn = wufengController.getFunctionByType(key);
//       tmpMap[type] = fn;
//     });
//     return tmpMap;
//   }
// }

// export default platformFunctions;
