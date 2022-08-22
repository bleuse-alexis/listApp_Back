const AccountModel = require("../models/Account");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

async function createAccount(req, res) {
  const accountForm = req.body;

  if (!accountForm.email) return res.sendStatus(400);
  if (!accountForm.password) return res.sendStatus(400);

  const lowEmail = accountForm.email.toLowerCase().trim();

  const isExisting = await AccountModel.findOne({ email: lowEmail });

  if (isExisting === null) {
    try {
      const hashedPassword = await bcrypt.hash(
        accountForm.password,
        saltRounds
      );
      const newAccount = {
        name: accountForm.name,
        surname: accountForm.surname,
        password: hashedPassword,
        email: lowEmail,
      };
      await AccountModel.create(newAccount);
      res.status(204).send("User created");
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    res.status(500).send("User already exists");
  }
}

async function login(req, res) {
  const accountForm = req.body;

  if (!accountForm.email) return res.sendStatus(400);
  if (!accountForm.password) return res.sendStatus(400);

  const lowEmail = accountForm.email.toLowerCase().trim();
  const account = await AccountModel.findOne({ email: lowEmail });
  if (account === null) {
    res.status(400);
    return res.send("No User Found");
  }

  const isMatch = await bcrypt.compare(accountForm.password, account.password);

  const token = jwt.sign({ id: account._id }, process.env.DB_SECRET);

  if (isMatch) res.send({ jwt: token });
  else {
    res.status(400);
    return res.send("Incorrect Login");
  }
}

async function deleteAccount(req, res) {
  AccountModel.deleteOne({ _id: req.body })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}

const account = { createAccount, deleteAccount, login };

module.exports = account;
