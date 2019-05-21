const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  name: {
    type: String,
    default: "Untitled"
  },

  amount: {
    type: Number,
    default: 0
  }

}, {
    timestamps: true
  });

const Group = mongoose.model("Group", groupSchema);

module.exports = Group