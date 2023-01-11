const offersStore = require('./offersstore.json')
const offersCategory = require('./offerscategory.json')
const findCategories = require('./findcategories.json')
const findStores = require('./findstores.json')

module.exports = () => ({
    offersStore,
    offersCategory,
    findCategories,
    findStores
})