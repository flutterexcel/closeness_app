(function() {
    'use strict';
    angular.module('closeness')
            .directive('friendsubList', friendsubList);
    function friendsubList() {
        var fsub = {};
        fsub.restrict = 'E';
        fsub.scope = {
            friend: '=sublist'
        };
        fsub.templateUrl = 'client/friends/friendsubtemp.html'

        return fsub;
    }

})();