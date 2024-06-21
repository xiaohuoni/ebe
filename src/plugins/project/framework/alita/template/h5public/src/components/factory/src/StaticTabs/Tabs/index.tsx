import React from 'react';
import {
  DefaultTabBar as RMCDefaultTabBar,
  TabBarPropsType,
  Tabs as RMCTabs,
} from 'rmc-tabs';
import './index.less';
import TabsProps from './PropsType';

export class DefaultTabBar extends RMCDefaultTabBar {
  static defaultProps = {
    ...(RMCDefaultTabBar as any).defaultProps,
    prefixCls: 'am-tabs-default-bar',
  };
}

export default class Tabs extends React.PureComponent<TabsProps, {}> {
  // eslint-disable-next-line react/sort-comp
  public static DefaultTabBar = DefaultTabBar;

  static defaultProps = {
    prefixCls: 'am-tabs',
  };

  renderTabBar = (props: TabBarPropsType) => {
    const { renderTab } = this.props;
    return <DefaultTabBar {...props} renderTab={renderTab} />;
  };

  render() {
    return <RMCTabs renderTabBar={this.renderTabBar} {...this.props} />;
  }
}
