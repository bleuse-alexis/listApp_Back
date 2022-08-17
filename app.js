var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
require("dotenv").config();

require("./dbConnect");

var indexRouter = require("./routes/index");
var accountRouter = require("./routes/account");
var listRouter = require("./routes/list");

var app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/account", accountRouter);
app.use("/list", listRouter);
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
