const config = {
    user: 'ticket',
    password: '123$jkl',
    server: 'WST-TJIT-007', 
    database: 'AlterTicket',
    port: parseInt("1433"),
    options: {
          "enableArithAbort": true
        },
        encrypt: false
};
module.exports = config;