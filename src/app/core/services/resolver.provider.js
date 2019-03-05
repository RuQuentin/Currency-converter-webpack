'use strict';

export default function (app) {
    app.provider('resolver', resolverProvider);

    function resolverProvider () {
        this.asyncPagePrealoading = asyncPagePrealoading;
        this.ccyConverterPrealoading = ccyConverterPrealoading;
        this.ccyConverterPriceUpdater = ccyConverterPriceUpdater;
        this.$get = function() { return this; };
    }

    
        function asyncPagePrealoading ($q, $ocLazyLoad) {
            "ngInject";

            const deferred = $q.defer();
            require.ensure([], require => {
                const asyncModule = require('../../pages/async-page-example/async.module');
                $ocLazyLoad.load({
                    name: asyncModule.default.name,
                });
                deferred.resolve(asyncModule.default.controller);
            });
            return deferred.promise;
        }

    
        function ccyConverterPrealoading ($q, $ocLazyLoad) {
            "ngInject";

            const deferred = $q.defer();
            require.ensure([], require => {
                const ccyConverterModule = require('../../pages/ccy-converter/ccy-converter.module');
                $ocLazyLoad.load({
                    name: ccyConverterModule.default.name,
                });
                deferred.resolve(ccyConverterModule.default.controller);
            });
            return deferred.promise;
        }

    
        function ccyConverterPriceUpdater (currencyService) {
            "ngInject";

            return currencyService.updatePrices();
        }
    

}
