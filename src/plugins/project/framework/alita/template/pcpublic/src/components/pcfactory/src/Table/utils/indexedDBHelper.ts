export interface DataProps {
  userId: string;
  appId: string;
  compId: string;
  order?: any[];
  selected?: any[];
  save: boolean;
}

// 定义正则表达式
const PATTERN = /[^?]+/;
const DBNAME = 'TABLE_CUSTOM';
const isIE = !!((window as any).ActiveXObject || 'ActiveXObject' in window);

const getOrSaveData = (actionData: DataProps) => {
  return new Promise((resolve) => {
    const pagePatch =
      window.location.hash?.match(PATTERN)?.[0]?.replace(/^#\//, '') || '';
    const pageKey = `${actionData.appId}_${pagePatch}_${actionData.userId}`;
    //  兼容浏览器
    const indexedDB =
      window.indexedDB ||
      (window as any).mozIndexedDB ||
      (window as any).webkitIndexedDB ||
      (window as any).msIndexedDB;

    if (indexedDB) {
      let version = new Date().getTime();
      if (isIE) {
        // ie上版本号最多支持9位数，做下兼容，取时间戳中间9位
        version = parseInt(version.toString().substring(2, 11), 10);
      }
      // 打开数据库，若没有则会创建
      const request = indexedDB.open(DBNAME, version);
      // 数据库打开成功回调
      request.onsuccess = (event: any) => {
        // console.log('打开数据库成功');
        const db = event.target.result; // 数据库对象
        const transaction = db.transaction([pageKey], 'readwrite');
        const objectStore = transaction.objectStore(pageKey);
        // 保存数据
        if (actionData.save) {
          const actionPut = objectStore.put({
            ORDER: actionData.order,
            SELECTED: actionData.selected,
            id: actionData.compId,
          });
          actionPut.onsuccess = (e: any) => {
            // console.log('数组插入成功');
            db.close();
          };
          actionPut.onerror = () => {
            db.close();
          };
        } else {
          // 读取数据
          const action = objectStore.get(actionData.compId);
          action.onsuccess = (e: any) => {
            // 获取对象成功
            resolve(e.target.result);
            db.close();
          };
          action.onerror = () => {
            resolve({});
            db.close();
          };
        }
      };
      // 数据库打开失败的回调
      request.onerror = (event) => {
        console.log('indexedDB数据库打开报错:', event);
        resolve({});
      };
      request.onupgradeneeded = (event: any) => {
        const db = event.target.result; // 数据库对象
        if (db.objectStoreNames?.length > 100) {
          db.deleteObjectStore(db.objectStoreNames[0]);
        }
        if (!db.objectStoreNames.contains(pageKey)) {
          db.createObjectStore(pageKey, { keyPath: 'id' });
        }
      };
    } else {
      // 不支持indexDB,就用localStorage存储
      const allData: any = JSON.parse(
        window.localStorage.getItem(DBNAME) || '{}',
      );
      if (actionData.save) {
        // 超过100个就删掉一些
        let allKeys = Object.keys(allData);
        if (allKeys.length > 100) {
          delete allData[allKeys[0]];
        }
        allKeys = Object.keys(allData);
        if (allKeys.includes(pageKey)) {
          const data: any = allData[pageKey];
          data[actionData.compId] = {
            ORDER: actionData.order,
            SELECTED: actionData.selected,
          };
        } else {
          allData[pageKey] = {
            [actionData.compId]: {
              ORDER: actionData.order,
              SELECTED: actionData.selected,
            },
          };
        }
        window.localStorage.setItem(DBNAME, JSON.stringify(allData));
      } else if (allData?.[pageKey]?.[actionData.compId]) {
        resolve(allData[pageKey][actionData.compId]);
      } else {
        resolve({});
      }
    }
  });
};

export { getOrSaveData };
