const fs=require("fs")
const fileName="desktop.txt"
// const size=fs.statSync(fileName).size
// const buff=Buffer.alloc(size)
// fs.open(fileName,"r+",(err,fd)=>{
// if(err)
// {
//     console.log(err)
// }
// else{
//     fs.read(fd,buff,function(err,byte)
//     {
// if(err)
// {
//     console.log(err)
// }
// else{
//     console.log(byte)
//     console.log(buff.toString())
// }
//     })
    
//     fs.close(fd,(err)=>{
//         if(err)
//            console.log(err)
//     })
// }
// })
// const fd=fs.openSync(fileName,"r+")
// console.log(fd)
//  const data=fs.readFileSync(fileName,{encoding:"utf-8"})
//  console.log(data)
// fs.readFile(fileName,"utf-8",(err,data)=>{
// console.log(data)
// })
// const data="node.js"
// fs.writeFileSync(fileName,data,{flag:"a"})
// fs.writeFile(fileName,data,{flag:"a"},function(err)
// {
// if(err)
// {
//     console.log(err)
// }
// else{
//     console.log("data was written")
// }
// })
// const readStream=fs.createReadStream(fileName)
// const writeStream=fs.createWriteStream("new.txt")
// readStream.on("data",function(data)
// {
// writeStream.write(data)
// })
// readStream.on("end",function(){
//     writeStream.end()
// })
// fs.stat(fileName,(err,stats)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log(stats.size)
//     }
// })
// const stat=fs.statSync(fileName)
// console.log(stat.size)
// const dirName="new"
// fs.mkdir(dirName,{recursive:false},(err)=>{
//     if(err)
//     throw err
// })
// fs.mkdirSync(dirName)
