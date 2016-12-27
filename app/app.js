(function () {
    'use strict';

    angular
        .module('trainingManager', ['ui.router'])
        .config(configuration);
    
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
                template: '<ui-view/>'
            })
                .state('courses.add', {
                    url: '/add',
                    templateUrl: './app/views/course.add.html',
                    controller: 'CourseController'
                })
                .state('courses.inprogress', {
                    url: '/inprogress',
                    templateUrl: './app/views/course.inprogress.html',
                    controller: 'CourseController'
                })
                .state('courses.completed', {
                    url: '/completed',
                    templateUrl: './app/views/course.completed.html',
                    controller: 'CourseController'
                })
            // Lists Routes
            .state('lists', {
                url: '/lists',
                abstract: true, 
                template: '<ui-view/>'
            })
                .state('lists.new', {
                    url: '/new',
                    templateUrl: './app/views/lists.new.html',
                    controller: 'ListsController'
                })
                .state('lists.all', {
                    url: '/all',
                    templateUrl: './app/views/lists.all.html',
                    controller: 'ListsController'
                });
    }    
})();