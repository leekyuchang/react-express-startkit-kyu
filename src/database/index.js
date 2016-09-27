// var Sequelize = require('sequelize'),
// 	fs = require('fs'),
// 	path = require('path');
// var secretData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../secret/secret.json'), 'utf-8'));
// var _ = secretData.dbSecret;
// var sequelize = new Sequelize(_.database_local, _.username_local, _.password_local, {
//     host: _.host_local,
//     dialect: 'mysql'
//     });
//
//     sequelize.authenticate().then(function(err) {
//         console.log('Connection has been established successfully.');
//         }, function (err) {
//         console.log('Unable to connect to the database:', err);
//     });
// 
// var db = {};
//
// var modelsDir = path.join(__dirname, '/models');
// console.log(modelsDir);
// fs.readdirSync(modelsDir).filter(function(file) {
//     return (file.indexOf('.') !== 0) && (file !== 'index.js');
//   }).forEach(function(file) {
//     var model = sequelize.import(path.join(modelsDir, file));
//     console.log('Imported ' + model.name);
//     db[model.name] = model;
//   });
//
// Object.keys(db).forEach(function(modelName) {
//   if ('associate' in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });
//
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
//
// module.exports = db;
