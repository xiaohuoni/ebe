import appconfig from '@lingxiteam/factory/lib/index.config';
import pcconfig from '@lingxiteam/pcfactory/lib/index.config';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { isFirstLetterUpperCase } from '../src/core/utils/validate';
(async () => {
  const platforms = ['pc', 'h5'];
  platforms.forEach((platform) => {
    let cg: any = appconfig;
    const isMobile = platform === 'h5';
    if (!isMobile) {
      cg = pcconfig;
    }
    const blackHash = ['BOFramer', 'Pageview'];

    const compHash = Object.keys(cg)
      .filter(isFirstLetterUpperCase)
      .filter((c) => !blackHash.includes(c))
      .filter(Boolean);
    const formHash = {} as any;
    const otherHash: string[] = [];
    compHash.forEach((c) => {
      if (cg[c] && cg[c].fieldProps) {
        formHash[c] = cg[c].fieldProps;
      } else {
        otherHash.push(c);
      }
    });
    const containerType = Object.values(isMobile ? appconfig : pcconfig)
      .filter((i: any) => i?.isContainer === true)
      .map((subi) => subi?.type);

    const outPath = join(
      __dirname,
      '..',
      'src',
      'plugins',
      'project',
      'framework',
      'alita',
      'template',
      'data',
      `${!isMobile ? 'pc' : ''}factory`,
    );
    const context = `
    export const formHash = ${JSON.stringify(formHash)};
    export const otherHash = ${JSON.stringify(otherHash)};
    export const containerType = ${JSON.stringify(containerType)};
    `;
    writeFileSync(outPath, context, 'utf-8');
  });
})();
