const http = require('http');
const port = 8000;

http.createServer((req,res)=>{
    res.writeHead(200);
    if(req.url == '/'){
        res.write('<html><body><h2>Anda berada pada halaman index</h2></body></html>');
    }else if(req.url == '/mahasiswa'){
        res.write('<html><body><h2>Anda berada pada halaman mahasiswa</h2></body></html>');
    }else if(req.url == '/dosen'){
        res.write('<html><body><h2>Anda berada pada halaman dosen</h2></body></html>');
    }else if(req.url == '/admin'){
        res.write('<html><body><h2>Anda berada pada halaman admin</h2></body></html>');
    }else{
        res.write('<html><body><h2>Page not found (404)</h2></body></html>');
    }
}).listen(port,()=>{
    console.log(`Server is listening on port localhost:${port}`);
})