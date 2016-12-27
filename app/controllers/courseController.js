(function () {
    'use strict';

    angular
        .module('trainingManager')
        .controller('CourseController', courseController);
    
    courseController.$inject = ['$scope', '$state', 'courseFactory' ];

    function courseController($scope, $state, courseFactory) {
        $scope.newCourse = {};

        $scope.cancel = function () {
            $state.go('courses.all');
        }

        $scope.insert = function () {
            // Call the API with the course data
            var tags = $scope.newCourse.tags;
            $scope.newCourse.tags = tags.split(', ');

            courseFactory.addCourse(
                $scope.newCourse,
                function (response, status) {
                    console.log('success');
                    $state.go('courses.all');                    
                },
                function (error) {
                    console.error(error);
                });
        }
    }

})();