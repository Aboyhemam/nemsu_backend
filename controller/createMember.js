const imagekit = require('../config/imagekit_config.js')
const Member   = require('../models/member_model.js')

const addMember = async (req, res) => {
    try {
        const {
            firstName, middleName, lastName,
            gender, DOB,
            address, district, pin, state,
            course, department, admissionYear, admittedThrough,
            fatherName, motherName,
            phoneNo, email, parentPhoneNo,
        } = req.body

        // ── Upload each file to ImageKit ──
        const uploadFile = async (fieldName, folder) => {
            const file = req.files?.[fieldName]?.[0]
            if (!file) return null
            const result = await imagekit.upload({
                file:     file.buffer,
                fileName: file.originalname,
                folder:   `/nemsu/members/${folder}`,
            })
            return result.url
        }

        const passportPhoto_URL = await uploadFile('passportPhoto', 'passport_photos')
        const student_sign_URL  = await uploadFile('student_sign',  'signatures')
        const parent_sign_URL   = await uploadFile('parent_sign',   'signatures')
        const payment_SS_URL    = await uploadFile('payment_SS',    'payments')

        // ── Save to DB ──
        const newMember = await Member.create({
            firstName, middleName, lastName,
            gender, DOB,
            address, district, pin, state,
            course, department, admissionYear, admittedThrough,
            fatherName, motherName,
            phoneNo, email, parentPhoneNo,
            passportPhoto_URL,
            student_sign_URL,
            parent_sign_URL,
            payment_SS_URL,
        })

        res.status(201).json({
            message: 'Member registered successfully',
            data:    newMember,
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = addMember