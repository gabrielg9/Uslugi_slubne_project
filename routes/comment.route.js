const express = require('express');
const router = express.Router();
const comment_controller = require('../controllers/comment.controller');


router.post('/create/userId/:id/postedDate/:postedDate/body/:body', comment_controller.comment_create)

router.get('/read/:postedDate', comment_controller.comment_read)

router.put('/update/:postedDate/body/:body', comment_controller.comment_update)

router.delete('/delete/postedDate/:postedDate', comment_controller.comment_delete)

router.get('/readAll/userId/:id', comment_controller.comment_readAll)

module.exports = router;