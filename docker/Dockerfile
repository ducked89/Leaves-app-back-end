FROM node:19.6.0

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE 5001

CMD ["yarn", "run", "start:prod"]
