const { Op } = require('sequelize')
const { User, Item, Transaction } = require('../models/index')
const formatToRupiah = require('../helper/formatPricing')

class customerController {
    static getItems(req, res) {
        
        Item.findAll({
            order: [['id']],
            where: {
                quantity: {
                    [Op.gt]: 0
                }
            }
        })
            .then((data) => {
                res.render('pages/customer/dashboardCustomer', {data, formatToRupiah})
            })
            .catch((err) => {
                console.log(err);
                res.send(err)
            })
    }

    static getCheckOutItem(req, res) {
        const id = req.params.id
        Item.findAll({
            where: {id}
        })
            .then((data) => {
                res.render('pages/customer/checkout', {data, formatToRupiah})
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static getBuyCheckOutItem(req, res) {
        const id = req.params.id
        Item.decrement('quantity', {
            where: {
                id,
                quantity: {
                    [Op.gt]: 0
                }
            }
        })
            .then(() => {
                res.redirect('/customer')
            })
            .catch((err) => {
                res.send(err)
            })
    }
    
}

module.exports = customerController