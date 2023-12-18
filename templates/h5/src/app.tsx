import { history } from 'alita';

const titleList = [
  {
    pagePath: '/',
    title: '首页',
  },
];
const navList: never[] = [];
const navBar = {
  navList,
  hideNavBar: false,
  onLeftClick() {
    history.go(-1);
  },
};
const tabList: never[] = [];

const tabBar = {
  color: '#999999',
  selectedColor: '#00A0FF',
  borderStyle: 'red',
  position: 'bottom',
  list: tabList,
};

export const mobileLayout = {
  documentTitle: '默认标题',
  navBar,
  tabBar,
  titleList,
};

export function getKeepAlive(keepalive: any) {
  return [];
}
