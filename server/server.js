//user Sign Up
Meteor.methods({
            user_signup: function(data) {
                Accounts.validateNewUser(function(data) {
                        if (user.email && user.name) {
                            Accounts.createUser({
                                email: data.email,
                                password: data.id,
                                profile: {
                                    social_id: data.id,
                                    social_type: data.social_type,
                                    name: data.name,
                                    picture: data.pic,
                                    friends: data.friends,
                                    geo: data.geo,
                                    geo_update_time: data.geo_update_time,
                                    created_at: Date.now()
                                }
                            });
                        } else {
                            throw new Meteor.Error(403, "User Email and Name are required");
                        }

                    });
                  }
                });

            //update user location and friendlist
            Meteor.methods({
                friend_update: function(data) {
                    if (!data.friends) {
                        data.friends = [];
                    }
                    if (!data.geos) {
                        data.geos = [];
                    }
                    Meteor.users.update(Meteor.user()._id, {
                        $set: {
                            'profile.friends': data.friends,
                            'profile.geo': data.geos
                        }
                    });
                }
            });


            //logout for single user 
            Meteor.method({
                user_logout: function() {
                    var userLoggedIn = Meteor.users.findOne({
                        _id: userId
                    });
                    if (userLoggedIn) {

                        Meteor.users.update({
                            _id: userId
                        }, {
                            $set: {
                                "services.resume.loginTokens": []
                            }
                        });
                    }
                }
            });