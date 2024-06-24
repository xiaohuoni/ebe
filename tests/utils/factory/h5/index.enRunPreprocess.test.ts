import h5 from '../../../../src/utils/factory/h5/index.enRunPreprocess';
import { extraData } from '../../../../src/utils/schema/lxschema';

describe('h5', () => {
  it('should preprocess originProps for "*" key', () => {
    const instance: any = { id: 'exampleId', compName: 'Button' };
    const originProps: any = { visible: true, status: 2 };
    const Sandbox: any = {};

    h5['*'](instance, originProps, Sandbox, extraData);

    expect(originProps.visible).toBe(false);
    expect(originProps.disabled).toBe(false);
    expect(originProps.readOnly).toBe(false);
  });

  it('should preprocess originProps for "BOFramer|Pageview| RemoteComponent" key', () => {
    const instance: any = {};
    const originProps: any = {};
    const Sandbox: any = { renderId: 'exampleRenderId' };

    h5['BOFramer|Pageview| RemoteComponent'](
      instance,
      originProps,
      Sandbox,
      extraData,
    );

    expect(originProps.lcdpParentRenderId).toBe(undefined);
  });

  it('should preprocess originProps for "BOFramer" key', () => {
    const instance: any = {};
    const originProps: any = {};
    const Sandbox: any = { appId: 'exampleAppId', pageId: 'examplePageId' };

    h5['BOFramer'](instance, originProps, Sandbox, extraData);

    expect(originProps.appId).toBe(undefined);
    expect(originProps.pageId).toBe(undefined);
  });

  it('should preprocess originProps for "DformDate" key', () => {
    const instance: any = {};
    const originProps: any = { defaultValue: { type: 'isCurrent' } };
    const Sandbox: any = {};

    h5['DformDate'](instance, originProps, Sandbox, extraData);

    expect(originProps.defaultValue).toBeDefined();
  });

  it('should preprocess originProps for "DformRangePicker" key', () => {
    const instance: any = {};
    const originProps: any = {
      timeMode: 'exampleTimeMode',
      format: 'exampleFormat',
    };
    const Sandbox: any = {};

    h5['DformRangePicker'](instance, originProps, Sandbox, extraData);

    expect(originProps.modeType).toBe('exampleTimeMode');
    expect(originProps.formatter).toBe('exampleFormat');
  });

  it('should preprocess originProps for "DformFile" key', () => {
    const instance: any = {};
    const originProps: any = { fileIdKey: 'exampleFileIdKey' };
    const Sandbox: any = {};

    h5['DformFile'](instance, originProps, Sandbox, extraData);

    expect(originProps.alias).toBeDefined();
  });

  it('should preprocess originProps for "TabBar|SideBar" key', () => {
    const instance: any = {};
    const originProps: any = {};
    const Sandbox: any = { renderId: 'exampleRenderId' };

    h5['TabBar|SideBar'](instance, originProps, Sandbox, extraData);

    expect(originProps.lcdpParentRenderId).toBe('exampleRenderId');
  });
});
