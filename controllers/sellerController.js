class sellerController {
    static dashboard(req, res){
        res.render('pages/seller/dashboardSeller')
    }

    static uploadItem(req, res){
        res.render('pages/seller/uploadPage')
    }
    
}

module.exports = sellerController