const express = require("express");
const router = express.Router();


const Pharmacy = require("../Models/PharmaciesModel");

router.post("/registerPharmacies",async(req,res) => {
    try{
        const userExist = await Pharmacy.findOne({email : req.body.email});
        if(userExist)
        {
            res.status(403).send({
                success : false,
                message : "User Already Exists !!"
            })  
            return;
        }

        const newUser = new Pharmacies(req.body);
        await newUser.save();
        res.status(200).send({
            success : true,
            message : "Registration Successful"
        })

    }catch(err){
        console.log(err);
        res.status(500).send({
            success : false,
            message : "Something Went Wrong !! Try Again"
        })
    }
})

router.get("/get-all-pharmacies",async(_,res) => {
    try{
        const Pharmacies = await Pharmacy.find();
        res.send({
            success : true,
            message : "Pharmacies Fetched Successfully",
            data : Pharmacies
        })
    }catch(err){
        res.status(500).send({
            success : false,
            message : err.message
        })
    }
})

router.post("/get-pharmacy-by-name", async(req,res) => {
    try{
    const Pharmacie = await Pharmacy.find({name : req.body.name})
    res.send({
        success : true,
        message : "Pharmacie Fetched Successfully",
        data : Pharmacie
    })
    }catch(err){
        res.status(500).send({
            success : false,
            message : err.message
        })
    }
})

module.exports = router;  