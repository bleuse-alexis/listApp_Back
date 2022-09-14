const jwt = require("jsonwebtoken");
const Account = require("../models/Account");

function checkAuth(req, res, next) {
  const token = req.body;

  if (!token) return res.sendStatus(401);

  try {
    const { id } = jwt.verify(token.token, process.env.DB_SECRET);
    Account.findById(id).then((account) => {
      req.account = account;
      next();
    });
  } catch (err) {
    res.sendStatus(403);
  }
}

module.exports = checkAuth;
