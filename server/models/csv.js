
const mongoose = require('mongoose');

// Define the schema for the collection
const CsvSchema = new mongoose.Schema({
  tid: [],
  item_no:  [],
  item_name: [],
  unit: [],
  qty: [],
  description: [],
  cdate: []
});

// Create the model using the schema
const Csv = mongoose.model('csv', CsvSchema);

module.exports = Csv;
