const { Router, request } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course, Purchased} = require('../db/index.js');

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    let username = req.body.username;
    let password = req.body.password;
    const Add_User = new User({username: username, password: password})
    Add_User.save().then((result) => {
            res.status(200).json({ message: 'User created successfully' })
    }).catch((err)=>{
        res.status(500).json({ Error: err })
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then(function (courses){
        res.status(200).send(courses);
    }).catch((err) => {
        if(err){
            res.status(500).json({message: err.message});
            return
        }
    });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    let courseId = req.params.courseId
    Course.findById(courseId).then((data) => {
        if(data){
            User.find({username: req.headers.username}).then((data) => {
                let new_purchased = new Purchased({user_id:data[0]._id, course_id:courseId})
                new_purchased.save().then((result) => {
                    res.status(200).json({ message: 'Course purchased successfully' })
                }).catch((err)=>{
                res.status(500).json({ Error: err })
                })
            }).catch((err)=>{
                res.status(500).json({ Error: err })
            });
            
        }
    }).catch((err) => {
        if(err){
            res.status(500).json({message: err.message});
            return
        }
    })

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    let purchasedCourses = []
    User.find({username: req.headers.username}).then((data) => {
        user_id = data[0]._id
        Purchased.find({user_id: user_id}).then(async (data) => {
            for (let i = 0; i < data.length; i++) {
                let courseId = data[i].course_id
                await Course.findById(courseId).then((data) => {
                    purchasedCourses.push(data);
                })
            }
            res.status(200).send(purchasedCourses);

        })
    })

});

module.exports = router