# Chaufförsverksamheten

[![Build Status](https://travis-ci.org/mabn17/chaufforsverksamheten.svg?branch=master)](https://travis-ci.org/mabn17/chaufforsverksamheten) [![Build Status](https://scrutinizer-ci.com/g/mabn17/chaufforsverksamheten/badges/build.png?b=master)](https://scrutinizer-ci.com/g/mabn17/chaufforsverksamheten/build-status/master) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/mabn17/chaufforsverksamheten/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/mabn17/chaufforsverksamheten/?branch=master)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/362dfae8e67849c49860cc09236228b5)](https://www.codacy.com/app/mabn17/chaufforsverksamheten?utm_source=github.com&utm_medium=referral&utm_content=mabn17/chaufforsverksamheten&utm_campaign=Badge_Grade) [![Maintainability](https://api.codeclimate.com/v1/badges/e33aafbfdfda15c35dec/maintainability)](https://codeclimate.com/github/mabn17/chaufforsverksamheten/maintainability)

[![Code Coverage](https://scrutinizer-ci.com/g/mabn17/chaufforsverksamheten/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/mabn17/chaufforsverksamheten/?branch=master)

This is used to build a full stack web application using React, Node.js, Express and Webpack. It is also configured with webpack-dev-server, eslint, prettier and babel.

- [Chaufförsverksamheten](#chaufförsverksamheten)
  - [Introduction](#introduction)
    - [Development mode](#development-mode)
    - [Production mode](#production-mode)
  - [Quick Start](#quick-start)
    - [Documentation](#documentation)
    - [Folder Structure](#folder-structure)
    - [Babel](#babel)
    - [ESLint](#eslint)
    - [Webpack](#webpack)
    - [Webpack dev server](#webpack-dev-server)
    - [Nodemon](#nodemon)
    - [Express](#express)
    - [Concurrently](#concurrently)
    - [Database](#database)
    - [Unit Testing](#unit-testing)
    - [Docker](#docker)
    - [VSCode + ESLint + Prettier](#vscode--eslint--prettier)
      - [Installation guide](#installation-guide)

## Introduction

This is a full stack [React](https://reactjs.org/) boilerplate application with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) backend together with [MySQL](https://www.mysql.com/). Client side code is written in React, [React-router](https://www.npmjs.com/package/react-router-dom) and the backend API is written using Express. This application is configured with [Airbnb's ESLint rules](https://github.com/airbnb/javascript) and formatted through [prettier](https://prettier.io/).

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

## Quick Start

```bash
# Clone the repository
git clone git@github.com:mabn17/chaufforsverksamheten.git

# Go inside the directory
cd chaufforsverksamheten

# Install dependencies
yarn install (or npm install)

# Start development server
yarn dev (or npm run dev)

# Build for production
yarn build (or npm run build)

# Start production server
yarn start (or npm start)
```

## Documentation

### Folder Structure

All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in `/client` directory. Backend Node.js/Express code will be in the `/server` directory.

**Note**: make sure to read the README file inside _config_ and _src_.

### Babel

[Babel](https://babeljs.io/) helps to write the code in the latest version of JavaScript. If an environment does not support certain features natively, Babel will help us to compile those features down to a supported version. It also helps us to convert JSX to Javascript.

[.babelrc file](https://babeljs.io/docs/usage/babelrc/) is used describe the configurations required for Babel. Below is the .babelrc file which I am using.

```javascript
{
    "presets": ["env", "react"]
}
```

Babel requires plugins to do the transformation. Presets are the set of plugins defined by Babel. Preset **env** allows to use babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 and it will transform them to ES5. Preset **react** allows us to use JSX syntax and it will transform JSX to Javascript.

### ESLint

[ESLint](https://eslint.org/) is a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

[.eslintrc.json file](<(https://eslint.org/docs/user-guide/configuring)>) (alternatively configurations can we written in Javascript or YAML as well) is used describe the configurations required for ESLint. Below is the .eslintrc.json file which I am using.

```javascript
{
  "extends": ["airbnb"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-console": "off",
    "comma-dangle": "off",
    "react/jsx-filename-extension": "off"
  }
}
```

[We are using Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) which is used by many JavaScript developers worldwide. Since we are going to write both client (browser) and server side (Node.js) code, we are setting the **env** to browser and node. Optionally, we can override the Airbnb's configurations to suit our needs. We have turned off [**no-console**](https://eslint.org/docs/rules/no-console), [**comma-dangle**](https://eslint.org/docs/rules/comma-dangle) and [**react/jsx-filename-extension**](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md) rules.

### Webpack

[Webpack](https://webpack.js.org/) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.

[webpack.config.js](https://webpack.js.org/configuration/) file is used to describe the configurations required for webpack. Below is the webpack.config.js file which we are using.

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
  entry: ["babel-polyfill", "./src/client/index.js"],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    },
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    })
  ]
};
```

1. **entry:** entry: ./src/client/index.js is where the application starts executing and webpack starts bundling.
   Note: babel-polyfill is added to support async/await. Read more [here](https://babeljs.io/docs/en/babel-polyfill#usage-in-node-browserify-webpack).
2. **output path, filename:** the target directory and the filename for the bundled output.
3. **module loaders:** Module loaders are transformations that are applied on the source code of a module. We pass all the js file through [babel-loader](https://github.com/babel/babel-loader) to transform JSX to Javascript. CSS files are passed through [css-loaders](https://github.com/webpack-contrib/css-loader) and [style-loaders](https://github.com/webpack-contrib/style-loader) to load and bundle CSS files. Fonts and images are loaded through url-loader.
4. **Dev Server:** Configurations for the webpack-dev-server which will be described in coming section.
5. **plugins:** [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) is a webpack plugin to remove the build folder(s) before building. [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) simplifies creation of HTML files to serve your webpack bundles. It loads the template (public/index.html) and injects the output bundle.

### Webpack dev server

[Webpack dev server](https://webpack.js.org/configuration/dev-server/) is used along with webpack. It provides a development server that provides live reloading for the client side code. This should be used for **development only**.

The devServer section of webpack.config.js contains the configuration required to run webpack-dev-server which is given below.

```javascript
devServer: {
    port: 3000,
    open: true,
    proxy: {
        "/api": "http://localhost:8080"
    },
    historyApiFallback: true
}
```

[**Port**](https://webpack.js.org/configuration/dev-server/#devserver-port) specifies the Webpack dev server to listen on this particular port (3000 in this case). When [**open**](https://webpack.js.org/configuration/dev-server/#devserver-open) is set to true, it will automatically open the home page on startup. [Proxying](https://webpack.js.org/configuration/dev-server/#devserver-proxy) URLs can be useful when we have a separate API backend development server and we want to send API requests on the same domain. In our case, we have a Node.js/Express backend where we want to send the API requests to. [HistoryApiFallback](https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback) is set to true, it will help avoiding 404 responses, this is mainly so we can set up a "catch all" route in express to handle other routes with React.

**NOTE** react-router-dom might not work ones it's deployed to a server. To recognize the path later on. This will need extra configuration/files (dippending on the server) if pushed in production mode, similar like how apache uses .htdocs files.

### Nodemon

Nodemon is a utility that will monitor for any changes in the server source code and it automatically restart the server. This is used in **development only**.

nodemon.json file is used to describe the configurations for Nodemon. Below is the nodemon.json file which we are using.

```javascript
{
  "watch": ["src/server/"]
}
```

Here, we tell nodemon to watch the files in the directory src/server where out server side code resides. Nodemon will restart the node server whenever a file under src/server directory is modified.

### Express

Express is a web application framework for Node.js. It is used to build our backend API's.

src/server/index.js is the entry point to the server application. Below is the src/server/index.js file

```javascript
const express = require("express");
const fallback = require("express-history-api-fallback");

const app = express();
const port = process.env.LINUX_PORT || 8080;

app.use(express.static("dist"));

// Api routes
require("./routes")(app);

// Redirects to ouer React main file.
app.use(fallback("index.html", { root: "dist" }));

app.listen(port, () => console.log(`Listening on port ${port}!`));
```

This starts a server and listens on port 8080 for connections. As an example, the app responds with `{username: <username>}` for requests to the URL (/api/getUsername). It is also configured to serve the static files from **dist** directory.

### Concurrently

[Concurrently](https://github.com/kimmobrunfeldt/concurrently) is used to run multiple commands concurrently. We are using it to run the webpack dev server and the backend node server concurrently in the development environment. Below are the npm/yarn script commands used.

```javascript
"client": "webpack-dev-server --mode development --devtool inline-source-map --hot",
"server": "nodemon src/server/index.js",
"dev": "concurrently \"npm run server\" \"npm run client\""
```

### VSCode + ESLint + Prettier

[VSCode](https://code.visualstudio.com/) is a lightweight but powerful source code editor. [ESLint](https://eslint.org/) takes care of the code-quality. [Prettier](https://prettier.io/) takes care of all the formatting.

## Database

We are using [MySQL](https://www.mysql.com/) together with the node pakage [Sequelize](http://docs.sequelizejs.com/) as ouer database, all the code can be found in src/server/db. Sequelize is used to easely handle requests to the database simular to PHP and Rubys active record.

If you have trubble with requests to the database simular to `error: SequelizeConnectionError: Client does not support authentication protocol requested by server; consider upgrading MySQL client"​` then, make sure to read the _README_ file inside the **src** foler and the _README_ inside the **config** folder.

I added an example where you can register as a user, login, logout and view your profile so you can see how it works. The example is currenty using [JsonWebToken](https://github.com/auth0/node-jsonwebtoken) to validate and store user information inside the browsers localStorage (see src/server/db/Users and src/server/routers/api/Users for the backend and src/client/models/UserMethods, src/client/components/ for the fontend).

### Unit Testing

The main framework for testing is [Mocha](https://mochajs.org/). This is mainly to see if the responses we get are the same as predicted.

[Chai/Chai-http](https://www.chaijs.com/plugins/chai-http/) are used so we can talk with the server and spesify witch routes we want to test. Chai takes the server object as a parameter and can from there go to witch ever route you want (given that it has premissions).

An example of how you can test files:

```javascript
const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../src/server/");

chai.should();

chai.use(chaiHttp);

describe("Api/Testing route", () => {
  describe("GET /api/testing", () => {
    it("200 TESTING PATH", done => {
      chai
        .request(server)
        .get("/api/testing")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");
          console.log(res.body);
          done();
        });
    });
  });

  describe("GET api/testing", () => {
    it("Content of the response", done => {
      chai
        .request(server)
        .get("/api/testing")
        .end((err, res) => {
          assert.equal("test", res.body.test);

          done();
        });
    });
  });
});
```

`yarn test (or npm run test)` will test all code inside test/test_server and generate covrage report, you can find it inside /covrage.

[Selenium](https://www.seleniumhq.org/) is used to simulate a user to test the front end, this will not generate any codecovrage but may still be good have. You can find and make your own tests inside test/test_cli/. I've added two examples of how to set them up. **NOTE** to execute the tests you must have the server running (currently set up at port 8080) while having [firefox](https://www.mozilla.org/sv-SE/firefox/new/) installed aswell as [gecodriver](https://github.com/mozilla/geckodriver/releases).

An example of how it can be used:

```javascript
const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../src/server/index");

chai.should();

chai.use(chaiHttp);

describe("Api/Testing route", () => {
  describe("GET /api/testing", () => {
    it("200 TESTING PATH", done => {
      chai
        .request(server)
        .get("/api/testing")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");
          console.log(res.body);
          done();
        });
    });
  });

  describe("GET api/testing", () => {
    it("Content of the response", done => {
      chai
        .request(server)
        .get("/api/testing")
        .end((err, res) => {
          assert.equal("test", res.body.test);

          done();
        });
    });
  });
});
```

If you want to extend the testing to check your react code while generating covrage i'd recomend following this [article](https://medium.com/@elisegev/running-tests-and-creating-code-coverage-reports-for-react-nodejs-project-continuously-with-60312b6a2dd0). I might add it soon.

### Docker

Since we develop on different machine, operating systems and node versions, it might be good to try out docker. [Docker](https://www.docker.com/) helps us test ouer code agains a server like envirement with the spesific or same rules.

All the dockerfiles are inside **/docker** and are used to test the code agains different versions of node. The different docker test commands are inside of package.json.

An example of running tests on node version 10:

```
yarn docker-10 (or npm run docker-10)
```

**Note**: I'm not an experienced user with Docker so feel free to help me update it.

#### Installation guide

1. Install [VSCode](https://code.visualstudio.com/)
2. Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3. Install [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4. Modify the VSCode user settings to add below configuration

   ```javascript
   "eslint.alwaysShowStatus": true,
   "eslint.autoFixOnSave": true,
   "editor.formatOnSave": true,
   "prettier.eslintIntegration": true
   ```

Above, we have modified editor configurations. Alternatively, this can be configured at the project level by following [this article](https://medium.com/@netczuk/your-last-eslint-config-9e35bace2f99).
