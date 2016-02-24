(function() {
    'use strict';
    angular.module('closeness')
        .controller('loginCtrl', loginCtrl);

    function loginCtrl(facebookLogin, $state) {
        this.fbLogin = function() {
            facebookLogin.login().then(function(data) {
                window.plugins.toast.showShortBottom('Successfully Logged In');
                $state.go('friends');
            }, function(data) {
                window.plugins.toast.showShortBottom('Error occur during login!!');
            });
        }
    }
})();