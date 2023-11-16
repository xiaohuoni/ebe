import React from 'react';
export declare const mobileLayout: {
    documentTitle: string;
    navBar: {
        navList: never[];
        hideNavBar: boolean;
        onLeftClick(): void;
    };
    tabBar: {
        color: string;
        selectedColor: string;
        borderStyle: string;
        position: string;
        list: never[];
    };
    titleList: {
        pagePath: string;
        title: string;
    }[];
    customHeader: React.JSX.Element;
};
export declare function getKeepAlive(keepalive: any): any;
