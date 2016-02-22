(function() {
    'use strict';

    angular.module('closeness')
            .service('fb_Data', fb_data);

    function fb_data($state) {
        var self = this;

        self.signup = function(data) {
            console.log(data);
            Accounts.createUser({
                email: data.email,
                password: data.id,
                profile: {
                    social_id: data.id,
                    name: data.name,
                    picture: data.pic,
                    friends: [data.friend],
                    created_at: new Date()
                }
            }, function(error, result) {
                if (error) {
                    console.log(error);
                    if (error.reason == "Email already exists.") {
                        console.log('error');

                    }
                    //                    toastr.error(error.reason);
                    //                    alert();

                }
                else {
                    console.log(Meteor.users.find().fetch());
                    console.log('success');
                    $state.go('menu');
                }


            });
        };
        self.login = function(data) {
            console.log(data);
            Meteor.loginWithPassword(data.email, data.id, function(err) {
                if (err) {
                    console.log(err);
                    self.signup(data);
                } else {
                    console.log('success');
                    console.log(Meteor.users.find().fetch());
                    $state.go('menu');
                }
            });
        };
    }

})();