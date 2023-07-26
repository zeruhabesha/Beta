const Csv = require('../models/csv');
const Csv1 = require('../models/csv1');

exports.createCsv = async (req, res)=>{
   

    try {
        const csv = await Csv.create(req.body);
        console.log({ csv });
    res.status(200).json({ message: 'Added', data: csv });
        res.status(200);
    } catch (error) {
        res.status(400)
    }
}



exports.createCsv1 = async (req, res)=>{
   

    try {
        const csv1 = await Csv1.create(req.body);
        console.log({ csv1 });
    res.status(200).json({ message: 'Added', data: csv1});
        res.status(200);
    } catch (error) {
        res.status(400)
    }
}