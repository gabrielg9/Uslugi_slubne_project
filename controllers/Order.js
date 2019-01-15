var Order = require('../models/Order');


exports.order_create = function (req, res) {
        var order = new Order(
            {
            productId: req.body.productId,
            status: req.body.status,
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone
        });
        order.save(function (err){
            if (err) {
                return next(err);
            }
            res.send('Order Created successfully')
        })

    };

exports.get_order = function(req, res){
    Order.findById(req.params.orderId, function (err, order) {
        if (err) return next(err);
        res.send(order);
    })
};

exports.get_orders = function(req, res){
    Order.find({}, function (err, orders) {
        if (err) return next(err);
        res.send(orders);
    })
};

exports.order_update = function(req, res){
    Order.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, order) {
        if (err) return next(err);
        res.send('Order updated.');
    });
};

exports.order_delete = function(req, res){
    Order.remove({ _id: req.params.orderId }, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })

};

exports.order_approve = function(req, res){
    Order.findById(req.params.orderId, (err, order) => {
        if (err) {
            res.send(err);
        }
        order.status = 'APPROVED';
        Order.findOneAndUpdate({ _id: req.params.orderId }, order, { new: true }, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.send('Status: Approved!');
        });
    });
}

exports.order_cancel = function(req, res){
    Order.findById(req.params.orderId, (err, order) => {
        if (err) {
            res.send(err);
        }
        order.status = 'CANCEL';
        Order.findOneAndUpdate({ _id: req.params.orderId }, order, { new: true }, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.send('Status: Cancel!');
        });
    });
};

exports.order_complete = function(req, res){
    Order.findById(req.params.orderId, (err, order) => {
        if (err) {
            res.send(err);
        }
        order.status = 'COMPLETE';
        Order.findOneAndUpdate({ _id: req.params.orderId }, order, { new: true }, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.send('Status: Complete!');
        });
    });
};

exports.order_ready = function(req, res){
    Order.findById(req.params.orderId, (err, order) => {
        if (err) {
            res.send(err);
        }
        order.status = 'READY';
        Order.findOneAndUpdate({ _id: req.params.orderId }, order, { new: true }, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.send('Status: Ready!');
        });
    });
};