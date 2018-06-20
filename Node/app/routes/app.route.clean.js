const express = require('express');
const router = express.Router();

const {
    User
} = require('../model/app.model.user');

router.get('/user', async (req, res) => {
    User.remove({}, (err) => {

        if (err) return res.status(500).send(err);

        console.log('Clean success.');
        res.send('SUCCESS');
    });
});

module.exports = router;