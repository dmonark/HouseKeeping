module.exports = (sequelize, DataTypes) => {
  const allocations = sequelize.define('allocations', {
    allocation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    perform: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  allocations.associate = function(models) {
    allocations.belongsTo(models.tasks, {
      foreignKey: 'taskId',
      onDelete: 'CASCADE',
    });
		allocations.belongsTo(models.workers, {
      foreignKey: 'workerId',
      onDelete: 'CASCADE',
    });
  };
  return allocations;
};