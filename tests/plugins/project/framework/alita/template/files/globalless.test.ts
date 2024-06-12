import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/globalless';
import { expectValueIgnoreWhitespace } from '../../../../../../utils';

describe('template files globalless', () => {
  test('should return the correct file globalless', () => {
    const config: any = {
      platform: 'pc',
    };
    const expectedFileContent = `*,
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
    
    html,
    body {
      height: 100%;
    }
    
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
    `;

    const [directories, file] = getFile(config);

    expect(directories).toEqual(['src']);
    expect(file.name).toEqual('global');
    expect(file.ext).toEqual('less');
    expectValueIgnoreWhitespace(file.content, expectedFileContent);
  });
});
