const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  eid:{
    type:String,
    unique: true,
    required: true
   
},
fullname:{
    type:String,
    
},
email:{
    type:String,
    required:true
},
gender:{
    type:String,
  
},
phone:{
    type:String,
   
},

username:{
    type:String,
},
password:{
    type:String,
    
},
role:{
    type:String
},
photo:{
   type:String
},


status:{
    type:Number,
    
},
date:{

    type:String,
},

privilage:[]

});

employeeSchema.pre('save', async function (next) {
  try {
    if (!this.eid) {
      const lastEmployee = await Employee.findOne({}, {}, { sort: { eid: -1 } });

      if (lastEmployee) {
        const lastEmployeeId = parseInt(lastEmployee.eid.slice(2));
        this.eid = 'E-' + ('0000' + (lastEmployeeId + 1)).slice(-4);
      } else {
        this.eid = 'E-0001';
      }
    }

    next();
  } catch (error) {
    next(error);
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
