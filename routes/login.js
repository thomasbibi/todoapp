const express = require("express")
const router = express.Router()
const User = require("../model/userModel")

router.post('/login', async(req,res)=>{
    try{
        const email = await User.findOne({email:req.body.email})
        const phone = await User.findOne({phone:req.body.email})
        if(!email || !phone){
            
        }
    }catch(e){

    }
})