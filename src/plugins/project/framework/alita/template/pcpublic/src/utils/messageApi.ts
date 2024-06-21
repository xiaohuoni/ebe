import { message, Modal } from 'antd';
import React from 'react';
import Spin from './LcdpSpin';

Modal.config({
  rootPrefixCls: 'pcfactory',
});
const filterHtmlNode = (str: string) => {
  if (typeof str !== 'string' || !str) return str || '';
  const blacklist = ['script', 'style', 'iframe'];

  // 创建一个新的 DOM 解析器对象
  const parser = new DOMParser();

  // 使用 parseFromString 方法将 HTML 片段转换为 DOM 对象
  const doc = parser.parseFromString(str, 'text/html');

  // 遍历 DOM 树并删除恶意节点
  function cleanNode(node: Element) {
    if (node.nodeType === 1) {
      // 元素节点
      if (blacklist.indexOf(node.nodeName.toLowerCase()) !== -1) {
        node.parentNode?.removeChild(node);
        return;
      }

      // 移除元素节点上所有事件属性
      for (let i = node.attributes.length - 1; i >= 0; i -= 1) {
        const attr = node.attributes[i];
        if (
          attr.name.startsWith('on') ||
          String(node.getAttribute(attr.name))
            .toLowerCase()
            .indexOf('javascript:') !== -1
        ) {
          node.removeAttribute(attr.name);
        }
      }
    }

    for (let i = 0; i < node.childNodes.length; i += 1) {
      cleanNode(node.childNodes[i] as Element);
    }
  }
  cleanNode(doc.body);
  return doc.body.innerHTML;
};

const transformContent = (value: string) => {
  let finalContent: any = '';
  if (typeof value === 'string') {
    const cleanNode = filterHtmlNode(value);
    if (cleanNode) {
      finalContent = React.createElement('span', {
        dangerouslySetInnerHTML: {
          __html: filterHtmlNode(value),
        },
      });
    } else {
      finalContent = value;
    }
  } else {
    try {
      finalContent = JSON.stringify(value);
    } catch {
      finalContent = String(value);
    }
  }
  return finalContent;
};
const messageApi = (
  type: 'info' | 'success' | 'error' | 'warning' | 'loading' | 'warn',
  content: string,
  duration?: number,
) => {
  switch (type) {
    case 'info':
      return message.info(transformContent(content), duration);
    case 'success':
      return message.success(transformContent(content), duration);
    case 'error':
      return message.error(transformContent(content), duration);
    case 'warning':
    case 'warn':
      return message.warning(transformContent(content), duration);
    case 'loading':
      return message.loading(transformContent(content), duration);
    default:
      return message.info(transformContent(content), duration);
  }
};

export { messageApi, Spin, Modal };
