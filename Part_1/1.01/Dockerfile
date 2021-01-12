FROM node:12

WORKDIR /usr/src/app

COPY package* ./

RUN npm install

COPY . .

CMD ["npm", "start"]

