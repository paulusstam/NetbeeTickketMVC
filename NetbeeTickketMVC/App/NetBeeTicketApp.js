var NetBeeTicketApp = angular.module('NetBeeTicketApp', ['ngRoute', 'ui.bootstrap']);

NetBeeTicketApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "App/home.html",
            controller: "HomeController"
        })
        .when("/newCustomerForm", {
            templateUrl: "App/CustomerForm/ntTemplate.html",
            controller: "ntController"
        })
        .when("/updateCustomerForm/:id", {
            templateUrl: "App/CustomerForm/ntTemplate.html",
            controller: "ntController"
        })
        .otherwise({
            redirectTo: "/home"
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

NetBeeTicketApp.controller("HomeController",
    function ($scope, $location, $uibModal, DataService) {

        DataService.getCustomers().then(
            function (results) {
                var data = results.data;
            },
            function (results) {
                var data = results.data;

            }
        );

        $scope.showCreateCustomerForm = function () {
            //$location.path('/newCustomerForm');
            $uibModal.open({
                templateUrl: "App/CustomerForm/ntTemplate.html",
                controller: "ntController"
            });
        };

        $scope.showUpdateCustomerForm = function (id) {
            $location.path('/updateCustomerForm/' + id);

        };

    });