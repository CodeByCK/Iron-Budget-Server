const express = require('express');
const router = express.Router();
const Income = require('../models/Income')

/* GET home page */
router.get('/', (req, res, next) => {
  res.json({ location: "/" })
});


router.post("/api/newPaycheck", (req, res, next) => {
  let { name, planned, userId } = req.body;
  console.log(req.body, "ddsadsadasdasdasd")
  Income.create({
    userId,
    name,
    planned
  }).then(response => {
    res.json(response)
  }).catch((err) => {
    res.json(err)
  })
})


router.get('/api/paychecks/:id', (req, res, next) => {

  Income.find({ userId: req.params.id })
    .then(response => {
      res.json({ response })
    }).catch(err => {
      res.json({ err })
    })
})



router.post('/api/paychecks/editIncome/:id', (req, res, next) => {
  let { name, val } = req.body

  Income.findByIdAndUpdate({ _id: req.params.id }, { [name]: val })
    .then(response => {
      res.json({ response })
    }).catch(err => {
      res.json({ err })
    })
})

module.exports = router;
