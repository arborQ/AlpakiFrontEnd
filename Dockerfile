FROM node:latest
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
RUN yarn build
CMD pm2 serve /app/build --port 3000 --spa
EXPOSE 3000