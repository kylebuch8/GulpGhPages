(function () {
    'use strict';

    angular.module('awesome', ['ngRoute'])
        .config(config)
        .controller('AwesomeController', AwesomeController);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/awesome/awesome.html',
                controller: AwesomeController,
                controllerAs: 'vm'
            });
    }

    function AwesomeController() {
        var vm = this;
    }
}());
