import chalk from 'chalk';
import { ChildProcess, exec, spawn } from 'child_process';

function runCommand(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

/**
 * 执行 npm 脚本命令
 * @param {string} script - package.json 中定义的脚本命令
 */
function runNpmScript(script: string[], type: 'pnpm' | 'prettier') {
  return new Promise<void>((resolve, reject) => {
    let child: ChildProcess;

    // 通过 spawn 执行 npm run <script> 命令
    if (type === 'prettier') {
      child = spawn('npx', ['prettier', '--write', ...script], {
        stdio: 'inherit',
      });
    } else {
      child = spawn('pnpm', ['run', script.join(' ')], { stdio: 'inherit' });
    }

    // 监听子进程的错误事件
    child.on('error', reject);

    // 监听子进程的退出事件
    child.on('close', (code) => {
      if (code !== 0) {
        reject();
      } else {
        resolve();
      }
    });
  });
}

async function getStageFiles() {
  const stagedContent = await runCommand('git diff --cached --name-only');
  if (typeof stagedContent !== 'string') {
    return [];
  }
  return stagedContent.split('\n').filter(Boolean);
}

const run = async () => {
  // 获取暂存区的文件列表
  const stageFiles = await getStageFiles();
  await runNpmScript(['test'], 'pnpm');
  if (stageFiles.length) {
    await runNpmScript(stageFiles, 'prettier');
    await runCommand(`git add ${stageFiles.join(' ')}`);
  }
  console.log(chalk.green('提交成功🎉'));
};

run();
