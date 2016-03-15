// method for creating friends through contact list 
Meteor.publish("contact", function() {
    console.log(Contact.find().fetch());

});

Meteor.methods({
    contacts: function(data) {
    
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
            console.log(Contact.find({user_contact: {$in: data.user_phoneno}}).fetch());
            var fri=Contact.find({user_contact: {$in: data.user_phoneno}}).fetch();
            var user=Contact.find({user_contact : "'"+data.user_contactNo+"'"}).fetch();
            console.log(user);
            Contact.insert({
                user_id: data.user_id,
                user_contact: data.user_contactNo,
                friend_list: fri
            },function(err){
                if(err){
                    console.log('error');
                }
                else{
                   console.log(Meteor.Contact().friend_list);
                }
            });
        }

    }
});

