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
            .state('courses', {
                url: '/courses',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('courses.add', {
                url: '/add',
                templateUrl: './app/views/course.add.html',
                controller: 'CourseController'
            });
    }    
})();