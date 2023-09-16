  const childProcess=require("child_process")
  const child=childProcess.spawn("hello",{cwd:"./"})
//   child.stdout.on("data",(data)=>{
//     console.log(data)
//   })
// child.on("error",(err)=>{
//     console.log(err)
// })