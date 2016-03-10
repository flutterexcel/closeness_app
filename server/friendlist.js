// method for getting friend list 
Meteor.methods({
    friendlist: function() {
        console.log('this function is for friend list');
         var data=Meteor.user().profile.friends;
         return data;
    }
});

