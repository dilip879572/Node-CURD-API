const mongoose=require('mongoose');
const useSchema=new mongoose.Schema({
    "name":String,
    "email":String,
    "date":String,
    "number":String,
    "password":String,
   
})
module.exports = mongoose.model('student',useSchema);