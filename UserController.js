(function() {

  var app = angular.module("githubViewer");

  var UserController = function($scope, github, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };

    var onError = function(errResponse) {
      $scope.error = "Could not fetch the user";
    };

    $scope.fetchRepoDetails = function(reponame) {
  
    };
    
    $scope.repoSortOrder = "-stargazers_count";
    $scope.username = $routeParams.username;
    
    github.getUser($scope.username).then(onUserComplete, onError);
  };
  app.controller("UserController", UserController);
}());