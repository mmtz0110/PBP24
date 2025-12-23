const http = require('http');
const port = 8000;

const student = [
    {
        name: "Andi",
        class: "TI22A"
    },
    {
        name: "Rudi",
        class: "TI22B"
    }
]

const server = http.createServer((req, res)=>{
    res.writeHead(200);
    res.write(JSON.stringify(student));
    res.end();
})

server.listen(port,() => {
    console.log(`Server is listening on port localhost:${port}`);
})