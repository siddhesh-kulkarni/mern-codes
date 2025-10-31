const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url,true)
    let path = parsedUrl.pathname;
    if(path == '/'){
        res.end('Node.....server');
    } else if (path == '/user') {
        res.end('Node server is on user page')
    }
})

server.listen(5000,()=>{
    console.log('Server is listening on port 5000');
})