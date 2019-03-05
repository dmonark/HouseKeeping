const allocations = require('../models').allocations;
const tasks = require('../models').tasks;

module.exports = {
  create(req, res) {
    return allocations
      .create({
				taskId: req.body.taskId,
				workerId: req.body.workerId,
        allocation: req.body.allocation,
				perform: req.body.perform
      })
      .then((allocations) => res.status(201).send(allocations))
      .catch((error) => res.status(500).send(error));
  },
	list(req, res) {
    return allocations
      .findAll({
				where: {
          workerId: req.params.workerId
        },
				attributes: ['id']
      })
      .then((allocations) => {
				var allocationsList= []
				for(var i = 0; i < allocations.length; i++)
					allocationsList[i] = allocations[i].id
				
				tasks.findAll({
					where: {
						id: allocationsList
					},
					attributes: ['id', 'name', 'desc']
				})
				.then((data) => res.status(200).send(data))
				.catch((error) => res.status(500).send(error));
			})
      .catch((error) => res.status(500).send(error));
  },
};