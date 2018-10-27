# ----------- Builder ----------
FROM node:8.12 as builder

WORKDIR /usr/src/app

COPY package.json    .
COPY yarn.lock       .
COPY .env.production .
COPY src             src
COPY public          public

RUN yarn install --production --pure-lockfile
RUN yarn build

# ----------- Production ----------
FROM nginx

COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
COPY                VERSION             /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
