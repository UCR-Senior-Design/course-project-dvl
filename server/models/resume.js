const mongoose = require('mongoose')

const resumeSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var ResumeMessage = mongoose.model('ResumeMessage', resumeSchema);

module.exports = ResumeMessage;