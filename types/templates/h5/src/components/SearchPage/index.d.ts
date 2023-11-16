import type { FC } from 'react';
import './index.less';
interface SearchPageProps {
    pageCatalogs: any[];
    pageData?: any[];
    layout?: string;
    debugToken?: string;
    appId: string;
    onClose?: () => void;
}
declare const SearchPage: FC<SearchPageProps>;
export default SearchPage;
