'use strict';

export default function (app) {
    app
        .constant('ROUTE_ERRORS', {
            auth: 'Authorization has been denied.',
        })
        
        .constant('commissions', {
                '0%': 0,
                '1%': 1,
                '2%': 2,
                '3%': 3,
                '4%': 4,
                '5%': 5,
        })

        .constant('currencies', {
                UAH: {
                ccy: 'UAH', base_ccy: 'UAH', buy: 1, sale: 1,
                },
        })

        .constant('deal', {
                ccyToExchange: {
                  name: null,
                  sum: null,
                },
                ccyToReceipt: {
                  name: null,
                  sum: null,
                },
                crossRate: 1,
                commission: 0,
                active: null,
        });
}
