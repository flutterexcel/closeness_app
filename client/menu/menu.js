(function() {
    'use strict';
    angular.module('closeness')
            .controller('menuCtrl', menuCtrl);

    function menuCtrl($scope) {
       console.log('menu controller');
    }
})();