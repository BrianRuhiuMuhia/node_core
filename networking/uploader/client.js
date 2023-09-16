const net=require("net")
const fs=require("fs")
const client=net.createConnection({host:"::1",port:5000},()=>{
        const readStream=fs.createReadStream("C:\\Users\\Nyabura\\Desktop\\node learning\\node\\networking\\terminal chat_app\\go.mp4")
        readStream.on("data",(chunk)=>{
            console.log("uploading>>>")
        client.write(chunk)
        })
        
        readStream.on("end",()=>{
            console.log("finished uploading")
            client.on("close",()=>{
                console.log("connection closed")
                
            })
        })

})
