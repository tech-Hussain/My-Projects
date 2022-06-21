const fs = require('fs')
const http = require('http')
const data = fs.readFileSync('../frontend/index.html', 'utf-8')
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write(data)
        res.end()
    }
    else {
        res.writeHead(404, { 'Content-type': 'text/html' })
        res.end('<h1>Error 404</h1>')
    }
})
server.listen(5050, '127.0.0.1', () => {
    console.log("listening to port 5050");
})