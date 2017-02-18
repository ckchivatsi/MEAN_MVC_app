exports.render = function(req, res) {
    res.render('index', {
    	title: 'MEAN MVC',
    	user: JSON.stringify(req.user)
    });
    console.log(JSON.stringify(req.user));
};