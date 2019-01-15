var Product = require('../models/product');
const getView = require('get-view');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {
    var product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            type: req.body.type
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res) {
            Product.findById(req.params.id, function (err, product) {
                if (err) return next(err);
                res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product updated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.findAll = function(req, res, next){
   const sort_by = {};
    sort_by[req.query.sort_by || 'price'] = req.query.order_by || 'desc';
    Product.find(req.filters)
        .sort(sort_by)
        //.exec()
        .then(results => res.status(200).json({
            count: results.length,
            products: results,
        }))
        .catch(next)

};

exports.product_show_all = function (req, res,next) {
        Product.find({}, function (err, product) {
            if (err) return next(err);
            res.send(product);
        })
};

exports.product_search_name = function (req, res,next) {
    Product.find({name : req.params.name}, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_search_type = function (req, res,next) {
    Product.find({type : req.params.type}, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};