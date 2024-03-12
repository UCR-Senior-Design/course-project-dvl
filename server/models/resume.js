const mongoose = require('mongoose')

const resumeSchema = mongoose.Schema({
    resume: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var ResumeMessage = mongoose.model('ResumeMessage', resumeSchema);

module.exports = ResumeMessage;