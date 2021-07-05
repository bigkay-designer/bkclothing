import express from 'express'
import jwt from 'jsonwebtoken'
import auth from '../middleware/auth'
const router = express.Router()

const user = [
    {
        username: 'kay',
        password: 'abdi'
    },
    {
        username: 'farhan',
        password: 'ahmed'
    },
]

router.route('/user')
.get(auth, (req, res) => {
    res.json(user.filter(user => user.username === req.user.name))
})

router.route('/login')
.post((req, res)=> {
    /// Authenticate
    const username = req.body.username

    const userData = {name: username}
    const accessToken = jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET)
    console.log(req.user)

    res.header('access-token').json({accessToken: accessToken})
})


export default router