(function() {
    'use strict';
    angular.module('closeness')
        .factory('geoLocation', geoLocation);

    function geoLocation(friendService, toastNotification) {
        let service = {};
        service.getLocation = () => {
            let def = $q.defer();
            navigator.geolocation.watchPosition(onSuccess, onError, {
                timeout: 50000,
                enableHighAccuracy: true
            });

            function onSuccess(position) {
                let geo_Data = {
                    'latitude': position.coords.latitude,
                    'longitude': position.coords.longitude
                }

                def.resolve(geo_Data);
            }

            function onError(error) {
                friendService.getLocation().then((data) => {
                    def.resolve(data);
                }, (data) => {
                    def.reject(data);
                });
            }
        };

        return service;
    }
})();