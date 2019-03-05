'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';

import disablingCoverDirective from './directives/disabling-cover/disabling-cover.directive';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import storeCurrencyConverterService from './services/currency-converter.provider';
import resolverProvider from './services/resolver.provider';

validationTestDirective(shared);
disablingCoverDirective(shared);

constants(shared);
storeFactory(shared);
storeCurrencyConverterService(shared);
resolverProvider(shared);

export default shared;
