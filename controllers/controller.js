class Controller {
    static home(req, res){
        res.render('pages/home')
    }

    static about(req, res){
        res.render('pages/about')
    }

}

module.exports = Controller