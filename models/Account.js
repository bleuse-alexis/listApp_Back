const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  uuid: { token: String, timeStamp: Date },
});

const AccountModel = mongoose.model("Account", AccountSchema);

module.exports = AccountModel;
