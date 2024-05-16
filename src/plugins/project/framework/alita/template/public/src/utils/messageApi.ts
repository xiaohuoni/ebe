import { message } from 'antd';
import React from 'react';

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
  type: 'info' | 'success' | 'error' | 'warning' | 'loading',
  content: string,
  duration?: number,
) => {
  switch (type) {
    case 'info':
      message.info(transformContent(content), duration);
      break;
    case 'success':
      message.success(transformContent(content), duration);
      break;
    case 'error':
      message.error(transformContent(content), duration);
      break;
    case 'warning':
      message.warning(transformContent(content), duration);
      break;
    case 'loading':
      message.loading(transformContent(content), duration);
    default:
      message.info(transformContent(content), duration);
  }
};

export { messageApi };
