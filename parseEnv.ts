import fs from 'fs';
import path from 'path';

const env2Params = (env: string, placeholder: Record<string, string> = {}) => {
  const envParamter = env
    .split('\n')
    .map((t) => t.trim())
    .filter((t) => !t.startsWith('#'));

  const target = { ...placeholder };

  return envParamter.reduce((pre, current) => {
    const [k, v] = current.split('=');
    if (k && v) {
      pre[k] = v;
    }
    return pre;
  }, target);
};

// 模拟dotenv写一个简单的env文件解析方法
export const parseEnv = (placeholder: Record<string, string> = {}) => {
  const filesName = ['.env', '.env.local'];
  const env = filesName.reduce(
    (pre, fileName) => {
      const envLocalPath = path.join(process.cwd(), fileName);
      if (!fs.existsSync(envLocalPath)) return pre;
      const envContent = fs.readFileSync(envLocalPath, { encoding: 'utf8' });
      return env2Params(envContent, pre);
    },
    { ...placeholder },
  );

  if (typeof process && typeof process.env) {
    Object.keys(env).forEach((k) => {
      process.env[k] = env[k];
    });
  }

  return env;
};
