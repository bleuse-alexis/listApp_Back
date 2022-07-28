var express = require("express");
const Account = require("../controllers/Account");
var router = express.Router();

router.post("/", Account.createAccount);

router.post("/delete", Account.deleteAccount);

router.post("/login", Account.login);
module.exports = router;
