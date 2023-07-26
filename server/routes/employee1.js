const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const requireLogin=require('../middleware/requireLogin')
const Employee = mongoose.model("LL")
const Tender = mongoose.model("Tender")
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')



router.get("/profile", (req, res) => {
  
  Employee.find({ _id: req.user._id })
  .select("-password")
  .then((admins) => {
    res.json(admins);
  })
  .catch((err) => {
    console.log(err);
  });
  });


  router.post('/EmpTask' ,async(req,res)=>{
    
    const task = await Employee.find({_id:req.body.hh})
    const {  hh,technical,service,blog,report,setting,others,} = req.body
    const obj = {
      hh,technical,service,blog,report,setting,others,
    }
    task[0].privilage.push(obj);
    task[0].save();
    res.json(task)
  })
  router.post('/checktask' ,async(req,res)=>{
    
    const task = await Tender.find({_id:req.body.hh})
    const { 
      hh,authorization,bank,audit,compliance,company,catalog,experiance,license,cv,qoatation,documentation,methodology,cad,financial,traling,tendpart

    } = req.body
    const obj = {
      hh,authorization,bank,audit,compliance,company,catalog,experiance,license,cv,qoatation,documentation,methodology,cad,financial,traling,tendpart
    }
    task[0].check.push(obj);
    task[0].save();
    res.json(task)
  })
// Create new employee
router.post('/api/employees', async (req, res) => {
  try {
    const {  fname,
      email,
      gender,
      mobile,
      username,
      password,
      role,
      pic,
      status,
      date,
      privilage
      } = req.body;
    const lastEmployee = await Employee.findOne().sort({ empid: -1 });
    let newEmployeeId = 'E-0001';

    if (lastEmployee) {
      const lastEmployeeId = lastEmployee.empid;
      const lastId = parseInt(lastEmployeeId.substring(2), 10);
      newEmployeeId = `E-${('0000' + (lastId + 1)).slice(-4)}`;
    }

    const employee = new Employee({
      empid: newEmployeeId,
      fname,
      email,
      gender,
      mobile,
      username,
      password,
      role,
      pic,
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


  
router.post('/empAdd',async(req,res)=>{

    console.log(req.body)
    const lastEmployee = await Employee.findOne().sort({ empid: -1 });
    let newEmployeeId = 'E-0001';

    if (lastEmployee) {
      const lastEmployeeId = lastEmployee.empid;
      const lastId = parseInt(lastEmployeeId.substring(2), 10);
      newEmployeeId = `E-${('0000' + (lastId + 1)).slice(-4)}`;
    }
    const {  fname,
      email,
      gender,
      mobile,
      username,
      password,
      role,
      pic,
      status,
      date,
      privilage
      } = req.body;
//   console.log(req.body )
  if(!email ){
     return res.status(422).json({error:"please add all the fields"})
  }
  Employee.findOne({email:email})
  .then((savedUser)=>{
      if(savedUser){
        return res.status(422).json({error:"user already exists with that email"})
      }
      bcrypt.hash(password,12)
      .then(hashedpassword=>{
            const user = new Employee({
              empid: newEmployeeId,
                password:hashedpassword, 
                fname,
    email,
    gender,
    mobile,
    username,
  
    role,
    pic,
    status,
    date,
    privilage
                
            })
         
            user.save()
            .then(user=>{
                
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
      })
     
  })
  .catch(err=>{
    console.log(err)
  })
})


router.post('/empLogin',(req,res)=>{
  const {email,password} = req.body
  console.log(req.body)
  if(!email || !password){
     return res.status(422).json({error:"please add email or password"})
  }
  Employee.findOne({email:email})
  .then(savedUser=>{
      if(!savedUser){
         return res.status(422).json({error:"Invalid Email or password"})
      }
      console.log(savedUser)
      bcrypt.compare(password,savedUser.password)
      .then(doMatch=>{
          if(doMatch){
           
              // res.json({message:"successfully signed in"})
             const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
             const {_id,   password:hashedpassword,fname,mname,lname,gender,
              email,empid,username,role,mobile} = savedUser
             
             res.json({token,user:{_id,    password:hashedpassword,fname,mname,lname,gender,
              email,empid,username,role,mobile}})
          }
          else{
              return res.status(422).json({error:"Invalid Email or password"})
          }
      })
      .catch(err=>{
          console.log(err)
      })
  })
})



router.get('/getrequest', async(req, res) =>{
  try {
      const requests = await Employee.find({});
      res.status(200).json(requests);
  } catch (error) {
      res.status(500).json({message: error.message})
  }

})
// router.get('/update-employee/:id', (req, res) =>{
// 	// findById() takes a single parameter, the document id.
// 	// it returns a promise that resolves to the Mongoose document
// 	// if MongoDB found a document with the given id
// 	// or null if no document was found.
// 	Employee.findById(req.params.id)
// 	  .then(data => res.json(data))
// 	  .catch(err => res.status(404).json({dataError: 'Data not found in this id'}))
//   });
router.put('/update-employee/:id', (req, res) => {
	Employee.findByIdAndUpdate(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data updated successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
  });
  
  
  router.delete('/delete/:id', (req, res) =>{
    Employee.findByIdAndRemove(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data deleted successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to delete this data' }));
  })

// router.get('/findx',(req,res)=>{
 
//   Employee.find()
    
  
//     .then(posts=>{
//         res.json(posts)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

router.get('/findx', async (req, res) => {
  const { sortField, sortOrder, searchQuery, page } = req.query;
  const pageSize = 10; // Number of items per page

  // Create MongoDB query based on sortField and sortOrder
  const sortQuery = {};
  if (sortField && sortOrder) {
    sortQuery[sortField] = sortOrder === 'asc' ? 1 : -1;
  }

  // Create MongoDB query based on searchQuery
  const searchOptions = {};
  if (searchQuery) {
    searchOptions.$or = [
      { fname: { $regex: new RegExp(searchQuery, 'i') } },
      { mobile: { $regex: new RegExp(searchQuery, 'i') } },     

      { email: { $regex: new RegExp(searchQuery, 'i') } },

      { gender: { $regex: new RegExp(searchQuery, 'i') } },

      { username: { $regex: new RegExp(searchQuery, 'i') } },

      { role: { $regex: new RegExp(searchQuery, 'i') } },


   
    ];
  }

  
  // Get total count for pagination
  const totalCount = await Employee.countDocuments(searchOptions);

  // Get paginated data
  const data = await Employee.find(searchOptions).sort(sortQuery)
    .skip((page - 1) * pageSize)
    .limit(pageSize);

  const totalPages = Math.ceil(totalCount / pageSize);
  console.log(data)
  res.json({ data, totalPages });
});

router.post("/profile", (req, res) => {
  
  console.log(req.body)
  Employee.find({ _id: req.body.id })
  .select("-password")
  .then((admins) => {
    res.json(admins);
  })
  .catch((err) => {
    console.log(err);
  });
  });

  router.put('/updatepic',(req,res)=>{
    console.log(req.user)
    Employee.findByIdAndUpdate(req.user._id,{$set:{pic:req.body.pic}},{new:true},
        (err,result)=>{
         if(err){
             return res.status(422).json({error:"pic canot post"})
         }
         res.json(result)
         console.log(result)
    })
 
})





module.exports = router