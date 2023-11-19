const {addBlog,deleteBlog,updateBlog,getAllBlogs,getBlogById,getBlogsByAuthor} = require('../controllers/blogController')
const express = require('express')
const { upload } = require('../middleware/multer')
const { authenticateUser } = require('../middleware/autentication')
const router = express.Router()

router.route('/')
    .get(getAllBlogs)
    .post(authenticateUser,upload.single('cover_img'),addBlog)

router.route('/:id')
    .put(authenticateUser,updateBlog)
    .delete(authenticateUser,deleteBlog)
    .get(getBlogById)

router.route('/author')
    .get(getBlogsByAuthor)

module.exports = router