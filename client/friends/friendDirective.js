(function() {
    'use strict';
    angular.module('closeness')
            .directive('friend', friend);
    function friend() {
        var fsub = {};
        fsub.restrict = 'E';
        fsub.scope = {
            friends: '=sublist'
        };
        fsub.templateUrl = 'client/friends/friend.html'

        return fsub;
    }

})();