const express = require('express');
const { getdiscoverUsData } = require('../controllers/discoverUsController');
const router = express.Router();

router.get('/', getdiscoverUsData);

module.exports = router;