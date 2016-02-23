(function() {
    'use strict';
    angular.module('closeness')
        .controller('friendCtrl', friendCtrl);

    function friendCtrl(facebookFriend) {
        console.log('Friends invite Controller');
        facebookFriend.getFriends().then(function(data) {
            this.friendsList = data.data.data;
        }, function(data) {
            console.log('Unable to Get Friend List');
        });
        this.selected = null;
        this.friendClick = function(index) {
            this.selected = index;
        }
        this.invite = function() {
            window.plugins.socialsharing.share('Message only');
        }
    }
})();