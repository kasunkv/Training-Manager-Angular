(function () {
    'use strict';

    angular
        .module('trainingManager')
        .controller('CourseController', courseController);
    
    courseController.$inject = ['$scope'];

    function courseController($scope) {
        $scope.message = 'From Course Controller';    
    }

})();