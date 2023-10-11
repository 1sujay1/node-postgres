const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end("This is master")
})

server.listen(8080, () => {
    console.log("Listening to port 8080");
})