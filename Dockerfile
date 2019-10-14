FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]