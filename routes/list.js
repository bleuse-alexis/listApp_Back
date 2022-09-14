var express = require("express");
const list = require("../controllers/List");
var router = express.Router();

router.post("/", list.createList);

router.put("/:id", list.addArticle);

router.get("/listName", list.sendListName);

module.exports = router;
