import { IApi } from 'alita';

export default (api: IApi) => {
  api.onDevCompileDone((opts) => {
    // console.log('> onDevCompileDone', opts.isFirstCompile);
  });
  api.onBuildComplete((opts) => {
    // console.log('> onBuildComplete', opts.isFirstCompile);
  });
  // @ts-ignore
  api.modifyHTML(($) => {
    $('#root').remove();
    $('head').append(
      '<style>.lcdp-skeleton-view{position:absolute;left:0;top:0;right:0;bottom:0;z-index:1;background-color:#fff;padding:0 16px 16px;}.lcdp-skeleton-view ul{padding:0;}.lcdp-skeleton-view ul:last-child{padding-bottom:12.5px;}.lcdp-skeleton-view .title,.lcdp-skeleton-view li{background-color:rgba(190,190,190,0.2);border-radius:2px;width:100%;display:block;}.lcdp-skeleton-view.lcdp-skeleton-animated .title,.lcdp-skeleton-view.lcdp-skeleton-animated li{background:linear-gradient(90deg,rgba(190,190,190,0.2) 25%,rgba(129,129,129,0.24) 37%,rgba(190,190,190,0.2) 63%);background-size:400% 100%;animation:lcdp-skeleton-loading 1.4s ease infinite;}.lcdp-skeleton-view .title{width:45%;height:18px;border-radius:2px;margin-bottom:19px;margin-top:22px;}.lcdp-skeleton-view li{height:18px;border-radius:2px;margin-top:12px;margin-bottom:12px;}.lcdp-skeleton-view li:last-child{width:65%;}@keyframes lcdp-skeleton-loading{0%{background-position:100% 50%;}100%{background-position:0 50%;}}',
    );
    $('body').prepend(
      '<div id="root"><div class="lcdp-skeleton-view lcdp-skeleton-animated"><div class="title"></div><ul><li></li><li></li><li></li><li></li><li></li></ul><div class="title"></div><ul><li></li><li></li><li></li><li></li><li></li></ul><div class="title"></div><ul><li></li><li></li><li></li><li></li><li></li></ul><div class="title"></div><ul><li></li><li></li><li></li><li></li><li></li></ul></div></div>',
    );
  });
};
