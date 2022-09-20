const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  name: String,
  article: [{ name: String, state: Boolean }],
  account: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
});

const ListModel = mongoose.model("List", ListSchema);

module.exports = ListModel;
