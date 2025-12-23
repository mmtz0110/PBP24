// Middleware Autentikasi sederhana
module.exports = function auth(req, res, next) {
    const apiKey = req.headers["x-api-key"];
  
    if (!apiKey) {
      return res.status(400).json({ error: "API Key tidak ditemukan" });
    }
  
    if (apiKey !== "12345") {
      return res.status(401).json({ error: "API Key salah" });
    }
  
    next();
  };
  