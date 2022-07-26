const ListModel = require("../models/List");

const list = {
  createList(req, res) {
    const listForm = req.body;

    if (!listForm.name) return res.sendStatus(400);
    if (!listForm.account) return res.sendStatus(400);

    ListModel.find({ account: listForm.account })
      .then((result) => {
        if (result.length !== 0) return res.sendStatus(409);
        else {
          ListModel.create(listForm)
            .then(() => {
              res.sendStatus(201);
            })
            .catch(() => res.sendStatus(500));
        }
      })
      .catch(() => res.sendStatus(500));
  },

  addArticle(req, res) {
    const listForm = req.body;

    if (!listForm.article) return res.sendStatus(400);

    ListModel.findOneAndUpdate({ _id: req.params.id }, { $push: listForm })
      .then(() => {
        res.sendStatus(201);
      })
      .catch(() => res.sendStatus(500));
  },
};

module.exports = list;
