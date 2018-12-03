var config = require('../config/config');
var cookieSession = require('cookie-session');
var passport = require('passport');

module.exports = app => {
    app.use(
        cookieSession({
            maxAge: 30 * 24 * 60 * 60 * 1000,
            keys: [config.cookieSession]
        })
    );

    app.use(cookieSession({ secret: 'anything' }));
    app.use(passport.initialize());
    app.use(passport.session());
};