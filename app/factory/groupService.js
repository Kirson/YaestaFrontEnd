angular.module('inspinia').factory('GroupService', function ($resource) {
    var data = $resource('service/identity/groups/:group', {group: "@group"});
    return data;
});
