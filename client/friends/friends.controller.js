(function() {
    'use strict';
    angular.module('closeness')
        .controller('friendCtrl', friendCtrl);

    function friendCtrl(friendService, socialSharing, $scope) {
        $scope.selected = null;
        $scope.friendClick = (index) => {
            this.selected = index;
        }
        $scope.invite = () => {
            socialSharing.socialSharePopup();
        }
    }
})();