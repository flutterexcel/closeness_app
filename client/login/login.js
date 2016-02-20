(function() {
    'use strict';
angular.module('closeness')
.controller('loginCtrl', loginCtrl);

function loginCtrl($scope, facebookLogin){
	console.log('Login Controller');
	$scope.fbLogin = function(){
		console.log('start fb login');

			facebookLogin.login().then(function(fbData){
                console.log(fbData);
            }, function(data) {
                console.log(data);
            });
	}
}
})();