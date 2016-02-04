'use strict';

angular.module('www', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app',{
            url: '/',
            views: {
                'header': {
                    templateUrl: 'html/header.html'
                },
                'intro': {
                    templateUrl: 'html/intro.html'
                },
                'content': {
                    templateUrl: 'html/home.html'
                },
                'footer': {
                    templateUrl: 'html/footer.html',
                    controller: 'CommonController'
                }
            }
        })

    $stateProvider.state('app.blog', {
        url: 'blog',
        views: {
            'intro@': {
                templateUrl: 'html/blog-intro.html'
            },
            'content@': {
                templateUrl: 'html/blog.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/');

}]);

