module.exports = function validateUser(req,res,next){
    const {name, age} = req.body;

    if (!name) return res.status(400).json({ error: "Nama wajib diisi"});
    if (!age) return res.status(400).json({ error: "Umur wajib diisi"});

    next();
}