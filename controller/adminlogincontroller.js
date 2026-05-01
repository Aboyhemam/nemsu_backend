// controllers/loginAdmin.js

const Admin  = require('../models/admin_model.js')
const bcrypt = require('bcrypt')
const jwt    = require('jsonwebtoken')

// ─────────────────────────────────────────────────────────────
// IP WHITELIST
// Add every static IP that should be allowed to reach admin
// endpoints. Keep this list in your .env for production:
//   ADMIN_ALLOWED_IPS=203.0.113.10,198.51.100.42
// ─────────────────────────────────────────────────────────────
const ALLOWED_IPS = process.env.ADMIN_ALLOWED_IPS
  ? process.env.ADMIN_ALLOWED_IPS.split(',').map(ip => ip.trim())
  : []   // empty = no IP restriction (not recommended for production)

/**
 * Middleware — restrict access to whitelisted IPs only.
 * Mount this BEFORE loginAdmin and before any protected router.
 *
 * Usage in routes file:
 *   const { ipGuard, loginAdmin } = require('../controllers/loginAdmin')
 *   router.post('/admin/login', ipGuard, loginAdmin)
 *   router.use('/admin',        ipGuard, adminRouter)
 */
const ipGuard = (req, res, next) => {
  // Skip if no whitelist is configured
  if (ALLOWED_IPS.length === 0) return next()

  // req.ip respects X-Forwarded-For when app.set('trust proxy', 1)
  const clientIp = req.ip || req.socket.remoteAddress || ''

  // Strip IPv6-mapped IPv4 prefix (::ffff:x.x.x.x)
  const ip = clientIp.replace(/^::ffff:/, '')

  if (!ALLOWED_IPS.includes(ip)) {
    return res.status(403).json({
      message: 'Access denied: your IP is not authorised to access this resource.'
    })
  }

  next()
}

// ─────────────────────────────────────────────────────────────
// LOGIN CONTROLLER
// ─────────────────────────────────────────────────────────────
const loginAdmin = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' })
  }

  try {
    // 1. Find admin
    const admin = await Admin.findOne({ username })
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found.' })
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' })
    }

    // 3. Sign JWT
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    )

    // 4. Respond
    res.json({
      message: 'Login successful',
      token,
      admin: {
        username: admin.username,
        email:    admin.email,
        role:     admin.role,
      },
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { loginAdmin, ipGuard }