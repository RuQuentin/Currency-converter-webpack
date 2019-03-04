'use strict';

// import moment from 'moment';


export default class CcyConverterController {
    constructor($scope, commissions, currencies, currencyService, deal) {
        'ngInject';
        this.currencies = currencies;
        this.commissions = commissions;
        this.deal = deal;
        this.swapCurrencies = currencyService.swapCurrencies;
        this.setActiveCurrency = currencyService.setActiveCurrency;

        $scope.$watchGroup([
            () => deal.ccyToExchange.name,
            () => deal.ccyToReceipt.name,
        ],
        () => {
        currencyService.calcRate();
        currencyService.updateSums();
        });
      
        $scope.$watchGroup([
            () => deal.ccyToExchange.sum,
            () => deal.ccyToReceipt.sum,
            () => deal.commission,
        ],
        currencyService.updateSums);
    }
}
