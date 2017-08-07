(function() {
  
  var module = angular.module('githubViewer');
  
  var RepoController = function($scope, $routeParams, github) {
    
    var onRepo = function(data) 
    {
      $scope.data = data;
    }
    
    
    var onError = function(data) {
      $scope.error = data;
    }
    
    
    
    var reponame = $routeParams.reponame;
    var username= $routeParams.username;
    
    github.getRepoDetails(username, reponame)
      .then(onRepo, onError);
  }
  
  
  module.controller('RepoController', RepoController );
}());