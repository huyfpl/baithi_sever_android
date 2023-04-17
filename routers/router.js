const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.home);
router.get('/add', controller.add_get);
router.post('/add', controller.add_post);
router.get('/edit/:id', controller.edit_get);
router.post('/edit', controller.edit_post);
router.get('/delete/:id', controller.delete_get);
router.get('/timkiem', controller.timkiem);
router.get('/sapxep', controller.sapxep);
module.exports = router;
