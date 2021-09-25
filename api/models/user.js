const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id:{type: String, required: true},
    name:{type: String, required: true},
    photoURL:{type: String, required: true},
    email:{type: String, required: true},
    academic_year:{type: String, required: true},
    graduating_year: {type: String, required: true},
    current_college:{type: String, ref: 'College', required: true},
    resume:{type: String, required: true},
    linkedin:{type: String, required: true},
    github:{type: String, required: false},
    gitlab:{type: String, required: false},
    website:{type: String, required: false},
    description:{type: String, required: false},
    posts_created:{type: [String], ref : 'Post', required: true},
    posts_applied:{type: [mongoose.Schema.Types.Mixed], ref : 'Post', required: true},
    posts_saved:{type: [String], ref : 'Post', required: true}
});

module.exports = mongoose.model('User', userSchema);