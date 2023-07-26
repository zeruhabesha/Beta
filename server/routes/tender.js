const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Tender = mongoose.model("tender")
const Upload = mongoose.model("upload1")
const csv = mongoose.model("csv")
const Request = mongoose.model("request")
// const Tender = require("../models/tender")
const organization = mongoose.model("organization")
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
// const requireLogin = require('../middleware/EmpAuth')



  

  router.post('/tendAdd',(req,res)=>{
    const {tid, rid,tenderno,oid,oname,
      address,city,country,assignproject,binbind,docfee,region,catalog,projectmanager,
      opendate,closedate,description,progress,date,status} = req.body 
    console.log(req.body)
    if(!rid || !tid){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
     const post = new Tender({ 
      tid, rid,tenderno,oid,oname,
      address,city,country,assignproject,binbind,docfee,region,catalog,projectmanager,
      opendate,closedate,description,progress,date,status    })
    post.save().then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/orgAdd',(req,res)=>{
  const {oid,oname,address,city,country,region} = req.body 
  console.log(req.body)
  if(!oid){
    return  res.status(422).json({error:"Plase add all the fields"})
  }
   const post = new organization({oid,oname,address,city,country,region})
  post.save().then(result=>{
      res.json(result)
  })
  .catch(err=>{
      console.log(err)
  })
})

router.post('/cv' ,async(req,res)=>{
    
  const request = await Request.find({_id:req.body.id})
  const { id,name,file} = req.body
  const obj = {
    id,name,file
  }
  request[0].cv.push(obj);
  request[0].save();
  res.json(request)
})
router.post('/check' ,async(req,res)=>{
  const check = await Tender.find({_id:req.body.id})
  const { id,authorization,bank,audit,compliance,company,catalog,experience,license,cv,qoatation,documentation,methodology,cad,financial,traling} = req.body
  const obj = {
    id,authorization,bank,audit,compliance,company,catalog,experience,license,cv,qoatation,documentation,methodology,cad,financial,traling
  }
  check[0].check.push(obj);
  check[0].save();
  res.json(check)
})

router.post("/tenAdd", (req, res, next) => {
  Tender
    .create(req.body)
    .then((data) => res.json({ msg: "Data added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this data" }));
  // if (error) {
  //   return next(error);
  // } else {
  //   console.log(data);
  //   res.json(data);
  // }
});


router.get('/AllTender',(req,res)=>{
 
  Tender.find()
  

  .then(posts=>{
      res.json(posts)
  })
  .catch(err=>{
      console.log(err)
  })
})

router.get('/AllUpload',(req,res)=>{
 
  csv.find()
  

  .then(posts=>{
      res.json(posts)
  })
  .catch(err=>{
      console.log(err)
  })
})

router.get('/employee',(req,res)=>{
 
  Tender.find()
  

  .then(posts=>{
      res.json(posts)
  })
  .catch(err=>{
      console.log(err)
  })
})

router.get('/AllUpload1',(req,res)=>{
 
  Upload.find()
  

  .then(posts=>{
      res.json(posts)
  })
  .catch(err=>{
      console.log(err)
  })
})


router.get('/all/:id', (req, res) =>{
	// findById() takes a single parameter, the document id.
	// it returns a promise that resolves to the Mongoose document
	// if MongoDB found a document with the given id
	// or null if no document was found.
	Tender.findById(req.params.id)
	  .then(data => res.json(data))
	  .catch(err => res.status(405).json({dataError: 'Data not found in this id'}))
  });
  router.put('/update-student/:id', (req, res) => {
    Tender.findByIdAndUpdate(req.params.id, req.body)
      .then(data => res.json({ msg: 'Data updated successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
    });
    


module.exports = router