(function() {
    'use strict';
    angular.module('closeness')
        .factory('friendService', friendService);

    function friendService($http, $q, locationApi) {
        let service = {};
        service.getFriends = (FB_Social_Id, FB_acessToken) => {
            let def = $q.defer();
            let api = $http.get('https:graph.facebook.com/' + FB_Social_Id + '/friends?limit=10000&access_token=' + FB_acessToken);
            api.then((data) => {
                def.resolve(data);
            }, (data) => {
                def.reject(data);
            });
            return def.promise;
        };
        service.getLocation = () => {
            let def = $q.defer();
            let api = $http.post(locationApi.url);
            api.then((data) => {
                def.resolve(data);
            }, (data) => {
                def.reject(data);
            });
            return def.promise;
        };
        return service;
    }
})();