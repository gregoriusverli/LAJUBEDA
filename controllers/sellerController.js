const {User} = require('../models')
const multer = require('multer')
const fs = require('fs')

class sellerController {
    static dashboard(req, res){
        const sellerId = req.params.id

        User.findByPk(sellerId)
         .then(data =>{
            //  res.send(data)
             res.render('pages/seller/dashboardSeller', {data})
         })

         .catch(err =>{
             console.log(err);
         })

    }

    static uploadItemGet(req, res){
        res.render('pages/seller/uploadPage')
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
                wight: req.body.itemWeight,
                quantity: req.body.itemQuantity,
                picture : imgPath,
                description : req.body.itemQuantity.desc
            }

            Seller.create({payload},{
                where :{
                    id : sellerId
                }
            })

            .then(data =>{
                res.redirect('/seller')
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