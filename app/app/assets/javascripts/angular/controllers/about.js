angular.module('routerApp')
    .controller( 'AboutCtrl',[
        '$scope',
        function($scope){
            $scope.message = 'HelloWorld from the AboutCtrl!';
        }]);
