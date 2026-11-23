# Yayın imajı, iki aşamalı (multi-stage):
#   1. aşama Node ile derler (npm run build → dist/)
#   2. aşama yalnızca dist/ içeriğini küçük bir nginx imajına koyar; Node yayına gitmez.

# ---------- 1. aşama: derleme ----------
FROM node:24-alpine AS derleme
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---------- 2. aşama: yayın ----------
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=derleme /app/dist /usr/share/nginx/html
EXPOSE 80
