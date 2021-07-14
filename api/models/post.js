const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    _id:{type: String, require:true},
    title:{type: String, require:true},
    cover:{type: String, require:true},
    created_at:{type: String, require:true},
    created_by:{type: String, ref:'User', require:true},
    project_deadline:{type: String, require:false},
    tech_stack:{type:[String], require:true},
    applicable_years:{type: [String], require:true},
    applicable_colleges:{type: String, require:true},
    team_size:{type:String,require:true},
    visible_details:{type:String,require:true},
    post_decs:{type:String,require:true},
    roles:{type:[mongoose.Schema.Types.Mixed],require:true},
    post_type:{type:String,require:true},
    docs:{type:String,require:false},
    saved_by:{type:[String], ref:'User', require:false},
    applied_by:{type:[mongoose.Schema.Types.Mixed], ref:'User', require:false},
    start_date:{type:String, require:false},
    end_date:{type:String, require:false},
    duration:{type:String, require:false},
    website:{type:String, require:false},
    perks:{type:String, require:false},
    venue:{type:String, require:false},
    working_hours:{type:String, require:false},
    company_linkedin:{type:String, require:false},
    job_offer:{type:Boolean, require : false},
    company_website:{type:String, require:false},
    perks:{type:String, require:false},
})

module.exports = mongoose.model('Posr', postSchema);