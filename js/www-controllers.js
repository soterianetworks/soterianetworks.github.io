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

      addSlide('img/abstract-1278061_1920.326x230.png');
      addSlide('img/ball-457334.320x180.png');
      addSlide('img/binary-1332816_1920.326x108.png');

      function addSlide(imgPath) {
        slides.push({
          image: basePath+imgPath,
          text: ['Application Security','Data Security','IoT Security','Value & Delivery'][slides.length % 4],
          id: currIndex++
        });
      };

      //TODO: Randomize logic below
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

 angular.module('www')
    .controller('AboutCarousel', function($scope) {

      //TODO: Customize
      $scope.slides = ['The scope for identity and access management has shifted with the advance of mobility usage pattern, cloud technology and internet of things. We are ready to consolidate the identities of user and internet of things. The marching order for refined access control and risk management at API level is on.'
      ,'Data breaching has shifted from outside intrusion to insider act, this is what keeps the chief information security officers awake at night. Cloud hosting will only exacerbate this situation. Even if we encrypt the data at rest, it is only as safe as how we manage the encryption keys in a live system. A solution tightly integrated with the identity management is the solution.'
      ,'Soteria Networks is a cloud security product and service provider. All the founding members have been hands-on engineers for over 15 years. With successful delivery of several security products behind us, we are passionate about application and data security and are actively developing a product suite with the goal to provide premium services in the cloud space.'];

 });
