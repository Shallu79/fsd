const mangoose=requirea('mongodb+srv://shalinisri249_db_user:0cnHcNI1EnKSPXGF@cluster0.pb0emod.mongodb.net/')
const express=require('express');
const app=express();
const PORT=3000;

app.get('/', (req, res) => {
    res.send('test case 2');
});
app.get('/aboutus', (req, res) => {
    res.send('test case1');
});
app.listen(PORT,(error)=>{
    if(!error){
        console.log("Server running on port" + PORT)
    }    else{
        console.log("Error occurred, server can't start", error);
    }
});