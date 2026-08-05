const login = async (req, res, next) => {
  try {
    throw new Error("testing error");
  } catch (err) {
    next(err);
  }
};

module.exports = { login };
