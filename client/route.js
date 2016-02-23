angular.module('closeness').config(function($urlRouterProvider, $stateProvider, $locationProvider) {


    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'client/login/login.html',
            controller: 'loginCtrl',
            controllerAs: 'login'
        })
        .state('friends', {
            url: '/friends',
            templateUrl: 'client/friends/friends.html',
            controller: 'friendCtrl',
            controllerAs: 'friends'
        });

    $urlRouterProvider.otherwise("/login");
});