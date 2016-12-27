(function () {
    'use strict';

    angular
        .module('trainingManager')
        .controller('HomeController', homeController);
    
    homeController.$inject = ['$scope'];

    function homeController($scope) {
        $scope.message = 'From Controller...';
    }
})();