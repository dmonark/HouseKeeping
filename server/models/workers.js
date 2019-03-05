'use strict';
module.exports = (sequelize, DataTypes) => {
  const workers = sequelize.define('workers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    empId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
  workers.associate = function(models) {
    workers.hasMany(models.allocations, {
      foreignKey: 'workerId',
      as: 'workers',
    });
  };
  return workers;
};