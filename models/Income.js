const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const incomeSchema = new Schema({
  userId: {
    type: String
  },

  name: {
    type: String,
    default: "Paycheck"
  },

  planned: {
    type: Number,
    default: 0
  },

  received: [{
    type: Schema.Types.ObjectId,
    ref: 'Transaction'
  }]
  ,

  date: {
    type: Date,
    default: Date.now
  }

}, {
    timestamps: true
  });

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;