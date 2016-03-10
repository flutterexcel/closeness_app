(function() {
    'use strict';
    angular.module('closeness')
        .controller('loginCtrl', loginCtrl);

    function loginCtrl(facebookLogin, toastNotification, $state, $rootScope,$timeout) {
        this.fbLogin = () => {
 
            facebookLogin.login().then((data) => {
                $rootScope.friendsList = data.friends;
                  Meteor.loginWithPassword(data.email, data.id, function(err) {
                if (err) {
                    console.log(err);
                    Meteor.call('user_signup', data, function(err) {
                        if (err) {
                            console.log('error');
                        } else {
                            console.log('success');
                            
                        }
                    });
                } else {
                    console.log('success');
                    Meteor.call('friend_update', data, function(err) {
                        if (err) {
                            console.log('update fail');
                        } else {
                            console.log(Meteor.users.find({}).fetch());
                            console.log('update');
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