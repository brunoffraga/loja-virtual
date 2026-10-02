(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carrinho-carrinho-module"],{

/***/ "./src/app/carrinho/carrinho-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/carrinho/carrinho-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CarrinhoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoRoutingModule", function() { return CarrinhoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _carrinho_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carrinho.component */ "./src/app/carrinho/carrinho.component.ts");




var routes = [
    { path: '', component: _carrinho_component__WEBPACK_IMPORTED_MODULE_3__["CarrinhoComponent"] }
];
var CarrinhoRoutingModule = /** @class */ (function () {
    function CarrinhoRoutingModule() {
    }
    CarrinhoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CarrinhoRoutingModule);
    return CarrinhoRoutingModule;
}());



/***/ }),

/***/ "./src/app/carrinho/carrinho.component.css":
/*!*************************************************!*\
  !*** ./src/app/carrinho/carrinho.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart-title {\n    font-size: 44px;\n    color: var(--gray);\n    font-weight: 700;\n    padding: 8px 0;\n}\n\nli {\n    display: flex;\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n    border-radius: 8px;\n    overflow: hidden;\n    margin: 10px 0;\n    height: 100px;\n    align-items: center;\n    justify-content: space-between;\n}\n\nimg {\n    width: 100px;\n    height: 100px;\n    display: block;\n}\n\n.remove-button {\n    background-color: red;\n    border: none;\n    color: white;\n    padding: 20px;\n    height: 100%;\n    transition: .2s all;\n}\n\n.remove-button:hover {\n    filter: brightness(0.9);\n}\n\n.cart-total {\n    font-size: 24px;\n    color: var(--gray);\n    font-weight: 700;\n    padding: 8px 0;\n}\n\ninput {\n    width: 30px;\n    text-align: center;\n}\n\n.buy-button {\n    background-color: var(--blue);\n    border: none;\n    color: white;\n    padding: 10px;\n    font-size: 22px;\n    margin-bottom: 10px;\n    transition: .3s all;\n}\n\n.buy-button:hover {\n    filter: brightness(0.9);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FycmluaG8vY2FycmluaG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscURBQXFEO0lBQ3JELGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NhcnJpbmhvL2NhcnJpbmhvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0NHB4O1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDhweCAwO1xufVxuXG5saSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmVtb3ZlLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogLjJzIGFsbDtcbn1cblxuLnJlbW92ZS1idXR0b246aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xufVxuXG4uY2FydC10b3RhbCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDhweCAwO1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV5LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IC4zcyBhbGw7XG59XG5cbi5idXktYnV0dG9uOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/carrinho/carrinho.component.html":
/*!**************************************************!*\
  !*** ./src/app/carrinho/carrinho.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"cart-title\">Carrinho</h2>\n<div *ngIf=\"itensCarrinho.length > 0 else semProduto\">\n  <ul>\n    <li *ngFor=\"let itemCarrinho of itensCarrinho\">\n      <img [src]=\"itemCarrinho.imagem\"/>\n      <p>{{ itemCarrinho.descricao }}</p>\n      <p>{{ itemCarrinho.preco | currency: \"BRL\" }}</p>\n      <label>\n        Quantidade\n        <input type=\"number\" [(ngModel)]=\"itemCarrinho.quantidade\" (change)=\"calcularTotal()\">\n      </label>\n      <button class=\"remove-button\" (click)=\"removeProdutoCarrinho(itemCarrinho.id)\"><i class=\"fa-solid fa-x\"></i></button>\n    </li>\n  </ul>\n  <h2 class=\"cart-total\">Total: {{ total | currency: \"BRL\" }}</h2>\n  <button class=\"buy-button\" (click)=\"comprar()\">Comprar</button>\n</div>\n<ng-template #semProduto>Nem um produto foi adicionado ao carrinho</ng-template>\n<!-- 6.k -->\n<!-- 6.L -->\n<!-- 6.M -->"

/***/ }),

/***/ "./src/app/carrinho/carrinho.component.ts":
/*!************************************************!*\
  !*** ./src/app/carrinho/carrinho.component.ts ***!
  \************************************************/
/*! exports provided: CarrinhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoComponent", function() { return CarrinhoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _carrinho_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carrinho.service */ "./src/app/carrinho.service.ts");




var CarrinhoComponent = /** @class */ (function () {
    function CarrinhoComponent(carrinhoServise, router) {
        this.carrinhoServise = carrinhoServise;
        this.router = router;
        this.itensCarrinho = [];
        this.total = 0;
    }
    CarrinhoComponent.prototype.ngOnInit = function () {
        this.itensCarrinho = this.carrinhoServise.obtemCarrinho();
        this.calcularTotal();
    };
    CarrinhoComponent.prototype.calcularTotal = function () {
        this.total = this.itensCarrinho.reduce(function (prev, curr) { return prev + (curr.preco * curr.quantidade); }, 0);
    };
    CarrinhoComponent.prototype.removeProdutoCarrinho = function (produtoId) {
        this.itensCarrinho = this.itensCarrinho.filter(function (item) { return item.id !== produtoId; });
        this.carrinhoServise.removerProdutoCarrinho(produtoId);
        this.calcularTotal();
    };
    CarrinhoComponent.prototype.comprar = function () {
        alert("Parabéns, você finalizou a sua compra!");
        this.router.navigate(["produto"]);
    };
    CarrinhoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carrinho',
            template: __webpack_require__(/*! ./carrinho.component.html */ "./src/app/carrinho/carrinho.component.html"),
            styles: [__webpack_require__(/*! ./carrinho.component.css */ "./src/app/carrinho/carrinho.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_carrinho_service__WEBPACK_IMPORTED_MODULE_3__["CarrinhoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CarrinhoComponent);
    return CarrinhoComponent;
}());



/***/ }),

/***/ "./src/app/carrinho/carrinho.module.ts":
/*!*********************************************!*\
  !*** ./src/app/carrinho/carrinho.module.ts ***!
  \*********************************************/
/*! exports provided: CarrinhoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoModule", function() { return CarrinhoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carrinho-routing.module */ "./src/app/carrinho/carrinho-routing.module.ts");
/* harmony import */ var _carrinho_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrinho.component */ "./src/app/carrinho/carrinho.component.ts");






var CarrinhoModule = /** @class */ (function () {
    function CarrinhoModule() {
    }
    CarrinhoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_carrinho_component__WEBPACK_IMPORTED_MODULE_5__["CarrinhoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_4__["CarrinhoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], CarrinhoModule);
    return CarrinhoModule;
}());



/***/ })

}]);
//# sourceMappingURL=carrinho-carrinho-module.js.map