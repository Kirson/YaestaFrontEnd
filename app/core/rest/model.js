'use strict';
angular.module('rest').factory('restServices', function($resource){  
    var base_url = "http://localhost:8097/";
    
    
    return function(action) {
        return $resource(base_url + action + '/:params', {params: '@_params'}
		,{
	        get: { 
	          method:"GET"
	        },
	        save: { 
	          method:"POST"
	        },
	        delete: { 
	          method:"POST"
	        },
	        update: { 
	          method:"PUT"
	        },
	        query: { 
	          method:"GET",  isArray:true
	        }
	      }	    
        );              		        
    }            
});
