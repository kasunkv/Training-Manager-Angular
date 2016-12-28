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
                    notify.success('Course Created Successfully.');
                    $state.go('courses.all');
                },
                function (error) {
                    notify.error('Failed to Create Course');
                    console.error(error);
                });
        };
    }

})();