const express = require('express');
const router = express.Router();
const Group = require('../models/Group')

/* GET home page */
router.post('/api/createGroup', (req, res, next) => {

  Group.create({
    userId: req.body.user
  }).then(response => {
    res.json(response)
  }).catch(err => {
    console.log(err)
  })
});




router.get('/api/Group/:id', (req, res, next) => {

  Group.find({ userId: req.params.id })
    .then(response => {
      // console.log(response)
      res.json({ response })
    }).catch(err => {
      res.json({ err })
    })
})




router.post('/api/editGroup/:id', (req, res, next) => {
  let { name, val } = req.body

  Group.findByIdAndUpdate({ _id: req.params.id }, { [name]: val })
    .then(response => {
      res.json({ response })
    }).catch(err => {
      res.json({ err })
    })
})


router.post('/api/deleteGroup/:id', (req, res, next) => {
  Group.findByIdAndDelete(req.params.id)
    .then(response => {
      res.json({ response })
    }).catch(err => {
      res.json({ err })
    })
})




module.exports = router;
