angular.module('www')
   .controller('CommonController', function($http, $scope) {
     $scope.date = new Date();

});

angular.module('www')
   .controller('IntroCarousel', function($scope, $location) {
      $scope.myInterval = 3000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      var slides = $scope.slides = [];
      var currIndex = 0;
      var basePath = $location.absUrl().split('#')[0];

      addSlide('img/abstract-1278061_1920.jpg');
      addSlide('img/ball-457334.jpg');
      addSlide('img/binary-1332816_1920.jpg');

      function addSlide(imgPath) {
        slides.push({
          image: basePath+imgPath,
          text: ['Application Security','Data Security','IoT Security','Value & Delivery'][slides.length % 4],
          id: currIndex++
        });
      };

      // Randomize logic below
      function randomize() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
      }

      function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
          slides[i].id = indexes.pop();
        }
      }

      function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
          indexes[i] = i;
        }
        return shuffle(indexes);
      }

      // http://stackoverflow.com/questions/962802#962890
      function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
          while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
          }
        }

        return array;
      }
  });