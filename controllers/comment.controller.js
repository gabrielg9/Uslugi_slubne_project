const Comment = require('../models/Comment');


exports.comment_create = function (req, res,next) {
    let comment = new Comment(
        {
            userId : req.params.id,
            postedDate : req.params.postedDate,
            body: req.params.body
        }
    );

    comment.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Comment Created successfully')
    })
};

exports.comment_read = function (req, res,next) {
    Comment.find({postedDate : req.params.postedDate}, function (err, comment) {
        if (err) return next(err);
        res.send(comment);
    })
};

exports.comment_update = function (req, res,next) {
    Comment.update({postedDate : req.params.postedDate},{body: req.params.body}, function (err, comment) {
        if (err) return next(err);
        res.send('Comment udpated.');
    });
};

exports.comment_delete = function (req, res,next) {
    Comment.deleteOne({postedDate: req.params.postedDate}, function (err,comment) {
        if (err) return next(err);
        res.send('Comment deleted successfully!');
    })
};

exports.comment_readAll = function (req, res,next) {
    Comment.find({userId: req.params.id}, function (err, comment) {
        if (err) return next(err);
        res.send(comment);
    })
};