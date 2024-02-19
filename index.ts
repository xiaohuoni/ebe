import * as fs from 'fs-extra';
import { jsonc } from 'jsonc';
import alita from './src/solutions/alita';
import { createDiskPublisher } from './src/core/publisher/disk';
import { createZipPublisher } from './src/core/publisher/zip';
(async () => {
  const testPlatformIsH5 = false;
  const schemaFile = testPlatformIsH5 ? 'lingxi-page-h5.json' : 'a.json';
  // 读取 Schema
  const schema = await loadSchemaFile(schemaFile);
  // schema.pageId = testPlatformIsH5
  //   ? '1024143466269171712'
  //   : '1028120483871506432';
  // schema.appId = testPlatformIsH5
  //   ? '1024143353417228288'
  //   : '1024143353417228288';
  const options = {
    platform: testPlatformIsH5 ? 'h5' : 'pc',
    appId: '871672424566726656',
    appConfig: {
      appId: '871672424566726656',
      appCode: 'APP_1005971135254867968',
      appName: '业务审批工作台_v1.3',
      appMenuJson: null,
      applicationIcon:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABItJREFUWEfNWGtMHFUU/s4Mu7NEjUBsWUygIEn7o6mxNrGNNqj0YdFETRtjs1Ur0liNsdFIo7FardZYBRprm1YIFGgFC62v0JaCxApRa03aqJg0ViNYmwD+ABZ3d2YW2GvODLO7kH1hw8JJNvfxnbn323PPvefcS5iQr2tVlwBthcBygBRAACDMcKmDxHkCVRYWK41MhWdER42/HBAvWeRmp6SK1SX2UjpTrbokQQ2zQ2LyrAESm6itUusEocCErCWyFJPcFuii1kOqBiIFQgBEmOVSp9MHNTHzvpv43qCTB9QgIctAFsHZaFPLflUQCAICRAQhIpRJxOnLfT52nog2tYgmE6cvPlD5BJwLe8wwC3221ycSOY+d+TJWPGiPeVx1d47ij4tj17RH6NMKk5BlI8OXIrRXPGRHVr6MS+fMCS2xAkzOYhm+EYGuZj3i9/HGt3A6XuYNObXlvBHKgkcVzMuWcKLch+AmCNNjnKWzSYuIm390YvPEKKn5/XALhULpVAvcvdEkdLxMxcJlKRjVBbxugZuyJVz6fgyMs3xzLNxC0cebOn5wjZr2eINOHctB7nU5DELN7/nAdZZ/roxj8V22SX1nG7VrCot07F0mFN+tC10K5uVIaNrjw8oNimEd/uUtkdF2WIeFc19P9xh6u8fgdTO36aUx1Ljbwydh3Bi26jEF83NkfPKON2LMY/y6GyWMagJpmZJhpauXx9Hz8yiu/h6IO74VQ6nh7bAlixHcVz/uwPwFEhp3+7CkwGZYx68Lg+TFdj8YZ0N3HNGQnilh0fIUZC+SYVMI3mGBH1p0DFxhYmErGmE+OrrLE1KJQWjNZgcyF8j4+C0vuM4y8FcAtxbYJvV9VR/yocxcGWuecGBoIIBfOv34+7fx+ISOvBlGKEY+tPZJk9DRXV7c+bBi/GvPsED+bTLa6zRYOBMd7A/gVKUKJrR2swPt9RoGescTyreobue/CTn1umKHMUH9G56IuTbj6U4JQ/0B9PcG8NNZHc7cFNxX7EBbrYb+3rGEcnSqfT3cQtF37LqnHHDmyqjb6cUdRXZkOE3HZfn2cx0r1ytG32BfwLDQj61+OPNkMNEzTKiHLRRfqGYHWyi+3F+Sakxw+DUPuJ6RJcGvAdenEVprVCwttBt9TMivCXQ0aMjKk1FUkmrgfYkSqn41RGhquhFqAw9sMQnV7PAYdZa+ngCWFtpwulrF7avMwHuqWg0uzc15KSja4jBwJhRrfP6Wcap6ZSSuD9kdEtZvS8UN6RIudOhYuMxmTO4ZEsi6RcblC6NGycJ166BlfdY9d1LHr9/5E/OhypfjLxkPes8jZqz6P9L35zhaqthy8YUObR9JKB+aXgCYbsAI6dPB0nBCVnpgKSS/TQdedIuoyX20pH8G+2n/CyMigdiatPsjfbjNPbcuivued3POqZhpS7Q0xEprZhzXqeK54U4JVBBtX1i5cHJwdNHeZ90uEObEcwwENhk3mvJnhssBzPKDFSpKP0orDV6xyp4edIGkrQA/6WHiWJ7x9yEdEOchApXbqzKMJ73/ACwNgck9hpFvAAAAAElFTkSuQmCC',
      frontendHookList: [
        {
          hookCode: 'fetchSendBefore',
          hookType: 'req',
          hookSourceContent:
            '/**\n * @param {string} url 请求地址\n * @param {string} method 请求方法\n * @param {object} params 请求参数\n * @param {object} CryptoJS 加密工具\n * @return {object} {\n    header:\'附带请求头数据\',\n    params:\'参数\',\n    url: \'改写请求地址\',\n    fetchOption: \'fetch支持的配置\',\n  } 返回对象，请求层将对请求配置二次处理\n  * @return {boolean} false 中止该请求\n  * @return {promise} 不执行网络请求，但会根据Promise执行 ‘请求成功’和‘请求失败’\n*/\n(url, method, params, { CryptoJS }) => {\n  console.log("进入全局勾子，url= " + url);\n\n  if (url === "/app/rhin/gateway/callRhinEngine") {\n\n    function getUrlParam(paramName) {\n      var reg = new RegExp("(\\\\?|&)" + paramName + "=([^&]*)(&|$)", "i");\n      var matchResult = query.match(reg);\n\n      var storageKey = "gaap-" + paramName;\n\n      var param;\n      if (matchResult && matchResult.length >= 3 && (matchResult[2] || paramName === \'localName\')) {\n        param = matchResult[2];\n        sessionStorage.setItem(storageKey, param);\n      } else {\n        param = sessionStorage.getItem(storageKey);\n      }\n\n      return param;\n    }\n\n    var href = window.location.href;\n    var query = "?" + href.split("#")[1].split("?")[1];\n\n    if (!query) {\n      return {};\n    }\n\n    var token = getUrlParam("token");\n    var bss3SessionId = getUrlParam("bss3SessionId");\n    var localName = getUrlParam("localName");\n    console.log("bss3SessionId: ", bss3SessionId);\n    console.log("localName: ", localName);\n    if (params.serviceRequest.header) {\n      params.serviceRequest.header["gaap-token"] = token;\n      if (bss3SessionId) {\n        params.serviceRequest.header["bss3SessionId"] = bss3SessionId;\n      }\n      if (localName) {\n        params.serviceRequest.header["localName"] = localName;\n      }\n    } else {\n      params.serviceRequest.header = {\n        "gaap-token": token,\n      };\n      if (bss3SessionId) {\n        params.serviceRequest.header["bss3SessionId"] = bss3SessionId;\n      }\n      if (localName) {\n        params.serviceRequest.header["localName"] = localName;\n      }\n    }\n\n    if (params.serviceRequest.body) {\n      console.log("window.engineType === \'mobile\'", window.engineType)\n      params.serviceRequest.body.engineType = window.engineType;\n      //由于存在特殊符号的情况，因此这两个方法特殊处理进行数据加密，服务端进行解密\n      if (window.engineType === \'mobile\' && (params.apiCode === "saveDataAndStartFlow" || params.apiCode === "saveDataAndDealFlow")) {\n        if (params.serviceRequest.body?.orderMessage) {\n          console.log("saveDataAndStartFlow - saveDataAndDealFlow",params.serviceRequest.body?.orderMessage)\n          var wordArray = CryptoJS.enc.Utf8.parse(JSON.stringify(params.serviceRequest.body?.orderMessage));\n          var orderMessageBase64 = CryptoJS.enc.Base64.stringify(wordArray);\n          params.serviceRequest.body.orderMessage = orderMessageBase64;\n        }\n      }\n      if (window.engineType === \'mobile\' && (params.apiCode === "ordersSaveDraft" || params.apiCode === "specialSceneVif" || params.apiCode === "orderPreSubmit")) {\n        if (params.serviceRequest.body?.svcCont) {\n           console.log("ordersSaveDraft - specialSceneVif - orderPreSubmit",params.serviceRequest.body?.svcCont)\n          var wordArray = CryptoJS.enc.Utf8.parse(JSON.stringify(params.serviceRequest.body?.svcCont));\n          var orderMessageBase64 = CryptoJS.enc.Base64.stringify(wordArray);\n          params.serviceRequest.body.svcCont = orderMessageBase64;\n        }\n      }\n    }\n\n    console.log("勾子解析完成");\n    console.log(params);\n    return { params };\n  }\n  return {};\n}\n',
          hookCompiledContent:
            '(function(url,method,params,_ref){var CryptoJS=_ref.CryptoJS;console.log("\\u8FDB\\u5165\\u5168\\u5C40\\u52FE\\u5B50\\uFF0Curl= "+url);if(url==="/app/rhin/gateway/callRhinEngine"){function getUrlParam(paramName){var reg=new RegExp("(\\\\?|&)"+paramName+"=([^&]*)(&|$)","i");var matchResult=query.match(reg);var storageKey="gaap-"+paramName;var param;if(matchResult&&matchResult.length>=3&&(matchResult[2]||paramName==="localName")){param=matchResult[2];sessionStorage.setItem(storageKey,param)}else{param=sessionStorage.getItem(storageKey)}return param}var href=window.location.href;var query="?"+href.split("#")[1].split("?")[1];if(!query){return{}}var token=getUrlParam("token");var bss3SessionId=getUrlParam("bss3SessionId");var localName=getUrlParam("localName");console.log("bss3SessionId: ",bss3SessionId);console.log("localName: ",localName);if(params.serviceRequest.header){params.serviceRequest.header["gaap-token"]=token;if(bss3SessionId){params.serviceRequest.header["bss3SessionId"]=bss3SessionId}if(localName){params.serviceRequest.header["localName"]=localName}}else{params.serviceRequest.header={"gaap-token":token};if(bss3SessionId){params.serviceRequest.header["bss3SessionId"]=bss3SessionId}if(localName){params.serviceRequest.header["localName"]=localName}}if(params.serviceRequest.body){console.log("window.engineType === \'mobile\'",window.engineType);params.serviceRequest.body.engineType=window.engineType;if(window.engineType==="mobile"&&(params.apiCode==="saveDataAndStartFlow"||params.apiCode==="saveDataAndDealFlow")){var _params$serviceReques;if((_params$serviceReques=params.serviceRequest.body)!=null&&_params$serviceReques.orderMessage){var _params$serviceReques2,_params$serviceReques3;console.log("saveDataAndStartFlow - saveDataAndDealFlow",(_params$serviceReques2=params.serviceRequest.body)==null?void 0:_params$serviceReques2.orderMessage);var wordArray=CryptoJS.enc.Utf8.parse(JSON.stringify((_params$serviceReques3=params.serviceRequest.body)==null?void 0:_params$serviceReques3.orderMessage));var orderMessageBase64=CryptoJS.enc.Base64.stringify(wordArray);params.serviceRequest.body.orderMessage=orderMessageBase64}}if(window.engineType==="mobile"&&(params.apiCode==="ordersSaveDraft"||params.apiCode==="specialSceneVif"||params.apiCode==="orderPreSubmit")){var _params$serviceReques4;if((_params$serviceReques4=params.serviceRequest.body)!=null&&_params$serviceReques4.svcCont){var _params$serviceReques5,_params$serviceReques6;console.log("ordersSaveDraft - specialSceneVif - orderPreSubmit",(_params$serviceReques5=params.serviceRequest.body)==null?void 0:_params$serviceReques5.svcCont);var wordArray=CryptoJS.enc.Utf8.parse(JSON.stringify((_params$serviceReques6=params.serviceRequest.body)==null?void 0:_params$serviceReques6.svcCont));var orderMessageBase64=CryptoJS.enc.Base64.stringify(wordArray);params.serviceRequest.body.svcCont=orderMessageBase64}}}console.log("\\u52FE\\u5B50\\u89E3\\u6790\\u5B8C\\u6210");console.log(params);return{params:params}}return{}});',
        },
        {
          hookCode: 'fetchSuccess',
          hookType: 'req',
          hookSourceContent:
            "/**\n * @param {object} data 响应业务数据\n * @param {object} message 全局消息提示\n * @param {object} notification 通知提示框\n * @param {object} modal 对话框\n * @param {string} url 请求地址\n * @param {object} params 请求参数\n * @param {object} CryptoJS 加密工具\n * @return {object} 返回请求成功报文\n*/\n(data, { message, notification, modal }, { url, params }, { CryptoJS }) => {\n    // console.log(\"响应业务数据：\", JSON.stringify(data));\n    const { resultObject = {} } = data;\n \n    const resultCode =  resultObject?.resultCode;\n\n    if (window.engineType === 'mobile') {\n        // 业务异常\n        if (typeof resultCode === 'string' && resultCode !== '0') {\n            // message.show({\n            //     icon: \"fail\",\n            //     content: resultObject?.resultMsg\n            // });\n            console.log(\"业务异常:\", resultObject?.resultMsg)\n        }\n        // SpringMVC通用异常\n        else if (resultObject?.error && typeof resultObject.status === 'number') {\n            message.show({\n                icon: \"fail\",\n                content: `${resultObject.status} ${resultObject.error}`\n            });\n        }\n    } else {\n        // 业务异常\n        if (typeof resultCode === 'string' && resultCode !== '0') {\n            message.error(resultObject?.resultMsg);\n        }\n        // SpringMVC通用异常\n        else if (resultObject?.error && typeof resultObject.status === 'number') {\n            message.error(`${resultObject.status} ${resultObject.error}`);\n        }\n    }\n}",
          hookCompiledContent:
            '(function(data,_ref,_ref2,_ref3){var message=_ref.message,notification=_ref.notification,modal=_ref.modal;var url=_ref2.url,params=_ref2.params;var CryptoJS=_ref3.CryptoJS;var _data$resultObject=data.resultObject,resultObject=_data$resultObject===void 0?{}:_data$resultObject;var resultCode=resultObject==null?void 0:resultObject.resultCode;if(window.engineType==="mobile"){if(typeof resultCode==="string"&&resultCode!=="0"){console.log("\\u4E1A\\u52A1\\u5F02\\u5E38:",resultObject==null?void 0:resultObject.resultMsg)}else if(resultObject!=null&&resultObject.error&&typeof resultObject.status==="number"){message.show({icon:"fail",content:resultObject.status+" "+resultObject.error})}}else{if(typeof resultCode==="string"&&resultCode!=="0"){message.error(resultObject==null?void 0:resultObject.resultMsg)}else if(resultObject!=null&&resultObject.error&&typeof resultObject.status==="number"){message.error(resultObject.status+" "+resultObject.error)}}});',
        },
        {
          hookCode: 'pageDidMount',
          hookType: 'page',
          hookSourceContent:
            '/**\n * @param {object} pageInfo 页面信息\n*/\n(pageInfo) => {\n    console.log("进入页面加载完成勾子");\n    var href = window.location.href;\n    console.log("浏览器url="+href);\n    var query = href.split("#")[1].split("?")[1];\n\n    if (!query) {\n      return {};\n    }\n\n    var reg = new RegExp("(\\\\?|&)token=([^&]*)(&|$)", "i");\n    var matchResult = query.match(reg);\n\n    var token;\n    if (matchResult && matchResult.length >= 3 && matchResult[2]) {\n      token = matchResult[2];\n      sessionStorage.setItem("gaap-token", token);\n    }\n}\n',
          hookCompiledContent:
            '(function(pageInfo){console.log("\\u8FDB\\u5165\\u9875\\u9762\\u52A0\\u8F7D\\u5B8C\\u6210\\u52FE\\u5B50");var href=window.location.href;console.log("\\u6D4F\\u89C8\\u5668url="+href);var query=href.split("#")[1].split("?")[1];if(!query){return{}}var reg=new RegExp("(\\\\?|&)token=([^&]*)(&|$)","i");var matchResult=query.match(reg);var token;if(matchResult&&matchResult.length>=3&&matchResult[2]){token=matchResult[2];sessionStorage.setItem("gaap-token",token)}});',
        },
        {
          hookCode: 'appDidInit',
          hookType: 'app',
          hookSourceContent:
            '/**\n * @param {object} appInfo 应用信息\n*/\n(appInfo) => {\n    if (!Array.prototype.flat) {\n        Array.prototype.flat = function (count) {\n            var c = count || 1;\n            var len = this.length;\n            var ret = [];\n            if (this.length == 0) return this;\n            while (c--) {\n                var _arr = [];\n                var flag = false;\n                if (ret.length == 0) {\n                flag = true;\n                for (var i = 0; i < len; i++) {\n                    if (this[i] instanceof Array) {\n                    var _ret;\n                    (_ret = ret).push.apply(_ret, this[i]);\n                    } else {\n                    ret.push(this[i]);\n                    }\n                }\n                } else {\n                for (var _i = 0; _i < ret.length; _i++) {\n                    if (ret[_i] instanceof Array) {\n                    flag = true;\n                    _arr.push.apply(_arr, ret[_i]);\n                    } else {\n                    _arr.push(ret[_i]);\n                    }\n                }\n                ret = _arr;\n                }\n                if (!flag && c == Infinity) {\n                break;\n                }\n            }\n            return ret;\n        };   \n    }\n    if (!NodeList.prototype.forEach) { \n        NodeList.prototype.forEach = Array.prototype.forEach;\n    }\n}\n',
          hookCompiledContent:
            '(function(appInfo){if(!Array.prototype.flat){Array.prototype.flat=function(count){var c=count||1;var len=this.length;var ret=[];if(this.length==0)return this;while(c--){var _arr=[];var flag=false;if(ret.length==0){flag=true;for(var i=0;i<len;i++){if(this[i]instanceof Array){var _ret;(_ret=ret).push.apply(_ret,this[i])}else{ret.push(this[i])}}}else{for(var _i=0;_i<ret.length;_i++){if(ret[_i]instanceof Array){flag=true;_arr.push.apply(_arr,ret[_i])}else{_arr.push(ret[_i])}}ret=_arr}if(!flag&&c==Infinity){break}}return ret}}if(!NodeList.prototype.forEach){NodeList.prototype.forEach=Array.prototype.forEach}});',
        },
      ],
      globalDataSource: null,
      i18nInfo: {
        enabled: null,
        locales: null,
      },
    },
    // pagePath: pageId
    pageIdMapping: {
      '/asd5371': '1024143466269171712',
      '/ceshi1071': '1024143466269171712',
      '/ceshi8260': '1024261720265998336',
      '/model28529': '1051421568049684480',
      '/buchong4160': '1051387196217495552',
      '/tanchuang1787': '1060380198735069184',
      '/model7813': '1049266938740068352',
      '/ssss3279': '1024161040026025984',
      '/kapian9555': '1052397738087833600',
      '/guanliyuanshouye0496': '1056843976424230912',
      '/auditStart': '887537833022541824',
      '/auditOrderPrepare': '884045146848604160',
      '/CLS_CP_0007_0018': '922396081753948160',
    },
    baseUrl: 'http://10.10.193.65:9015/',
  };
  // const projectBuilder = testPlatformIsH5 ? alita({ options }) : alitapc({ options });
  const projectBuilder = alita({ options });

  const project = await projectBuilder.generateProject(
    schema, // 编排搭建出来的 schema
  );
  // 写入到 zip 包
  await createDiskPublisher().publish({
    project, // 上一步生成的 project
    outputPath: './templates/', // 输出目录
    projectSlug: testPlatformIsH5 ? 'h5' : 'zs', // 项目标识 -- 对应生成 h5.zip 文件
  });

  async function loadSchemaFile(schemaFile: string): Promise<any> {
    if (!schemaFile) {
      throw new Error('invalid schema file name');
    }

    const schemaFileContent = await fs.readFile(schemaFile, 'utf8');

    // 默认用 JSONC 的格式解析（兼容 JSON）
    return jsonc.parse(schemaFileContent);
  }
})();
