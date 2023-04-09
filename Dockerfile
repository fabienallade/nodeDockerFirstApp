FROM node:14
LABEL maintainer="ALLADE Fabien"
WORKDIR /home/workspace/
COPY package*.json ./
RUN npm install
COPY ./server.js ./server.js
COPY . .
RUN npm install -g nodemon
ENTRYPOINT ["nodemon", "server.js"]
EXPOSE 3000