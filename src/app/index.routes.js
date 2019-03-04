'use strict';


import asyncTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/async-page-example/async.html';

import ccyConverterTpl from '!!file-loader?name=templates/[name].[ext]!./pages/ccy-converter/ccy-converter.html';


function routeConfig($urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject';


    $stateProvider
        .state('async', {
          url: '/async',
          templateUrl: asyncTemplate,
          controller: 'asyncController',
          resolve: {
            asyncPreloading: resolverProvider.asyncPagePrealoading
          }
        })


        .state('ccy-converter', {
          url: '/ccy-converter',
          templateUrl: ccyConverterTpl,
          controller: 'ccyConverterController',
          controllerAs: 'cc',
          resolve: {
            asyncPreloading: resolverProvider.ccyConverterPrealoading
          }
        });


  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

