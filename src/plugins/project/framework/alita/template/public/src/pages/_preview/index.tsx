import { useLocation } from 'alita';
import { parse } from 'qs';
import React, { useMemo } from 'react';

import BannerModal from '@/components/BannerModal';

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
    <BannerModal
      appId="1089426139952508928"
      pageId="1108371301173338112"
      fileList={fileList}
      fileIndex={fileIndex}
      viewMode="newTab"
    />
  );
};

export default PreviewFile;
