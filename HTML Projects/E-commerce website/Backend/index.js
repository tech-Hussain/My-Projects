import http from "http";
const server=http.createServer((req,res)=>{
    if (req.url=='/') {
        res.end("<h1>Hello</h1>")
    }
    else if(req.url=='/about'){
        res.end('<h1>About</h1>')
    }
    else if(req.url=='/contact'){
        res.end('<h1>contact</h1>')
    }
    else if(req.url=='/home'){
        res.end('<h1>home</h1>')
    }
    else{
        res.writeHead(404,{'Content-type':'text/html'})
        res.end('<h1>Error 404</h1>')
    }
})
server.listen(5050,'127.0.0.1',()=>{
    console.log("Listening to port 5050");
})

