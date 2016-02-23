var facebookFriendService = angular.module('facebookFriendService', []);

facebookFriendService.factory('facebookFriend', facebookFriend);

function facebookFriend($http, $q) {
    var service = {};
    service.getFriends = function(FB_Social_Id, FB_acessToken) {
        var def = $q.defer();
        var api = $http.get('https:graph.facebook.com/' + FB_Social_Id '/friends?limit=10000&access_token=' + FB_acessToken);
        .then(function(data) {
            def.resolve(data);
        }, function(fail) {
            console.log('Friend List Fetch failed', fail);
            def.reject(fail);
        });
        return def.promise;
    };
    return service;
}