(function() {
    'use strict';
    angular.module('closeness')
        .controller('loginCtrl', loginCtrl);

    function loginCtrl(facebookLogin, toastNotification, $state, $rootScope) {
        this.fbLogin = () => {
            facebookLogin.login().then((data) => {
                $rootScope.friendsList = data.friends;
                toastNotification.toast('Successfully Logged In');
                $state.go('friends');
            }, (data) => {
                toastNotification.toast('Error occured while Logging In !!');
            });

        }

    }
})();