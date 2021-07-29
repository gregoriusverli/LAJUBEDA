const formatToRupiah = (price) => {
    return `Rp. ${price.toLocaleString('id')},-`
}

module.exports = formatToRupiah