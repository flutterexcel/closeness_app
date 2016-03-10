(function() {
    'use strict';
    angular.module('closeness')
            .controller('friendCtrl', friendCtrl);
    function friendCtrl(friendService, socialSharing, $scope) {
        $scope.selected = null;
        //       
//        Meteor.call('sendEmail');
        Meteor.call('friendlist', function(err, data) {
            console.log(data);
            console.log('friend list');
        });
        $scope.invite = function() {
            socialSharing.socialSharePopup();
        };
        $scope.friendClick = function(index) {
            this.selected = index;
        };
    }
})();