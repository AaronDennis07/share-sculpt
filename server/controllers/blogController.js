const Blog = require('../models/blogModel')
const { handleCoverImageUpload } = require('../utils')
const { StatusCodes } = require('http-status-codes')

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({})
  return res.status(StatusCodes.OK).json({
    blogs
  })
}

const getBlogById = async (req, res) => {
  console.log(req.params.id)
  const { id } = req.params
  const blog = await Blog.findById(id )
  return res.status(StatusCodes.OK).json({
    blog
  })
}

const getBlogsByAuthor = async (req, res) => {
  const { author } = req.query
  const blogs = await Blog.find({
    author
  })
  return res.status(StatusCodes.OK).json({
    blogs
  })
}

const addBlog = async (req, res) => {
  const { author, description, tag, title } = req.body

  const b64 = Buffer.from(req.file.buffer).toString("base64");
  let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
  const { url } = await handleCoverImageUpload(dataURI);
console.log(author)
  const newblog = {
    author,
    description,
    title,
    tag,
    coverImg: url
  }

  await Blog.create(newblog)

  res.json(newblog);
}

const updateBlog = async (req, res) => {
  const { id,description, tag, title } = req.body

  const updatedBlog = await Blog.findByIdAndUpdate(id, {
    description,
    tag,
    title
  },{new:true}
  )

  res.status(StatusCodes.OK).json({
    title: updatedBlog.title,
    description: updatedBlog.description,
    tag: updatedBlog.tag
  })
}

const deleteBlog = async (req, res) => {
  const { id } = req.body
  await Blog.findByIdAndDelete(id)
  res.status(StatusCodes.OK).json({
    msg: 'successfully deleted'
  })
}

module.exports = {
  addBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  getBlogsByAuthor
}