const {addBlog,deleteBlog,updateBlog,getAllBlogs,getBlogById,getBlogsByAuthor} = require('../controllers/blogController')
const express = require('express')
const { upload } = require('../middleware/multer')
const router = express.Router()

router.route('/')
    .get(getAllBlogs)
    .post(upload.single('cover_img'),addBlog)

router.route('/:id')
    .put(updateBlog)
    .delete(deleteBlog)
    .get(getBlogById)

router.route('/author')
    .get(getBlogsByAuthor)

module.exports = router