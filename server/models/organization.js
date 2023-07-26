const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const organizationSchema = new mongoose.Schema({
    oid:{
        type:String,
    },
   
    oname:{
        type:String,
    },
    address:{
        type:String,
    },
    country:{
        type:String,
    },
        region:{
        type:String,
    },
    city:{
        type:String,
    },
    date:{
        type:String,
        default:Date.now()
    }
})


mongoose.model("organization",organizationSchema)