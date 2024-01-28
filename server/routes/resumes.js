const express = require('express')

const getResumes = require ('../controllers/resumes.js')
const getResume = require ('../controllers/resumes.js')
const createResume = require ('../controllers/resumes.js')
const updateResume = require ('../controllers/resumes.js')
const deleteResume = require ('../controllers/resumes.js')

const router = express.Router();
const auth = require ("../middleware/auth.js")

router.get('/', getResumes);
router.post('/', auth,  createResume);
router.patch('/:id', auth, updateResume);
router.delete('/:id', auth, deleteResume);

module.exports = router