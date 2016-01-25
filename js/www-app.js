'use strict';

angular.module('www', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app',{
            url: '/',
            views: {
                'header': {
                    templateUrl: 'html/header.html'
                },
                'content': {
                    templateUrl: 'html/home.html',
                },
                'footer': {
                    templateUrl: 'html/footer.html',
                    controller: 'CommonController'
                }
            }
        })

    $stateProvider.state('app.products', {
        url: 'products',
        views: {
            'content@': {
                templateUrl: 'html/products.html'
            }
        }
    });

    $stateProvider.state('app.services', {
        url: 'services',
        views: {
            'content@': {
                templateUrl: 'html/services.html'
            }
        }
    });

    $stateProvider.state('app.about', {
        url: 'about',
        views: {
            'content@': {
                templateUrl: 'html/about.html'
            }
        }
    });

    $stateProvider.state('app.blog', {
        url: 'blog',
        views: {
            'content@': {
                templateUrl: 'html/blog.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/');

}]);

