const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
   
    title:{
        type:String,
       
    },
    catalog:{
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


mongoose.model("blog",blogSchema)