const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction')


router.post('/api/createTransaction', (req, res, next) => {

  let { itemId, name, date, amount, userId } = req.body
  Transaction.create({
    itemId,
    name,
    amount,
    date,
    userId
  }).then(response => {
    // console.log(response)
    res.json(response)
  }).catch(err => {
    // console.log(err)
    res.json(err)
  })
});


router.get('/api/transactions/:id', (req, res, next) => {
  Transaction.find({ userId: req.params.id }).sort({ date: -1 })
    .then(response => {
      res.json(response)
    }).catch(err => {
      res.json(err)
    })
})


router.get('/api/deleteTransaction/:id', (req, res, next) => {
  Transaction.findByIdAndRemove(req.params.id)
    .then(response => {
      res.json(response)
    }).catch(err => {
      res.json(err)
    })
})





router.get('/api/getTransaction/:id', (req, res, next) => {
  Transaction.find({ itemId: req.params.id })
    .then(response => {
      res.json(response)
    }).catch(err => {
      res.json(err)
    })
})


module.exports = router;
