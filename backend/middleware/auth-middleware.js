const authMiddleware = async (req, res, next) => {
  if (req.session && req.session.userId) {
    next();
  } else {
    res
      .status(401)
      .json({ status: false, message: "Unauthorized. Please log in." });
  }
};

module.exports = authMiddleware;
