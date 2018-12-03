var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var config = require('../config/config');
var mongoose = require('mongoose');

var User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) =>{
    User.findById(id).then(user => {
        done(null, user)
    })
});

passport.use(
    new GoogleStrategy({
            clientID : config.client_id,
            clientSecret : config.client_secret,
            callbackURL :"/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId: profile.id}).then((currentUser) =>{
                if(currentUser){
                    console.log('user is:', currentUser);
                    done(null, currentUser)
                }else{
                    new User({
                        username: profile.displayName,
                        googleId : profile.id})
                        .save()
                        .then(user => done(null, user))
                }
            })
        })
);