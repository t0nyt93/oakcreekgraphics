angular.module('routerApp')
    .controller( 'ContactCtrl',[
        '$scope',
        function($scope){
            $scope.message = 'HelloWorld from the ContactCtrl!';
        }]);
