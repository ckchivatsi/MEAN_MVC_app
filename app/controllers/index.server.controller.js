exports.render = function(req, res) {
    res.render('index', {
    	title: 'MEAN MVC',
    	user: req.user ? req.user.username : 'Guest'
    });
    console.log(req.user ? req.user.username: 'Guest');
};