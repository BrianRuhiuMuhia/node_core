const fs=require("fs")
const {Writable,Readable}=require("stream")
//custom writable stream\\
 class FileWrite extends Writable{
 constructor({highWaterMark,fileName})
 {
     super({highWaterMark})
     this.fileName=fileName
     this.fd=null
    
 }

 _construct(callback)
 {
 fs.open(this.fileName,"w",(err,fd)=>
 {
 if(err)
 {
     callback(err)
 }
 else{
     this.fd=fd
     callback()
 }
 })
 }
 _write(chunk,encoding,callback)
 {
 fs.write(this.fd,chunk,(err)=>{
 if(err)
 {
     return callback(err)
 }
 callback()
 })
 }
 }
 const file=new FileWrite({highWaterMark:10000,fileName:"text.txt"})
 file.write("Hello World")
 class FileReader extends Readable{
    constructor({highWaterMark,fileName})
     {
         super({highWaterMark})
 this.fileName=fileName
 this.fd=null
     }
     _construct(callback)
     {
 fs.open(this.fileName,"r",(err,fd)=>{
     if(err) return callback(err)
     this.fd=fd
     callback()
 })     }
    _read(size)
     {
 const buff=Buffer.alloc(size)
 fs.read(this.fd,buff,0,size,null,(err,bytesRead)=>{
     if(err) return this.destroyer(err)
     this.push(bytesRead>0 ? buff.subarray(0,bytesRead) : null)
 })
     }
     _destroy(error,callback){
         if(this.fd)
         {
             fs.close(this.fd,(err)=>callback(err||error))
         }
 else{
     callback(error)
 }
     }
 }
 const fileRead=new FileReader({highWaterMark:1,fileName:"text.txt"})
 fileRead.on("data",(chunk)=>{
     console.log(chunk.toString("utf-8"))
 })
// // duplex stream\\

