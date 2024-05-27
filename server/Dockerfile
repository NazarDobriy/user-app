FROM node:18.13-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY public ./public

CMD [ "npm", "run", "start:prod" ]
