const form = require('../models/Signupform')
const { response } = require('express')


const index = (req,res,next)=>{
    form.find()
    .then(response=>{
        res.json({
            response
        })

    })
    .catch(error=>{
        res.json({
            massage:'An error Occured!'
        })
    })
}

const show =(req,res,next)=>{
    let userID=req.body.userID
    form.findById(userID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured'
        })
       
    })
}

const store =(req,res,next)=>{
    let signupforms =new form({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        emailid:req.body.emailid,
        password:req.body.password,
        role:req.body.role,
    })
    signupforms.save()   
    .then(response=>{
        res.json({
            message:'User Added Successfully'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured'
        })
       
    })
}

const update =(req,res,next)=>{
let userID=req.body.userID

let updateData={
    firstname:req.body.firstname,
        lastname:req.body.lastname,
        emailid:req.body.emailid,
        password:req.body.password,
        role:req.body.role,
}
form.findByIdAndUpdate(userID,{$set:updateData})
.then(()=>{
    res.json({
        message:'User upadte succesfully'
    })   
})
.catch(error =>{
    res.json({
        message:'An Error Occured'
    })
})
}

const destroy =(req,res,next)=>{
    let userID =req.body.userID
    form.findByIdAndRemove(userID)
    .then(()=>{
        res.json({
            message:'User delete succesfully'
        })   
    })
    .catch(error =>{
        res.json({
            message:'An Error Occured'
        })
    })
}

module.exports={
    index,show,store,update,destroy
}