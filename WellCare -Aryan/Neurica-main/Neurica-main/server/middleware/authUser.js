import jwt from 'jsonwebtoken'

// user authentication middleware
const authUser = async (req, res, next) => {
    const { token } = req.headers
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized Login Again' })
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id
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

export default authUser;