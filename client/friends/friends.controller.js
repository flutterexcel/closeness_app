(function() {
    'use strict';
    angular.module('closeness')
        .controller('friendCtrl', friendCtrl);

    function friendCtrl(geoLocation, socialSharing, $scope) {
        geoLocation.getLocation().then((data) => {
            // Intilize Location data Of User over Server
        }, (data) => {
            toastNotification.toast('Error getting Location');
        });
        $scope.selected = null;
        $scope.friendClick = (index) => {
            this.selected = index;
        }
        $scope.invite = () => {
            socialSharing.socialSharePopup();
        }
    }
})();