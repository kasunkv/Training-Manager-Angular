(function () {
    'use strict';

    angular
        .module('trainingManager')
        .controller('ListsController', listsController);
    
    listsController.$inject = ['$scope'];

    function listsController($scope) {
        $scope.message = 'From Controller...';
    }
})();