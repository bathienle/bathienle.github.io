FROM node:22.14.0-slim

WORKDIR /app

COPY package.json .

RUN npm install

ENTRYPOINT ["npm", "run", "dev"]
