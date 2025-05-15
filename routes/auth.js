const express = require('express')
const router = express.Router()
const authenticateUser = require('../middleware/authentication')

const rateLimit = require('express-rate-limit')
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
})


const { register, login, updateUser } = require('../controllers/auth')
const testUser = require('../middleware/testUser')



router.post('/register', apiLimiter, register)
router.post('/login', apiLimiter, login)
router.patch('/updateUser', authenticateUser, testUser, updateUser)

// router.get('/logout', authenticateUser, logout)
module.exports = router
