const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.post('/login', adminController.login);
router.post('/changePass', adminController.changePassword);

module.exports = router;