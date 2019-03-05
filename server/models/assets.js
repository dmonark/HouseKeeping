module.exports = (sequelize, DataTypes) => {
  const assets = sequelize.define('assets', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  assets.associate = function(models) {
    assets.hasMany(models.tasks, {
      foreignKey: 'assetId',
      as: 'tasks',
    });
  };
  return assets;
};