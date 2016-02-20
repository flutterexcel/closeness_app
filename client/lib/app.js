if (Meteor.isClient) {
    angular.module('closeness', ['angular-meteor', 'ui.router','ionic', 'facebookLoginService'])
            .run(function($ionicPlatform,$state) {
                console.log('run');
            });
}