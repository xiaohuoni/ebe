import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';
export function postObjectData(generatorParams: CMDGeneratorPrames): string {
  const { value, platform, scope, config } = generatorParams;
  const { hasEventExtService, eventExtService, sync, postDataSource, id } =
    value.options;

  const superParamConfig =
    hasEventExtService === 'T' && eventExtService?.length
      ? eventExtService.map((e: { sceneCode: any; actionCode: any }) => ({
          sceneCode: e.sceneCode,
          actionCode: e.actionCode,
        }))
      : [];

  const type = platform === 'h5' ? 'DForm' : 'Form';

  const busiObjectIdMap: Record<string, any> = {};

  (postDataSource as any[]).forEach((current) => {
    let name: string = '';
    let formId: string | undefined = undefined;
    if (typeof current === 'string') {
      name = current;
    }
    if (typeof current === 'object') {
      name = current.dataSourceName;
      if (current.type === type) {
        formId = current.compId;
      }
    }

    if (!name) {
      return;
    }
    const ds = config?.ir?.dataSource?.find(
      (n: { name: string }) => (name = n.name),
    );
    const busiObjectId = ds.config.options?.object?.busiObjectId;
    busiObjectIdMap[name] = {
      busiObjectId,
      formId,
    };
  });

  const topVarName = `postObjectParams_${id}`;

  const code = `
    api.commonFetch(
    ${parse2Var('post')},
    ${parse2Var('/app/object/run')},
    ${topVarName}
    )
  `;

  return `
    // postObjectData 提交业务对象
    const ${topVarName} = await transSuperObjectParams(${parse2Var(
    busiObjectIdMap,
  )},${parse2Var(superParamConfig)})
    ${GeneratorCallbackWithThenCatch(code, generatorParams, {
      sync,
      params: {
        callback1: [`reply_${id}`],
        callback2: [],
      },
      topFuncAsync: true,
      alwayCatch: true,
    })}
  `;
}
