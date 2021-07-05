import jwt from 'jsonwebtoken'


export default (req, res, next) => {
    const token = req.header('auth-token')
    if(!token) return res.status(401).json({msg: 'Acess Denied'})
    try{
        const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = verify
        next()

    }catch(err){
        res.status(500).json({err: `error message from auth ${err.message}`})
    }
}