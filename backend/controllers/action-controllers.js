const db = require("../db/db");
const changeEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userId = req.session.userId;
    const results = await db.query(`UPDATE users SET email=$1 where id=$2`, [
      email,
      userId,
    ]);
    if (results.rowCount === 0) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    res
      .status(200)
      .json({ status: true, message: "Email updated", email: email });
  } catch (err) {
    next(err);
  }
};

module.exports = { changeEmail };
