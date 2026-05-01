const Admin = require('../models/admin_model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // 1. Check if admin exists
        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // 2. Compare password
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // 3. Create JWT token
        const token = jwt.sign(
            {
                id: admin._id,
                role: admin.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        // 4. Send response
        res.json({
            message: "Login successful",
            token,
            admin: {
                username: admin.username,
                email: admin.email,
                role: admin.role
            }
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = loginAdmin;