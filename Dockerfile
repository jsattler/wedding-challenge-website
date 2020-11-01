FROM node:current-buster-slim as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run ng build --prod

# production stage
FROM nginx:stable-alpine as production-stage
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/dist/wedding-challenge-website /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
