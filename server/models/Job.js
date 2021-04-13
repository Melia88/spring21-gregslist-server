import  mongoose  from "mongoose";

const Schema = mongoose.Schema;

const Job = new Schema({
  company: {type: String, minLength: 2, required: true},
  description: {type: String, maxLength:25, required: true},
  jobTitle: {type: String, required: true},
  hours: {type: Number},
  rate: {type: Number}
},
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job;

// company, description, jobTitle, hours, rate