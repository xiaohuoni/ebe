import { LocaleFunction } from '@lingxiteam/types';
import { Toast as message } from 'antd-mobile-5';

const defaultUrl = '/app/file/uploadSingleFile';

export const fileId = 'fileId';

interface UploadHooks {
  uploadAfter?: (file: any) => void;
  uploadBefore?: (file: any) => void;
  uploadError?: (err: any) => void;
}

interface UploadOpts {
  headers?: any;
  url: string;
  file?: Blob;
  fileName: string;
  alias?: any;
  hooks?: UploadHooks;
  onChange?: (file: any) => void;
  [key: string]: any;
  credentials?: RequestCredentials;
  getLocale: LocaleFunction;
}

class UploadHandle implements UploadOpts {
  headers?: any;

  url!: string;

  file!: Blob;

  fileName!: string;

  alias?: any;

  opts: UploadOpts | undefined;

  uploadAfter: any;

  request: any;

  hooks: UploadHooks;

  getLocale: LocaleFunction;

  onChange: (file: any) => void;

  resultObj: any;

  credentials: RequestCredentials | undefined;

  resultObjs: any;

  filePrefix: string | undefined;

  fileIdKey: any;

  extendUploadData?: Record<string, any>;

  customHeaders?: Record<string, any>;

  // filePrefix文件前缀是系统默认时传该方法
  getAppFileUrlById?: (fileId: string) => string; // 根据id获取文件url（带签名）

  getFormData() {
    const formFile = new FormData();
    formFile.append(this.fileName, this.file);
    if (this.extendUploadData) {
      Object.keys(this.extendUploadData).forEach((key: string) => {
        if (this.extendUploadData?.[key]) {
          formFile.append(key, this.extendUploadData[key]);
        }
      });
    }
    return formFile;
  }

  async setProps(opts: UploadOpts) {
    Object.keys(opts).forEach((key) => {
      if (key && opts[key]) {
        // @ts-ignore
        this[key] = opts[key];
      }
    });
    if (!this.fileName) {
      this.fileName = 'file';
    }
    this.opts = opts || {};
    if (!this.url) {
      this.url = defaultUrl;
    }
    if (!this.resultObjs) {
      this.resultObjs = [];
    }
    if (!this.fileIdKey) {
      this.fileIdKey = 'fileId';
    }
  }

  setHooks(hooks = {}) {
    Object.keys(hooks).forEach((h) => {
      // @ts-ignore
      this.hooks[h] = hooks[h];
    });
  }

  sendRequestAfter(value: any) {
    if (this.onChange) {
      this.onChange(value.resultObject);
    }
    if (typeof this.hooks.uploadAfter === 'function') {
      this.hooks.uploadAfter(value);
    }
  }

  getUrl(url: string, fileId: string) {
    // 应用引擎接口补充签名
    return typeof this.getAppFileUrlById === 'function'
      ? this.getAppFileUrlById(fileId)
      : url;
  }

  value(resultObj: any) {
    let result: any = {};
    if (!this.resultObj || Object.keys(this.resultObj).length === 0) {
      return undefined;
    }
    if (!this.alias || typeof this.alias === 'string') {
      result = resultObj || this.resultObj;
    } else if ((this.alias || []).length === 0) {
      result[this.fileIdKey] = resultObj || this.resultObj[this.fileIdKey];
    } else {
      const obj = resultObj || this.resultObj;
      (this.alias || []).forEach((c: { _id: string | number }) => {
        // eslint-disable-next-line no-underscore-dangle
        result[c._id] = obj[c._id];
      });
    }
    result.url = this.getUrl(
      `${this.filePrefix}${result[this.fileIdKey]}`,
      result[this.fileIdKey],
    );
    return result;
  }

  values() {
    const result: any[] = [];
    const resultObjs = this.resultObjs || [];
    resultObjs.forEach((r: any) => {
      result.push(this.value(r.resultObject));
    });
    return result;
  }

  clearValue() {
    this.resultObj = undefined;
    this.resultObjs = undefined;
  }

  async sendRequest() {
    const { hooks, ...restOpts } = this.opts as UploadOpts;
    const { uploadBefore, uploadError } = hooks as UploadHooks;
    const formData = this.getFormData();
    if (typeof uploadBefore === 'function') {
      uploadBefore({
        ...(restOpts || {}),
        file: this.file,
      });
    }
    if (this.customHeaders && Object.keys(this.customHeaders).length > 0) {
      if (!this.headers) {
        this.headers = {
          headers: {},
        };
      } else if (!this.headers?.headers) {
        this.headers.headers = {};
      }
      Object.keys(this.customHeaders).forEach((key: string) => {
        // 将自定义头部里非ISO-8859-1字符 转码下
        this.headers.headers[key] = encodeURIComponent(
          this.customHeaders?.[key] || '',
        );
      });
    }

    this.request
      .post(this.url, formData, this.headers)
      .then((data: any) => {
        if (!data) {
          return Promise.reject(
            new Error(
              this.getLocale('Upload.exception', '请求失败，网关响应异常'),
            ),
          );
        }
        const resp = {
          ...data,
          url: `${this.filePrefix}${data[this.fileIdKey]}`,
          fileType: this.file?.type,
        };
        this.resultObj = resp;
        this.sendRequestAfter({
          ...restOpts,
          resultObject: data,
          file: this.file,
          realUrl: `${this.filePrefix}${data[this.fileIdKey]}`,
        });
        return resp;
      })
      .catch((err: { message: any }) => {
        console.log(this.getLocale('Upload.failed', '上传失败'));
        message.show({
          icon: 'fail',
          content: err?.message || this.getLocale('Upload.failed', '上传失败'),
        });
        if (typeof uploadError === 'function') {
          uploadError(err);
        }
      });

    return this;
  }

  static defaultProps: UploadOpts = {
    url: defaultUrl,
    fileName: 'file',
    // @ts-ignore
    getLocale: (_, placelhoder) => {
      console.error('引擎能力getLocale不存在');
      return placelhoder;
    },
    alias: [
      {
        _id: fileId,
      },
      {
        _id: 'fileName',
      },
    ],
  };

  queue(reqList = [], files = []) {
    // 每次调用前需要重置下
    this.resultObjs = [];
    let sequence = Promise.resolve();
    reqList.forEach((req: any, index) => {
      sequence = sequence
        .then(() => req(files[index]))
        .then((data) => {
          this.resultObjs.push(data);
          return req;
        });
    });
    return sequence;
  }

  public setLocale(fn: LocaleFunction) {
    this.getLocale = fn;
  }

  constructor(opts?: UploadOpts) {
    this.hooks = {};
    this.onChange = () => {};
    this.resultObj = {};
    // @ts-ignore
    this.getLocale = (_, placelhoder) => {
      console.error('引擎能力getLocale不存在');
      return placelhoder;
    };
    this.customHeaders = { ...(opts?.headers || {}) };
    this.setProps({ ...UploadHandle.defaultProps, ...(opts || {}) });
  }
}

export default UploadHandle;
