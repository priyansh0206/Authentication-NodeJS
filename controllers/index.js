module.exports.homePage = function(req, res){
    return res.render('homepage', {
        title: 'Homepage'
    });
}