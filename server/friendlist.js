// method for getting friend list 
Meteor.methods({
    friendlist: function() {
        console.log('this function is for friend list');
         
         return Meteor.user().profile.friends;
    }
});

//Meteor.startup(function(){
//	process.env.MAIL_URL = 'smtp://siddharth@excellencetechnologies.in:siddharth@123@smtp.gmail.com:587/'
//});
//
//// In your server code: define a method that the client can call
//Meteor.methods({
//  sendEmail: function (to, from, subject, text) {
////    check([to, from, subject, text], [String]);
//
//
//    this.unblock();
//
//    //actual email sending method
//    Email.send({
//      to: 'siddharthsrvstv2@gmail.com',
//      from: 'siddharth@excellencetechnologies.in',
//      subject: 'email testing',
//      text: 'hello'
//    });
//  }
//});