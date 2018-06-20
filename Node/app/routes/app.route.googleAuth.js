const passport = require('passport');
const express = require('express');
const router = express.Router();
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require('../../config/passport')(passport);

router.use(session({
    secret: 'Yf3NTFMzFYQHjpD8Eb8WI4Dz',
    saveUninitialized: true,
    resave: true,
    // using store session on MongoDB using express-session + connect
    store: new MongoStore({
        url: 'mongodb://localhost:27017/mass',
        collection: 'sessions'
    })
}));


router.use(passport.initialize());
router.use(passport.session());

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/profile',
        failureRedirect: '/'
    })
);

router.get('/', function (req, res) {
    res.render('page.ejs'); // load the index.ejs file
});

router.get('/profile', isLoggedIn, function (req, res) {
    console.log('/profile');
    res.render('profile.ejs', {
        user: req.user // get the user out of session and pass to template
    });
});

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    console.log('isAuthenticated.');
    if (req.isAuthenticated())
        return next();

    console.log('NO');
    // if they aren't redirect them to the home page
    res.redirect('/');
}
module.exports = router;