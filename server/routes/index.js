const assetsController = require('../controllers').assets;
const tasksController = require('../controllers').tasks;
const workersController = require('../controllers').workers;
const allocationsController = require('../controllers').allocations;

module.exports = (app) => {
  //assets
  app.post('/add-asset', assetsController.create);
	app.get('/assets/all', assetsController.list);
	
	//tasks
	app.post('/add-task', tasksController.create);
	
	//workers
	app.post('/add-worker', workersController.create);
	
	//allocation tasks
	app.post('/allocate-task', allocationsController.create);
	app.get('/get-tasks-for-worker/:workerId', allocationsController.list);
};