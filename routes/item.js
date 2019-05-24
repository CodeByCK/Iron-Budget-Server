const express = require('express');
const router = express.Router();
const Item = require('../models/Item')
const Group = require('../models/Group')



// /api/createItem/${groupId}
router.post('/api/createItem/', (req, res, next) => {
  let { name, planned, groupId } = req.body

  Item.create({
    name,
    planned,
    groupId
  }).then(response => {
    console.log(343, response)
    Group.update({ _id: groupId }, { $push: { items: response._id } }).then(group => {
      console.log('updated group', group)
      res.json({ updated: group })
    })
  }).catch(err => {
    console.log(err)
  })

});


router.post('/api/editItem/:id', (req, res, next) => {
  let { name, val } = req.body

  Item.findByIdAndUpdate({ _id: req.params.id }, { [name]: val })
    .then(response => {
      res.json({ response })
    }).catch(err => {
      res.json({ err })
    })
})




router.post('/api/deleteItem/:id', (req, res, next) => {
  Item.findByIdAndDelete(req.params.id)
    .then(response => {
      res.json({ response })
    }).catch(err => {
      res.json({ err })
    })
})


module.exports = router;
