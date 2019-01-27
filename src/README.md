# Files To Change

Travis and Scrutinizer won't pass the build test since we have some configuration files on .gitignore.
So to `/server/db/db.js` and change the require statement by removing the filesync and the .example files.

Do the same in `server/routers/api/Users.js`.

NOTE: Theese files may cause some confusion, esp in the database file so make sure to change it!
