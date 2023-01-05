FROM node:lts-alpine as build-stage
ARG REACT_APP_LOGIN_LINK
ENV REACT_APP_LOGIN_LINK $REACT_APP_LOGIN_LINK
WORKDIR /app
COPY package*.json /app/
COPY .npmrc /app/
RUN npm install
COPY ./ /app/
RUN npm run build
FROM nginx:alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
