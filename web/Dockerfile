FROM node:13.7

RUN npm i -g @nestjs/cli

WORKDIR /backend
COPY package*.json /backend/

RUN npm i
CMD [ "npm", "run", "start:dev"]