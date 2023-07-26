const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


const upload = require("../middlware/multer");

const Qutation = require('../models/quatation')
const path = require("path");


router.get('/api/getQuation23',async  (req, res) => {
  try {
    const employees = await Qutation.find();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get("/list-quotation23", (req, res) => {
  Qutation.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(404).json({ data: "data not found" }));
});

router.put('/api/update-quatation/:id', (req, res) => {
  Qutation.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json({ msg: 'Data updated successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
  });
  router.delete('/api/delete-quatation/:id', (req, res) =>{
    Qutation.findByIdAndRemove(req.params.id, req.body)
      .then(data => res.json({ msg: 'Data deleted successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to delete this data' }));
    })









// Create new quotation

router.post('/api/addQotation',upload.single('file'), async (req, res) => {
  try {
    const {eid, itemno, itemname, modelno, brandname, origion ,unit, price ,specification ,description
      } = req.body;
      const file = req.file.path;

    const QQ = new Qutation({
      eid, itemno, itemname, modelno, brandname, origion ,unit, price ,specification ,description, file


    });

    const newQQ = await QQ.save();
    res.status(201).json(newQQ);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});



// router.post('/api/request',upload.single('file'), async (req, res) => {
//   try {
//     const { eid, oid, oname,tenderno,tendername,priority,
//       start,end,location,link,} = req.body;
//       const file = req.file.path;
//     const lastEmployee = await Employee.findOne().sort({ rid: -1 });
//     let newEmployeeId = 'R-0001';

//     if (lastEmployee) {
//       const lastEmployeeId = lastEmployee.rid;
//       const lastId = parseInt(lastEmployeeId.substring(2), 10);
//       newEmployeeId = `R-${('0000' + (lastId + 1)).slice(-4)}`;
//     }

//     const employee = new Employee({
//       rid: newEmployeeId,
//       eid,
//       oname,
//       oid,
//       tenderno,tendername,priority,
//       start,end,location,link,file,
//     });

//     const newEmployee = await employee.save();
//     res.status(201).json(newEmployee);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// router.post('/tenAdd', async (req, res) => {
//   try {
  
//     const lastTender = await Tender.findOne().sort({ tid: -1 });
//     let newTenderId = 'T-0001';

//     if (lastTender) {
//       const lastTenderId = lastTender.tid;
//       const lastId = parseInt(lastTenderId.substring(2), 10);
//       newTenderId = `T-${('0000' + (lastId + 1)).slice(-4)}`;
//     }
//     const { rid, tenderno, oid,oname,tendername,priority,
//       start,end,location,link,status,address,city,country,assign,
//       bind,documentfee,region,category,projectmanager,description
//  } = req.body;
//     const tender = new Tender({
//       tid: newTenderId,
//       rid,
     
//       oid,
//       oname,
//       tenderno,tendername,priority,
//       start,end,location,link,status,address,city,country,assign,
//       bind,documentfee,region,category,projectmanager,start,end,description


//     });

//     const newTender = await tender.save();
//     res.status(201).json(newTender);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });



    


module.exports = router