import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import auth from '../middleware/auth'
import User from '../models/user'
import user from '../models/user'
const router = express.Router()


// Signup
router.route('/signup')
.post(async(req, res)=>{
    try{
        const {firstName, lastName, birthday, email, password, confirmPassword} = req.body
        if(password.length < 6) return res.status(400).json({msg: 'The password most be atleast 6 characters long'});
        if(password !== confirmPassword) return res.status(400).json({msg: `Passwords do not match`});
        const existUser = await User.findOne({email: email})
        if(existUser) return res.status(400).json({msg: 'An account with this email already exists.'});
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt) ;
        const newUser = new User({firstName, lastName, email, birthday, password: passwordHash});
        const saveUser = await newUser.save();

        res.status(200).json(saveUser)
    }catch(error){
        res.status(500).json({error: `error from signup: ${error.message}`})
    }
})


// Login
router.route('/login')
.post(async (req, res)=> {
    /// Authenticate
    try{
        const {email, password} = req.body
        //validate
        const user = await User.findOne({email: email});
        if(!user) return res.status(401).json({msg: 'NO account with this email has been registered.'});
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg: 'You have entered the wrong password'});
        const token = jwt.sign({id: user._id, name: user.firstName, email: user.email}, process.env.ACCESS_TOKEN_SECRET);
        res.header("auth-token").send({token, user: {id: user._id, name: user.firstName, email: user.email}})

    }catch(error){
        res.status(500).json({error: `error from login: ${error.message}`})
    }
})



router.route('/user')
.get(auth, async (req, res) => {
    try{
        const findUser = await User.findById(req.user)
        const useData = {
            id: findUser._id,
            name: findUser.firstName,
            email: findUser.email
        }
        res.status(200).json(useData)

    }catch(error){
        res.status(500).json({error: `error from currentuser: ${error.message}`})
    }
})




export default router