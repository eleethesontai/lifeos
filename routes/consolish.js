const express = require('express');
const router = express.Router();
const uuid = require("uuid")
const localhost = require("../localhost")

router.get('/', (request, response) => {
    response.render('consolish', {session: session})
}) 
router.get('/reset', (request, response) => {
    session.posts = []
    response.render('consolish', {session: session})
}) 
router.post('/submit', (request, response) => {
    post = {id: uuid.v4(), prompt: request.body.prompt}
    session.posts.push(post)
    response.render('consolish', {session: session})
})

module.exports = router;