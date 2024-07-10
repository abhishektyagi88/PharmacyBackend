const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const user = require("../Models/RegisterModel");

router.post("/register",async(req,res) => {
    try{
        const userExist = await user.findOne({email : req.body.email});
        if(userExist)
        {
            res.status(403).send({
                success : false,
                message : "User Already Exists !!"
            })  
            return;
        }
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        req.body.password = hashedPassword;

        const newUser = new user(req.body);
        await newUser.save();
        res.status(200).send({
            success : true,
            message : "Registration Successful | Please Login"
        })

    }catch(err){
        console.log(err);
        res.status(500).send({
            success : false,
            message : "Something Went Wrong !! Try Again"
        })
    }
})

router.post("/login",async(req,res) => {
    const User = await user.findOne({email : req.body.email});
    if(!User){
        res.status(403).send({
            success : false,
            message : "User Does Not Exist !"
        })
        return;
    }
    const validPassword = await bcrypt.compare(req.body.password,User.password);
    if(!validPassword){
        res.status(401).send({
            success : false,
            message : "Invalid Credentials"
        })
        return;
    }
    const token = jwt.sign({ userId: User._id, emailId: User.email }, process.env.jwt_secret, { expiresIn: "1d" });
    res.status(200).send({
        success : true,
        message : "User Logged In",
        data : token
    })
})


module.exports = router;  