    /**
     * INSPINIA - Responsive Admin Theme
     *
     * Main controller.js file
     * Define controllers with data used in Inspinia theme
     *
     *
     * Functions (controllers)
     *  - MainCtrl
     *  - dashboardFlotOne
     *  - dashboardFlotTwo
     *  - dashboardFlotFive
     *  - dashboardMap
     *  - flotChartCtrl
     *  - rickshawChartCtrl
     *  - sparklineChartCtrl
     *  - widgetFlotChart
     *  - modalDemoCtrl
     *  - ionSlider
     *  - wizardCtrl
     *  - CalendarCtrl
     *  - chartJsCtrl
     *  - GoogleMaps
     *  - ngGridCtrl
     *  - codeEditorCtrl
     *  - nestableCtrl
     *  - notifyCtrl
     *  - translateCtrl
     *  - imageCrop
     *  - diff
     *  - idleTimer
     *  - liveFavicon
     *  - formValidation
     *  - agileBoard
     *  - draggablePanels
     *  - chartistCtrl
     *  - metricsCtrl
     *  - sweetAlertCtrl
     *  - selectCtrl
     *  - toastrCtrl
     *
     *
     */

    /**
     * MainCtrl - controller
     * Contains severals global data used in diferent view
     *
     */
    function MainCtrl() {

        /**
         * daterange - Used as initial model for data range picker in Advanced form view
         */
        this.daterange = {startDate: null, endDate: null}

        /**
         * slideInterval - Interval for bootstrap Carousel, in milliseconds:
         */
        this.slideInterval = 5000;


        
    	
    	this.urbanoOrders = [
    	  {
    		  number: '000001',
    		  order: 'EGR0014',
    		  pickUp: '2015-06-01',
    		  observation: 'N/A',
    		  createDate: '2015-05-31',
    		  supplier: 'Ya Esta',
    		  deliveryType: 'Titular',
    		  state: '0',
    		  error: 'OK',
    		  store: 'Yaesta.com'
    	  },
    	  {
    		  number: '000002',
    		  order: 'EGR0018',
    		  pickUp: '2015-06-01',
    		  observation: 'N/A',
    		  createDate: '2015-05-31',
    		  supplier: 'Carmen Borja',
    		  deliveryType: 'Titular',
    		  state: '0',
    		  error: 'OK',
    		  store: 'Yaesta.com'
    	  },
    	  {
    		  number: '000003',
    		  order: 'EGR0024',
    		  pickUp: '2015-06-01',
    		  observation: 'N/A',
    		  createDate: '2015-05-31',
    		  supplier: 'Paul Tello',
    		  deliveryType: 'Titular',
    		  state: '0',
    		  error: 'OK',
    		  store: 'Yaesta.com'
    	  }
    	];

        this.sellers = [
          {
              id: '1',
              name: 'Prov 1',
              category: 'Ropa',
              error: 'OK'
          },
          {
              id: '2',
              name: 'Prov 2',
              category: 'Computacion',
              error: 'OK'
          }

        ];

        this.categories = [
          {
              id: '1',
              name: 'Cat 1',
              description: 'Ropa',
              vtextId: '1',
              error: 'OK'
          },
          {
              id: '2',
              name: 'Cat 2',
              description: 'Computacion',
              vtextId: '1',
              error: 'OK'
          }

        ];

        this.brands = [
          {
              id: '1',
              name: 'Huggies',
              description: 'Huggies',
              vtextId: '1',
              error: 'OK'
          },
          {
              id: '2',
              name: 'Panolini',
              description: 'Panolini',
              vtextId: '1',
              error: 'OK'
          }

        ];
    	
    	this.orders = [
    	  {
    		  id: '1',
    		  reference: 'EGR0014',
    		  newCustomer: 'Si',
    		  deliveryPlace: 'Ecuador',
    		  customer: 'Pablo Aulestia',
    		  total: '$ 145.87',
    		  pay: 'Pago contra entrega',
    		  state: 'Preparación en proceso',
    		  date: '2015-05-31',
    		  store: 'Yaesta.com',
    		  error: 'OK'
    	  },
    	  {
    		  id: '2',
    		  reference: 'EGR0024',
    		  newCustomer: 'No',
    		  deliveryPlace: 'Ecuador',
    		  customer: 'Juan Perez',
    		  total: '$ 97.00',
    		  pay: 'Pago diferido',
    		  state: 'Preparación en proceso',
    		  date: '2015-05-31',
    		  store: 'Yaesta.com',
    		  error: 'OK'
    	  },
    	  {
    		  id: '3',
    		  reference: 'EGR0064',
    		  newCustomer: 'No',
    		  deliveryPlace: 'Ecuador',
    		  customer: 'Juan Perez',
    		  total: '$ 185.22',
    		  pay: 'Pago diferido',
    		  state: 'Preparación en proceso',
    		  date: '2015-05-31',
    		  store: 'Yaesta.com',
    		  error: 'OK'
    	  }
    	];
    	

        
        /**
         * General variables for Peity Charts
         * used in many view so this is in Main controller
         */
        this.BarChart = {
            data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 4, 7, 3, 2, 7, 9, 6, 4, 5, 7, 3, 2, 1, 0, 9, 5, 6, 8, 3, 2, 1],
            options: {
                fill: ["#1ab394", "#d7d7d7"],
                width: 100
            }
        };

        this.BarChart2 = {
            data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };

        this.BarChart3 = {
            data: [5, 3, 2, -1, -3, -2, 2, 3, 5, 2],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };

        this.LineChart = {
            data: [5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 4, 7, 3, 2, 9, 8, 7, 4, 5, 1, 2, 9, 5, 4, 7],
            options: {
                fill: '#1ab394',
                stroke: '#169c81',
                width: 64
            }
        };

        this.LineChart2 = {
            data: [3, 2, 9, 8, 47, 4, 5, 1, 2, 9, 5, 4, 7],
            options: {
                fill: '#1ab394',
                stroke: '#169c81',
                width: 64
            }
        };

        this.LineChart3 = {
            data: [5, 3, 2, -1, -3, -2, 2, 3, 5, 2],
            options: {
                fill: '#1ab394',
                stroke: '#169c81',
                width: 64
            }
        };

        this.LineChart4 = {
            data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
            options: {
                fill: '#1ab394',
                stroke: '#169c81',
                width: 64
            }
        };

        this.PieChart = {
            data: [1, 5],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };

        this.PieChart2 = {
            data: [226, 360],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };
        this.PieChart3 = {
            data: [0.52, 1.561],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };
        this.PieChart4 = {
            data: [1, 4],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };
        this.PieChart5 = {
            data: [226, 134],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };
        this.PieChart6 = {
            data: [0.52, 1.041],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };
    };



       


    /**
     * modalDemoCtrl - Controller used to run modal view
     * used in Basic form view
     */
    function modalDemoCtrl($scope, $modal) {

    	
    	$scope.openOrders = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'app/modules/orders/views/orderDetail.html',
                size: size,
                controller: ModalInstanceCtrl
            });
        };
    	
    	$scope.openInvoices = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'app/modules/orders/views/invoice.html',
                size: size,
                controller: ModalInstanceCtrl
            });
        };
    	
    	$scope.openTracking = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'app/modules/orders/views/invoice.html',
                size: size,
                controller: ModalInstanceCtrl
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
    }



    /**
     * notifyCtrl - Controller angular notify
     */
    function notifyCtrl($scope, notify) {
        $scope.msg = 'Hello! This is a sample message!';
        $scope.demo = function () {
            notify({
                message: $scope.msg,
                classes: $scope.classes,
                templateUrl: $scope.template
            });
        };
        $scope.closeAll = function () {
            notify.closeAll();
        };

        $scope.inspiniaTemplate = 'views/common/notify.html';
        $scope.inspiniaDemo1 = function(){
            notify({ message: 'Info - This is a Inspinia info notification', classes: 'alert-info', templateUrl: $scope.inspiniaTemplate});
        }
        $scope.inspiniaDemo2 = function(){
            notify({ message: 'Success - This is a Inspinia success notification', classes: 'alert-success', templateUrl: $scope.inspiniaTemplate});
        }
        $scope.inspiniaDemo3 = function(){
            notify({ message: 'Warning - This is a Inspinia warning notification', classes: 'alert-warning', templateUrl: $scope.inspiniaTemplate});
        }
        $scope.inspiniaDemo4 = function(){
            notify({ message: 'Danger - This is a Inspinia danger notification', classes: 'alert-danger', templateUrl: $scope.inspiniaTemplate});
        }
    }

    /**
     * translateCtrl - Controller for translate
     */
    function translateCtrl($translate, $scope) {
        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
    }


       function login ($scope){

            console.log("===>> login");
       
    }


    /**
     *
     * Pass all functions into module
     */
    angular
        .module('inspinia')
        .controller('MainCtrl', MainCtrl)
        .controller('modalDemoCtrl', modalDemoCtrl)
        .controller('CalendarCtrl', CalendarCtrl)
    	.controller('translateCtrl', translateCtrl)
        .controller('login', login);

