(function() {
    'use strict';
    angular.module('closeness')
        .controller('loginCtrl', loginCtrl);

    function loginCtrl(facebookLogin, toastNotification, $state, $rootScope,$timeout,$reactive,$scope) {
//         $reactive(this).attach($scope);
   Meteor.subscribe('contact');
   console.log(Contact.find().fetch());
   
   
        this.fbLogin = () => {
//      var data={
//          name:'sidd',
//          id:'siddfggasdfh',
//          email:'siddharthfdgdfhas@gmasd.com',
//          friends:['aw','be','ce','de','sdsd','asdasd']
//      }

            facebookLogin.login().then((data) => {
                 console.log(data);
                $rootScope.friendsList = data.friends;
                  Meteor.loginWithPassword(data.email, data.id, (err)=>{
                if (err) {
                 
                    Meteor.call('user_signup', data, (err)=> {
                        if (err) {
                            toastNotification.toast(err.reason);
                        } else {
                            Meteor.loginWithPassword(data.email, data.id, (err)=>{
                                $state.go('friends',{token:'first'});
                            })
                            
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

        