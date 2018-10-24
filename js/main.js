





var app = angular.module("app", ["ngRoute", "ngAnimate"]);

app.controller("HeaderCtrl", function($scope, $location) {
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }

    $scope.src ="";
    $scope.title="";
});


app.controller("HomeCtrl", function($scope, $location) {
    $scope.$parent.$parent.title ="Home"
    $scope.$parent.$parent.class ="home-bg"
});

app.controller("ProductsCtrl", function($scope, $location, $timeout) {
    $scope.$parent.$parent.title ="Products"
    $scope.$parent.$parent.class ="products-bg"
});


app.controller("Products-CIP-Ctrl", function($scope, $location) {
    $scope.$parent.$parent.title ="Products > CIP"
    $scope.$parent.$parent.class ="products-bg"

    $scope.showFullImage = false;
});

app.controller("Products-MES-Ctrl", function($scope, $location) {
    $scope.$parent.$parent.title ="Products > MES"
    $scope.$parent.$parent.class ="products-bg"

    $scope.showFullImage = false;
});

app.controller("Products-IPS-Ctrl", function($scope, $location) {
    $scope.$parent.$parent.title ="Products > IPS"
    $scope.$parent.$parent.class ="products-bg"
});

app.controller("SolutionsCtrl", function($scope, $location) {
     $scope.$parent.$parent.title ="Solutions"
     $scope.$parent.$parent.subtitle ="xxxxxxxx"
     $scope.$parent.$parent.class ="solutions-bg"
});

app.controller("AboutUsCtrl", function($scope, $location) {
     $scope.$parent.$parent.title ="About Us"
     $scope.$parent.$parent.subtitle ="What is Soteria Networks"
     
     $scope.$parent.$parent.class ="aboutus-bg"
});






app.config(function($routeProvider) {
    $routeProvider
    .when("/home",      {  templateUrl : "html/home.html"  })

    .when("/products",  {  templateUrl : "html/products.html"  })
    .when("/products/cip",  {  templateUrl : "html/products/cip.html"  })
    .when("/products/mes",  {  templateUrl : "html/products/mes.html"  })
    .when("/products/ips",  {  templateUrl : "html/products/ips.html"  })

    .when("/aboutus",     {  templateUrl : "html/aboutus.html"  })
    .when("/company",   {  templateUrl : "html/company.html"   })
    .when("/solutions", {  templateUrl : "html/solutions.html" })

    .otherwise({redirectTo:'/home'});




});




	$(function(){
      setTimeout(function(){  $('body').addClass('complete')  }, 1000)
	});