angular.module('inspinia').factory('ProcessInstanceService', function ($resource) {
    var data = $resource('service/process-instance/:processInstance', {processInstance: "@processInstance"});
    return data;
});
