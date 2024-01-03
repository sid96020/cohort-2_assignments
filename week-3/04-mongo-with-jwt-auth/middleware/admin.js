const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let token = req.headers.authorization
    token = token.split(" ")
    token = token[1]
    try{
        let data = jwt.verify(token, JWT_SECRET)
        if(data.username){
            console.log("Admin Authenticated")
            next()
        }else{
            res.status(403).json({message:"Admin username and password are incorrect"})
        }
        
    }catch(e){
        res.status(500).json({message: e.message});
    }

}

module.exports = adminMiddleware;