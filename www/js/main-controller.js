(function(){
  'use strict';

  angular.module('jmp-calculator')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.display = '0';

    $scope.number = function(num){
      if(num==='0' && $scope.display==='0'){
        $scope.display = '0';
      }else if($scope.display==='0'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };

    $scope.clear = function(){
      $scope.display = '0';
    };

    $scope.dec = function(){
      if($scope.display.indexOf('.') === -1){
        $scope.display += '.';
      }
    };

    $scope.operator = function(op){
      $scope.op = op;
      $scope.mem = $scope.display;
      $scope.clear();
    };

    $scope.calc = function(){
      $scope.display = eval($scope.mem + $scope.op + $scope.display);
    };

  }]);
})();
