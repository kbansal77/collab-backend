const mongoose = require("mongoose");

const collegeSchema = mongoose.Schema({
    _id:{type: String, require:true},
    colleges:{type: [mongoose.Schema.Types.Mixed], require:true}
})

module.exports = mongoose.model('College', collegeSchema);