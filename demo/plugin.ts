import { IApi } from 'alita';
// @ts-ignore
import bodyParser from 'body-parser';
// @ts-ignore
import compression from 'compression';
// @ts-ignore
import archiver from 'archiver';
// @ts-ignore
import { crossSpawn, fsExtra } from '@umijs/utils';
// @ts-ignore
// import { publishers, solutions } from 'ebe';
import * as child_process from 'child_process';
import { existsSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
async function spawnSync(
  command: string,
  args: string[] = [],
  options: child_process.SpawnSyncOptions = {},
) {
  return new Promise((resolve, reject) => {
    const child = crossSpawn(command, args, { stdio: 'inherit', ...options });
    child
      .on('close', (code) => {
        if (code !== 0) {
          reject({
            command: `${command} ${args.join(' ')}`,
          });
          return;
        }
        resolve(0);
      })
      .on('error', (err) => {
        console.error('error', err);
      });
  });
}
const generateZip = async ({ options, pages, appId, outputPath }) => {
  const ebe = require('ebe');
  const projectBuilder = ebe.solutions?.alita({ options });
  const project = await projectBuilder.generateProject(
    pages, // 编排搭建出来的 schema
  );

  try {
    // 写入到目录
    await ebe.publishers?.disk().publish({
      project, // 上一步生成的 project
      outputPath, // 输出目录
      projectSlug: appId, // 项目标识 -- 对应生成 h5.zip 文件
    });
  } catch (error) {
    console.error(error);
  }
};

const generaterHash: any = {};
export default (api: IApi) => {
  api.onBeforeMiddleware(({ app }) => {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ limit: '500mb', extended: false }));

    // parse application/json
    app.use(bodyParser.json({ limit: '500mb' }));
    // gzip
    app.use(compression());
  });

  api.addBeforeMiddlewares(() => {
    return async (req, res, next) => {
      if (req.path.startsWith('/code')) {
        const { options, pages, appId, cache = true } = req.body;

        if (cache && existsSync(join(api.paths.absOutputPath, appId))) {
          res.send({
            resultCode: '0',
            resultMsg: 'success',
            resultObject: {
              message: `${appId} 应用源码已经生成，可以直接下载，或者使用强制命令，重新生成`,
            },
          });
        } else if (generaterHash[appId]) {
          res.send({
            resultCode: '0',
            resultMsg: 'success',
            resultObject: {
              message: '正在生成中，请耐心等候....',
            },
          });
        } else {
          generaterHash[appId] = true;
          const tmpPath = join(
            api.paths.absNodeModulesPath,
            '.cache',
            appId,
            'req.json',
          );
          fsExtra.mkdirpSync(dirname(tmpPath));

          writeFileSync(tmpPath, JSON.stringify(req.body));
          // await generateZip({
          //   options,
          //   pages,
          //   appId,
          //   outputPath: api.paths.absOutputPath,
          // });
          generaterHash[appId] = false;
          res.send({
            resultCode: '0',
            resultMsg: 'success',
            resultObject: {
              message: `${appId} 应用数据生成完成`,
            },
          });
          try {
            // 调试需要，将 page 拆出来
            const { pages, options } = req.body;

            pages.forEach((p: any) => {
              const pagePath = p.pagePath ? p.pagePath : `BusiComp${p.id}`;

              let tmpPagePath = join(
                api.paths.absNodeModulesPath,
                '.cache',
                appId,
                `${pagePath}.json`,
              );
              writeFileSync(tmpPagePath, JSON.stringify(p));
            });
            let tmpOptionsPath = join(
              api.paths.absNodeModulesPath,
              '.cache',
              appId,
              `__options.json`,
            );
            writeFileSync(tmpOptionsPath, JSON.stringify(options));
          } catch (error) {
          } finally {
            console.log('缓存文件写入完成');
          }
        }
      } else if (req.path.startsWith('/download')) {
        if (!req.query.appId && !req.query.appid) {
          console.log(req);
          res.send({ error: 'appId 错误啦' });
        }
        const filePath = req.query.appId || req.query.appid || ('' as string);
        const filePathMain = join(api.paths.absOutputPath, filePath);

        let archive = archiver('zip');
        archive.on('error', function (err) {
          res.send({ error: err.message });
        });

        //on stream closed we can end the request
        archive.on('end', function () {
          console.log('Archive wrote %d bytes', archive.pointer());
        });

        //set the archive name
        res.attachment(`${filePath}.zip`);

        //this is the streaming magic
        archive.pipe(res);

        let directories = [filePathMain];

        for (let i in directories) {
          archive.directory(
            directories[i],
            directories[i].replace(filePathMain, filePath),
          );
        }

        archive.finalize();
      } else if (req.path.startsWith('/localgenerate')) {
        if (!req.query.appId && !req.query.appid) {
          console.log(req);
          res.send({ error: 'appId 错误啦' });
        }
        const filePath = req.query.appId || req.query.appid || ('' as string);
        try {
          await spawnSync('pnpm', ['gggg', filePath as string]);
          res.send({
            resultCode: '0',
            resultMsg: 'success',
            resultObject: {
              message: '生成成功',
            },
          });
        } catch (error) {
          res.send({ error: '本地构建错误，请手动执行生成' });
        }
      } else {
        next();
      }
    };
  });
};
