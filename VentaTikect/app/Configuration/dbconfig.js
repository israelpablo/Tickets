const config = {
    user: 'ticket',
    password: '123$jkl',
    server: 'EC2AMAZ-4I1QTEA\\CONEXIONDB', 
    database: 'AlterTicket',
    port: parseInt("1433"),
    options: {
          "enableArithAbort": true
        },
        encrypt: false
};
module.exports = config;