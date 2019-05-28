const express = require('express');
const router = express.Router();
const Income = require('../models/Income')

/* GET home page */
router.get('/', (req, res, next) => {
  res.json({ Welcome: "to my API!" })
});


module.exports = router;
