const mongoose = require("mongoose");
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_SECRET}@listapp.v7quidn.mongodb.net/ListApp?retryWrites=true&w=majority`;

mongoose.connect(connectionString);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successful!");
});
