'use strict';

function runBlock($log, $rootScope, $window) {
	'ngInject';

	$log.debug('Hello from run block!');

	// checking internet connection

	$rootScope.internetAvailability = {};
	$rootScope.internetAvailability.value = navigator.onLine;

	$window.addEventListener('offline', () => {
		$rootScope.$apply(() => {
			$rootScope.internetAvailability.value = false;
		});
	}, false);

	$window.addEventListener('online', () => {
		$rootScope.$apply(() => {
			$rootScope.internetAvailability.value = true;
		});
	}, false);
}
export default runBlock;
