const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  name: String,
  article: [String],
  account: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
});

const ListModel = mongoose.model("List", ListSchema);

module.exports = ListModel;
