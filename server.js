const express = require("express")
const mongoose = require("mongoose")
const morgan= require("morgan")
const bodyParser = require("body-parser")
const cors = require('cors');

const UsersRoute = require('./routes/signupformroute')
const app=express()




app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('database connection established ')
})

app.use('/api/users',UsersRoute)


app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
});

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
