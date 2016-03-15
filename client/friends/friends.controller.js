(function() {
    'use strict';
    angular.module('closeness')


        .controller('friendCtrl', friendCtrl);

    function friendCtrl(geoLocation, socialSharing, $scope,$state,$ionicPopup,$rootScope,$stateParams) {
        var self=this;
        console.log($stateParams.token);
      
//        geoLocation.getLocation().then((data) => {
//            // Intilize Location data Of User over Server
//        }, (data) => {
//            toastNotification.toast('Error getting Location');
//        });

       var contactlist=[];
        $scope.user={
                     mobile_no:''
                   };
                   
           
           self.popup=()=>{
         var myPopup = $ionicPopup.show({
        template: '<div class="mypop"><div class="mylogo"><img class="mimsize" src="assets/img/homlogo.png">' +
                '</div></div><div class="popupctt"><div class="txt">Enter Your Mobile No</div><input type="text" class="textb" ng-model="user.mobile_no"></div>',
                title: '',
                subTitle: '',
                scope: $scope,
                buttons: [
                {text: 'Submit',
                        type: 'button-positive',
                        onTap: function(e) {
                            console.log($scope.user.mobile_no);
                        self.myPop();
                        myPopup.close();
                        }
                }
                ]
        });  
    }
         self.myPop =()=> { 
            var mypopup= $ionicPopup.show({
        template: '<div class="mypop"><div class="mylogo"><img class="mimsize" src="assets/img/homlogo.png">' +
                '</div></div><div class="popupct">Please Allow for Contact<br>list !!!!</div>',
                title: '',
                subTitle: '',
                scope: $scope,
                buttons: [
                {text: 'Yes',
                        type: 'button-positive',
                        onTap: function(e) {

//             var contactlist=[];
//          navigator.contacts.find(
//                [navigator.contacts.fieldType.displayName],
//                gotContacts,
//                errorHandler);
//        function errorHandler(e) {
//        console.log("errorHandler: " + e);
//        }
//
//function gotContacts(c) {
//console.log("gotContacts, number of results " + c.length);
//        for (var i = 0, len = c.length; i < len; i++) {
//         
//          if(c[i].phoneNumbers){
//            contactlist.push(c[i]);
//          }       
// }
// var numbers=[];
// console.log(contactlist.length)
//                for (var i = 0; i < contactlist.length; i++) {
//                numbers.push(contactlist[i].phoneNumbers[0].value);
//            }
//            console.log(numbers);
var data={
    user_id:Meteor.userId(),
    user_contactNo:$scope.user.mobile_no,
    user_contactList:contactlist,
    user_phoneno:['9910160860','9711492053']
}
console.log(data);
         Meteor.call('contacts', data,(err)=> {
                        if (err) {
//                         toastNotification.toast(err.reason);  
                           console.log(err);
                        } else {
                           console.log('hmm')
                        }
                    });
//} 
                        }
                },
                {
                text: '<b>No</b>',
                        onTap: function(e) {

                        mypopup.close();
                        }
                }
                ]
        });  
    }
             if($stateParams.token){
            self.popup();
        } 
         Meteor.call('friendlist', (err, data) => {
            $rootScope.friendsList = data;
        });
         $scope.selected = null;
            
//        Meteor.call('sendEmail');
       
        $scope.invite = function() {
            socialSharing.socialSharePopup();
        };
        $scope.friendClick = function(index) {
            this.selected = index;
        };
        
        $scope.signout = () => {
            Meteor.logout();
            console.log(ionic.Platform.isAndroid());
            if(ionic.Platform.isAndroid()){
            facebookConnectPlugin.logout();
        };
            $state.go('login');
        };

self.popup();

    }
})();