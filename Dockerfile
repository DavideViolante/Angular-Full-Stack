FROM node:10.16.0

WORKDIR /usr/src/app
COPY package.json .
RUN npm i -g @angular/cli@~8.3.15 typescript@~3.5.3
RUN npm i
COPY . .
RUN tsc -p ./server && ng build --aot --prod

CMD [ "npm", "start" ]
