var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/home",{
        templateUrl : "template/main.html"
    }).when("/quiz",{
        templateUrl : "template/quiz.html"
    }).otherwise({
        redirectTo : "/home"
    });
    // .otherwise({
    //     templateUrl : "index.html"
    // });
});
app.controller('myCtrllist',function($scope,$http){
    $scope.totalMark = 0;
    $http.get('js/data.json').then(function(res){
        $scope.lists = res.data;
    })
    $http.get('data/quiz.json').then(function(res){
        $scope.quizs = res.data;
    })

    $scope.checkQuiz = function(idx, ansId, mark){
        var answid = ansId;
        var myans = $scope.model[idx];
        alert($scope.model[idx] + ", " + answid);
        $scope.totalMark += (answid==myans)?mark:0;

        alert($scope.totalMark);
    };
    $scope.model = [];
    $scope.model[0] = "";
    
// $scope.data = studys;
// $http.get('js/data.json').success(function(sub){
//     $scope.data = sub; 
// })
});
