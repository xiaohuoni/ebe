/* eslint-disable */
/**
 * @description  CSS resize polyfill for IE/Edge
 * @author       zhangxinxu(.com)
 * @document     https://www.zhangxinxu.com/wordpress/?p=8839
 * @demo         https://www.zhangxinxu.com/study/201908/textarea-resize-polyfill-demo.php
 * @license      MIT 鍙互鍏嶈垂浣跨敤锛屼絾浣滆€呭拰鏂囨。鍑哄闇€瑕佷繚鐣�
 */

/**
 * closest polyfill
 */
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    let el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}

/**
 * NodeList forEach support
 */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/**
 * resize polyfill
 */
if (
  typeof window.getComputedStyle(document.body).resize === 'undefined' &&
  window.HTMLTextAreaElement
) {
  HTMLTextAreaElement.prototype.setResize = function () {
    // 鍏冪礌
    const textarea = this;
    // 鏍峰紡鐨勬帶鍒朵笌澶勭悊
    const styleDisplay = window.getComputedStyle(textarea).display;
    let target = textarea.store && textarea.store.resize;
    let resize = null;
    // 鏂囨湰鍩熺殑id
    let { id } = textarea;
    if (!id) {
      id = `r${Math.random()}`.replace('0.', '');
      textarea.id = id;
    }
    // 鑾峰彇resize灞炴€у€�
    let attrResize = textarea.getAttribute('resize');

    if (
      typeof attrResize === 'string' &&
      attrResize !== 'vertical' &&
      attrResize !== 'horizontal'
    ) {
      attrResize = 'both';
    }
    if (typeof attrResize !== 'string') {
      return;
    }

    // 鍒涘缓妯℃嫙鎷変几鐨勫熀鏈厓绱�
    if (!target) {
      target = document.createElement('span');
      resize = document.createElement('label');
      resize.setAttribute('for', id);
      target.appendChild(resize);
      // 涓€浜涘浐瀹氱殑鏍峰紡璁剧疆
      target.style.position = 'relative';
      target.style.verticalAlign =
        window.getComputedStyle(textarea).verticalAlign;

      resize.style.position = 'absolute';
      resize.style.width = '17px';
      resize.style.height = '17px';
      resize.style.background =
        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cpath d='M765.558 510.004a93.65 93.65 0 1 0 191.665 0 93.65 93.65 0 1 0-191.665 0zM765.558 821.46a93.65 93.65 0 1 0 191.665 0 93.65 93.65 0 1 0-191.665 0zM422.15700000000004 821.46a93.65 93.65 0 1 0 191.665 0 93.65 93.65 0 1 0-191.665 0zM422.15700000000004 510.004a93.65 93.65 0 1 0 191.665 0 93.65 93.65 0 1 0-191.665 0zM765.558 202.54a93.65 93.65 0 1 0 191.665 0 93.65 93.65 0 1 0-191.665 0zM66.77700000000002 821.46a93.65 93.65 0 1 0 191.665 0 93.65 93.65 0 1 0-191.665 0z' fill='%23BFBFBF'/%3E%3C/svg%3E\") no-repeat center";
      resize.style.bottom = '0';
      resize.style.right = '0';
      resize.style.backgroundSize = '12px 12px';
      // 鍦╰extarea鍏冪礌鍚庨潰鏄剧ず
      textarea.insertAdjacentElement('afterend', target);
      textarea.store = textarea.store || {};
      textarea.store.resize = target;

      // 浜嬩欢
      const store = {};
      resize.addEventListener('mousedown', (event) => {
        store.resizing = true;
        store.startX = event.pageX;
        store.startY = event.pageY;
        // 姝ゆ椂textarea鐨勫昂瀵�
        store.offsetWidth = textarea.offsetWidth;
        store.offsetHeight = textarea.offsetHeight;

        event.preventDefault();
      });

      document.addEventListener('mousemove', (event) => {
        if (!store.resizing) {
          return;
        }
        event.preventDefault();

        const currentX = event.pageX;
        const currentY = event.pageY;

        const moveX = currentX - store.startX;
        const moveY = currentY - store.startY;

        let currentWidth = store.offsetWidth + moveX;
        let currentHeight = store.offsetHeight + moveY;

        if (currentWidth < 40) {
          currentWidth = 40;
        }
        if (currentHeight < 40) {
          currentHeight = 40;
        }

        // 灏哄璁剧疆
        if (attrResize === 'both' || attrResize === 'horizontal') {
          textarea.style.width = `${currentWidth}px`;
          if (target.style.display === 'block') {
            target.style.width = `${currentWidth}px`;
          }
        }
        if (attrResize === 'both' || attrResize === 'vertical') {
          textarea.style.height = `${currentHeight}px`;
          if (/inline/.test(styleDisplay)) {
            target.style.height = `${currentHeight}px`;
          }
        }
      });

      document.addEventListener('mouseup', () => {
        if (store.resizing) {
          store.resizing = false;
        }
      });
    }

    if (styleDisplay === 'none') {
      target.style.display = 'none';
    } else if (/inline/.test(styleDisplay)) {
      target.style.display = 'inline-block';
      target.style.height = `${textarea.offsetHeight}px`;
    } else {
      target.style.display = 'block';
      target.style.width = `${textarea.offsetWidth}px`;
    }
  };

  HTMLTextAreaElement.prototype.initResize = function () {
    this.setResize();

    // 鏇存柊涓庡鐞�
    this.addEventListener(
      'DOMAttrModified',
      function () {
        this.setResize();
      },
      false,
    );
  };

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('textarea[resize]').forEach((textarea) => {
      textarea.initResize();
    });

    // 鎻掑叆鍐呭鏃跺€欑殑鑷姩鍒濆鍖�
    document.body.addEventListener('DOMNodeInserted', (event) => {
      // 鎻掑叆鐨勫厓绱�
      const { target } = event;

      if (
        typeof target.matches === 'function' &&
        target.matches('textarea[resize]') &&
        (!target.store || !target.store.resize)
      ) {
        target.initResize();
      }
    });
  });
}

