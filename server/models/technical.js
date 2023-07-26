const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types
const technicalSchema = new mongoose.Schema({
   

    tid:{
        type:String,
        
    },
    title:{
        type:String,
        
    },
    file:{
        type:String,
      
    },
    type:{
        type:String,
       
    },
   
    status:{
        type:String,
    },
    date:{
        type:String,
        default:Date.now()
    
    }
})


module.exports=mongoose.model("technical",technicalSchema)