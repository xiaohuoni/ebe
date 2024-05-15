
export declare type RenderId = string;
class customFuncMapping {
    private mapping: Map<RenderId, Record<string, Function>> = new Map();

    /**
   * 移除记录
   * @param routerId 路由id
   * @param engineId 引擎id
   */
    remove(renderId: RenderId) {
        if (!renderId) {
            this.mapping.delete(renderId);
        } else {
            console.error('renderId为空');
        }
    };
    get(renderId: string) {
        if (renderId) {
            return this.mapping.get(renderId) || {};
        } else {
            console.error('renderId为空');
            return {}
        }

    };
    add(renderId: RenderId, functions: Record<string, Function>) {
        this.mapping.set(renderId, functions);
    };
    callCustomFunc(renderId: string | undefined, funcName: string, ...args: any) {
        if (renderId) {
            const customActionMapRef = this.get(renderId);
            if (typeof customActionMapRef?.[funcName] === 'function') {
                customActionMapRef?.[funcName](...args);
            } else {
                console.error(`${funcName}不存在`)
            }
        }else {
            console.error('renderId不能为空')
        }
    };
}

export default new customFuncMapping();