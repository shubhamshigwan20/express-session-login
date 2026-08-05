const db = require("../db/db");
const session = require("express-session");
const { z } = require("zod");

const login = async (req, res, next) => {
  // zod validation
  const { username, password } = req.body;
  const results = await db.query(
    `SELECT * FROM users WHERE name= $1 AND password = $2`,
    [username, password],
  );
  const user = results.rows[0];
  if (!user) {
    return res
      .status(401)
      .json({ status: false, message: "Invalid credentials!" });
  }
  req.session.userId = user.id;
  res.json({ status: true, message: "Login Successful!" });
};

const logout = async (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ status: false, message: "Logout Fail!" });
    }
    res.clearCookie("connect.sid");
    res.json({ status: true, message: "Logout Successful!" });
  });
};

module.exports = { login, logout };
