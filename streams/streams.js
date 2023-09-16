  const {createReadStream,createWriteStream}=require("fs")
  const readStream=createReadStream("./backend.pdf")
  const writeStream=createWriteStream("./write.txt")
  const {Duplex,PassThrough,Transform} =require("stream")

//   readStream.on("data",(chunk)=>{
// const result=writeStream.write(chunk)
// if(!result)
// {
// console.log("backpressure")
// readStream.pause()
// }
// })
//   readStream.on("error",(err)=>{
//     console.log(err)
//   })
// writeStream.on("drain",()=>
// {
//     console.log("drain")
//     readStream.resume()
// })
//   readStream.on("end",()=>{
// writeStream.end()
//   })  
// process.stdin.pipe(writeStream)
// class Throttle extends Duplex
// {
//     constructor(ms)
//     {
// super()
// this.delay=ms
//     }
//     _read()
//     {

//      }
//     _write(chunk,ecoding,callback)
//     {
//         this.push(chunk)
//         setTimeout(callback,this.delay)
//     }   
//     _final(){
//         this.push(null)
//     }
// }
// const report=new PassThrough()
// const throttle=new Throttle(100)
class Replace extends Transform{
    constructor(text)
    {
        super()
        this.text=text
        this.transformText=""
    }
    _transform(chunk,encoding,callback)
    {
this.transformText=chunk.toString().replace("hello",this.text)
this.push(this.transformText)
callback()
    }
    _flush(callback)
    {
callback()
    }
}
const s=new Replace("brian")
process.stdin.pipe(s).pipe(writeStream)