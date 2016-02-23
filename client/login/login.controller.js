(function() {
    'use strict';
    angular.module('closeness')
        .controller('loginCtrl', loginCtrl);

    function loginCtrl(facebookLogin, $state) {
        $scope.fbLogin = function() {
            console.log('start fb login');
            facebookLogin.login().then(function(data) {
                console.log(data);
                $state.go('friends');
            }, function(data) {
                console.log(data);
            });
        }
    }
})();