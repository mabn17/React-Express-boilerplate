# Revision history

## v1.3.1 (2019-02-02) Documentation errors

- "Fixed" build error.
- Added REVISION file.
- Fixed Documetation errors.
- Updated all README files.
- You can now run tests on node versions 6, 8, 10 and 11 with Docker.

### Active bugs

- Webpack currently conains a bug with Terser.minify (terser-webpack-plugin).

#### How to fix it

Workaround untill they fix this is ether using yarns resolutions by adding this line under the devDependencies:

```
"resolutions": {
    "terser": "3.14.1"
}
```

**Note** npm does not support resolutions's yet so make sure to use yarn or try changing `\_terser.default.minify to \_terser.minify` because it returns a non-existing object.

### Active bugs

- Build crashes after only adding REVISION, sais: "ERROR in bundle.js from Terser
  TypeError: Cannot read property 'minify' of undefined"

## v1.3.0 (2019-01-31) Frontend tests

- Fixed travis build error.
- Updated test examples.
- Updated mysql file structure.
- Updated packages.json for extra test scripts.
- Updated test structures and added documentation.
- Added Selenium for frontend testing.

## v1.2.1 (2019-01-31) Docker now works

- Fixed Docker.

## v1.2.0 (2019-01-30) Added Testing for backend

- Begining to change the Docker structure & removed the auto run script.
- Fixed errors in the documentation.
- Added new README files in src, config and src/server/https.

## v1.1.0 (2019-01-28) Better documentation + new views

- Added Http & Https support.
- Cleaned up some of the unused views & added a 404 view.
- Added Database documentation.
- Updated the MySql file.
- Fixed build issues for Travis and Codacy.

## v1.0.0 (2019-01-26) Now has support for MySql

- Fixed an issue where a component had the wrong variable exported.
- Made a login, logout, profile example to show how you can work with sequelize and JsonWebTokens.
- Added a Users table to MySQL and Sequelize as an active record option.
- Added config folder and files & Updated .gitignore.
- Updated .eslint.json to ignore prop-types and destructuring-assignment for React.
- Preparing to change from mongoDB to MySQL.

### Active bugs

- Docker does no longer work.
- Travis & Codacy build does no longer work becuase of hidden config files.

## v0.1.0 (2019-01-25) Full router support in React & Express

- Integrated Codacy & Updated the src's folder structure.
- Fixed a bug where React Routing dident work on production mode.
- Added templet files for MongoDB (moongose).
- Finnished React Routing.

## v0.0.1 (2019-01-23) Boilerplate for React with Express, nodeJs

- Included Bootstrap.
- Added CI - Travis.
- Prepared for React Router for the frontend.
- Implemented Docker & Updated README.
- Hello world boilerplate.
