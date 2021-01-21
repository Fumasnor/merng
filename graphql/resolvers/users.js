const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {UserInputError} = require('apollo-server')

const User = require('../../models/userModel')
const {SECRETKEY} = require('../../config')

module.exports = {
    Mutation : {
        async registerUser(_, {inputUser: {email, password, confirmPassword, username}}) {
            password = await bcrypt.hash(password, 12) 
            const newUser = new User({
                username,
                email,
                password,
                createdAt: new Date().toISOString()
            })

            const userFound = await User.findOne({username})
            if (userFound) {
                throw new UserInputError('Username already exists!', {
                    errors:{
                        username: "Please use another username!"
                    }
                })
            }

            const res = await newUser.save()
            
            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            },SECRETKEY, {
                expiresIn:'2h'
            })
            
            return {
                ...res._doc,
                id: res.id,
                token
            }
        }
    }
}