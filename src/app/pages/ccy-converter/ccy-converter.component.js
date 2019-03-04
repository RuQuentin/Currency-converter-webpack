'use strict';

import ccyConverterController from './ccy-converter.controller';
import ccyConverterTpl from './ccy-converter.html';

export default class CcyConverterComponent {
    constructor() {
        this.controller = ccyConverterController;
        this.controllerAs = "cc";
        this.templateUrl = ccyConverterTpl;
    }
}