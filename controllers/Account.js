const AccountModel = require("../models/Account");

const account = {
  createAccount(req, res) {
    const accountForm = req.body;

    if (!accountForm.name) return res.sendStatus(400);
    if (!accountForm.surname) return res.sendStatus(400);
    if (!accountForm.email) return res.sendStatus(400);
    if (!accountForm.password) return res.sendStatus(400);

    AccountModel.find({ email: accountForm.email })
      .then((result) => {
        if (result.length !== 0) return res.sendStatus(409);
        else {
          AccountModel.create(accountForm)
            .then(() => {
              res.sendStatus(201);
            })
            .catch(() => res.sendStatus(500));
        }
      })
      .catch(() => res.sendStatus(500));
  },

  deleteAccount(req, res) {
    AccountModel.deleteOne({ _id: req.body })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(400);
      });
  },
};

module.exports = account;
