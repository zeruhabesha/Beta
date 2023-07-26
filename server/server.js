const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 8005
const {MONGO_URI} = require('./conn')
const itemsRouter = require("./routes/tec");
const RequestApi = require("./routes/request1");

// const itemsRouter = require("./routes/items");


mongoose.connect(MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false })

mongoose.connection.on('connected',()=>{
    console.log("mongodb is connected");
})





// require('./models/quatation')
require('./models/csv')
require('./models/csv1')
require('./models/ll')
require('./models/tender')
require('./models/technical')
require('./models/organization')
require('./models/upload')
require('./models/quatation')
app.use(express.json())
app.use(cors())
// app.use(require('./routes/auth'))
app.use(require("./routes/qotation"))
app.use(require("./routes/employee1"))
app.use(RequestApi)
app.use(require("./routes/tenderApi"))
app.use(require("./routes/csv"))
// app.use(require("./routes/technical"))
app.use("/api/v1/items", itemsRouter);

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})