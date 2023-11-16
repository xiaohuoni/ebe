declare const _default: {
    '/portal': {
        target: string;
        changeOrigin: boolean;
    };
    '/server': {
        target: string;
        changeOrigin: boolean;
        pathRewrite: {
            '^/server': string;
        };
    };
    '/app': {
        target: string;
        changeOrigin: boolean;
    };
    '/login': {
        target: string;
        changeOrigin: boolean;
    };
    '/lcdp': {
        target: string;
        changeOrigin: boolean;
    };
    '/img': {
        target: string;
        changeOrigin: boolean;
        pathRewrite: {
            '^/img': string;
        };
    };
    '/engine': {
        target: string;
        changeOrigin: boolean;
        pathRewrite: {
            '^/engine': string;
        };
    };
};
export default _default;
