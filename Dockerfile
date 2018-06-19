FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install
RUN npm -g install nodemon

EXPOSE 3032

CMD ["npm", "run", "start"]