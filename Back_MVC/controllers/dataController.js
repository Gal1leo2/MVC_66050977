const dataModel = require('../models/dataModel');

function checkId(req, res) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  function isDigit(id) {
    return /^\d{8}$/.test(id);
  }

  if (!isDigit(id)) {
    return res.status(400).json({ error: 'ID must be exactly 8 digits' });
  }

  dataModel.checkId(id, (data, error) => {
    if (error) {
      return res.status(404).json(error);
    }
    res.status(200).json(data);
  });
}

module.exports = {
  checkId,
};
