'use strict';

import ccyConverterController from './ccy-converter.controller';
import './ccy-converter.scss';

const ccyConverterModule = angular.module('ccyConverterModule', []);

ccyConverterModule.controller('ccyConverterController', ccyConverterController);

export default ccyConverterModule;