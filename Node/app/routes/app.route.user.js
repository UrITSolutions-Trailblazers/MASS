const express = require('express');
const router = express.Router();
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {User} = require('../model/app.model.user');

router.post('/login', async (req, res) => {
    console.log('Login handler found.');

    var credentials = _.pick(req.body, ['email', 'password']);

    await User.findOne({
        email: credentials.email
    }, async (err, val) => {

        if (err) return res.status(404).send({
            message: 'Opps wrong credentials or you have not registered with us.'
        });

        let result = await bcrypt.compare(credentials.password, val.password);
        if (!result) return res.status(402).send({
            message: 'Opps wrong credentials.'
        });

        const token = jwt.sign({
            "firstName": val.firstName,
            "email": val.email
        },'idontknow');

        return res.header('x-auth-token',token).send(val);
    })

});

router.post('/register', async (req, res) => {
    console.log('Register handler found.');
    var user = new User(_.pick(req.body, ['firstName', 'lastName', 'email', 'password', 'phone']));

    user.password = await bcrypt.hash(user.password, 10);

    await user.validate(async (err) => {
        if (err) return res.status(400).send(err.errors);

        let result = await User.create(user);

        res.send(result);
    });

});

module.exports = router;