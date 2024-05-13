const express = require("express")
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const mongoURL = "mongodb+srv://bhuvaneshm:fC6LiYLrhswCvpdN@cluster0.n6g3qey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoURL,{
    useNewUrlParser:true
}).then(()=>{console.log("Connected to database");})
.catch((e)=>{console.log(e);})


app.listen(5000, ()=>{
    console.log("Server Started");
})

app.post("/post",async(req,res)=>{
    console.log(req.body);
})
