import React from 'react';
import EmptySvg from './empty';
import { Empty } from 'antd';

export const customLocale = {
  emptyText: <Empty className="pcfactory-empty-normal" image={<EmptySvg />} />,
};
