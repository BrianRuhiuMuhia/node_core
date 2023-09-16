const net=require("net");
const fs=require("fs")
const server=net.createServer(()=>{})
server.on("connection",(socket)=>{
console.log("New Connection")
socket.on("data",(chunk)=>{
      const writeStream=fs.createWriteStream("C:\\Users\\Nyabura\\Desktop\\node learning\\node\\networking\\terminal chat_app\\go2.mp4")
   console.log(writeStream.write(chunk))
  
    writeStream.on("finish",()=>{
        console.log("finished dowloading")
    })
})
})
server.on("error",(err)=>{
    console.log(err)
})
server.on("close",()=>{
    console.log("connection terminated")
})

server.listen(5000,"::1",()=>{
    console.log("server live on  ",server.address())
})