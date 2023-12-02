module.exports.homePage = function(req, res){
    return res.render('homepage', {
        title: 'Homepage'
    });
}

module.exports.login = function(req, res){
    return res.render('login', {
        title: 'Loginpage'
    });
}

module.exports.dashboard = function(req, res){
    return res.render('dashboard', {
        title: 'Dashboard'
    });
}