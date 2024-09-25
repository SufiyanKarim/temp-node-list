const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here i am')
    }
    res.end(`
        <h1>Opps!</>
        <p>Hello what are doing here!</p>
        <a href="/">Back to home</a>
    `)
    
})
console.log("Server is working")

server.listen(5000)