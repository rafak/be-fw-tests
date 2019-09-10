'use strict'

const fs = require('fs-extra')
const path = require('path')
const Sequelize = require('sequelize')

exports.plugin = {
  pkg: {
    name: 'payments-models',
    version: require('../../package.json').version
  },
  register: async (server, options) => {
    server.ext('onRequest', function(request, h) {
      request.log('info',['in  models request ext'])
      return h.continue
    })
    // TODO: validate options
    const db = {}
    const sequelize = new Sequelize(options)
    const basename = path.basename(__filename)
    fs
      .readdirSync(__dirname)
      .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
      })
      .forEach(file => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
      });

    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    server.decorate('request', 'getDb', () => db.sequelize, options);
    server.decorate('request', 'getSequelize', () => db.Sequelize, options);

    return db.sequelize.authenticate()
      .then(() => db)
  }
}