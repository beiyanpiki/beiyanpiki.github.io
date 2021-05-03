FROM alpine:3.7
RUN apk add --update nginx python && rm -rf /var/cache/apk/*
RUN mkdir -p /tmp/nginx/client-body
RUN nginx -v

COPY build/nginx.conf /etc/nginx/nginx.conf
COPY build/default.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html


CMD ["nginx", "-g", "daemon off;"]