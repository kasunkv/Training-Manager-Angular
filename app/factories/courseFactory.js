(function () {
    'use strict';

    angular
        .module('trainingManager.factories', [])
        .factory('courseFactory', courseFactory);
    
    courseFactory.$inject = ['$http', 'appConfig'];

    function courseFactory($http, appConfig) {
        var url = appConfig.API_URL;
        return {
            addCourse: function (course, successHandler, errorHandler) {
                $http
                    .post(url + 'courses/', course)
                    .then(successHandler)
                    .catch(errorHandler);
            },
            getCourses: function (successHandler, errorHandler) {
                $http
                    .get(url + 'courses/')
                    .then(successHandler)
                    .catch(errorHandler);
            },
            updateCourse: function (courseId, course, successHandler, errorHandler) {
                $http
                    .put(url + 'courses/' + courseId, course)
                    .then(successHandler)
                    .catch(errorHandler);
            }
        };
    }

})();