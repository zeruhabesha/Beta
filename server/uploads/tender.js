const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const tenderSchema = new mongoose.Schema({
   
    tid:{
        type:String,
        
    },
    rid:{
        type:String,
        
    },
    tenderno:{
        type:String,
      
    },
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
    assign:{
        type:String,
    },
    bind:{
        type:String,
    },
    documentfee:{
        type:String,
    },
    catalog:{
        type:String,
    },
    projectmanager:{
        type:String,
    },
    start:{
        type:String,
    },
    end:{
        type:String,
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        default:"DisApprove"
    },
    progress:{
        type:String,
    },
    date:{
        type:String,
    
    }
})


    tenderSchema.pre('save', async function (next) {
        try {
          if (!this.rid) {
            const lastEmployee = await Tender.findOne({}, {}, { sort: { tid: -1 } });
      
            if (lastEmployee) {
              const lastEmployeeId = parseInt(lastEmployee.tid.slice(2));
              this.tid = 'T-' + ('0000' + (lastEmployeeId + 1)).slice(-4);
            } else {
              this.tid = 'T-0001';
            }
          }
      
          next();
        } catch (error) {
          next(error);
        }
      });
      



const Tender = mongoose.model('Tender', tenderSchema);

module.exports = Tender;


// mongoose.model("tender",tenderSchema)