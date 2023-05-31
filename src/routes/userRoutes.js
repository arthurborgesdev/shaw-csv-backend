const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const userController = require('../controllers/userController');

router.post('/api/files', upload.single('csv-file'), userController.createUser);

module.exports = router;