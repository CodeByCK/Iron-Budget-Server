const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  userId: {
    type: String
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

  spent: {
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

const Item = mongoose.model("Item", itemSchema);

module.exports = Item