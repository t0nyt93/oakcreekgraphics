angular.module('routerApp')
    .controller( 'WebglCtrl',[
        '$scope',
        function($scope){
            $scope.message = 'HelloWorld from the WebglCtrl!';
        }]);
