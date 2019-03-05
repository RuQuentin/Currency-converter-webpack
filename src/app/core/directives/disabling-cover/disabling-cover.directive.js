'use strict';

import disablingCoverController from './disabling-cover.controller';


export default function (app) {

  app.directive('disablingCover', disablingCoverDirective);

  function disablingCoverDirective () {
    'ngInject';

    return {
      template: '<div class="cover" ng-hide="dc.internetAvailability.value">Waiting for Internet connection...</div>',
      controller: disablingCoverController,
      controllerAs: 'dc'
    }
  }
}