const mongoose = require('mongoose')
// const autoIncrement = require("mongoose-auto-increment");
// const requireLogin = require('../models/Counter')
const teacherSchema = new mongoose.Schema({
   
    empid:{
        type: String,
        unique: true,
        required: true
    },
    pic:{
        type:String,
        
    },
    fname:{
        type:String,
    },
   
   
    username:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    gender:{
       type:String
    },

 
    mobile:{
        type:String,
        
    },
    status:{

        type:String,
        default: 0
    },
    role:{
        type:String,
       
    }, 
    privilage:[]
})
teacherSchema.pre('save', async function (next) {
    try {
      if (!this.empid) {
        const lastEmployee = await LL.findOne({}, {}, { sort: { empid: -1 } });
  
        if (lastEmployee) {
          const lastEmployeeId = parseInt(lastEmployee.empid.slice(2));
          this.empid = 'E-' + ('0000' + (lastEmployeeId + 1)).slice(-4);
        } else {
          this.empid = 'E-0001';
        }
      }
  
      next();
    } catch (error) {
      next(error);
    }
  });
  
mongoose.model("LL",teacherSchema)