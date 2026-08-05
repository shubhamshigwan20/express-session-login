const router = require("express").Router();

const { login } = require("../controllers/controllers");

router.post("/login", login);

module.exports = router;
