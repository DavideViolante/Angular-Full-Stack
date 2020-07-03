FROM node:12.18.2

WORKDIR /usr/src/app
COPY package.json .
RUN npm i -g @angular/cli@~10.0.1 typescript@~3.9.6
RUN npm i
COPY . .
RUN tsc -p ./server && ng build --aot --prod

CMD [ "npm", "start" ]
