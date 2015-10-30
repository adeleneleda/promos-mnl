var app = angular.module('promosApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');
});

app.controller('PromosCtrl', [function() {

}]);

app.directive('dealTile', function() {
  return {
    templateUrl: 'deal-tile.html',
    scope: {
      productId: '@',
      productName: '@',
      productImage: '@',
      productPrice: '@'
    }
  }
});