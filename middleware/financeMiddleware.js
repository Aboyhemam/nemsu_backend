const jwt = require('jsonwebtoken');

const verifyFinance = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({ message: "No token provided" });
    }

    const token = authHeader.startsWith('Bearer ')
        ? authHeader.split(' ')[1]
        : authHeader;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // normalize case to avoid mismatch
        const post = decoded.post?.toLowerCase();

        if (!['finance', 'gs', 'president'].includes(post)) {
            return res.status(403).json({ message: "Access denied" });
        }

        req.admin = decoded;
        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = verifyFinance;