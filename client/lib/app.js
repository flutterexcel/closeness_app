if (Meteor.isClient) {
 window.fbAsyncInit = function() {
    FB.init({
      appId      : '1705896529656807',
      status     : true,
      xfbml      : true
    });
  }
    angular.module('closeness', ['angular-meteor', 'ui.router','ionic', 'facebookLoginService'])
            .run(function($ionicPlatform,$state) {
                console.log('run');
            });
}