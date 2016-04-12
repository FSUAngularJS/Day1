(function() {
  'use strict';

  angular.module('app.stockList')
    .controller("StockList", StockList);

  function StockList() {
    var vm = this;
    vm.message = "StockList Controller";
  }
})();
