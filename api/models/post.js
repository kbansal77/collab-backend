const mongoose = require("mongoose");
var uuid = require('uuid');

const postSchema = mongoose.Schema({
    _id:{type: String, require:true, default: uuid.v4 },
    title:{type: String, require:true},
    cover:{type: String, require:true},
    created_at:{type: String, require:true},
    created_by:{type: String, ref:'User', require:true},
    application_deadline:{type: String, require:false},
    tech_stack:{type:[String], require:true},
    eligible_years:{type: [String], require:true},
    own_college:{type: Boolean, require:true},
    positions_available:{type:String,require:true},
    visible_details:{type:[String],require:false},
    post_description:{type:String,require:true},
    roles:{type:[mongoose.Schema.Types.Mixed],require:true},
    post_type:{type:String,require:true},
    docs:{type:String,require:false},
    saved_by:{type:[String], ref:'User', require:false},
    applied_by:{type:[mongoose.Schema.Types.Mixed], ref:'User', require:false},
    start_date:{type:String, require:false},
    end_date:{type:String, require:false},
    duration:{type:String, require:false},
    website:{type:String, require:false},
    venue:{type:String, require:false},
    working_hours:{type:String, require:false},
    company_name:{type:String, require:false},
    stipend:{type:String, require:false}
})

module.exports = mongoose.model('Post', postSchema);