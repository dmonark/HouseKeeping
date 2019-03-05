module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      },
      freq: {
        type: Sequelize.INTEGER
      },
      freqType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
			assetId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'assets',
          key: 'id',
          as: 'assetId',
        },
      },
    }),
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tasks');
  }
};