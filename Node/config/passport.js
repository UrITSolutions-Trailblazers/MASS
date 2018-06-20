const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const {
    User
} = require('../app/model/app.model.googleUser');
const authConfig = require('./auth');

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        console.log('User serialized');
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        console.log('User deserialized');
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(new GoogleStrategy({

            clientID: authConfig.googleAuth.clientID,
            clientSecret: authConfig.googleAuth.clientSecret,
            callbackURL: authConfig.googleAuth.callbackURL,

        },
        function (token, refreshToken, profile, done) {

            console.log('Profile --> ');
            console.log(profile);

            // make the code asynchronous
            // User.findOne won't fire until we have all our data back from Google
            process.nextTick(() => {
                console.log('Finding Google user form DB');
                // try to find the user based on their google id
                User.findOne({
                    'google.id': profile.id
                }, (err, user) => {
                    console.log('DB process complete.');
                    console.log(err);
                    console.log(user);
                    if (err) {
                        console.log(err);
                        return done(err);
                    }
                    if (user) {
                        console.log('Google user found.');
                        console.log(user);
                        // if a user is found, log them in
                        return done(null, user);
                    } else {
                        // if the user isnt in our database, create a new user
                        var newUser = new User();
                        console.log('Google user not found in DB. Creating User.')
                        // set all of the relevant information
                        newUser.google.id = profile.id;
                        newUser.google.token = token;
                        newUser.google.name = profile.displayName;
                        newUser.google.email = profile.emails[0].value; // pull the first email

                        console.log(newUser);
                        // save the user
                        newUser.save(function (err) {
                            if (err) {
                                console.log(err);
                                throw err;
                            }
                            console.log('SUCCESS');
                            return done(null, newUser);
                        });
                    }
                });
            });

        }));

}