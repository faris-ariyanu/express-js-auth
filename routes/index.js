const express = require('express');
const router = express.Router();
const jwt = require('../middlewares/jwt');
const LoginController = require('../controllers/auth/LoginController');
const ProfileController = require('../controllers/auth/ProfileController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// api router
router.post('/login', LoginController.index);
router.get('/me', jwt, ProfileController.index);

module.exports = router;