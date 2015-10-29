app = angular.module('promosApp', []);

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