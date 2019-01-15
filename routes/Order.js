var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var order_controller = require('../controllers/Order');


router.post('/create', order_controller.order_create)


router.get('/orders', order_controller.get_orders)

router.get('/orderId', order_controller.get_order)

router.post('/update/:orderId', order_controller.order_update)

router.post('/delete/:orderId', order_controller.order_delete)

router.post('/aprove/:orderId', order_controller.order_approve)

router.post('/cancel/:orderId', order_controller.order_cancel)

router.post('/complete/:orderId', order_controller.order_complete)

router.post('/ready/:orderId', order_controller.order_ready)

module.exports = router;