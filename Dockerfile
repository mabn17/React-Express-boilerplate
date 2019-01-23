FROM node:11.7-slim

WORKDIR /opt/app/

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD yarn start