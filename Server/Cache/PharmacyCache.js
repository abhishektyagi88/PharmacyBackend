const express = require('express');
const NodeCache = require('node-cache');
const Pharmacy = require("../Models/PharmaciesModel");
const router = express.Router();

const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 }); // Cache for 10 minutes

function cacheMiddleware(req, res, next) {
    const { name } = req.query;
    if (name) {
        const cachedData = cache.get(name);
        if (cachedData) {
            return res.json(cachedData);
        }
    }
    next();
}

router.get('/pharmacies', cacheMiddleware, async (req, res) => {
    try {
        const { name } = req.query;
        const query = name ? { name: new RegExp(name, 'i') } : {};
        const pharmacies = await Pharmacy.find(query);
        if (name) {
            cache.set(name, pharmacies);
        } else {
            cache.set('all_pharmacies', pharmacies);
        }
        res.json(pharmacies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;  