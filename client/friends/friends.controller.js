(function() {
    'use strict';
    angular.module('closeness')
            .controller('friendCtrl', friendCtrl);
    function friendCtrl(friendService, socialSharing, $scope,$rootScope,$state) {
        $scope.selected = null;
            
//        Meteor.call('sendEmail');
        Meteor.call('friendlist', (err, data) => {
            $rootScope.friendsList = data;
        });
        $scope.invite = function() {
            socialSharing.socialSharePopup();
        };
        $scope.friendClick = function(index) {
            this.selected = index;
        };
        
        $scope.signout = () => {
            Meteor.logout();
            facebookConnectPlugin.logout(function() {
                   console.log('logout');
               });
            $state.go('login');
        }
    }
})();