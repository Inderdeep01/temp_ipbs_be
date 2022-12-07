const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const Signup = require('../models/signup')

router.post('/',(req,res)=>{
    const reqid = req.body.id
    Signup.find({id:reqid})
        .then(result=>{
            if(result.length===0){
                res.status(403).json({msg:'Ivalid Credentials!'})
            }
            else{
                console.log(result)
                const reqpwd = req.body.pwd
                const user = result[0]
                bcrypt.compare(reqpwd,user.pwd)
                    .then(result=>{
                        if(result===true){
                            res.status(200).json({msg:'Authenticated',user:user.fname})
                        }
                        else{
                            res.status(403).json({msg:'Invalid Credentials!'})
                        }
                    })
                    .catch(err=>res.status(500).json({info:'Internal Srver Error'}))
            }
        })
        .catch(err=>res.status(500).json({msg:'Internal Server Error!'}))
})

module.exports = router