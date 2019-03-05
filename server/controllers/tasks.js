const tasks = require('../models').tasks;

module.exports = {
  create(req, res) {
    return tasks
      .create({
				assetId: req.body.assetId,
        name: req.body.name,
				desc: req.body.desc,
				freq: req.body.freq,
				freqType: req.body.freqType,
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(500).send(error));
  }
};