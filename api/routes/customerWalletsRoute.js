    module.exports = app => {
        const controller = require('../controllers/customer-wallers')();

        app.route('/api/v1/customer-wallets').get(controller.listaCustomerWallets);
    
        return app
    }