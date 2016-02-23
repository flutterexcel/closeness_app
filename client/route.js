
angular.module('closeness').config(function($urlRouterProvider, $stateProvider, $locationProvider) {


    $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'client/login/login.html',
                controller: 'loginCtrl'
            });

    $urlRouterProvider.otherwise("/login");
});