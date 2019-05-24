const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  userId: {
    type: String,
    required: true
  },

  name: {
    type: String,
    default: "UNTITLED"
  },

  amount: {
    type: Number,
    default: 0
  },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
}, {
    timestamps: true
  });

const Group = mongoose.model("Group", groupSchema);

module.exports = Group