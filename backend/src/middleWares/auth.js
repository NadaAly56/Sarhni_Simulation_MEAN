import jwt from 'jsonwebtoken'

const userAuth = (req, res, next)=> {
    const token = req.header('token')
    jwt.verify(token, process.env.KEY, (err, decoded)=>{
        if(!err) {
            req.id = decoded.user._id
            next()
        }
        else res.json(err)
    })
}

export default userAuth