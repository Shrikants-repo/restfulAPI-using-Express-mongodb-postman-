const express = require('express')

require("./db/conn");

const Student =require("./models/students");
const app = express()
const port = process.env.PORT ||4000;


app.get("/",(req, res)=>{
    res.send("hello frm other sides");
})

app.use(express.json());

app.post("/students",(req, res) =>{
    console.log(req.body)
    const user = new Student(req.body);

    user.save()
    
})

app.get("/students/:id",async(req, res) =>{
    
    try{
        const id = req.params.id;
        const getting=await Student.findById(id);
        res.send(getting);
    }catch(e){
        res.send(e);

    }
    
})


app.patch("/students/:id",async(req, res)=>{
    try{
        const id = req.params.id;
        const editing= await Student.findByIdAndUpdate(id, req.body,{new :true}); 
        res.send(editing);
    }catch(e){
        res.send(e);

    }
})



app.delete("/students/:id",async(req, res)=>{
    try{
        const id = req.params.id;
        const deleting= await Student.findByIdAndDelete(id); 
        res.send(deleting);
    }catch(e){
        res.send(e);

    }
})

app.listen(port,() =>{
    console.log("listening on port")
 })