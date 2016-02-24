(function() {
    'use strict';
    angular.module('closeness')
        .factory('socialSharing', socialSharing);

    function socialSharing() {
        var service = {};
        service.socialSharePopup = function() {
        if(window.plugins && window.cordova)
        {
            window.plugins.socialsharing.share('Message only');
        }
        else
        {
            console.log("plugin is not available!!");
        }
        };
    return service;
    }
})();