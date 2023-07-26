const mongoose = require('mongoose')

const settingSchema = new mongoose.Schema({
   
    sitename:{
        type:String,
       
    },
    companyphone:{
        type:String,
        
    },
    companyemail:{
        type:String,
        required:true
    },
    map:{
        type:String,
      
    },
    fulladdress:{
        type:String,
      
    },
    fb:{
        type:String,
      
    },
    tw:{
        type:String,
    },
    li:{
        type:String,
    },
    ig:{
        type:String,
    },
    yt:{
        type:String,
    },
    date:{

        type:String,
        default:Date.now()
    },
   
})


mongoose.model("setting",settingSchema)