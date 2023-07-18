FROM node:19.6.0

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

CMD yarn run start:dev
