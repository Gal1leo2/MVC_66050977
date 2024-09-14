const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/check-id', dataController.checkId);

module.exports = router;
