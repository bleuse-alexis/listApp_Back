var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

require("./dbConnect");

var indexRouter = require("./routes/index");
var accountRouter = require("./routes/account");
var listRouter = require("./routes/list");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/account", accountRouter);
app.use("/list", listRouter);

module.exports = app;
