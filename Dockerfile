FROM node:11.11.0-alpine

COPY . /app
WORKDIR /app

RUN npm install -g nodemon
RUN npm install

CMD [ "npm", "start" ]
