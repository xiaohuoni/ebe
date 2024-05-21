import React from 'react';
import { Spin } from 'antd';
import { prefix } from '../../styles/index';
import './index.less';

const LcdpSpin = (props: { spinning: boolean }) => <Spin spinning={props.spinning} className={`${prefix}-dynamicPage-spinning-mask`} />;

export default LcdpSpin;
