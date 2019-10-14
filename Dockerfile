FROM node:latest

WORKDIR /usr/src/app

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]