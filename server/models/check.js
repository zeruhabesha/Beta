const mongoose = require('mongoose')

const settingSchema = new mongoose.Schema({
   
    tid:{
        type:String,
       
    },
    authorization:{
        type:String,
       
    },
    bankstatement:{
        type:String,
        
    },
    auditreport:{
        type:String,
        required:true
    },
    compliencesheet:{
        type:String,
      
    },
    experiance:{
        type:String,
      
    },
    companyprofile:{
        type:String,
      
    },
    cv:{
        type:String,
    },
    license:{
        type:String,
    },
    qualitycertificate:{
        type:String,
    },
    methodology:{
        type:String,
    },
    methodology:{
        type:String,
    },
    trailing:{
        type:String,
    },
    caddesign:{
        type:String,
    },
    catalog:{
        type:String,
    },
    financial:{
        type:String,
    },
    tenderparticipation:{
        type:String,
    },
    status:{
        type:String,
    },
    date:{

        type:String,
        default:Date.now()
    },
   
})


mongoose.model("setting",settingSchema)