(function() {
    'use strict';
    angular.module('closeness')
        .controller('friendCtrl', friendCtrl);

    function friendCtrl(friendService,socialSharing,$scope) {
        $scope.selected = null;
        $scope.friendClick = function(index) {
            this.selected = index;
        }
        $scope.invite = function() {
            socialSharing.socialSharePopup();
        }
    }
})();