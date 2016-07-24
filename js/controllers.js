    /**
     * INSPINIA - Responsive Admin Theme
     *
     * Main controller.js file
     * Define controllers with data used in Inspinia theme
     *
     *
     *
     *
     */

    /**
     * MainCtrl - controller
     * Contains severals global data used in diferent view
     *
     */
    function MainCtrl($scope,restServices,$modal) {

        /**
         * daterange - Used as initial model for data range picker in Advanced form view
         */
        this.daterange = {startDate: null, endDate: null}

        /**
         * slideInterval - Interval for bootstrap Carousel, in milliseconds:
         */
        this.slideInterval = 5000;

        this.parameters = restServices('parameter/getAll/').query(function(data){  
            return data;
        });

        //this.parameters.$promise.then(function(data) {
            //  console.log(data);
        //});

        this.catalogs = restServices('catalog/getMainCatalogs').query(function(data){  
           return data;
        });

        //this.catalogs.$promise.then(function(data) {
              //console.log(data);
        //});


        this.suppliers = restServices('supplier/getAll/').query(function(data){  
           return data;
        });

        //this.suppliers.$promise.then(function(data) {
              //console.log(data);
        //});   

        this.categories = restServices('category/getAll').query(function(data){  
           return data;
        });

        //this.categories.$promise.then(function(data) {
              //console.log(data);
        //});  


        this.brands = restServices('brand/getAll').query(function(data){  
           return data;
        });

        //this.brands.$promise.then(function(data) {
              //console.log(data);
        //});        

        /*
        this.ordersVitex = restServices('vitextIntegration/getOrdersNext50').query({sequence:0},function(data){  
           return data;
        });
        */  
        
        this.orderSchema = restServices('vitextIntegration/getOrdersRest').get(function(data){  
           //console.log(data);
           return data;
        });      

        var urlServiceCatalogOrderStatusIntegration = 'catalog/getSubCatalogs'+'ORDER_STATUS_INTEGRATION';

        this.orderStatusIntegrationList = restServices(urlServiceCatalogOrderStatusIntegration ).query(function(data){  
           console.log(data);
           return data;
        }); 
        
        var urlServiceCatalogOrderStatusVtex = 'catalog/getSubCatalogs'+'ORDER_STATUS_VTEX';

        this.orderStatusVtexList = restServices(urlServiceCatalogOrderStatusVtex).query(function(data){  
           console.log(data);
           return data;
        });        
        
        $scope.openOrders = function (size,order) {
            var modalInstance = $modal.open({
                templateUrl: 'app/modules/orders/views/orderDetail.html',
                size: size,
                controller: ModalOrderInstanceCtrl,
                resolve: {
                    order: function () {
                        return order;
                    }
                }
            });
        };
    	
        $scope.openInvoices = function (size,order) {
            var modalInstance = $modal.open({
                templateUrl: 'app/modules/orders/views/invoice.html',
                size: size,
                controller: ModalInstanceCtrl,
                resolve: {
                    order: function () {
                        return order;
                    }
                }
            });
        };
        
        $scope.openTracking = function (size,order) {
            var modalInstance = $modal.open({
                templateUrl: 'app/modules/orders/views/invoice.html',
                size: size,
                controller: ModalInstanceCtrl,
                resolve: {
                    order: function () {
                        return order;
                    }
                }
            });
        };
       
    };



       


    function ModalInstanceCtrl ($scope, $modalInstance) {

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };



    };


   function ModalOrderInstanceCtrl ($scope, $modalInstance, order, restServices) {

        $scope.order=order;
        $scope.showApprovedCancel=true;
        

        console.log("order");
        console.log($scope.order);

        var urlService = 'vitextIntegration/getOrderComplete'+$scope.order.orderId;

        $scope.orderComplete =  restServices(urlService).get(function(data){  
           return data;
        });

        //$scope.orderComplete = $scope.orderComplete.promise.then(data);

        //$scope.orderComplete.totalPrice = $scope.order.totalValue;

        console.log("orderComplete");
        console.log($scope.orderComplete);

        if($scope.orderComplete.status!="canceled" && $scope.orderComplete.status!="invoiced"){
            $scope.showApprovedCancel=true;
        }else{
            $scope.showApprovedCancel=false;
        }

        if($scope.orderComplete.appStatus=="approved"){
            $scope.showGeneratedGuide=true;
            $scope.showApprovedCancel=false;
        }else{
            $scope.showGeneratedGuide=false;
        }


        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.aproveOrder = function (vorderComplete) {
            //$modalInstance.close();

            urlService = 'vitextIntegration/changeStatus';

            console.log("===++===");
            console.log(vorderComplete);
            vorderComplete.appStatus = "approved";

            $scope.orderCompleteUpd =  restServices(urlService).save({order:vorderComplete,action:"approved"},function(data){  
                return data;
            });

            $scope.showGeneratedGuide=true;
            $scope.showApprovedCancel=false;

            alert('La orden ha sido aprobada!');
        };

        $scope.cancelOrder = function (vorderComplete) {
            //$modalInstance.close();

            urlService = 'vitextIntegration/changeStatus';

            console.log("===++===");
            console.log(vorderComplete);
            vorderComplete.appStatus = "cancel";

            $scope.orderCompleteUpd =  restServices(urlService).save({order:vorderComplete,action:"cancel"},function(data){  
                return data;
            });

            alert('La orden ha sido cancelada!');
        };

        /*
        $scope.$watch('showApprovedCancel', function() {
            alert('hey, showApprovedCancel has changed!');
        });
        */

        $scope.generateGuide = function(vorderComplete){
            
            urlService = 'vitextIntegration/generateGuide';

            $scope.orderCompleteUpd =  restServices(urlService).save({orderComplete:vorderComplete,supplierDeliveryInfoList:vorderComplete.supplierDeliveryInfoList},function(data){  
                return data;
            });

            alert('La guia ha sido generada!');

        }

    };



    /**
     * CalendarCtrl - Controller for Calendar
     * Store data events for calendar
     */
    function CalendarCtrl($scope) {

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        // Events
        $scope.events = [
            {title: 'All Day Event',start: new Date(y, m, 1)},
            {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
            {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
            {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
            {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
            {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        ];


        /* message on eventClick */
        $scope.alertOnEventClick = function( event, allDay, jsEvent, view ){
            $scope.alertMessage = (event.title + ': Clicked ');
        };
        /* message on Drop */
        $scope.alertOnDrop = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view){
            $scope.alertMessage = (event.title +': Droped to make dayDelta ' + dayDelta);
        };
        /* message on Resize */
        $scope.alertOnResize = function(event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ){
            $scope.alertMessage = (event.title +': Resized to make dayDelta ' + minuteDelta);
        };

        /* config object */
        $scope.uiConfig = {
            calendar:{
                height: 450,
                editable: true,
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                eventClick: $scope.alertOnEventClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };

        /* Event sources array */
        $scope.eventSources = [$scope.events];
    };



    

    /**
     * translateCtrl - Controller for translate
     */
    function translateCtrl($translate, $scope) {
        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
    };
 

  function loginCtrl($scope,Base64,UserService,$rootScope,$http,restServices,$window,ngDialog,$location,SweetAlert){
    //console.log("es login");

        $rootScope.loggedUser = {

        };
        
        $scope.adminUser = restServices('activiBpm/getAdminUser/').get(function(data){  
           return data;
        });

        console.log($scope.adminUser);
        //$scope.username = $scope.user.username;
        //$scope.password = $scope.user.password;
        $rootScope.loggedin = false;

        $scope.login = function () {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode($scope.username + ":" + $scope.password);

            UserService.get({user: $scope.username}, function (data) {
            // data = JSON.parse(data);

            //console.log("====>>> data");
            //console.log(data);

            $rootScope.loggedin = true;
            $rootScope.loggedUser = data;
            $rootScope.username = $scope.username;
            $rootScope.password = $scope.password;

            $location.path('/modules/orders');
            
            },
            function(error) {
            // error handler
                console.log("Error de autenticacion");
                 
                 //$window.alert("Error de autenticacion");
                /* ngDialog.open({
                    template: '<p>Error de autenticacion</p>',
                    plain: true,
                    className: 'ngdialog-theme-default' 
                });
                */
                SweetAlert.swal("Error", "Usuario o clave incorrecta :)", "error");
            });
        
      };

     
  };


       


    /**
     *
     * Pass all functions into module
     */
    angular
        .module('inspinia')
        .controller('MainCtrl', MainCtrl)
        .controller('ModalOrderInstanceCtrl', ModalOrderInstanceCtrl)
        .controller('CalendarCtrl', CalendarCtrl)
    	.controller('translateCtrl', translateCtrl)
        .controller('loginCtrl', loginCtrl);

