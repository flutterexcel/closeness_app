(function() {
    'use strict';
    angular.module('closeness')
        .factory('friendService', friendService);

    function friendService($http, $q) {
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
            let api = $http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDK9qQIhECy-RbUcmI7L7FP1hICn-yBt0k');
            api.then((data) => {
                def.resolve(data);
            }, (data) => {
                console.log(data);
                def.reject(data);
            });
            return def.promise;
        };
        return service;
    }
})();