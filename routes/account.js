var express = require("express");
const Account = require("../controllers/Account");
const checkAuth = require("../middlewares/checkAuth");
var router = express.Router();

router.post("/", Account.createAccount);

router.post("/delete", Account.deleteAccount);

router.post("/login", Account.login);

router.get("/", checkAuth, Account.getCurrentUser);
module.exports = router;
