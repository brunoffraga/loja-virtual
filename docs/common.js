(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/carrinho.service.ts":
/*!*************************************!*\
  !*** ./src/app/carrinho.service.ts ***!
  \*************************************/
/*! exports provided: CarrinhoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoService", function() { return CarrinhoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarrinhoService = /** @class */ (function () {
    function CarrinhoService() {
        this.itens = [];
    }
    CarrinhoService.prototype.obtemCarrinho = function () {
        this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
        console.log(this.itens);
        return this.itens;
    };
    CarrinhoService.prototype.adicionarAoCarrinho = function (produto) {
        this.obtemCarrinho();
        this.itens.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(this.itens));
    };
    CarrinhoService.prototype.removerProdutoCarrinho = function (produtoId) {
        this.itens = this.itens.filter(function (item) { return item.id !== produtoId; });
        localStorage.setItem("carrinho", JSON.stringify(this.itens));
    };
    CarrinhoService.prototype.limparCarrinho = function () {
        this.itens = [];
        localStorage.clear();
    };
    CarrinhoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarrinhoService);
    return CarrinhoService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map