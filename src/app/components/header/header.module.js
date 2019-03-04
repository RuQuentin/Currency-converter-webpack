'use strict';

import FooterComponent from './header.component';
import './header.scss';

const headerModule = angular.module('header-module', []);

headerModule
    .component('headerApp', new FooterComponent());

export default headerModule;
