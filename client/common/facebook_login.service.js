var facebookLoginService = angular.module('facebookLoginService', ['ngStorage']);

facebookLoginService.factory('facebookLogin', facebookLogin);

function facebookLogin($http, $q, $state) {
    return {
        login: function() {
            var def = $q.defer();
            var fbLoginSuccess = function(response) {
                if (!response.authResponse) {
                    fbLoginError("Cannot find the authResponse");
                    return;
                }
                var authResponse = response.authResponse;

                getFacebookProfileInfo(authResponse)
                    .then(function(profileInfo) {
                        def.resolve(profileInfo);
                    }, function(fail) {
                        def.reject(profileInfo);
                    });
            };

            var fbLoginError = function(error) {
                console.log('fbLoginError', error);
            };
            var getFacebookProfileInfo = function(authResponse) {
                var info = $q.defer();

                facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
                    function(response) {
                        friendService.getFriends(response.id, authResponse.accessToken).then(function(data) {
                        response.friends= data.data.data;
                        }, function(data) {
                        window.plugins.toast.showShortBottom('Unable to get Friend List!!');
                        });
                        info.resolve(response);
                    },
                    function(response) {
                        info.reject(response);
                    }
                );
                return info.promise;
            };

            facebookConnectPlugin.getLoginStatus(function(success) {
                if (success.status === 'connected') {
                    console.log('getLoginStatus', success.status);
                        getFacebookProfileInfo(success.authResponse)
                            .then(function(profileInfo) {
                                def.resolve(profileInfo);
                            }, function(fail) {
                                def.reject(profileInfo);
                            });
                } else {
                    console.log('getLoginStatus', success.status);
                    facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
                }
            });
                return def.promise;
        },




    };
}   