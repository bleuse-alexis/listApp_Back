var express = require("express");
const list = require("../controllers/List");
var router = express.Router();

router.post("/", list.createList);

router.put("/:id", list.addArticle);

router.post("/getList", list.getList);

router.post("/delete", list.deleteList);

module.exports = router;
