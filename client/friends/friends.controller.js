(function() {
    'use strict';
    angular.module('closeness')
        .controller('friendCtrl', friendCtrl);

    function friendCtrl(friendService,socialSharing,$scope) {
        var FB_Social_Id =Session.get('FB_social_id');
        var FB_acessToken=Session.get('FB_accessToken');
        friendService.getFriends(FB_Social_Id, FB_acessToken).then(function(data) {
            $scope.friendsList = data.data.data;
        }, function(data) {
            window.plugins.toast.showShortBottom('Unable to get Friend List!!');
        });
        $scope.selected = null;
        $scope.friendClick = function(index) {
            this.selected = index;
        }
        $scope.invite = function() {
            socialSharing.socialSharePopup();
        }
    }
})();