const { Router, request, response } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require('../db/index.js');

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;
    const Add_Admin = new Admin({username: username, password: password})
    Add_Admin.save().then((reesult) => {
            res.status(200).json({ message: 'Admin created successfully' })
    }).catch((err)=>{
        res.status(500).json({ Error: err })
    })

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    let title = req.body.title 
    let description = req.body.description
    let price = req.body.price
    let imageLink =  req.body.imageLink
    let new_course= new Course({title:title , description:description, price:price, imageLink:imageLink})
    new_course.save().then((result) =>{
        res.status(200).json( { message: 'Course created successfully', courseId: result })
    }).catch((error) =>{
        res.status(500).json( { Error: error.message})
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({}).then(function (courses){
        res.status(200).send(courses);
    }).catch((err) => {
        if(err){
            res.status(500).json({message: err.message});
            return
        }
    });
});

module.exports = router;