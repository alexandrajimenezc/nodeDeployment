require('dotenv').config({path: '.env'})
const mongoose = require('mongoose')
const URI =process.env.DB_URL 
mongoose.connect(URI,{
    useNewUrlParser:true ,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false

})
.then(()=>console.log('connected to db'))
.catch(console.error);