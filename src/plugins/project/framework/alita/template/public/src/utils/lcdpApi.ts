import LcdpBaseApi from './lcdpBaseApi';

export declare type LocaleFunction = (
  key: string,
  placeholder?: string,
  kv?: Record<string, string>,
) => string;
// 对应用全局数据和全局方法访问的接口对象,为自定义代码提供更多可能性
/* @__HOT_UPDATE__ */
class LcdpApi extends LcdpBaseApi {
  components: any;

  static instance: LcdpApi;

  mountObj: any;

  getLocale: LocaleFunction = (k, placeholder) => placeholder || '';

  /*  @__HOT_UPDATE__ @alias LcdpApi */
  constructor(mountObj?: any, singletonLcdpApi?: any) {
    super(mountObj, singletonLcdpApi);
    // 废弃
    // this.mount(mountObj);
    if (singletonLcdpApi) {
      // router 只应该由singletonLcdpApi访问
      ['router'].forEach((k) => {
        (() => {
          // eslint-disable-next-line
          let val = null;
          Object.defineProperty(this, k, {
            get() {
              return (
                url: string,
                lcdpParentRenderId: string,
                state?: Record<string, any>,
              ) =>
                singletonLcdpApi[k](
                  url,
                  this.data.pages,
                  this.data.appConfig.appId,
                  lcdpParentRenderId,
                  state,
                );
            },
            set(value) {
              val = value;
            },
          });
        })();
      });
    }
  }

  /**
   * @name 路由跳转 考虑之后多应用页面跳转，所有跳转均通过单例lcdpApi访问，如存在多应用页面路径相同，优先跳转当前应用页面
   * @param {string} url 页面的路径，如：/order 或者接收页面Id 如需要传参 如：/order?id=123
   * @param currentAppPages 当前应用页面
   * @param appId 当前应用的appId
   * @param lcdpParentRenderId 父页面的渲染ID，是上下文中的renderId，打开弹窗/抽屉需要，否则调用父页面事件已出
   * @param state 组件状态数据
   */
  router(
    url: string,
    currentAppPages: Array<any>,
    appId: string,
    lcdpParentRenderId: string,
    state?: Record<string, any>,
  ) {
    const { message } = this.antd;
    if (!url) {
      message?.warning(
        this.getLocale('lcdpApi.router.urlEmpty', '页面跳转地址缺失，请检查'),
      );
    }
    if (
      /^((http|https):)?\/\/[^\s]+/.test(url) ||
      !this.refs.history ||
      !this.data.pages
    ) {
      window.location.href = url;
    } else {
      const isPageId = /^\d+$/.test(url);
      let pageData: any = null;
      // 优先跳转当前应用页面
      if (currentAppPages?.length) {
        pageData = isPageId
          ? currentAppPages.find((n: any) => n.pageId === url)
          : currentAppPages.find((n: any) =>
              url.split('?').includes(n.pagePath),
            );
      }
      // this.data.pages 包含所有应用页面
      if (!pageData) {
        pageData = isPageId
          ? this.data.pages.find((n: any) => n.pageId === url)
          : this.data.pages.find((n: any) =>
              url.split('?').includes(n.pagePath),
            );
      }
      if (pageData) {
        const [pathname, search] = url.split('?');
        const searchPamams = search
          ? search.split('&').reduce((pre: any, cur: any) => {
              const [k, v] = cur.split('=');
              if (v) {
                pre[decodeURIComponent(k)] = decodeURIComponent(v);
              }
              return pre;
            }, {})
          : {};
        switch (pageData.pageContainerType) {
          case 'Page': {
            let realSearch = search;
            if (!searchPamams?.appId) {
              realSearch = `${search === undefined ? '?' : `${search}&`}appId=${
                pageData.appId || appId
              }`;
            }
            this.refs.history.push({
              pathname,
              search: realSearch,
            });
            break;
          }
          case 'Drawer': {
            try {
              this.refs.ModalManager.current.openDrawer({
                pageId: pageData.pageId,
                params: {
                  ...searchPamams,
                  ...state,
                },
                lcdpParentRenderId,
              });
            } catch (e) {
              console.error(e);
              message?.warning(
                this.getLocale(
                  'lcdpApi.router.openFail',
                  '打开新页面失败，缺失Drawer',
                  { type: 'Drawer' },
                ),
              );
            }
            break;
          }
          case 'Modal':
          case 'MobileModal': {
            try {
              this.refs.ModalManager.current.openModal({
                pageId: pageData.pageId,
                params: searchPamams,
                lcdpParentRenderId,
              });
            } catch (e) {
              console.error(e);
              message?.warning(
                this.getLocale(
                  'lcdpApi.router.openFail',
                  '打开新页面失败，缺失Modal',
                  { type: 'Modal' },
                ),
              );
            }
            break;
          }
          default: {
            message?.warning(
              this.getLocale(
                'lcdpApi.router.notSupport',
                `不支持的页面类型: ${pageData.pageContainerType}`,
                { type: pageData.pageContainerType },
              ),
            );
            break;
          }
        }
      } else {
        message?.warning(
          this.getLocale('lcdpApi.router.notFound', '找不到跳转页面的数据'),
        );
      }
    }
  }

  // 静态方法(单例)
  static getInstance(mountObj?: any) {
    if (!this.instance) {
      this.instance = new LcdpApi(mountObj);
    }
    return this.instance;
  }

  // 将data/refs/router 挂载在外部对象,供非module方式引入，进行数据访问
  mount(obj: any) {
    // 废弃
    if (!obj || typeof obj !== 'object') return;
    this.mountObj = obj;
    obj.lcdpApi = {
      data: this.data,
      refs: this.refs,
      apis: this.apis,
      router: this.router,
      copy: this.copy,
      fetch: this.fetch,
      isSupport: this.isSupport,
      hooks: this.hooks,
      selCustomFunc: this.selCustomFunc,
      callSelCustomFunc: this.callSelCustomFunc,
      messageHandlers: this.messageHandlers,
    };
  }
}
export default LcdpApi.getInstance();
export { LcdpApi };
