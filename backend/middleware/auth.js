import jwt from 'jsonwebtoken'


export default (req, res, next) => {
    const headerAuth = req.headers['authorization']
    const token = headerAuth && headerAuth.split(' ')[1]
    
    if(token == null) return res.sendStatus(401)
    try{
        const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = verify
        next()

    }catch(err){
        res.status(500).json({err: `error message from auth ${err.message}`})
    }
}