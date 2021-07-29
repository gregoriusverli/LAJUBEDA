const { User, Item } = require('../models')
const multer = require('multer')
const fs = require('fs')
const formatToRupiah = require('../helper/formatPricing')

class sellerController {
    static dashboard(req, res){
        const sellerId = req.params.id

        User.findByPk(sellerId, {
            include: [Item],
            where: {
                UserId: sellerId
            }
        })
         .then(data =>{
             console.log(data)
             res.render('pages/seller/dashboardSeller', {data, formatToRupiah})
         })

         .catch(err =>{
             console.log(err);
         })

    }

    static uploadItemGet(req, res){
        const sellerId = req.params.id
        res.render('pages/seller/uploadPage', {sellerId})
    }

    static uploadItemPost(req, res){
        const sellerId = req.params.id

        var storage = multer.diskStorage({
            destination: function(req, file, cb){
                var dir = "./images"
        
                if(!fs.existsSync(dir)){
                    fs.mkdirSync(dir)
                }
                cb(null, dir)
            },
            filename: function (req, file, cb) {
                cb(null, sellerId+'-'+file.originalname)
            }
        });
        
        var upload = multer({storage:storage}).array('files', 1)

        upload(req, res, function(err) {
            if (err) {
                let error = ["shomething wrong"]
                return res.render('/error', {error})
            }
            const imgPath = req.files[0].path
            const imgFileName = req.files[0].filename
            const payload = {
                itemName: req.body.itemName,
                price: req.body.itemPrice,
                weight: req.body.itemWeight,
                quantity: req.body.itemQuantity,
                picture : imgPath,
                description : req.body.itemQuantity.desc,
                url: String(imgPath),
                UserId: sellerId
            }

            Item.create(payload,{
                where :{
                    UserId : sellerId
                }
            })

            .then(data =>{
                res.redirect(`/`)
            })

            .catch(err =>{
                let error = ["shomething wrong"]
                res.render('/error', {error})
            })

        })
    }
}
// req.files
// files:
// [ { fieldname: 'files',
//     originalname: 'java-wallpaper-10.jpg',
//     encoding: '7bit',
//     mimetype: 'image/jpeg',
//     destination: './images',
//     filename: 'java-wallpaper-10.jpg',
//     path: 'images/java-wallpaper-10.jpg',
//     size: 344559 } ] }

module.exports = sellerController