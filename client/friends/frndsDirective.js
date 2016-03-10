(function() {
    'use strict';
    angular.module('closeness')
            .directive('friendList', friendList);
    function friendList() {
      var friend={};
      friend.restrict='E';
      friend.scope={
          friendsList:'=list'
          
      };
      friend.templateUrl='client/friends/friendlistTemplate.html'
      friend.link=function(scope,element,attr){
       
      };
      friend.transclude=true;
      return friend;
    }
   
})();