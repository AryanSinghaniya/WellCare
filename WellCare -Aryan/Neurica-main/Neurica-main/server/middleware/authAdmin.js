import jwt from "jsonwebtoken"

// admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers
        if (!atoken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }
        next()
    } catch (error) {
        console.log(error)
        // Send specific error for invalid token
        if (error.name === 'JsonWebTokenError') {
            return res.json({ success: false, message: 'Invalid token. Please login again.', invalidToken: true })
        }
        res.json({ success: false, message: error.message })
    }
}

export default authAdmin;