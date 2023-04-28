const express = require('express');
const router = express.Router()
const authenticationMiddleware = require('../middleware/auth')
const {
    signIn,
    dashboard
} = require('../controllers/main');

router.route('/login').post(signIn)

router.route('/dashboard').get(authenticationMiddleware,dashboard)

module.exports = router;