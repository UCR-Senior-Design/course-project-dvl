const express = require('express')

const {
    getResumes,
    getResume,
    createResume,
    updateResume,
    deleteResume
} = require('../controllers/resumes.js');

const router = express.Router();
const auth = require ("../middleware/auth.js")

router.get('/', getResumes);
router.post('/', auth,  createResume);
router.patch('/:id', auth, updateResume);
router.delete('/:id', auth, deleteResume);

module.exports = router