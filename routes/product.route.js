const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/test',product_controller.test);
router.post('/create',product_controller.product_create);
router.get('/list', product_controller.product_list);
router.get('/detail/:id', product_controller.product_details);
router.put('/detail/:id/update', product_controller.product_update);
router.delete('/detail/:id/delete', product_controller.product_delete);

module.exports = router;

