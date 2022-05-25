const router = require('express').Router();

const customerController = require('../controllers/customerController');

/*
const ejsLint = require('ejs-lint');

ejsLint(customers.ejs, options); 
*/

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:IdMateria', customerController.edit);
router.post('/update/:IdMateria', customerController.update);
router.get('/delete/:IdMateria', customerController.delete);

module.exports = router;

