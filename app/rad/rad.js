(function () {
    'use strict';

    angular.module('rad', ['ngRoute'])
        .config(config)
        .controller('RadController', RadController);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/rad', {
                templateUrl: '/rad/rad.html',
                controller: RadController,
                controllerAs: 'vm'
            });
    }

    function RadController() {
        var vm = this;
    }
}());
