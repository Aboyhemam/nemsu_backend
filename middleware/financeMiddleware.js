const jwt = require('jsonwebtoken');

const verifyfinance = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.post !== 'finance' && decoded.post !== 'GS' && decoded.post !== 'President') {
            return res.status(403).json({ message: "Access denied" });
        }

        req.admin = decoded;
        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = verifyfinance;