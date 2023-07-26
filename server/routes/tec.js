const upload = require("../middlware/multer");
// const upload1 = require("../middleware/company");

const express = require("express");
const tech = require("../models/technical");
const { getItems,addaudit, downloadFile, Delete,getCv
	// addCv,addExprience,addBank,addLicense,addCompany
 } = require("../controllers/technical");
// const { addCompany } = require("../controllers/company");
// addCv,addExprience,addBank,addLicense,addCompany
const router = express.Router();
// router.get('/getType',(req,res)=>{
// 	console.log(req.body)
// 	tech.find({cv:req.body.cv})
	  
	
// 	  .then(posts=>{
// 		  res.json(posts)
// 	  })
// 	  .catch(err=>{
// 		  console.log(err)
// 	  })
//   })
router.route("/").get(getItems);
router.route("/cv").get(getCv);
router.route("/audit").post(upload.single("file"), addaudit);
//  router.route("/company").post(upload.single("file"), addCompany);
// router.route("/bank").post(upload.single("file"), addBank);
// router.route("/license").post(upload.single("file"), addLicense);
// router.route("/exprience").post(upload.single("file"), addExprience);
// router.route("/cv").post(upload.single("file"), addCv);

router.route("/download/:id").get(downloadFile);
router.route("/delete/:id").get(Delete);
router.delete('/delete/:id', (req, res) =>{
	tech.findByIdAndRemove(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data deleted successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to delete this data' }));
  })
  router.put('/update/:id', (req, res) => {
	tech.findByIdAndUpdate(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data updated successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
  });
  
  
module.exports = router;
