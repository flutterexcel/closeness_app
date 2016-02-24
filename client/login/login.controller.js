(function() {
    'use strict';
    angular.module('closeness')
        .controller('loginCtrl', loginCtrl);

    function loginCtrl(facebookLogin,toastNotification, $state,$scope) {
        this.fbLogin = function() {
            facebookLogin.login().then(function(data) {
                toastNotification.toast('Successfully Logged In');
                $scope.friendsList=data.friends;
                $state.go('friends');
            }, function(data) {
                toastNotification.toast('Error occured while Logging In !!');                
            });
        }
    }
})();