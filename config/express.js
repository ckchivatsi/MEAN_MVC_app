var config = require('./config'),
    express = require('express'),
    passport = require('passport'),
    flash = require ('connect-flash'),
    session = require('express-session');
    bodyParser = require('body-parser');

module.exports = function() {
    var app = express();

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: 'OurSuperSecretCookieSecret'
    }));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};

