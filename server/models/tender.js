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
        default:0
    },
    date:{
        type:String,
    
    },
    authorization:{
        type:String,
        default:0
    },
    bankstatement:{
        type:String,
        default:0
        
    },
    auditreport:{
        type:String,
        default:0
    },
    compliencesheet:{
        type:String,
        default:0
      
    },
    experiance:{
        type:String,
        default:0
      
    },
    companyprofile:{
        type:String,
        default:0
      
    },
    cv:{
        type:String,
        default:0
    },
    license:{
        type:String,
        default:0
    },
    qualitycertificate:{
        
        type:String,
        default:0
    },
    methodology:{
        type:String,
        default:0
    },
 
    trailing:{
        type:String,
        default:0
    },
    caddesign:{
        type:String,
        default:0
    },
    catalog:{
        type:String,
        default:0
    },
    financial:{
        type:String,
        default:0
    },
    tenderparticipation:{
        type:String,
        default:0
    },
    authorization1:{
        type:String,
        default:0
    },
    bankstatement1:{
        type:String,
        default:0
        
    },
    auditreport1:{
        type:String,
        default:0
    },
    compliencesheet1:{
        type:String,
        default:0
      
    },
    experiance1:{
        type:String,
        default:0
      
    },
    companyprofile1:{
        type:String,
        default:0
      
    },
    cv1:{
        type:String,
        default:0
    },
    license1:{
        type:String,
        default:0
    },
    qualitycertificate1:{
        
        type:String,
        default:0
    },
    methodology1:{
        type:String,
        default:0
    },
 
    trailing1:{
        type:String,
        default:0
    },
    caddesign1:{
        type:String,
        default:0
    },
    catalog1:{
        type:String,
        default:0
    },
    financial1:{
        type:String,
        default:0
    },
    tenderparticipation1:{
        type:String,
        default:0
    },




    total: {
        type: String,
        default: '0',
      },




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
      
    const fieldsWithDefaultValueZero = [
        'authorization',
        'bankstatement',
        'auditreport',
        'compliencesheet',
        'experiance',
        'companyprofile',
        'cv',
        'license',
        'qualitycertificate',
        'methodology',
        'trailing',
        'caddesign',
        'catalog',
        'financial',
        'tenderparticipation',
      ];
  
      let total = 0;
      for (const field of fieldsWithDefaultValueZero) {
        if (this[field] === '1') {
          total++;
        }
      }
  
      this.total = total.toString();
          next();
        } catch (error) {
          next(error);
        }
      });
      



const Tender = mongoose.model('Tender', tenderSchema);

module.exports = Tender;


// mongoose.model("tender",tenderSchema)