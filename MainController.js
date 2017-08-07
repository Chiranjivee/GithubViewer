(function() {

  var app = angular.module("githubViewer");

  var MainController = function($scope, $interval, $location) {

    $scope.search = function(username) {
      if (countDownobject) { 
        $interval.cancel(countDownobject);
        $scope.countdown = null;
      }
      $location.path("/user/" + username);
      // 
    };

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var countDownobject = null;
    var startCountdown = function() {
      countDownobject = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.username = "angular";

    $scope.countdown = 5;
    startCountdown();
  };
  app.controller("MainController", MainController);

}());