const config = {
    user: 'it_general',
    password: '123456',
    server: 'WST-TJIT-003', 
    database: 'Specific_Gravity_Test1',
    port: parseInt("1433"),
    options: {
          "enableArithAbort": true
        },
        encrypt: false
};
module.exports = config;