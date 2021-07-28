import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        try{
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                    return res.status(403).json({msg: "token is invalid"});
                }
                req.user = user;
                next();
            });

        }catch(error){
            res.sendStatus(401);
            
        }
    }else{
        return res.status(401).json({msg: "Acess Denied"})
    }
};
