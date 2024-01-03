const {JWT_SECRET} = require('../config')
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let token = req.headers.Authorization
    token = token.split(" ")
    token = token[1]
    try{
        let data = jwt.verify(token, JWT_SECRET)
        if(data.username){
            console.log("User Authenticated")
            next()
        }else{
            res.status(403).json({message:"username and password are incorrect"})
        }
        
    }catch(e){
        res.status(500).json({message: e.message});
    }

}

module.exports = userMiddleware;