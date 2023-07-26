const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const uploadSchema = new mongoose.Schema({
   
    tid:{
        type:String,
        
    },
    itemno:{
        type:String,
        
    },
    itemname:{
        type:String,
      
    },
    unit:{
        type:String,
       
    },
   
    quality:{
        type:String,
    },
    description:{
        type:String,
    },
    date:{
        type:String,
        default:Date.now()
    }
})


const Upload1 = mongoose.model("upload",uploadSchema)

module.exports = Upload1;