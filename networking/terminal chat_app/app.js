const http=require("http")
const server=http.createServer((req,res)=>{
res.setHeader("Content-Type","application/json")
res.setHeader("Connection","close")
res.statusCode=200
if(req.url == "/")
res.end(JSON.stringify({"mssg":"Hello World"}))
})
server.listen(3000,()=>{
    console.log("server listening on port 3000")
})