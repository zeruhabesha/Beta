const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const quatationSchema = new mongoose.Schema({
   
    eid:{
        type:String,
      
    },
    itemno:{
        type:String,
        
    },
    itemname:{
        type:String,
        
    },
    modelno:{
        type:String,
      
    },
    brandname:{
        type:String,
       
    },
   
    origion:{
        type:String,
    },
    unit:{
        type:String,
    
    },
    price:{
        type:String
    },
    specification:{
       type:String
    },

 
    description:{
        type:String,
        
    },
    file:{
        type:String,
       
    }, 
   
},

{
    timestamps: true
  }
)



const QQ = mongoose.model('Quatation', quatationSchema);

module.exports = QQ;
//eid, itemno, itemname, modelno, brandname, origion ,unit, price ,specification ,description, catalogfile