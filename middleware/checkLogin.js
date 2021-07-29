function checkLogin(req, res, next){
    if(req.session.isLogin){
        next()
    } else {
        const error = 'Harap Login Dahulu!'
        res.render('error', {error})
    }
}

module.exports = checkLogin