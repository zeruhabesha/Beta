const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
   
    title:{
        type:String,
       
    },
    shortdesc:{
        type:String,
        
    },
    fulldesc:{
        type:String,
        required:true
    },
    photo:{
        type:String,
      
    },
    date:{

        type:String,
        default:Date.now()
    },
   
})


mongoose.model("service",serviceSchema)