const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hi Ambika");
});

app.post("/",(req,res)=>{
    res.send("This is Post Request");
});

app.get("/home",(req,res)=>{
    res.send("This is Home Page");
});

app.get("/products",(req,res)=>{
    res.send("PRODUCTS");
});

app.listen("8080",()=>{
    console.log("Server running");
});