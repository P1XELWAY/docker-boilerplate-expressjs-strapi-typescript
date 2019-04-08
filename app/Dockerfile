FROM node:11.1.0-alpine

WORKDIR /app

COPY package.json .
RUN npm i

RUN npm i -g nodemon typescript ts-node

COPY . .

EXPOSE 3000 9229

#CMD ["npm", "start"]

CMD ["npm", "run", "start"]