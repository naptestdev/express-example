FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD [ "npm", "start" ]
