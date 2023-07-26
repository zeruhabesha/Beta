const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// const Request = mongoose.model("Request")
const Upload1 = require('../models/upload')
const Employee = require('../models/employee33')
const employee1 = require('../models/employee44')

const Tender = require('../models/tender')

const upload = require("../middlware/multer");
const path = require("path");


router.get('/api/requests', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
router.get('/api/GetRequest',(req,res)=>{
 
  Employee.find()
    
  
    .then(posts=>{
        res.json(posts)
    })
    .catch(err=>{
        console.log(err)
    })
})
router.put('/api/update-tender/:id', (req, res) => {
  Tender.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json({ msg: 'Data updated successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
  });
  router.delete('/api/delete-tender/:id', (req, res) =>{
    Tender.findByIdAndRemove(req.params.id, req.body)
      .then(data => res.json({ msg: 'Data deleted successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to delete this data' }));
    })


router.get('/api/getTender', async (req, res) => {
  try {
    const Tender1 = await Tender.find();
    res.json(Tender1);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.delete('/api/delete/:id', (req, res) =>{
	Employee.findByIdAndRemove(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data deleted successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to delete this data' }));
  })
router.put('/api/update/:id', (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json({ msg: 'Data updated successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
  });




// Create new employee

router.post('/api/employees', async (req, res) => {
  try {
    const {  fullname,
      email,
      gender,
      phone,
      username,
      password,
      role,
      photo,
      status,
      date,
      privilage
      } = req.body;
    const lastEmployee = await employee1.findOne().sort({ eid: -1 });
    let newEmployeeId = 'R-0001';

    if (lastEmployee) {
      const lastEmployeeId = lastEmployee.eid;
      const lastId = parseInt(lastEmployeeId.substring(2), 10);
      newEmployeeId = `R-${('0000' + (lastId + 1)).slice(-4)}`;
    }

    const employee = new employee1({
      eid: newEmployeeId,
      fullname,
      email,
      gender,
      phone,
      username,
      password,
      role,
      photo,
      status,
      date,
      privilage


    });

    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});



router.post('/api/request',upload.single('file'), async (req, res) => {
  try {
    const { eid, oid, oname,tenderno,tendername,priority,
      start,end,location,link,} = req.body;
      const file = req.file.path;
    const lastEmployee = await Employee.findOne().sort({ rid: -1 });
    let newEmployeeId = 'R-0001';

    if (lastEmployee) {
      const lastEmployeeId = lastEmployee.rid;
      const lastId = parseInt(lastEmployeeId.substring(2), 10);
      newEmployeeId = `R-${('0000' + (lastId + 1)).slice(-4)}`;
    }

    const employee = new Employee({
      rid: newEmployeeId,
      eid,
      oname,
      oid,
      tenderno,tendername,priority,
      start,end,location,link,file,
    });

    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/tenAdd', async (req, res) => {
  try {
  
    const lastTender = await Tender.findOne().sort({ tid: -1 });
    let newTenderId = 'T-0001';

    if (lastTender) {
      const lastTenderId = lastTender.tid;
      const lastId = parseInt(lastTenderId.substring(2), 10);
      newTenderId = `T-${('0000' + (lastId + 1)).slice(-4)}`;
    }
    const { rid, tenderno, oid,oname,tendername,priority,
      start,end,location,link,status,address,city,country,assign,
      bind,documentfee,region,category,projectmanager,description
 } = req.body;
    const tender = new Tender({
      tid: newTenderId,
      rid,
     
      oid,
      oname,
      tenderno,tendername,priority,
      start,end,location,link,status,address,city,country,assign,
      bind,documentfee,region,category,projectmanager,start,end,description


    });

    const newTender = await tender.save();
    res.status(201).json(newTender);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/api/addupload', async (req, res) => {
  try {
    const { tid, itemno, itemname,unit,quality,description} = req.body;


    const upload1 = new Upload1({
      tid,
      itemno,
      itemname,
      unit,
      quality,description
    });

    const newupload = await upload1.save();
    res.status(201).json(newupload);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
    


module.exports = router