const { default: mongoose } = require('mongoose')
const { BadRequestError, UnauthorizedError } = require('../errors')
const Blog = require('../models/blogModel')
const User = require('../models/userModel')
const { handleCoverImageUpload } = require('../utils/imageUpload')
const { StatusCodes } = require('http-status-codes')

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}).populate('author','username profile_img')
  return res.status(StatusCodes.OK).json({
    blogs
  })
}

const getBlogById = async (req, res) => {
  const { id } = req.params
  const blog = await Blog.findById(id ).populate('author','username profile_img').exec()
  return res.status(StatusCodes.OK).json({
    blog
  })
}

const getBlogsByAuthor = async (req, res) => {
  const blogs = await Blog.find({
    author: mongoose.SchemaTypes.ObjectId(req.user.id)
  }).populate('author','username profile_img')
  return res.status(StatusCodes.OK).json({
    blogs
  })
}

const addBlog = async (req, res) => {
  const {  description, tag, title } = req.body
  const b64 = Buffer.from(req.file.buffer).toString("base64");
  let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
  const { url } = await handleCoverImageUpload(dataURI);
  const newblog = {
    author:req.user.id,
    description,
    title,
    tag,
    coverImg: url
  }
  const result = await (await Blog.create(newblog)).populate('author','username profile_img')
  await User.findByIdAndUpdate(req.user.id,{$push:{blogs:result._id}})
  res.json(result);
}

const updateBlog = async (req, res) => {
  const {id} = req.params
  const {description, tag, title} = req.body
  console.log(req.body)
  const foundBlog = await Blog.findById(id)

  if(!foundBlog) throw new BadRequestError('Invalid blog id')

  if(foundBlog.author._id.toString()!== req.user?.id) throw new UnauthorizedError('you do not have permission to access this resource')
  const updatedBlog = await Blog.findByIdAndUpdate(id,req.body)
  res.status(StatusCodes.OK).json({
    blog:updatedBlog
  })
}

const deleteBlog = async (req, res) => {
  const {id} = req.params
  
  const foundBlog = await Blog.findById(id)
  if(!foundBlog) throw new BadRequestError('Invalid blog id')
  if(foundBlog.author._id.toString()!== req.user?.id) throw new UnauthorizedError('you do not have permission to access this resource')

  await Blog.deleteOne({_id:foundBlog._id})
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