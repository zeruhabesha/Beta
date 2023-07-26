const Item = require("../models/technical");
const path = require("path");
const asyncWrapper = require("../middlware/asyncWrapper");

const getItems = async (req, res) => {
  try {
    const items = await Item.find( {type:"audit"})
    res.status(200).json({ items });
  } catch (error) {
    console.log(error);
  }
};
const getCv = async (req, res) => {
  try {
    const items = await Item.find( {type:"cv"})
    res.status(200).json({ items });
  } catch (error) {
    console.log(error);
  }
};
const gettBank = async (req, res) => {
  try {
    const items = await Item.find( {type:"bank"})
    res.status(200).json({ items });
  } catch (error) {
    console.log(error);
  }
};
const getExp = async (req, res) => {
  try {
    const items = await Item.find( {type:"exprience"})
    res.status(200).json({ items });
  } catch (error) {
    console.log(error);
  }
};
const getcompany = async (req, res) => {
  try {
    const items = await Item.find( {type:"company"})
    res.status(200).json({ items });
  } catch (error) {
    console.log(error);
  }
};
const getLicense = async (req, res) => {
  try {
    const items = await Item.find( {type:"license"})
    res.status(200).json({ items });
  } catch (error) {
    console.log(error);
  }
};

const Delete = asyncWrapper(async (req, res) => {
	Item.findByIdAndRemove(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data deleted successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to delete this data' }));
  })
  
const addaudit = asyncWrapper(async (req, res) => {
  const { title } = req.body;
  const { type } = req.body;
  const file = req.file.path;
  const item = await Item.create({file ,title,type:"audit"});
  res.status(201).json({ item });
});
const addCv = asyncWrapper(async (req, res) => {
  const { title } = req.body;
  const { type } = req.body;
  const file = req.file.path;
  const item = await Item.create({file ,title,type:"cv"});
  res.status(201).json({ item });
});
const addLicense = asyncWrapper(async (req, res) => {
  const { title } = req.body;
  const { type } = req.body;
  const file = req.file.path;
  const item = await Item.create({file ,title,type:"license"});
  res.status(201).json({ item });
});
const addExprience = asyncWrapper(async (req, res) => {
  const { title } = req.body;
  const { type } = req.body;
  const file = req.file.path;
  const item = await Item.create({file ,title,type:"exprience"});
  res.status(201).json({ item });
});
const addBank = asyncWrapper(async (req, res) => {
  const { title } = req.body;
  const { type } = req.body;
  const file = req.file.path;
  const item = await Item.create({file ,title,type:"bank"});
  res.status(201).json({ item });
});
const addCompany = asyncWrapper(async (req, res) => {
  const { title } = req.body;
  const { type } = req.body;
  const file = req.file.path;
  const item = await Item.create({file ,title,type:"company"});
  res.status(201).json({ item });
});

const downloadFile = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  if (!item) {
    return next(new Error("No item found"));
  }
  const file = item.file;
  const filePath = path.join(__dirname, `../${file}`);
  res.download(filePath);
});

module.exports = {
  getItems,
  addaudit,
  downloadFile,
  Delete,
  getCv
  // addBank,addCompany,addCv,addExprience,addLicense,
  // getCv,getExp,gettBank,getcompany,getLicense,addCv,addCompany,addLicense,addExprience,addBank
};
