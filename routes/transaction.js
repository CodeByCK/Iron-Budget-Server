const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction')


router.post('/api/createTransaction', (req, res, next) => {

  let { itemId, name, date, amount } = req.body
  Transaction.create({
    itemId,
    name,
    amount,
    date
  }).then(response => {
    console.log(response)
    res.json(response)
  }).catch(err => {
    console.log(err)
    res.json(err)
  })
});


module.exports = router;
