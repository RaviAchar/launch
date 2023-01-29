FROM node:16-alpine as builder

WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build

FROM nginx:1.23.3
COPY default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"] 
