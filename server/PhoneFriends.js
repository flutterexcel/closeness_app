// method for creating friends through contact list 
Meteor.publish("contact", function() {
    console.log(Contact.find().fetch());

});

Meteor.methods({
    contacts: function(data) {
        var numbers = [];
        console.log('hello');
        if (Contact.find().fetch() == '') {
            console.log('blank');
            Contact.insert({
                user_id: data.user_id,
                user_contact: data.user_contactNo,
                friend_list: []
            });
        }
        else {
           console.log(data.user_phoneno);
            cosole.log(Contact.find({user_contact: {$in: data.user_phoneno}}));
        }

    }
});

