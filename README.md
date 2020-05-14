# Angular Full Stack ![Build](https://github.com/DavideViolante/Angular-Full-Stack/workflows/Build/badge.svg) ![Tests](https://github.com/DavideViolante/Angular-Full-Stack/workflows/Tests/badge.svg) [![Dependencies](https://david-dm.org/DavideViolante/Angular-Full-Stack.svg)](https://david-dm.org/DavideViolante/Angular-Full-Stack) [![Donate](https://img.shields.io/badge/paypal-donate-179BD7.svg)](https://www.paypal.me/dviolante)


Angular Full Stack is a project to easly get started with the latest Angular using a real backend and database. Whole stack is in TypeScript, from frontend to backend, giving you the advantage to code in one single language throughout the all stack.

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 2+](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment

Other tools and technologies used:
* [Angular CLI](https://cli.angular.io): frontend scaffolding
* [Bootstrap](http://www.getbootstrap.com): layout and styles
* [Font Awesome](http://fontawesome.com): icons
* [JSON Web Token](https://jwt.io): user authentication
* [Angular 2 JWT](https://github.com/auth0/angular2-jwt): JWT helper for Angular 2+
* [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js): password encryption

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i`

## Run
### Development mode
`npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute MongoDB, Angular build, TypeScript compiler and Express server.

A window will automatically open at [localhost:4200](http://localhost:4200). Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

### Production mode
`npm run prod`: run the project with a production bundle and AOT compilation listening at [localhost:3000](http://localhost:3000) 

## Preview
![Preview](https://raw.githubusercontent.com/DavideViolante/Angular2-Full-Stack/master/demo.gif "Preview")

## Please open an issue if
* you have any suggestion to improve this project
* you noticed any problem or error

## Running tests
Run `ng test` to execute the frontend unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Run `mongod` to run an instance of MongoDB then run `npm run testbe` to execute the backend tests via [Mocha](https://mochajs.org/).

## Running linters
Run `ng lint` to execute the frontend TS linting via [TSLint](https://github.com/palantir/tslint).

Run `npm run lintbe` to execute the backend TS linting via [TSLint](https://github.com/palantir/tslint).

Run `npm run linthtml` to execute the frontend HTML linting via [HTMLHint](https://github.com/htmlhint/HTMLHint).

Run `npm run lintscss` to execute the frontend SCSS linting via [SASS-Lint](https://github.com/sasstools/sass-lint).

## Wiki
To get more help about this project, [visit the official wiki](https://github.com/DavideViolante/Angular-Full-Stack/wiki).

## Further help
To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Author
* [Davide Violante](https://github.com/DavideViolante)
