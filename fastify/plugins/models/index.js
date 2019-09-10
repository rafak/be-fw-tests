'use strict'

const fastifyPlugin = require('fastify-plugin')
const fs = require('fs-extra')
const path = require('path')
const Sequelize = require('sequelize')

async function registerDb(fastify, options) {
  const db = {}
  const sequelize = new Sequelize(options)
  const basename = path.basename(__filename)
  fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = sequelize.import(path.join(__dirname, file));
      db[model.name] = model;
    });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return sequelize.authenticate()
    .then(() => {
      fastify.decorateRequest('getDb', () => db.sequelize)
      fastify.decorateRequest('getSequelize', () => db.Sequelize)
    })
}

module.exports = fastifyPlugin(registerDb)