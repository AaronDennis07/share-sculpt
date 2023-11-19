const User = require('../models/userModel')
const CustomApiError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const { createJWT } = require('../utils/jwt')

const register = async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) throw new CustomApiError.BadRequestError('username password and email must be given')
    const emailAlreadyExists = await User.findOne({ email })
    if (emailAlreadyExists) throw new CustomApiError.BadRequestError('Email already exists')

    await User.create({ username, email, password })

    return res.status(StatusCodes.CREATED).json({ user: { username, email } })

}

const login = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) throw new CustomApiError.BadRequestError("username and password must be given")
    const foundUser = await User.findOne({ username })
    if (!foundUser) throw new CustomApiError.BadRequestError("invalid credentials")

    const isMatch = await foundUser.comparePassword(password)
    if (!isMatch)
        throw new CustomApiError.BadRequestError("invalid credentials")

    const token = await  createJWT({
        username,
        id:foundUser.id
    })
    return res.status(StatusCodes.OK).json({
        username,
        token
    })
}

module.exports = {
    register,
    login
}