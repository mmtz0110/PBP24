const http = require('http');
const port = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.write('<body><h2>Welcome To mY Server</h2></body>');
    res.end();
})

server.listen(port,() => {
    console.log(`Server is listening on port localhost:${port}`);
})