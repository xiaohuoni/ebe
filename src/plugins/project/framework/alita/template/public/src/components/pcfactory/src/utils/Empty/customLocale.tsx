import { Empty } from 'antd';
import React from 'react';
import EmptySvg from './empty';

export const customLocale = {
  emptyText: <Empty className="pcfactory-empty-normal" image={<EmptySvg />} />,
};
