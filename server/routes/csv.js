const express = require('express');
const {createCsv, createCsv1 } = require('../controllers/csvController');
const router = express.Router();


//POST a new CSV
router.post('/csvupload', createCsv)
router.post('/csvquatation', createCsv1)



module.exports = router;