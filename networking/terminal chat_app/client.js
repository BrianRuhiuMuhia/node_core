const net =require("net")
const readLine=require("readline/promises")
const rL=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})
const conn=net.createConnection({host:"192.168.0.107",port:5000},()=>{
console.log("connected to the server")
  userQuestion(conn)
})
const clearLine=async(dir)=>{
return new Promise((resolve,reject)=>{
    process.stdout.clearLine(dir,()=>{
        resolve()
    })
})
}
const moveCursor=async(x,y)=>{
    return new Promise((resolve,reject)=>{
        process.stdout.moveCursor(x,y)
        resolve()
    })
}
const userQuestion=async (conn)=>{
    const mssg=await rL.question("enter message >   ")
    await moveCursor(0,-1)
    conn.write(mssg)   
    await clearLine(0)
}
conn.on("data",(chunk)=>{
console.log(chunk.toString("utf-8"))
})
