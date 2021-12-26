module.exports = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        code: error.status,
        msg: error.message || "Internal Server Error"
    });
  };