(function() {
    'use strict';
    angular.module('closeness')
        .factory('toastNotification', toastNotification);

    function toastNotification() {
        let service = {};
        service.toast = (message) => {
            if (window.plugins && window.cordova) {
                window.plugins.toast.showShortBottom(message);
            } else {
                console.log("plugin is not available!!");
            }
        };
        return service;
    }
})();