module.exports = () => {
    const customerWalletsDB = require('../data/customerWallets.json');
    const customerWallets = {};

    controller.listaCustomerWallets = (req, res) => res.status(200).json(customerWalletsDB);
    
    return controller
}