const express = require('express')

const {
    getResumes,
    getUserResumes,
    createResume,
    deleteResume,
} = require('../controllers/resumes.js');

const router = express.Router();
const auth = require ("../middleware/auth.js")

router.get('/', getResumes);
router.get('/resumemessage/:creator', getUserResumes);
router.post('/', auth,  createResume);
router.delete('/:id', auth, deleteResume);

module.exports = router