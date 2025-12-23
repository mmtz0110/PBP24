// Middleware Logging
module.exports = function logger(req, res, next) {
    const time = new Date().toISOString();
    console.log(`[LOG] ${time} - ${req.method} ${req.url}`);
    next(); // lanjut ke middleware berikutnya
  };
  