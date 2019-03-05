module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('allocations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      allocation: {
        type: Sequelize.STRING,
				allowNull: false
      },
      perform: {
        type: Sequelize.STRING,
				allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
			taskId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'tasks',
          key: 'id',
          as: 'taskId',
        },
      },
			workerId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'workers',
          key: 'id',
          as: 'workerId',
        },
      },
    }),
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('allocations');
  }
};