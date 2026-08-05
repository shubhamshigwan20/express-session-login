const errorMiddleware = async (err, req, res, next) => {
  if (err) return res.status(500).json({ status: false, message: err });
  next();
};

module.exports = errorMiddleware;
