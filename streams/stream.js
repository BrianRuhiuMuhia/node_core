const fs=require("fs");
const {Writable}=require("stream")
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
