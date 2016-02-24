(function() {
    'use strict';
    angular.module('closeness')
        .factory('friendService', friendService);

    function friendService($http, $q) {
        var service = {};
        service.getFriends = function(FB_Social_Id, FB_acessToken) {
        var def = $q.defer();
        var api = $http.get('https:graph.facebook.com/' + FB_Social_Id +'/friends?limit=10000&access_token=' + FB_acessToken)
        .then(function(data) {
            def.resolve(data);
        }, function(data) {
            def.reject(data);
        });
        return def.promise;
    };
    return service;
    }
})();