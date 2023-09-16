const net=require("net")  
const server=net.createServer()
const clients=[]
server.on("connection",(socket)=>{
console.log("A New connection to the server")
socket.on("data",(chunk)=>{
clients.forEach((socket)=>{
socket.write(chunk.toString())
socket.on("error",(err)=>{
    // const mssg=`${chunk.name} has left `
    // socket.write(mssg)
    console.log("Error")
})
})
})
clients.push(socket)
})
server.listen(5000,"192.168.0.107",()=>{
console.log("server running on",server.address())
}) 
