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

    static getEditUploadedItem(req, res) {
        const id = req.params.id
        
        Item.findByPk(id)
            .then(data => {
                res.render('pages/seller/editUpload', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static postEditItem(req, res) {
        const id = req.params.id

        // const imgFileName = "images/" + req.files[0].filename
        
        console.log(req.body)
        
        const data = {
            itemName: req.body.itemName,
            price: req.body.itemPrice,
            weight: req.body.itemWeight,
            quantity: req.body.itemQuantity,
            // picture : imgFileName,
            description : req.body.desc,
            url: null,
        }

        Item.update(data, {
            where: {id}
        })
            .then((data) => {
                res.redirect(`/seller/${data[0]}`)
            })
            .catch((err) => {
                res.send(err)
            })

    }

    static getDeleteItem(req, res) {
        const id = Number(req.params.id)
        Item.destroy({
            where: {
                id
            },
            include: [User]
        })
            .then((data) => {
                res.redirect(`/seller/${data}`)
            })
            .catch(err => {
                res.send(err)
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
                var dir = "./public/images"
        
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
            const imgFileName = "images/" + req.files[0].filename
            const payload = {
                itemName: req.body.itemName,
                price: req.body.itemPrice,
                weight: req.body.itemWeight,
                quantity: req.body.itemQuantity,
                picture : imgFileName,
                description : req.body.desc,

                url: null,
                UserId: sellerId
            }

            Item.create(payload,{
                where :{
                    UserId : sellerId
                }
            })


            .then(data =>{
                res.redirect(`/seller/${sellerId}`)
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