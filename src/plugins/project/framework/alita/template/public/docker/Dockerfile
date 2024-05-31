FROM hub-nj.iwhalecloud.com/lingxi/nginx:1.26

LABEL maintainer=bian.jiaping

# 与 Tomcat 镜像保持一致
EXPOSE 8080

COPY docker/default.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx build /srv/http

USER nginx
