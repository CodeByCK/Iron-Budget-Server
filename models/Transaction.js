const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  userId: {
    type: String,
    // required: true
  },

  groupId: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  },

  itemId: {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  },

  incomeId: {
    type: Schema.Types.ObjectId,
    ref: 'Income'

  },

  name: {
    type: String,
    // required: true
  },

  amount: {
    type: Number,
    // required: true
  },

  date: {
    type: Date,
    default: Date.now
  }

}, {
    timestamps: true
  });

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction