// module.exports = function(sequelize, DataTypes) {
//
//   var admin = sequelize.define('admin', {
//       user_srl: {
//           type: DataTypes.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//           allowNull: false
//       },
//       user_id: {
//           type: DataTypes.STRING(63),
//           allowNull: false
//       },
//       user_password: {
//           type: DataTypes.STRING(63),
//           allowNull: false
//       },
//       admin_yn: {
//           type: DataTypes.ENUM('false','true'),
//           allowNull: false,
//           defaultValue: 'false'
//       }
//   },{
//       timestamps: false,
//       freezeTableName: true,
//       underscored: true
//   });
//   return admin;
// };
