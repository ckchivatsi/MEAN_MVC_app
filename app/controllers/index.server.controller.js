var User = require('mongoose').model('User'),
    passport = require('passport');

exports.render = function (req, res) {
    res.render('index', {
        title: 'MEAN MVC',
        user: req.user ? req.user.username : ''
    });
};