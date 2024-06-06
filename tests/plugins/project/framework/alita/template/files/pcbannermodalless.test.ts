import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/pcbannermodalless';
import { expectValueIgnoreWhitespace } from '../../../../../../utils';

describe('template files pcbannermodalless', () => {
  test('should return the correct file pcbannermodalless', () => {
    const config: any = {
      platform: 'pc',
    };
    const expectedFileContent = `@import (reference) '../../styles/index.less';
    @prefixCls: lcdp-bannermodal;
    .@{prefixCls} {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1000;
      &-enter {
        transform: scale(0.3);
        animation-duration: 0.2s;
        animation-play-state: paused;
        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
        animation-fill-mode: both;
    
        &-enter-active {
          animation-name: fadeIn;
          animation-play-state: running;
        }
      }
    
      &-appear {
        transform: scale(0.3);
        animation-duration: 0.2s;
        animation-play-state: paused;
        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
        animation-fill-mode: both;
    
        &-appear-active {
          animation-name: fadeIn;
          animation-play-state: running;
        }
      }
    
      &-leave {
        animation-duration: 0.2s;
        animation-play-state: paused;
        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
        animation-fill-mode: both;
    
        &-leave-active {
          animation-name: fadeOut;
          animation-play-state: running;
        }
      }
      @keyframes fadeIn {
        0% {
          transform: scale(0.3);
        }
    
        100% {
          transform: scale(1);
        }
      }
      @keyframes fadeOut {
        0% {
          transform: scale(1);
        }
    
        100% {
          transform: scale(0.3);
        }
      }
    
      &-content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        .content-direction {
          width: 100%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
    
          .direction-control {
            width: 40px;
            height: 40px;
            position: absolute;
            cursor: pointer;
    
            &.left {
              left: 2%;
            }
    
            &.right {
              right: 2%;
            }
    
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        &-closeIcon {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 20px;
          height: 20px;
          z-index: 2;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
          }
        }
    
        .pdf-disbtn {
          position: absolute;
          bottom: 80px;
          display: flex;
          align-items: center;
          background-color: #323232;
          border-radius: 4px;
          justify-content: center;
          left: 50%;
          transform: translateX(-50%);
    
          &:empty {
            display: none;
          }
    
          .pdf-bt {
            width: 20px;
            height: 20px;
            cursor: pointer;
            display: flex;
            margin-right: 16px;
            align-items: center;
            img {
              width: 100%;
              height: 100%;
            }
          }
    
          .pdf-bt-text {
            color: #fff;
            font-size: 14px;
            margin-right: 16px;
          }
        }
        .pdf-bt,
        .pdf-bt-line,
        .pdf-bt-text {
          color: #fff;
          &:last-child {
            margin-right: 0;
          }
        }
        .pdf-bt {
          font-size: 18px;
        }
      }
    
      &-image {
        width: 80%;
        height: 366px;
        object-fit: contain;
        background-color: #fff;
      }
    
      &-iframe {
        flex: 1;
        width: 100%;
        background-color: #fff;
        border: none;
        outline: none;
      }
    
      &-close {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 999;
        width: 40px;
        height: 40px;
      }
    
      &-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 8px;
        background-color: #fff;
        .am-button {
          flex: 1;
          &:not(:first-child) {
            margin-left: 8px;
          }
        }
      }
    
      &-mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
    `;

    const [directories, file] = getFile();

    expect(directories).toEqual(['src', 'components', 'BannerModal']);
    expect(file.name).toEqual('index');
    expect(file.ext).toEqual('less');
    expectValueIgnoreWhitespace(file.content, expectedFileContent);
  });
});
