var getFilters = require("../middlewares/products");

var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require('../controllers/product');

// a simple test url to check that all of our files are communicating correctly.
//router.get('/test', product_controller.test);

router.post('/create', product_controller.product_create)

router.get('/sort', getFilters, product_controller.findAll)

router.get('/:id', product_controller.product_details)

router.put('/:id/update', product_controller.product_update)

router.delete('/:id/delete', product_controller.product_delete)

router.get('/showAll', product_controller.product_show_all)

router.get('/search/name/:name', product_controller.product_search_name)

router.get('/search/type/:type', product_controller.product_search_type)

module.exports = router;