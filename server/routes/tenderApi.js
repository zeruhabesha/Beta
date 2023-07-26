const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const asyncWrapper = require("../middlware/asyncWrapper");
const Tender = mongoose.model("Tender")
const csv = require("../models/csv");
const Technical = require('../models/technical')
// const Progress = require('../models/progres')
const multer = require("multer");

const path = require("path");







const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './files');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 10000000000000000 // max file size 1MB = 1000000 bytes
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
      let ext = ''; // set default extension (if any)
      if (file.originalname.split(".").length>1) // checking if there is an extension or not.
          ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
   
          cb(null,   ext)
  }
});










router.post('/api/tecAdd',upload.single('file'), async (req, res) => {
  try {
    const { tenderid,type} = req.body;
    const { total} = req.body;

if(type==="Company"){
  const tt =  await Tender.find( {tid:req.body.tenderid})

      const update={
        companyprofile1 :1
      
      }
      const updateTender= await  Tender.findByIdAndUpdate(tt,update)

}
else if (type=="Bank") {

  const tt =  await Tender.find( {tid:req.body.tenderid})

  const update={
    bankstatement1 :1
  
  
  }
  const updateTender= await  Tender.findByIdAndUpdate(tt,update)

  
}

else if (type=="Authorization") {

  const tt =  await Tender.find( {tid:req.body.tenderid})

  const update={
    authorization1 :1
  
  
  }
  const updateTender= await  Tender.findByIdAndUpdate(tt,update)

}
else if (type==="Audit") {

  const tt =  await Tender.find( {tid:req.body.tenderid})

  const update={
    auditreport1 :1
  
  
  }
  const updateTender= await  Tender.findByIdAndUpdate(tt,update)

}
else if (type==="Exprience") {

  const tt =  await Tender.find( {tid:req.body.tenderid})

  const update={
    experiance1 :1
  
  
  }
  const updateTender= await  Tender.findByIdAndUpdate(tt,update)

}
else if (type==="Quality") {

  const tt =  await Tender.find( {tid:req.body.tenderid})

  const update={
    qualitycertificate1 :1
  
  
  }
  const updateTender= await  Tender.findByIdAndUpdate(tt,update)

}
else if (type==="Methodology") {

  const tt =  await Tender.find( {tid:req.body.tenderid})

  const update={
    methodology1 :1
  
  
  }
  const updateTender= await  Tender.findByIdAndUpdate(tt,update)

}
else if (type==="Cv") {

  const tt =  await Tender.find( {tid:req.body.tenderid})

  const update={
    cv1 :1
  
  
  }
  const updateTender= await  Tender.findByIdAndUpdate(tt,update)

}
else if (type==="license") {

  const tt =  await Tender.find( {tid:req.body.tenderid})

  const update={
    license1 :1
  
  
  }
  const updateTender= await  Tender.findByIdAndUpdate(tt,update)

}

else if (type==="Trailing") {

  const tt =  await Tender.find( {tid:req.body.tenderid})

  const update={
    trailing1 :1
  
  
  }
  const updateTender= await  Tender.findByIdAndUpdate(tt,update)

}
else if (type==="Cad-Design") {

  const tt =  await Tender.find( {tid:req.body.tenderid})

  const update={
    caddesign1 :1
  
  
  }
  const updateTender= await  Tender.findByIdAndUpdate(tt,update)

}
else if (type==="Tenderparticipation") {

  const tt =  await Tender.find( {tid:req.body.tenderid})

  const update={
    tenderparticipation1 :1

  
  }
  const updateTender= await  Tender.findByIdAndUpdate(tt,update)

}

else{

  res.status(400).send("Unable To Update Employee");
}


      const file = req.file.path;
 
      const cv =  await Tender.find( {tid:req.body.tenderid, cv:"1"}).count()
      const audit =  await Tender.find( {tid:req.body.tenderid,auditreport:"1"}).count()
      const company =  await Tender.find( {tid:req.body.tenderid,companyprofile:"1"}).count()
      const exprience =  await Tender.find( {tid:req.body.tenderid,experiance:"1"}).count()
      const authorization =  await Tender.find( {tid:req.body.tenderid,authorization:"1"}).count()
      const license =  await Tender.find( {tid:req.body.tenderid,license:"1"}).count()
      const bank =  await Tender.find( {tid:req.body.tenderid,bankstatement:"1"}).count()
      const compsheet =  await Tender.find( {tid:req.body.tenderid,compliencesheet:"1"}).count()
      const quality =  await Tender.find( {tid:req.body.tenderid,qualitycertificate:"1"}).count()
      const methodology =  await Tender.find( {tid:req.body.tenderid,methodology:"1"}).count()
      const caddesign =  await Tender.find( {tid:req.body.tenderid,caddesign:"1"}).count()
      const catalog =  await Tender.find( {tid:req.body.tenderid,catalog:"1"}).count()
      const trailing =  await Tender.find( {tid:req.body.tenderid,trailing:"1"}).count()
      const finance =  await Tender.find( {tid:req.body.tenderid,financial:"1"}).count()
      const tenderpart =  await Tender.find( {tid:req.body.tenderid,tenderparticipation:"1"}).count()



      //Total Of Checked Value
      const sum=cv+audit+company+exprience+authorization+license+bank+compsheet+quality+methodology+caddesign+catalog+trailing+finance+tenderpart;


      // Total Insert Value

      const cv1 =  await Tender.find( {tid:req.body.tenderid, cv1:"1"}).count()
      const audit1 =  await Tender.find( {tid:req.body.tenderid,auditreport1:"1"}).count()
      const company1 =  await Tender.find( {tid:req.body.tenderid,companyprofile1:"1"}).count()
      const exprience1 =  await Tender.find( {tid:req.body.tenderid,experiance1:"1"}).count()
      const authorization1 =  await Tender.find( {tid:req.body.tenderid,authorization1:"1"}).count()
      const license1 =  await Tender.find( {tid:req.body.tenderid,license1:"1"}).count()
      const bank1 =  await Tender.find( {tid:req.body.tenderid,bankstatement1:"1"}).count()
      const compsheet1 =  await Tender.find( {tid:req.body.tenderid,compliencesheet1:"1"}).count()
      const quality1 =  await Tender.find( {tid:req.body.tenderid,qualitycertificate1:"1"}).count()
      const methodology1 =  await Tender.find( {tid:req.body.tenderid,methodology1:"1"}).count()
      const caddesign1 =  await Tender.find( {tid:req.body.tenderid,caddesign1:"1"}).count()
      const catalog1 =  await Tender.find( {tid:req.body.tenderid,catalog1:"1"}).count()
      const trailing1 =  await Tender.find( {tid:req.body.tenderid,trailing1:"1"}).count()
      const finance1 =  await Tender.find( {tid:req.body.tenderid,financial1:"1"}).count()
      const tenderpart1 =  await Tender.find( {tid:req.body.tenderid,tenderparticipation1:"1"}).count()
      const Checked=cv1+audit1+company1+exprience1+authorization1+license1+bank1+compsheet1+quality1+methodology1+caddesign1+catalog1+trailing1+finance1+tenderpart1;

  
   
      const update2={
        total :Checked
      
      
      }
  
      const total23 =  await Tender.find( {tid:req.body.tenderid})
      const updateTender23= await  Tender.findByIdAndUpdate(total23,update2)

      const technicals = new Technical({
        tenderid,
        type,
      
        status:1,
        file,
      });

      const pro=Checked/sum*100;
   console.log(pro)
      const update1={
        progress :pro
      
      
      }
  
      const newTechnicals = await technicals.save();
      
      //Total Of Checked Value

 
 


   

  
  




    const tt1 =  await Tender.find( {tid:req.body.tenderid})
    const updateTender1= await  Tender.findByIdAndUpdate(tt1,update1)
    res.status(201).json(newTechnicals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});










router.get('/api/technicals', async (req, res) => {
  try {
    const technicals = await Technical.find();
    res.json(technicals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.put('/api/update-technicals/:id', (req, res) => {
  Technical.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json({ msg: 'Data updated successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
  });
  router.delete('/api/delete-technicals/:id', (req, res) =>{
    Technical.findByIdAndRemove(req.params.id, req.body)
      .then(data => res.json({ msg: 'Data deleted successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to delete this data' }));
    })
 
    router.get('/api/download-technicals/:id', async (req, res) => {
      const { id } = req.params;
      const item = await Technical.findById(id);
      if (!item) {
        return next(new Error("No item found"));
      }
      const file = item.file;
      const filePath = path.join(__dirname, `../${file}`);
      res.download(filePath);
    });
    router.get('/technicals/authorization', async (req, res) => {
      try {
        const technicals =  await Technical.find( {type:"Authorization"})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });

    router.get('/technicals/audit', async (req, res) => {
      try {
        const technicals =  await Technical.find( {type:"Audit"})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });
    router.get('/technicals/trailing', async (req, res) => {
      try {
        const technicals =  await Technical.find( {type:"Trailing"})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });
    router.get('/technicals/company', async (req, res) => {
      try {
        const technicals =  await Technical.find( {type:"Company"})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });

    router.get('/technicals/exprience', async (req, res) => {
      try {
        const technicals =  await Technical.find( {type:"Exprience"})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });
    router.get('/technicals/quality', async (req, res) => {
      try {
        const technicals =  await Technical.find( {type:"Quality"})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });


    router.get('/technicals/cv', async (req, res) => {
      try {
        const technicals =  await Technical.find( {type:"Cv"})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });
    router.get('/technicals/license', async (req, res) => {
      try {
        const technicals =  await Technical.find( {type:"license"})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });
    router.get('/technicals/bank', async (req, res) => {
      try {
        const technicals =  await Technical.find( {type:"Bank"})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });
    router.get('/technicals/methodology', async (req, res) => {
      try {
        const technicals =  await Technical.find( {type:"Methodology"})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });
    router.get('/technicals/cad', async (req, res) => {
      try {
        const technicals =  await Technical.find( {type:"Cad-Design"})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });
    router.get('/technicals/tenderpart', async (req, res) => {
      try {
        const technicals =  await Technical.find( {type:"Tenderparticipation"})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });
    
    router.get('/list-applicants/:tid1', async (req, res) => {
      try {
        const technicals =  await Technical.find( {tenderid:req.params.tid1})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });

    
    router.get('/list-applicantsbm/:tid1', async (req, res) => {
      try {
        const technicals =  await Progress.find( {tid:req.params.tid1})
        res.json(technicals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });

    router.get('/list-tender/:tid1', async (req, res) => {
      try {

        
        const cv =  await Tender.find( {tid:req.params.tid1, cv:"1"})
    
        res.json(cv);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });

    router.get('/total-tender/:tid1', async (req, res) => {
      try {

        
        const cv =  await Tender.find( {tid:req.params.tid1, cv:"1"}).count()
        const audit =  await Tender.find( {tid:req.params.tid1,auditreport:"1"}).count()
        const company =  await Tender.find( {tid:req.params.tid1,companyprofile:"1"}).count()
        const exprience =  await Tender.find( {tid:req.params.tid1,experiance:"1"}).count()
        const authorization =  await Tender.find( {tid:req.params.tid1,authorization:"1"}).count()
        const license =  await Tender.find( {tid:req.params.tid1,license:"1"}).count()
        const bank =  await Tender.find( {tid:req.params.tid1,bankstatement:"1"}).count()
        const compsheet =  await Tender.find( {tid:req.params.tid1,compliencesheet:"1"}).count()
        const quality =  await Tender.find( {tid:req.params.tid1,qualitycertificate:"1"}).count()
        const methodology =  await Tender.find( {tid:req.params.tid1,methodology:"1"}).count()
        const caddesign =  await Tender.find( {tid:req.params.tid1,caddesign:"1"}).count()
        const catalog =  await Tender.find( {tid:req.params.tid1,catalog:"1"}).count()
        const trailing =  await Tender.find( {tid:req.params.tid1,trailing:"1"}).count()
        const finance =  await Tender.find( {tid:req.params.tid1,financial:"1"}).count()
        const tenderpart =  await Tender.find( {tid:req.params.tid1,tenderparticipation:"1"}).count()
        const sum=cv+audit+company+exprience+authorization+license+bank+compsheet+quality+methodology+caddesign+catalog+trailing+finance+tenderpart;

        res.json(sum);


        const tt =  await Tender.find( {tid:req.body.tenderid})

        const update={
          total :sum
        
        
        }
        const updateTender= await  Tender.findByIdAndUpdate(tt,update)

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });


    router.get("/list-applicantsbm/:tid",async (req, res) => {
      const technicals =  await Tender.find( {tid:req.params.tid,total:1})
        .then((data) => res.json(data))
        .catch((err) => res.status(404).json({ data: "data not found" }));
    });


    router.post('/updateEmployee/:id',function (req, res) {
      Tender.findById(req.params.id, function (err, employee) {
      if (!employee)
      return next(new Error('Unable To Find Employee With This Id'));
      else {
        const technicals =   Technical.find( {tenderid:req.params.tid,type:"Cv"}).count()
      //   tid: newTenderId,
      //   rid,
       
      //   oid,
      //   oname,
      //   tenderno,tendername,priority,
      //   start,end,location,link,status,address,city,country,assign,
      //   bind,documentfee,region,category,projectmanager,start,end,description
      // employee.firstName = req.body.firstName;
      employee.tenderno = req.body.tenderno;
      employee.priority = req.body.priority;
      employee.start = req.body.start;
      employee.end = req.body.end;
      employee.location = req.body.location;
      employee.link = req.body.link;
      employee.address = req.body.address;
      employee.city = req.body.city;
      employee.country = req.body.country;
      employee.assign = req.body.assign;
      employee.bind = req.body.bind;
      employee.documentfee = req.body.documentfee;
      employee.region = req.body.region;
      employee.category = req.body.category;
      employee.projectmanager = req.body.projectmanager;
      employee.description = req.body.description;
      employee.tendername = req.body.tendername;

      employee.status = technicals;
      
      employee.save().then(emp => {
      res.json('Employee Updated Successfully');
      })
      .catch(err => {
      res.status(400).send("Unable To Update Employee");
      });
      }
      });
      });



      router.get('/AllUpload/:tid',(req,res)=>{
 
        csv.find({tid:req.params.tid})
        
      
        .then(posts=>{
            res.json(posts)
        })
        .catch(err=>{
            console.log(err)
        })
      })


module.exports = router