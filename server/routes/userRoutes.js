const router = require('express').Router()
const { authenticateUser } = require('../middleware/autentication')
const { upload } = require('../middleware/multer')
const { uploadProfileImg, checkEmailUnique, checkUsernameUnique, getMe } = require('../controllers/userController')
router.post('/upload', authenticateUser, upload.single('profile_img'), uploadProfileImg)
router.post('/unique/email', checkEmailUnique)
router.post('/unique/username', checkUsernameUnique)
router.get('/getMe', authenticateUser,getMe)
module.exports = router
