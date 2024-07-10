const express = require("express");
const router = express.Router();

const Medicine = require("../Models/MedicineModel");


router.post("/add-medicine", async(req,res) => {
    try{
        const newMedicine = new Medicine(req.body);
        await newMedicine.save();
        res.status(200).send({
            success : true,
            message : "Medicine Added Successfully"
        })
    }catch(err){
        res.status(500).send({
            success : false,
            message : err.message
        })
    }
})

router.get("/get-all-medicines",async(_,res) => {
    try{
        const Medicines = await Medicine.find();
        res.send({
            success : true,
            message : "Medicines Fetched Successfully",
            data : Medicines
        })
    }catch(err){
        res.status(500).send({
            success : false,
            message : err.message
        })
    }
})

router.delete("/delete-medicine", async(req,res) => {
    try{
        await Medicine.findByIdAndDelete(req.query.medicineId);
        res.send({
            success : true,
            message : "Medicine Deleted Successfully"
        })
    }catch(err){
        res.status(500).send({
            success : false,
            message : err.message
        })
    }
})

router.put("/update-medicine", async(req,res) => {
    try{
    await Medicine.findByIdAndUpdate(req.body.medicineId, req.body);
    res.send({
        success : true,
        message : "Medicine Updated Successfully"
    })
    }catch(err){
        res.status(500).send({
            success : false,
            message : err.message
        })
    }
})



module.exports = router;