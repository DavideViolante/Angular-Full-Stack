FROM node:12.16.1

WORKDIR /usr/src/app
COPY package.json .
RUN npm i -g @angular/cli@~9.0.3 typescript@~3.7.5
RUN npm i
COPY . .
RUN tsc -p ./server && ng build --aot --prod

CMD [ "npm", "start" ]
