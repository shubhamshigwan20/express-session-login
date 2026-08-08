const router = require("express").Router();
const { changeEmail } = require("../controllers/action-controllers");
const authMiddleware = require("../middleware/auth-middleware");

router.post("/change-email", authMiddleware, changeEmail);

module.exports = router;
