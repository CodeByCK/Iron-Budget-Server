const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  groupId: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  },

  name: {
    type: String,
    required: true
  },

  planned: {
    type: Number,
    default: 0
  },

  date: {
    type: Date,
    default: Date.now
  }

}, {
    timestamps: true
  });

const Income = mongoose.model("Item", itemSchema);

module.exports = Item