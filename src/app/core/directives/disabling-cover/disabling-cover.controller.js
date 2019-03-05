'use strict';

// import moment from 'moment';


export default class DisablingCoverController {
    constructor($rootScope) {
        'ngInject';
        this.internetAvailability = $rootScope.internetAvailability;
    }
}
