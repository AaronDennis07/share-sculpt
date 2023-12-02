const { StatusCodes } = require("http-status-codes");
const User = require("../models/userModel");
const { handleProfileImageUpload } = require("../utils/imageUpload");
const { BadRequestError } = require("../errors");
const blogModel = require("../models/blogModel");

const uploadProfileImg = async (req, res) => {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const { url } = await handleProfileImageUpload(dataURI);
    await User.findByIdAndUpdate(req.user.id, {
        profile_img: url
    })

    return res.status(StatusCodes.OK).json({
        msg: 'Image successfully uploaded'
    })
}

const checkEmailUnique = async (req, res) => {
    const { email } = req.body
    if(!email) throw new BadRequestError('Email must be provided')
    const emailAlreadyExists = await User.findOne({
        email
    })
    if (emailAlreadyExists) throw new BadRequestError('Email already exists')
    return res.status(200).json({
        msg: 'email is unique'
    })
}
const checkUsernameUnique = async (req, res) => {
    const { username } = req.body
    if(!username) throw new BadRequestError('Username must be provided')
    const emailAlreadyExists = await User.findOne({
        username
    })
    if (emailAlreadyExists) throw new BadRequestError('username already exists')
    return res.status(200).json({
        msg: 'username is unique'
    })
}

const getMe = async(req,res)=>{
    const user = await User.findById(req.user.id).populate('blogs', '_id title tag cover_img description').exec()
   
    return res.status(200).json({
        user:user
    })
}

module.exports = {
    uploadProfileImg,
    checkEmailUnique,
    checkUsernameUnique,
    getMe
}