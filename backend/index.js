 import  cors from "cors"
  import mongoose from "mongoose"
  import express from "express"

    const conectDb=async()=>{
       try {
         await mongoose.connect("mongodb+srv://shalinisri249_db_user:0cnHcNI1EnKSPXGF@cluster0.pb0emod.mongodb.net/");
         console.log("jhelcvjdsbjc");
         

       } catch (error) {
        console.log(error);
        
        
       }
    }
    conectDb();