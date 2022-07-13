FROM node:14-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
ENV MONGODB_URI mongodb://mongo:27017/angularfullstack
#RUN npm run builddev
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
