const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  eid:{
    type: String,
  
  
},
rid:{
  type: String,
    unique: true,
    required: true,
    
},
oid:{
    type:String,
    
},
oname:{
    type:String,
  
},
tenderno:{
    type:String,
   
},

tendername:{
    type:String,
},
priority:{
    type:String,

},
startdate:{
    type:String
},
enddate:{
   type:String
},


location:{
    type:String,
    
},
link:{
    type:String,
   
}, 
file:{
    type:String,
   
},
status:{
  type:String,
   default:'disApprove',
},
date:{
    type:String,
},

});

employeeSchema.pre('save', async function (next) {
  try {
    if (!this.rid) {
      const lastEmployee = await Request.findOne({}, {}, { sort: { rid: -1 } });

      if (lastEmployee) {
        const lastEmployeeId = parseInt(lastEmployee.rid.slice(2));
        this.rid = 'R-' + ('0000' + (lastEmployeeId + 1)).slice(-4);
      } else {
        this.rid = 'R-0001';
      }
    }

    next();
  } catch (error) {
    next(error);
  }
});

 const Request= mongoose.model('Request', employeeSchema);
 module.export = Request;


