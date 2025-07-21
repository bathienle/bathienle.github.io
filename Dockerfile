FROM node:20.12.0-bookworm

WORKDIR /app

COPY package.json .

RUN npm install

ENTRYPOINT ["npm", "run", "dev"]
