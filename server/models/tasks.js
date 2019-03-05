module.exports = (sequelize, DataTypes) => {
  const tasks = sequelize.define('tasks', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    freq:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    freqType: {
      type: DataTypes.ENUM,
      allowNull: false,
			values: [
        'hourly',
        'daily',
				'weekly',
				'monthly',
				'yearly'
      ],
      defaultValue: 'hourly'
    },
  });
  tasks.associate = function(models) {
    tasks.belongsTo(models.assets, {
      foreignKey: 'assetId',
      onDelete: 'CASCADE',
    });
		tasks.hasMany(models.allocations, {
      foreignKey: 'taskId',
      as: 'tasks',
    });
  };
  return tasks;
};