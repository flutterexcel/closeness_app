
angular.module('closeness').config(function($urlRouterProvider, $stateProvider, $locationProvider) {


    $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'client/login/login.html',
                controller: 'loginCtrl'
            }).state('menu', {
                url: '/menu',
                templateUrl: 'client/menu/menu.html',
                controller: 'menuCtrl'
            });

    $urlRouterProvider.otherwise("/login");
});