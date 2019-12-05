var app = angular.module('listMonhoc', []);
app.controller('myCtrllist',function($scope,$http){
    $http.get('js/data.json').then(function(res){
        $scope.lists = res.data;
    })
// $scope.data = studys;
// $http.get('js/data.json').success(function(sub){
//     $scope.data = sub; 
// })
});
