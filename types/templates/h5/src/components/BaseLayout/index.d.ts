import type { FC } from 'react';
import './index.less';
interface BaseLayoutProps {
    onClose?: () => void;
    pages?: any[];
    debugToken?: string;
    appId: string;
    layout: string;
    showClose?: boolean;
    closeClick?: () => void;
}
declare const BaseLayout: FC<BaseLayoutProps>;
export default BaseLayout;
