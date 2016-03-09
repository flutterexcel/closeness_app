var facebookLoginService = angular.module('facebookLoginService', ['ngStorage']);

facebookLoginService.factory('facebookLogin', facebookLogin);

function facebookLogin($http, $q, $state, friendService, toastNotification) {
    return {
        login: function() {
            let def = $q.defer();
            var fbLoginSuccess = (response) => {
                if (!response.authResponse) {
                    fbLoginError("Cannot find the authResponse");
                    return;
                }

                let authResponse = response.authResponse;

                getFacebookProfileInfo(authResponse)
                    .then((profileInfo) => {
                        def.resolve(profileInfo);
                    }, (fail) => {
                        def.reject(profileInfo);
                    });
            };

            var fbLoginError = (error) => {
                console.log('fbLoginError', error);
            };
            var getFacebookProfileInfo = (authResponse) => {
                let info = $q.defer();

                facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
                    (response) => {
                        friendService.getFriends(response.id, authResponse.accessToken).then((data) => {
                            response.friends = data.data.data;
                            info.resolve(response);
                        }, (data) => {
                            toastNotification.toast('Unable to get Friend List!!');
                        });
                    },
                    (response) => {
                        info.reject(response);
                    }
                );
                return info.promise;
            };

            facebookConnectPlugin.getLoginStatus((success) => {
                if (success.status === 'connected') {
                    getFacebookProfileInfo(success.authResponse)
                        .then((profileInfo) => {
                            def.resolve(profileInfo);
                        }, (profileInfo) => {
                            def.reject(profileInfo);
                        });
                } else {
                    console.log('getLoginStatus', success.status);
                    facebookConnectPlugin.login(['email', 'public_profile', 'user_friends'], fbLoginSuccess, fbLoginError);
                }
            });
            return def.promise;
        },




    };
}