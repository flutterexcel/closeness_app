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
     
      friend.transclude=true;
      return friend;
    }
   
})();