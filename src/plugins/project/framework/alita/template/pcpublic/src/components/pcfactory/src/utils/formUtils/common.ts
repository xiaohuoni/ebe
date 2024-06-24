export type mode = 'grid' | 'pixel' | 'percentage' | '';

/**
 * 获取布局模式
 * @param col
 * @returns
 */
export const getMode = (col: string | number): mode => {
  if (!Number.isNaN(Number(col))) {
    return 'grid';
  }
  if (typeof col === 'string' && col.includes('px')) {
    return 'pixel';
  }
  if (typeof col === 'string' && col.includes('%')) {
    return 'percentage';
  }
  return '';
};

/**
 * 表单项错误滚动使用的className
 * @param fieldName
 * @returns
 */
export const getFormItemClassName = (fieldName: string) => {
  return `formItem-error-${fieldName}`;
};

/**
 * 过滤html里面的危险标签
 * @param str
 * @returns
 */
export const filterHtmlNode = (str: string) => {
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
