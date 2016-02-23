Meteor.methods({
    user_signup: function(data) {
        Accounts.createUser({
            email: data.email,
            password:data.id,
              profile: {
                        social_id: data.id,
                        social_typr: data.social_type,
                        name: data.name,
                        picture: data.pic,
                        friends: data.friends,
                        geo: data.geo,
                        geo_update_time: data.geo_update_time,
                        created_at: new Date()
                    }
        });

    }

});
Meteor.methods({
    friend_update: function(data) {
        Meteor.users.update(Meteor.user()._id, {$set: {'profile.friends': data.friends,'profile.geo':data.geos}});
    }
});