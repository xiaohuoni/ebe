import { IApi } from 'alita';
// @ts-ignore
import bodyParser from 'body-parser';
// @ts-ignore
import { publishers, solutions } from 'ebe';

const generateZip = async ({ options, pages, appId, outputPath }) => {
  const projectBuilder = solutions?.alita({ options });
  const project = await projectBuilder.generateProject(
    pages, // 编排搭建出来的 schema
  );

  try {
    // 写入到 zip 包
    await publishers?.disk().publish({
      project, // 上一步生成的 project
      outputPath, // 输出目录
      projectSlug: appId, // 项目标识 -- 对应生成 h5.zip 文件
    });
  } catch (error) {
    console.error(error);
  }
};

export default (api: IApi) => {
  api.onBeforeMiddleware(({ app }) => {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ limit: '500mb', extended: false }));

    // parse application/json
    app.use(bodyParser.json({ limit: '500mb' }));
  });

  api.addBeforeMiddlewares(() => {
    return async (req, res, next) => {
      if (req.path.startsWith('/code')) {
        const { options, pages, appId } = req.body;
        generateZip({
          options,
          pages,
          appId,
          outputPath: api.paths.absOutputPath,
        });
        res.send({
          resultCode: '0',
          resultMsg: 'success',
          resultObject: {},
        });
      }
      next();
    };
  });
};
