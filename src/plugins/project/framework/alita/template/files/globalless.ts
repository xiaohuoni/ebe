import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'global',
    'less',
    `html,
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
    `,
  );

  return [['src'], file];
}
