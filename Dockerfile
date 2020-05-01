FROM node:12.16.1

WORKDIR /usr/src/app
COPY package.json .
RUN npm i -g @angular/cli@~9.1.0 typescript@~3.8.3
RUN npm i
COPY . .
RUN tsc -p ./server && ng build --aot --prod

CMD [ "npm", "start" ]
