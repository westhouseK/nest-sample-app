FROM node:14.18

RUN npm i -g @nestjs/cli

WORKDIR /usr/app
COPY ../package*.json /usr/app

RUN npm ci
# CMD npm run seed:run && npm run start:dev
CMD npm run start:dev 