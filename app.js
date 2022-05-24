const http = require('http');
const fs = require('fs').promises;
const PORT = 5500;

const requestListener = function (req, res) {
fs.readFile(__dirname + "/index.html")
.then(contents => {
res.setHeader("Content-Type", "text/html");
res.writeHead(200);
res.end(contents);
})
};


const server = http.createServer(requestListener);

server.listen(5500, ()=> {
console.log(`Сервер работает на порте ${PORT}`);
console.log("Сервер запущен http://localhost:5500");
});