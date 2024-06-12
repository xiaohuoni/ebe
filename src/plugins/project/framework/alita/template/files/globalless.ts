import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';

  const file = createResultFile(
    'global',
    'less',
    isMobile
      ? `html,
body,
#root,
#root > div {
  height: 100vh;
}

/* 首先使用媒体查询来针对苹果设备进行样式设置 */
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  /* 使用-webkit-min-device-pixel-ratio来判断是否为苹果设备 */
  /* 这将应用于所有苹果设备 */
  /* 接下来，使用Safari浏览器的私有前缀进行判断 */
  @supports (-webkit-overflow-scrolling: touch) {
    /* 这将应用于Safari浏览器 */
    /* -webkit-overflow-scrolling是Safari浏览器的特有属性 */
    /* 可以在这里添加Safari浏览器特定的样式 */

.alita-page {
  contain: none;
}
  }
}

/* stylelint-disable-next-line no-invalid-position-at-import-rule */
@import '~@lingxiteam/antd-mobile-v2-theme/es/index.less';
`
      : `*,
*::before,
*::after {
  box-sizing: border-box;
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

html, body { height: 100%; }

#root {
  height: 100%;
}

.page {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

@media print {
  body {
    -webkit-print-color-adjust: exact;
    -moz-print-color-adjust: exact;
    -ms-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}

* {
  /* firefox */
  scrollbar-width: thin;
  scrollbar-color: #E5E5E5 transparent;
  /* ie11 */
  scrollbar-face-color: #E5E5E5;
  scrollbar-arrow-color: #ffffff;
  scrollbar-shadow-color: #E5E5E5;
}

// chrome safari
::-webkit-scrollbar {
  background: inherit;
  width: 4px !important; 
  height: 4px !important;  
}
      
::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: #E5E5E5;
}

::-webkit-scrollbar-track {
  background: inherit;
}
.ued-modal-wrap {
  .pcfactory-modal-body {
    padding: 0;
  }
}

.ued-drawer-wrap {
  .pcfactory-drawer-header {
    height: 48px;
    padding: 16px 20px;

    .pcfactory-drawer-title {
      color: #1c242e;
    }
  }

  .pcfactory-drawer-header-title > button {
    position: absolute;
    right: 0;
  }
  .pcfactory-drawer-body {
    padding: 0;
  }
  .pcfactory-drawer-footer {
    padding: 0 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 56px;
    button {
      margin-left: 8px;
    }
  }
}
`,
  );

  return [['src'], file];
}
