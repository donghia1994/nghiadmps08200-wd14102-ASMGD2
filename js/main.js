var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/1",{
        templateUrl : "template/main.html"
    }).when("/quiz",{
        templateUrl : "template/quiz.html"
    }).otherwise({
        redirectTo : "main.html"
    });
    // .otherwise({
    //     templateUrl : "index.html"
    // });
});
app.controller('myCtrllist',function($scope,$http){
    $http.get('js/data.json').then(function(res){
        $scope.lists = res.data;
    })
    $http.get('data/quiz.json').then(function(res){
        $scope.quizs = res.data;
    })
// $scope.data = studys;
// $http.get('js/data.json').success(function(sub){
//     $scope.data = sub; 
// })
});
