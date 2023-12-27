const {User} = require('../db/index.js');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let username = req.headers.username
    let password = req.headers.password
    User.findOne({'username':username, 'password':password}).then((result)=>{
        if(result){
            next()
        }else{
            res.status(404).json({"Error":"User Not Found"})
        }
        }
    ).catch((err)=>{
        res.status(500).json({"Error":err.message});
    })
}

module.exports = userMiddleware;