FROM node:10.16.0

WORKDIR /usr/src/app
COPY package.json .
RUN npm i -g @angular/cli@~8.3.15
RUN npm i -g typescript@~3.5.3
RUN npm i -g @types/chai-http@^4.2.0
RUN npm i -g @types/express@^4.17.1
RUN npm i -g @types/jasmine@~3.3.8
RUN npm i -g @types/jasminewd2@~2.0.3
RUN npm i -g @types/node@~8.9.4
RUN npm install
COPY . .
RUN tsc -p ./server && ng build --aot --prod

CMD [ "npm", "start" ]
