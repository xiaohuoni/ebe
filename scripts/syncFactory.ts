import assert from 'assert';
import { execSync } from 'child_process';
import fs from 'fs';
import { move } from '../ebe-utils/src/node/move';
import { parseEnv } from './parseEnv';
import { winJoin } from './path';
parseEnv();
function syncMasterBranch(branch: string, repoUrl: string, cacheDir: string) {
  try {
    // Check if the cache directory already exists
    const cacheDirExists = fs.existsSync(cacheDir);

    if (cacheDirExists) {
      // If the cache directory exists, refresh the files by pulling from the remote repository
      execSync(`cd ${cacheDir} && git fetch --all`);
    } else {
      // If the cache directory doesn't exist, clone the repository into the cache directory
      execSync(`git clone --depth 1 --branch ${branch} ${repoUrl} ${cacheDir}`);
    }

    // Remove the .git directory to remove git history
    execSync(`rm -rf ${cacheDir}/.git`);

    console.log('Master branch synced successfully!');
  } catch (error) {
    console.error(`Failed to sync ${branch} branch:`, error);
  }
}

function setupFactory(cacheDir: string) {
  try {
    // Check if the cache directory already exists
    const cacheDirExists = fs.existsSync(cacheDir);

    if (cacheDirExists) {
      // If the cache directory exists, refresh the files by pulling from the remote repository
      execSync(`cd ${cacheDir} && yarn export`);
    } else {
      console.error('Factory 组件库没找到，请查看', cacheDir);
    }
  } catch (error) {
    console.error('Factory 组件库初始化失败:', error);
  }
}

// Usage example

(async () => {
  const repoUrl = process.env.LCDP_APP_ENGINE_RENDERER;
  // 指定分支
  const branch = 'master';
  const cacheDir = winJoin(__dirname, '..', 'node_modules/.cache/lcdp');
  const outPath = winJoin(
    __dirname,
    '..',
    'src',
    'plugins',
    'project',
    'framework',
    'alita',
    'template',
    'h5public',
    'src',
    'components',
    'factory',
  );
  const pcOutPath = winJoin(
    __dirname,
    '..',
    'src',
    'plugins',
    'project',
    'framework',
    'alita',
    'template',
    'pcpublic',
    'src',
    'components',
    'pcfactory',
  );
  assert(repoUrl, `repoUrl does not exists.`);
  syncMasterBranch(branch, repoUrl, cacheDir);
  const targetDir = winJoin(cacheDir, 'packages');
  //   packages/factory/src/index.component.ts
  const target = winJoin(targetDir, 'factory', 'src', 'index.component.ts');
  const factoryCwd = winJoin(targetDir, 'factory');
  setupFactory(factoryCwd);

  const targetExists = fs.existsSync(target);
  if (targetExists) {
    move({
      cwd: factoryCwd,
      target,
      outDir: outPath,
    });
  } else {
    console.error(
      'Factory 组件库主入口没找到，请查看，可能是没有安装依赖，也可能是没有 export 成功',
      cacheDir,
    );
  }
  const pcFactoryCwd = winJoin(targetDir, 'pcFactory');
  setupFactory(pcFactoryCwd);

  // node_modules/.cache/lcdp/packages/pcFactory/src/index.component.ts
  const pcTarget = winJoin(pcFactoryCwd, 'src', 'index.component.ts');
  const pcTargetExists = fs.existsSync(pcTarget);

  if (pcTargetExists) {
    move({
      cwd: pcFactoryCwd,
      target: pcTarget,
      outDir: pcOutPath,
    });
  } else {
    console.error(
      'pcFactory 组件库主入口没找到，请查看，可能是没有安装依赖，也可能是没有 export 成功',
      pcTarget,
    );
  }
})();
