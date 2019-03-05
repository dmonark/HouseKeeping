const assets = require('../models').assets;

module.exports = {
  create(req, res) {
    return assets
      .create({
        name: req.body.name
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(500).send(error));
  },
	list(req, res) {
    return assets
      .findAll({
				attributes: ['id', 'name'],
      })
      .then((user) => res.status(200).send(user))
      .catch((error) => res.status(500).send(error));
  }
};