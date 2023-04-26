FROM nginx as production-stage
COPY /src /usr/share/nginx/html
COPY /data/nginx /etc/nginx/conf.d
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]