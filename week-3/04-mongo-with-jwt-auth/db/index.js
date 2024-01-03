const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:Sid96020@cluster0.xlifh6u.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: 'string', required: true},
    password: { type: 'string', required: true}
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: 'string', required: true},
    password: { type: 'string', required: true}
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: { type: 'string', required: true, unique: true},
    description: { type: 'string', required: true},
    price: { type: 'string', required: true},
    imageLink: { type: 'string', required: false}
});

const Purchased_Courses = new mongoose.Schema({
    user_id:{type: 'string', required: true},
    course_id:{type: 'string', required: true}
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}