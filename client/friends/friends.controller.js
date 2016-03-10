(function() {
    'use strict';
    angular.module('closeness')


        .controller('friendCtrl', friendCtrl);

    function friendCtrl(geoLocation, socialSharing, $scope,$state) {
        geoLocation.getLocation().then((data) => {
            // Intilize Location data Of User over Server
        }, (data) => {
            toastNotification.toast('Error getting Location');
        });

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
            facebookConnectPlugin.logout();
            $state.go('login');
        }
    }
})();