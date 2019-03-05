/*global NODE_ENV*/
'use strict';

function config($logProvider, $compileProvider, currencyServiceProvider) {
	'ngInject';

    $logProvider.debugEnabled(true);

    if (NODE_ENV === 'production') {
        $logProvider.debugEnabled(false);
        $compileProvider.debugInfoEnabled(false);
    }


    currencyServiceProvider.setAPI('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
  
}

export default config;
