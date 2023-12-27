const {Admin} = require('../db/index.js');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let username = req.headers.username
    let password = req.headers.password
    Admin.findOne({'username':username, 'password':password}).then((result)=>{
        if(result){
            next()
        }else{
            res.status(404).json({"Error":"Admin Not Found"})
        }
        }
    ).catch((err)=>{
        res.status(500).json({"Error":err.message});
    })

}

module.exports = adminMiddleware;