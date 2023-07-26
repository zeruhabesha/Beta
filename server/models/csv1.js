
const mongoose = require('mongoose');

// Define the schema for the collection
const CsvSchema = new mongoose.Schema({
  tid: [],
  itemno:  [],
  itemname: [],
  modelno: [],
  brandname: [],
  origion: [],
  unit: [],
  price: [],
  specification: [],
  description: [],
  cdate: []
});

// Create the model using the schema
const Csv1 = mongoose.model('csv1', CsvSchema);

module.exports = Csv1;
