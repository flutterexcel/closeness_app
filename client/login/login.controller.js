(function() {
    'use strict';
    angular.module('closeness')
        .controller('loginCtrl', loginCtrl);

    function loginCtrl(facebookLogin, toastNotification, $state, $rootScope,$timeout) {
        this.fbLogin = () => {
     
            facebookLogin.login().then((data) => {
                $rootScope.friendsList = data.friends;
                  Meteor.loginWithPassword(data.email, data.id, (err)=>{
                if (err) {
                 
                    Meteor.call('user_signup', data, (err)=> {
                        if (err) {
                            toastNotification.toast(err.reason);
                        } else {
                            $state.go('friends');
                        }
                    });
                } else {
                    console.log('success');
                    Meteor.call('friend_update', data,(err)=> {
                        if (err) {
                         toastNotification.toast(err.reason);  
                        } else {
                           $state.go('friends');
                        }
                    });
                }
            });
            }, (data) => {
                toastNotification.toast('Error occured while Logging In !!');
            });

        }

    }
})();