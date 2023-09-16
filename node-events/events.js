const event=require("events")
const eventEmitter=new event()
eventEmitter.on("print",function()
{
    console.log("Hello World")
})
eventEmitter.on("printName",function(name)
{
    console.log(name)
})
eventEmitter.emit("printName","John")