/**
 * CSS.escape polyfill
 */
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
(function (root, factory) {
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if (typeof exports === 'object') {
    // For Node.js.
    module.exports = factory(root);
    // eslint-disable-next-line no-undef
  } else if (typeof define === 'function' && define.amd) {
    // For AMD. Register as an anonymous module.
    // eslint-disable-next-line no-undef
    define([], factory.bind(root, root));
  } else {
    // For browser globals (not exposing the function separately).
    factory(root);
  }
})(typeof global !== 'undefined' ? global : this, (root) => {
  if (root.CSS && root.CSS.escape) {
    return root.CSS.escape;
  }

  // https://drafts.csswg.org/cssom/#serialize-an-identifier
  const cssEscape = function (value) {
    if (arguments.length === 0) {
      throw new TypeError('`CSS.escape` requires an argument.');
    }
    const string = String(value);
    const { length } = string;
    let index = -1;
    let codeUnit;
    let result = '';
    const firstCodeUnit = string.charCodeAt(0);

    if (
      // If the character is the first character and is a `-` (U+002D), and
      // there is no second character, […]
      length === 1 &&
      firstCodeUnit === 0x002d
    ) {
      return `\\${string}`;
    }

    while (++index < length) {
      codeUnit = string.charCodeAt(index);
      // Note: there’s no need to special-case astral symbols, surrogate
      // pairs, or lone surrogates.

      // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
      // (U+FFFD).
      if (codeUnit === 0x0000) {
        result += '\uFFFD';
        continue;
      }

      if (
        // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
        // U+007F, […]
        (codeUnit >= 0x0001 && codeUnit <= 0x001f) ||
        codeUnit == 0x007f ||
        // If the character is the first character and is in the range [0-9]
        // (U+0030 to U+0039), […]
        (index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
        // If the character is the second character and is in the range [0-9]
        // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
        (index == 1 &&
          codeUnit >= 0x0030 &&
          codeUnit <= 0x0039 &&
          firstCodeUnit == 0x002d)
      ) {
        // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
        result += `\\${codeUnit.toString(16)} `;
        continue;
      }

      // If the character is not handled by one of the above rules and is
      // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
      // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
      // U+005A), or [a-z] (U+0061 to U+007A), […]
      if (
        codeUnit >= 0x0080 ||
        codeUnit == 0x002d ||
        codeUnit == 0x005f ||
        (codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
        (codeUnit >= 0x0041 && codeUnit <= 0x005a) ||
        (codeUnit >= 0x0061 && codeUnit <= 0x007a)
      ) {
        // the character itself
        result += string.charAt(index);
        continue;
      }

      // Otherwise, the escaped character.
      // https://drafts.csswg.org/cssom/#escape-a-character
      result += `\\${string.charAt(index)}`;
    }
    return result;
  };

  if (!root.CSS) {
    root.CSS = {};
  }

  root.CSS.escape = cssEscape;
  return cssEscape;
});
