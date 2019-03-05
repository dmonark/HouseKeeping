	const workers = require('../models').workers;

module.exports = {
  create(req, res) {
    return workers
      .create({
        name: req.body.name,
				email: req.body.email,
				mobile: req.body.mobile,
				empId: req.body.empID
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(500).send(error));
  }
};