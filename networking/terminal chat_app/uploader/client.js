const net=require("net")
const fs=require("fs")
const client=net.createConnection({host:"::1",port:5000},()=>{
        const readStream=fs.createReadStream("file-one.txt")
        readStream.on("data",(chunk)=>{
        console.log()
        client.write(chunk)
        })

})
