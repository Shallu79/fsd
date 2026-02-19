const express =require("express")


const app=express();


app.get("/",(req,res)=>{
    res.send("hello world from the request")
    
})

app.post("/",(req,res)=>{
    res.send("post request")
    
})
app.get("/about",(req,res)=>{
    res.send("post request")
    
})


app.listen("3000",()=>{
    console.log("sever is runnig on the port 3000");
    
})