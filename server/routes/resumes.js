const express = require('express')

const {
    getResumes,
    getUserResumes,
    createResume,
} = require('../controllers/resumes.js');

const router = express.Router();
const auth = require ("../middleware/auth.js")

router.get('/', getResumes);
router.get('/resumemessage/:creator', getUserResumes);
router.post('/', auth,  createResume);

module.exports = router