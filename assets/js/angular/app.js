var app = angular.module("queueMPower", ['ngRoute', 'ngSails', 'utils', 'directives', 'services', 'controllers']);
app.config([
  '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    "use strict";

    $routeProvider.when('/dashboard', {
      templateUrl: 'partial/dashboard',
      controller: 'dashboardController'
    }).when('/company', {
      templateUrl: 'partial/company',
      controller: 'companyListController'
    }).when('/company/me', {
      templateUrl: 'partial/company/me',
      controller: 'companyDetailsController'
    }).when('/company/:id', {
      templateUrl: 'partial/company/edit',
      controller: 'companyDetailsController'
    }).when('/counter', {
      templateUrl: 'partial/counter',
      controller: 'counterListController'
    }).when('/counter/:id', {
      templateUrl: 'partial/counter/edit',
      controller: 'counterListController'
    }).when('/location', {
      templateUrl: 'partial/location',
      controller: 'locationListController'
    }).when('/location/me', {
      templateUrl: 'partial/location/me',
      controller: 'locationDetailsController'
    }).when('/location/:id', {
      templateUrl: 'partial/location/edit',
      controller: 'locationDetailsController'
    }).when('/logout', {
      controller: 'logoutController'
    }).when('/user', {
      templateUrl: 'partial/user',
      controller: 'userListController'
    }).when('/user/me', {
      templateUrl: 'partial/user/me',
      controller: 'userDetailsController'
    }).when('/user/:id', {
      templateUrl: 'partial/user/edit',
      controller: 'userDetailsController'
    }).when('/queue', {
      templateUrl: 'partial/queue',
      controller: 'queueListController'
    }).when('/queue/:id', {
      templateUrl: 'partial/queue/edit',
      controller: 'queueDetailsController'
    }).when('/ticket', {
      templateUrl: 'partial/ticket',
      controller: 'ticketListController'
    }).when('/ticket/:id', {
      templateUrl: 'partial/ticket/edit',
      controller: 'ticketDetailsController'
    }).when('/service-type', {
      templateUrl: 'partial/service-type',
      controller: 'serviceTypeListController'
    }).when('/service-type/:id', {
      templateUrl: 'partial/service-type/edit',
      controller: 'serviceTypeDetailsController'
    }).otherwise(function ($injector, $location) {
      $window.location = $location.$$absUrl;
    });

    //will enable pretty-url in angular removing #
    $locationProvider.html5Mode(true);

  }]);