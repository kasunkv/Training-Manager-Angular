(function () {
    'use strict';

    angular
        .module('trainingManager', ['ui.router', 'trainingManager.factories'])
        .config(configuration)
        .constant('appConfig', {
            API_URL: 'http://localhost:8081/api/'
        });
        
    
    configuration.$inject = ['$stateProvider'];

    function configuration($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                templateUrl: './app/views/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: './app/views/about.html'
            })
            // Courses Routes
            .state('courses', {
                url: '/courses',
                abstract: true,
                templateUrl: './app/views/courses/course.html'
            })                
                .state('courses.all', {
                    url: '/all',
                    templateUrl: './app/views/courses/course.all.html',
                    controller: 'CourseController',
                    resolve: {
                        allCourses: function ($http) {
                            return $http
                                .get('http://localhost:8081/api/courses')
                                .then(function (response, status) {
                                    return response.data;
                                });
                        }
                    }
                })
                .state('courses.details', {
                    url: '/details/:courseId',
                    templateUrl: './app/views/courses/course.details.html',
                    controller: function ($scope, course) {
                        $scope.course = course;
                    },
                    resolve: {
                        allCourses: function () { return null; },
                        course: function ($http, $stateParams) {
                            return $http
                                .get('http://localhost:8081/api/courses/' + $stateParams.courseId)
                                .then(function (response, status) {
                                    return response.data;
                                });
                        }
                    }
                })
                .state('courses.add', {
                    url: '/add',
                    templateUrl: './app/views/courses/course.add.html',
                    controller: 'CourseController',
                    resolve: {
                        allCourses: function () { return null; }
                    }
                })
                .state('courses.inprogress', {
                    url: '/inprogress',
                    templateUrl: './app/views/courses/course.inprogress.html',
                    controller: 'CourseController',
                    resolve: {
                        allCourses: function ($http) {
                            return $http
                                .get('http://localhost:8081/api/courses')
                                .then(function (response, status) {
                                    return response.data;
                                });
                        }
                    }
                })
                .state('courses.completed', {
                    url: '/completed',
                    templateUrl: './app/views/courses/course.completed.html',
                    controller: 'CourseController',
                    resolve: {
                        allCourses: function ($http) {
                            return $http
                                .get('http://localhost:8081/api/courses')
                                .then(function (response, status) {
                                    return response.data;
                                });
                        }
                    }
                })
            // Lists Routes
            .state('lists', {
                url: '/lists',
                abstract: true, 
                templateUrl: './app/views/lists/lists.html'
            })
                .state('lists.new', {
                    url: '/new',
                    templateUrl: './app/views/lists/lists.new.html',
                    controller: 'ListsController'
                })
                .state('lists.all', {
                    url: '/all',
                    templateUrl: './app/views/lists/lists.all.html',
                    controller: 'ListsController'
                })
                .state('lists.completed', {
                    url: '/completed',
                    templateUrl: './app/views/lists/lists.completed.html',
                    controller: 'ListsController'
                });
    }
})();