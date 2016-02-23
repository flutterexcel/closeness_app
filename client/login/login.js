(function() {
    'use strict';
    angular.module('closeness')
            .controller('loginCtrl', loginCtrl);

    function loginCtrl($scope, facebookLogin, fb_Data, $timeout) {
        console.log('Login Controller');
        $scope.fbLogin = function() {
            console.log('start fb login');
            facebookLogin.login().then(function(fbData) {
                fb_Data.login(fbData);
            }, function(data) {
                console.log(data);
            });
            $timeout(function() {
                Meteor.logout();
            }, 10000);

        };
    }
})();