const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
require('./db/config')
const User = require('./db/user');
app.use(express.json());
app.use(cors())
 
app.post('/resister',async(req,res)=>{
    let user = new User(req.body)
    let result = await user.save();
    result=result.toObject();
    res.send(result)
})

// show tha data
app.get('/data',async(req,res)=>{
let result= await User.find();
res.send(result);
})
// delete the data
app.delete('/data/:id',async(req,res)=>{
    let result=await User.deleteOne({_id:req.params.id})
    res.send(result)
})

///get the data
app.get("/data/:id", async(req,res)=>{
    let result =await User.findOne({_id:req.params.id});
    if(result){
     res.send(result)
    }else{
        res.send({result:" no found"})
    }
    })
    // data update
    app.put("/data/:id",async(req,res)=>{
        let result=await User.updateOne({_id:req.params.id},{$set:req.body})
        res.send(result)
    })

app.listen(PORT, (req, res) => {
    console.log('server start')
})