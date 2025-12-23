const express = require('express');
const router = express.Router();
const User = require('../Model/Usermodels.js');
router.get('/login', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "This is Wrong"
        });
    }
});
router.post('/login', async (req, res) => {
    try {

        const { name, password } = req.body;
        const userExists = await User.findOne({ name });

        if (userExists) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }
        const newuser = new User({ name, password });
        await newuser.save();

        res.status(200).json({
            success: true,
            user: newuser
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
module.exports = router;
