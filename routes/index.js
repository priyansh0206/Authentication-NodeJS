const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');
const passport = require('passport');

router.get('/', controller.homePage);
router.get('/login', controller.login);
router.get('/dashboard', controller.dashboard);
router.get('/verify-email', controller.verifyEmail);
router.post('/create-user', controller.createUser);
router.get('/verify/:token', controller.verifyUser);
router.post('/create-session', passport.authenticate('local', {failureRedirect: '/login'}), controller.createSession);
router.get('/delete-session', controller.deleteSession);
router.post('/resend-verification', controller.resendVerification);

router.get('*', controller.default);
router.post('*', controller.default);

module.exports = router;