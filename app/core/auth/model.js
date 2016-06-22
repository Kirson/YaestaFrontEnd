'use strict';
angular.module('auth').factory('authServices', function($resource){  
    var base_url = "http://localhost:8097/user/";
    
    return function(action) {
        return $resource(base_url + action + '/:params', {params: '@_params'}
		,{
	        save: { 
	          method:"POST"
	        },
	        update: { 
	          method:"PUT"
	        }
	      }	    
        );              		        
    }            
});
