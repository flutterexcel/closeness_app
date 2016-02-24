(function() {
    'use strict';
    angular.module('closeness')
        .factory('socialSharing', socialSharing);

    function socialSharing() {
        let service = {};
        service.socialSharePopup = () => {
            if (window.plugins && window.cordova) {
                window.plugins.socialsharing.share('Message only');
            } else {
                console.log("plugin is not available!!");
            }
        };
        return service;
    }
})();