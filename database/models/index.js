"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;

sequelize = new Sequelize(config.database, config.username, config.password, config);

// Testing the connection
sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

// TODO: readdirsync in recursive way so we can group model in subfolder

// List all files in a directory in Node.js recursively in a synchronous fashion
const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    } else {
      if (
        file.indexOf(".") !== 0 &&
        file !== basename &&
        file.slice(-3) === ".js"
      ) {
        filelist = filelist.concat(path.join(dir, file));
      }
    }
  });
  return filelist;
};

let files = walkSync(__dirname).forEach(file => {
  const model = sequelize.import(file);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
