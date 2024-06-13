import { useLocation } from 'alita';
import { parse } from 'qs';
import { useMemo } from 'react';

import BannerModal from '@/components/common/BannerModal';

const PreviewFile = () => {
  // const { fileIds = '', fileIndex, appId, pageId } = getSearchObj();

  const location = useLocation();
  const { fileIds = '', fileIndex } = parse(
    (location?.search ?? '?')?.split('?')[1],
  );
  const fileList = useMemo(
    () => (fileIds.split(',') || []).map((id: string) => ({ fileId: id })),
    [fileIds],
  );
  return (
    <BannerModal fileList={fileList} fileIndex={fileIndex} viewMode="newTab" />
  );
};

export default PreviewFile;
