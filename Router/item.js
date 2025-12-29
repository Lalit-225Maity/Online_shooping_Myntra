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
router.put('/login/update', async (req, res) => {
    try {
        const { currentpass, name, newpass } = req.body;
        const update = await User.findOneAndUpdate({ name, password: currentpass },
            { password: newpass },
            { new: true });
        if (update) {
            res.json({
                message: "User Password is Updated"
            })
        }
        else {
            res.json({
                message: "User Not Exists"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "This is not correct"
        })
    }


})
router.delete('/login/delete', async (req, res) => {
     try {
        const {myname}=req.body;
        const del=await User.findOneAndDelete({name:myname});
        if(del){
            console.log("Delete is Complete");
            
        }
        res.json({
            message:"Delete is Complete"
        })
     } catch (error) {
        res.status(500).json({
            success:false,
            message:"User Error"
        })
     }

})

module.exports = router;
