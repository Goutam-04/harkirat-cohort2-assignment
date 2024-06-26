const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://robinhooddune:J6koWbkNH9iDf5H3@cluster0.7oa32cu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test');

// Define schemas
const AdminSchema = new mongoose.Schema({
   username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}