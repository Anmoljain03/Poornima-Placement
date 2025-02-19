const User = require("../models/User"); 
const bcrypt = require("bcryptjs");
 
exports.register = async (req, res) => {
    try {
        const { name, email, password, department, registrationNumber } = req.body;

        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

      
        const hashedPassword = await bcrypt.hash(password, 10);

        
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            department,
            registrationNumber,
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
