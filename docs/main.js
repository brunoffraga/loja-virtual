(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./carrinho/carrinho.module": [
		"./src/app/carrinho/carrinho.module.ts",
		"common",
		"carrinho-carrinho-module"
	],
	"./contato/contato.module": [
		"./src/app/contato/contato.module.ts",
		"contato-contato-module"
	],
	"./produtos/produtos.module": [
		"./src/app/produtos/produtos.module.ts",
		"common",
		"produtos-produtos-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nao_encontrado_nao_encontrado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nao-encontrado/nao-encontrado.component */ "./src/app/nao-encontrado/nao-encontrado.component.ts");




var routes = [
    { path: 'produtos', loadChildren: './produtos/produtos.module#ProdutosModule' },
    { path: 'carrinho', loadChildren: './carrinho/carrinho.module#CarrinhoModule' },
    { path: 'contato', loadChildren: './contato/contato.module#ContatoModule' },
    { path: '', redirectTo: 'produtos', pathMatch: 'full' },
    { path: "**", component: _nao_encontrado_nao_encontrado_component__WEBPACK_IMPORTED_MODULE_3__["NaoEncontradoComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conteiner\">\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'loja-virtual';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _barra_pesquisa_barra_pesquisa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./barra-pesquisa/barra-pesquisa.component */ "./src/app/barra-pesquisa/barra-pesquisa.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _nao_encontrado_nao_encontrado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nao-encontrado/nao-encontrado.component */ "./src/app/nao-encontrado/nao-encontrado.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _nao_encontrado_nao_encontrado_component__WEBPACK_IMPORTED_MODULE_11__["NaoEncontradoComponent"],
                _barra_pesquisa_barra_pesquisa_component__WEBPACK_IMPORTED_MODULE_8__["BarraPesquisaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/barra-pesquisa/barra-pesquisa.component.css":
/*!*************************************************************!*\
  !*** ./src/app/barra-pesquisa/barra-pesquisa.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-form{\n    height: 44px;\n    display: flex;\n}\n\n.search-form input{\n    box-sizing: border-box;\n    height: 56px;\n    padding: 28px;\n    flex:1;\n    background-color: var(--light-gray);\n    color: var(--gray);\n    border: none;\n    transition: all -3s ease-in-out;\n    font-size: 22px;\n}\n\n.search-form input:focus{\n    background-color: var(--blue);\n    outline: none;\n    color:#fff;\n}\n\n.search-form button{\n    width: 56px;\n    height: 56px;\n    background-color: var(--blue);\n    border: none;\n    color: #fff;\n    font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFycmEtcGVzcXVpc2EvYmFycmEtcGVzcXVpc2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsTUFBTTtJQUNOLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9iYXJyYS1wZXNxdWlzYS9iYXJyYS1wZXNxdWlzYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1mb3Jte1xuICAgIGhlaWdodDogNDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2VhcmNoLWZvcm0gaW5wdXR7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgcGFkZGluZzogMjhweDtcbiAgICBmbGV4OjE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLTNzIGVhc2UtaW4tb3V0O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnNlYXJjaC1mb3JtIGlucHV0OmZvY3Vze1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6I2ZmZjtcbn1cblxuLnNlYXJjaC1mb3JtIGJ1dHRvbntcbiAgICB3aWR0aDogNTZweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/barra-pesquisa/barra-pesquisa.component.html":
/*!**************************************************************!*\
  !*** ./src/app/barra-pesquisa/barra-pesquisa.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"search-form\" (ngSubmit)=\"pesquisar()\">\n  <input type=\"text\" name=\"descricao\" [(ngModel)]=\"descricao\">\n  <button><i class=\"fa-solid fa-magnifying-glass\"></i></button>\n</form>\n<!-- 6.O -->"

/***/ }),

/***/ "./src/app/barra-pesquisa/barra-pesquisa.component.ts":
/*!************************************************************!*\
  !*** ./src/app/barra-pesquisa/barra-pesquisa.component.ts ***!
  \************************************************************/
/*! exports provided: BarraPesquisaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarraPesquisaComponent", function() { return BarraPesquisaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BarraPesquisaComponent = /** @class */ (function () {
    function BarraPesquisaComponent(router) {
        this.router = router;
        this.descricao = "";
    }
    BarraPesquisaComponent.prototype.ngOnInit = function () {
    };
    BarraPesquisaComponent.prototype.pesquisar = function () {
        if (this.descricao) {
            this.router.navigate(["produtos"], { queryParams: { descricao: this.descricao } });
            return;
        }
        this.router.navigate(["produtos"]);
    };
    BarraPesquisaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barra-pesquisa',
            template: __webpack_require__(/*! ./barra-pesquisa.component.html */ "./src/app/barra-pesquisa/barra-pesquisa.component.html"),
            styles: [__webpack_require__(/*! ./barra-pesquisa.component.css */ "./src/app/barra-pesquisa/barra-pesquisa.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BarraPesquisaComponent);
    return BarraPesquisaComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    background-color: var(--light-gray);        \n    color: var(--gray);\n    font-size: 18px;\n}\n\n.footer__container {\n    display: flex;\n    justify-content: space-evenly;\n    flex-flow: row wrap;\n    padding: 20px;\n}\n\n.footer__copyright {\n    text-align: center;\n    margin-top: 20px;\n    background-color: var(--light-gray-2);    \n    font-weight: bold;\n    padding: 20px;\n    color: var(--gray);\n}\n\n.footer__title {\n    font-size: 22px;\n    font-weight: bold;\n    color: var(--blue);\n    margin-bottom: 5px;\n}\n\n.footer__about-text {\n    width: 400px;\n    text-align: justify;\n}\n\n.footer .icone_cor_orange {\n    color: var(--orange);\n}\n\n.footer li {\n    margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTsgICAgICAgIFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5mb290ZXJfX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mb290ZXJfX2NvcHlyaWdodCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheS0yKTsgICAgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XG59XG5cbi5mb290ZXJfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmZvb3Rlcl9fYWJvdXQtdGV4dCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cblxuLmZvb3RlciAuaWNvbmVfY29yX29yYW5nZSB7XG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XG59XG5cbi5mb290ZXIgbGkge1xuICAgIG1hcmdpbjogMTBweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"footer__container\">\n    <section>\n      <h2 class=\"footer__title\">Sobre</h2>\n      <p class=\"footer__about-text\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam est eligendi veritatis magnam amet ad cum fugit magni. Aut officiis earum repellendus deserunt possimus libero maxime quaerat delectus, sint non.\n      </p>\n    </section>\n    <address>\n      <h2 class=\"footer__title\">Contato</h2>\n      <ul>\n        <li><i class=\"fa-solid fa-envelope icone_cor_orange\"></i>email@email.com</li>\n        <li><i class=\"fa-solid fa-phone icone_cor_orange\"></i>(00) 0000-0000</li>\n        <li><i class=\"fa-brands fa-whatsapp icone_cor_orange\"></i> (00) 0000-0000</li>\n      </ul>\n    </address>\n  </div>\n  <section class=\"footer__copyright\">\n    &copy; Todos os direitos reservados <!-- 6.E -->\n  </section>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-header {    \n    padding: 10px 0px;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-items: center;\n    -moz-column-gap: 40px;\n         column-gap: 40px;\n}\n\n.main-header__title {    \n    font-size: 80px;\n    letter-spacing: -1.5px;    \n}\n\n.main-header__title--blue {\n    color: var(--blue);\n    color: blue;\n    font-size:60px;\n}\n\n.main-header__title--orange {\n    color: var(--orange);\n    color: orange;\n    font-size:60px;\n}\n\n.main-header__menu ul {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.main-header__menu a {\n    padding: 10px 10px;\n    color: var(--gray);\n    font-weight: 400;\n    font-size: 22px;\n    text-decoration: none;\n    transition: all .3s ease-in-out;\n}\n\n.main-header__menu a:hover {\n    background-color: var(--blue);\n    color: #fff;\n}\n\n.container-menu {\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    flex: 1;\n}\n\n.badge-carrinho {\n    background-color: var(--dark-blue);\n    padding: 5px 10px;    \n    border-radius: 4px;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixxQkFBZ0I7U0FBaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taGVhZGVyIHsgICAgXG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbHVtbi1nYXA6IDQwcHg7XG59XG5cbi5tYWluLWhlYWRlcl9fdGl0bGUgeyAgICBcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xLjVweDsgICAgXG59XG5cbi5tYWluLWhlYWRlcl9fdGl0bGUtLWJsdWUge1xuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBmb250LXNpemU6NjBweDtcbn1cblxuLm1haW4taGVhZGVyX190aXRsZS0tb3JhbmdlIHtcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGZvbnQtc2l6ZTo2MHB4O1xufVxuXG4ubWFpbi1oZWFkZXJfX21lbnUgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLm1haW4taGVhZGVyX19tZW51IGEge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5tYWluLWhlYWRlcl9fbWVudSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRhaW5lci1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcm93LWdhcDogMjBweDtcbiAgICBmbGV4OiAxO1xufVxuXG4uYmFkZ2UtY2FycmluaG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7ICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <h1 class=\"main-header__title\">\n    <span class=\"main-header__title--blue\">ProWay</span>\n    <span class=\"main-header__title--orange\">Computers</span>\n  </h1>\n  <div class=\"container-menu\">\n    <nav class=\"main-header__menu\">\n      <ul>\n        <li>\n          <a href=\"/produtos\">Produtos</a>\n        </li>\n        <li><a href=\"/carrinho\">\n          <i class=\"fa-solid fa-cart-shopping\"></i>\n          Carrinho\n          <span class=\"badge-carrinho\">0</span>\n        </a></li>\n        <li><a href=\"/contato\">Contato</a></li>\n        <li><a><i class=\"fa-brands fa-facebook-f\"></i></a></li>\n        <li><a><i class=\"fa-brands fa-instagram\"></i></a></li>\n        <li><a><i class=\"fa-brands fa-linkedin\"></i></a></li>\n        <li><a><i class=\"fa-brands fa-twitter\"></i></a></li>\n      </ul>\n    </nav>\n    <app-barra-pesquisa></app-barra-pesquisa>\n  </div>\n</header>\n<!-- 6.B -->\n<!-- 6. O 3.25 -->"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/nao-encontrado/nao-encontrado.component.css":
/*!*************************************************************!*\
  !*** ./src/app/nao-encontrado/nao-encontrado.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    height: 400px;\n}\n\n.container .icone_x {\n    font-size: 200px;\n}\n\n.container h2 {\n    font-size: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFvLWVuY29udHJhZG8vbmFvLWVuY29udHJhZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hby1lbmNvbnRyYWRvL25hby1lbmNvbnRyYWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNDAwcHg7XG59XG5cbi5jb250YWluZXIgLmljb25lX3gge1xuICAgIGZvbnQtc2l6ZTogMjAwcHg7XG59XG5cbi5jb250YWluZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogNDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nao-encontrado/nao-encontrado.component.html":
/*!**************************************************************!*\
  !*** ./src/app/nao-encontrado/nao-encontrado.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <i class=\"fa-solid fa-x icone_x\"></i>\n  <h2>404! Pagina não encontrada</h2>\n</section>"

/***/ }),

/***/ "./src/app/nao-encontrado/nao-encontrado.component.ts":
/*!************************************************************!*\
  !*** ./src/app/nao-encontrado/nao-encontrado.component.ts ***!
  \************************************************************/
/*! exports provided: NaoEncontradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaoEncontradoComponent", function() { return NaoEncontradoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NaoEncontradoComponent = /** @class */ (function () {
    function NaoEncontradoComponent() {
    }
    NaoEncontradoComponent.prototype.ngOnInit = function () {
    };
    NaoEncontradoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nao-encontrado',
            template: __webpack_require__(/*! ./nao-encontrado.component.html */ "./src/app/nao-encontrado/nao-encontrado.component.html"),
            styles: [__webpack_require__(/*! ./nao-encontrado.component.css */ "./src/app/nao-encontrado/nao-encontrado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NaoEncontradoComponent);
    return NaoEncontradoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Bkp\Bruno\Programação\start capgemini\Angular\loja-virtual\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map