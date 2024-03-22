const express = require('express')
const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')

const Resume = require('../models/resume.js')

const router = express.Router();

const getResumes = asyncHandler(async (req, res) => { 
    try {
        const resumes = await Resume.find();
                
        res.status(200).json(resumes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

const getUserResumes = asyncHandler(async (req, res) => { 
    const { creator } = req.params;

    try {
        const resume = await Resume.find({ creator: creator });
        
        res.status(200).json(resume);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

const createResume = asyncHandler(async (req, res) => {
    const resume = req.body;

    const newResume = new Resume({ ...resume, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newResume.save();

        res.status(201).json(newResume );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

const deleteResume = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No resume with id: ${id}`);

    await Resume.findByIdAndDelete(id);

    res.json({ message: "Resume deleted successfully." });
})

module.exports = {
    getResumes,
    getUserResumes,
    createResume,
    deleteResume,
};