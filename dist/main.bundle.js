webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.apiUrl = 'http://localhost:8080/api';
        //server
        //public readonly apiUrl = 'http://104.198.53.159:8080/api';
    }
    return AppConfig;
}());

;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_index__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_home_home_component__ = __webpack_require__("../../../../../src/app/dashboard/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_shared_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/dashboard/shared/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_shared_nav_nav_component__ = __webpack_require__("../../../../../src/app/dashboard/shared/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_manageuser_manageuser_component__ = __webpack_require__("../../../../../src/app/dashboard/manageuser/manageuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dashboard_manageuser_addsuperuser_addsuperuser_component__ = __webpack_require__("../../../../../src/app/dashboard/manageuser/addsuperuser/addsuperuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_managecompany_managecompany_component__ = __webpack_require__("../../../../../src/app/dashboard/managecompany/managecompany.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dashboard_managecompany_addcompany_addcompany_component__ = __webpack_require__("../../../../../src/app/dashboard/managecompany/addcompany/addcompany.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_services_company_company_service__ = __webpack_require__("../../../../../src/app/services/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__selfregister_selfregister_component__ = __webpack_require__("../../../../../src/app/selfregister/selfregister.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__directives_index__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dashboard_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dashboard_shared_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__dashboard_shared_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_19__dashboard_manageuser_manageuser_component__["a" /* ManageuserComponent */],
                __WEBPACK_IMPORTED_MODULE_20__dashboard_manageuser_addsuperuser_addsuperuser_component__["a" /* AddsuperuserComponent */],
                __WEBPACK_IMPORTED_MODULE_22__dashboard_managecompany_managecompany_component__["a" /* ManagecompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_23__dashboard_managecompany_addcompany_addcompany_component__["a" /* AddcompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_25__selfregister_selfregister_component__["a" /* SelfregisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_21_ng2_smart_table__["b" /* Ng2SmartTableModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__guards_index__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_12__services_index__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_12__services_index__["b" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_12__services_index__["d" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_24_app_services_company_company_service__["a" /* CompanyService */],
                __WEBPACK_IMPORTED_MODULE_9__app_config__["a" /* AppConfig */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_index__ = __webpack_require__("../../../../../src/app/dashboard/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selfregister_selfregister_component__ = __webpack_require__("../../../../../src/app/selfregister/selfregister.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// ,canActivate: [AuthGuard],
var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_index__["c" /* DashboardComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_index__["d" /* HomeComponent */], outlet: 'page' },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */], outlet: 'page' },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */], outlet: 'page' },
            { path: 'manageuser', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_index__["f" /* ManageuserComponent */], outlet: 'page' },
            { path: 'addsuperuser', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_index__["b" /* AddsuperuserComponent */], outlet: 'page' },
            { path: 'addcompany', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_index__["a" /* AddcompanyComponent */], outlet: 'page' },
            { path: 'companies', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_index__["e" /* ManagecompanyComponent */], outlet: 'page' }
        ], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'addcompanyowner', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_8__selfregister_selfregister_component__["a" /* SelfregisterComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page home-page\">\r\n  <!-- Main Navbar-->\r\n  <header class=\"header\">\r\n    <nav class=\"navbar\">\r\n      <!-- Search Box-->\r\n      <div class=\"search-box\">\r\n        <button class=\"dismiss\">\r\n          <i class=\"icon-close\"></i>\r\n        </button>\r\n        <form id=\"searchForm\" action=\"#\" role=\"search\">\r\n          <input type=\"search\" placeholder=\"What are you looking for...\" class=\"form-control\">\r\n        </form>\r\n      </div>\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-holder d-flex align-items-center justify-content-between\">\r\n          <!-- Navbar Header-->\r\n          <div class=\"navbar-header\">\r\n            <!-- Navbar Brand -->\r\n            <a href=\"/\" class=\"navbar-brand\">\r\n              <div class=\"brand-text brand-big\">\r\n                <span>Pro </span>\r\n                <strong>App</strong>\r\n              </div>\r\n              <div class=\"brand-text brand-small\">\r\n                <strong>PA</strong>\r\n              </div>\r\n            </a>\r\n            <!-- Toggle Button-->\r\n            <a id=\"toggle-btn\" href=\"#\" class=\"menu-btn active\">\r\n              <span></span>\r\n              <span></span>\r\n              <span></span>\r\n            </a>\r\n          </div>\r\n          <!-- Navbar Menu -->\r\n          <ul class=\"nav-menu list-unstyled d-flex flex-md-row align-items-md-center\">\r\n            <!-- Notifications-->\r\n            <li class=\"nav-item dropdown\">\r\n              <a id=\"notifications\" rel=\"nofollow\" data-target=\"#\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\r\n                class=\"nav-link\">\r\n                <i class=\"fa fa-bell-o\"></i>\r\n                <span class=\"badge bg-red\">12</span>\r\n              </a>\r\n              <ul aria-labelledby=\"notifications\" class=\"dropdown-menu\">\r\n                <li>\r\n                  <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item\">\r\n                    <div class=\"notification\">\r\n                      <div class=\"notification-content\">\r\n                        <i class=\"fa fa-envelope bg-green\"></i>You have 6 new messages </div>\r\n                      <div class=\"notification-time\">\r\n                        <small>4 minutes ago</small>\r\n                      </div>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item\">\r\n                    <div class=\"notification\">\r\n                      <div class=\"notification-content\">\r\n                        <i class=\"fa fa-twitter bg-blue\"></i>You have 2 followers</div>\r\n                      <div class=\"notification-time\">\r\n                        <small>4 minutes ago</small>\r\n                      </div>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item\">\r\n                    <div class=\"notification\">\r\n                      <div class=\"notification-content\">\r\n                        <i class=\"fa fa-upload bg-orange\"></i>Server Rebooted</div>\r\n                      <div class=\"notification-time\">\r\n                        <small>4 minutes ago</small>\r\n                      </div>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item\">\r\n                    <div class=\"notification\">\r\n                      <div class=\"notification-content\">\r\n                        <i class=\"fa fa-twitter bg-blue\"></i>You have 2 followers</div>\r\n                      <div class=\"notification-time\">\r\n                        <small>10 minutes ago</small>\r\n                      </div>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item all-notifications text-center\">\r\n                    <strong>view all notifications </strong>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <!-- Messages                        -->\r\n            <li class=\"nav-item dropdown\">\r\n              <a id=\"messages\" rel=\"nofollow\" data-target=\"#\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\r\n                class=\"nav-link\">\r\n                <i class=\"fa fa-envelope-o\"></i>\r\n                <span class=\"badge bg-orange\">10</span>\r\n              </a>\r\n              <ul aria-labelledby=\"notifications\" class=\"dropdown-menu\">\r\n                <li>\r\n                  <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item d-flex\">\r\n                    <div class=\"msg-profile\">\r\n                      <img src=\"../assets/img/avatar-1.jpg\" alt=\"...\" class=\"img-fluid rounded-circle\">\r\n                    </div>\r\n                    <div class=\"msg-body\">\r\n                      <h3 class=\"h5\">Jason Doe</h3>\r\n                      <span>Sent You Message</span>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item d-flex\">\r\n                    <div class=\"msg-profile\">\r\n                      <img src=\"../assets/img/avatar-2.jpg\" alt=\"...\" class=\"img-fluid rounded-circle\">\r\n                    </div>\r\n                    <div class=\"msg-body\">\r\n                      <h3 class=\"h5\">Frank Williams</h3>\r\n                      <span>Sent You Message</span>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item d-flex\">\r\n                    <div class=\"msg-profile\">\r\n                      <img src=\"../assets/img/avatar-3.jpg\" alt=\"...\" class=\"img-fluid rounded-circle\">\r\n                    </div>\r\n                    <div class=\"msg-body\">\r\n                      <h3 class=\"h5\">Ashley Wood</h3>\r\n                      <span>Sent You Message</span>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item all-notifications text-center\">\r\n                    <strong>Read all messages </strong>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <!-- Logout    -->\r\n            <li class=\"nav-item\">\r\n              <a href=\"/login\" class=\"nav-link logout\">Logout\r\n                <i class=\"fa fa-sign-out\"></i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </header>\r\n  <div class=\"page-content d-flex align-items-stretch\">\r\n      <!-- Side Navbar -->\r\n      <nav class=\"side-navbar\">\r\n        <app-sidebar></app-sidebar>\r\n      </nav>\r\n\r\n      <div class=\"content-inner\" style=\"min-height:800px\">\r\n        <div class=\"container\"><app-alert></app-alert></div>\r\n        <router-outlet name=\"page\"></router-outlet>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  font-family: 'Poppins', sans-serif;\n  font-size: 1.1em;\n  font-weight: 300;\n  line-height: 1.7em;\n  color: #999; }\n\na, a:hover, a:focus {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n/*\r\n=========================================\r\n=========================================\r\n\r\nBootstrap 4 Admin Template\r\n\r\nhttps://bootstrapious.com/p/admin-template\r\n\r\n=========================================\r\n========================================= */\n/*\r\n* ==========================================================\r\n*     GENERAL STYLES\r\n* ==========================================================\r\n*/\nbody {\n  overflow-x: hidden; }\n\na, i, span {\n  display: inline-block;\n  text-decoration: none;\n  transition: all 0.3s; }\n\na:hover, a:focus, i:hover, i:focus, span:hover, span:focus {\n  text-decoration: none; }\n\nul {\n  margin: 0;\n  padding: 0; }\n\nsection {\n  padding: 50px 0; }\n\ncanvas {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.container-fluid {\n  padding: 0 30px; }\n\n@media (max-width: 575px) {\n  .container-fluid {\n    padding: 0 15px; } }\n\nheader.page-header {\n  padding: 20px 0; }\n\ntable {\n  font-size: 0.9em;\n  color: #666; }\n\n.card-close {\n  position: absolute;\n  top: 15px;\n  right: 15px; }\n\n.card-close .dropdown-toggle {\n  color: #999;\n  background: none;\n  border: none; }\n\n.card-close .dropdown-toggle:after {\n  display: none; }\n\n.card-close .dropdown-menu {\n  border: none;\n  min-width: auto;\n  font-size: 0.9em;\n  border-radius: 0;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1), -2px -2px 3px rgba(0, 0, 0, 0.1); }\n\n.card-close .dropdown-menu a {\n  color: #999 !important; }\n\n.card-close .dropdown-menu a:hover {\n  background: #796AEE;\n  color: #fff !important; }\n\n.card-close .dropdown-menu a i {\n  margin-right: 10px;\n  transition: none; }\n\n.content-inner {\n  width: calc(100% - 250px); }\n\n.content-inner.active {\n  width: calc(100% - 90px); }\n\n.page-header {\n  background: #fff;\n  padding: 20px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 8; }\n\n*[class*=\"icon-\"] {\n  -webkit-transform: translateY(3px);\n  transform: translateY(3px); }\n\nbutton, input {\n  outline: none !important; }\n\n.card {\n  border-radius: 0;\n  border: none;\n  margin-bottom: 40px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1), -1px 0 2px rgba(0, 0, 0, 0.05); }\n\n.card-header {\n  background: #fff;\n  padding: 15px;\n  border-bottom: 1px solid #eee;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05); }\n\n.card-header h1, .card-header h2, .card-header h3, .card-header h4, .card-header h5, .card-header h6 {\n  margin-bottom: 0; }\n\n.card-body {\n  padding: 20px; }\n\n.breadcrumb-holder {\n  background: #fff; }\n\n.breadcrumb {\n  background: #fff;\n  position: relative;\n  z-index: 7;\n  border-radius: 0;\n  padding: 15px 0;\n  margin-bottom: 0; }\n\n.breadcrumb li.breadcrumb-item {\n  color: #aaa;\n  font-weight: 300; }\n\n/*=== Helpers ===*/\n.text-bold {\n  font-weight: 700; }\n\n.text-small {\n  font-size: 0.9rem; }\n\n.bg-red {\n  background: #ff7676 !important;\n  color: #fff; }\n\n.bg-red:hover {\n  color: #fff; }\n\n.bg-blue {\n  background: #85b4f2 !important;\n  color: #fff; }\n\n.bg-blue:hover {\n  color: #fff; }\n\n.bg-yellow {\n  background: #eef157 !important;\n  color: #fff; }\n\n.bg-yellow:hover {\n  color: #fff; }\n\n.bg-green {\n  background: #54e69d !important;\n  color: #fff; }\n\n.bg-green:hover {\n  color: #fff; }\n\n.bg-orange {\n  background: #ffc36d !important;\n  color: #fff; }\n\n.bg-orange:hover {\n  color: #fff; }\n\n.bg-violet {\n  background: #796AEE !important;\n  color: #fff; }\n\n.bg-violet:hover {\n  color: #fff; }\n\n.bg-gray {\n  background: #ced4da !important; }\n\n.bg-white {\n  background: #fff !important; }\n\n.text-red {\n  color: #ff7676; }\n\n.text-red:hover {\n  color: #ff7676; }\n\n.text-yellow {\n  color: #eef157; }\n\n.text-yellow:hover {\n  color: #eef157; }\n\n.text-green {\n  color: #54e69d; }\n\n.text-green:hover {\n  color: #54e69d; }\n\n.text-orange {\n  color: #ffc36d; }\n\n.text-orange:hover {\n  color: #ffc36d; }\n\n.text-violet {\n  color: #796AEE; }\n\n.text-violet:hover {\n  color: #796AEE; }\n\n.text-blue {\n  color: #85b4f2; }\n\n.text-blue:hover {\n  color: #85b4f2; }\n\n.text-gray {\n  color: #ced4da; }\n\n.text-gray:hover {\n  color: #ced4da; }\n\n.page {\n  background: #EEF5F9; }\n\n.page .text-white {\n  color: #fff; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.no-padding-bottom {\n  padding-bottom: 0 !important; }\n\n.no-padding-top {\n  padding-top: 0 !important; }\n\n.no-margin {\n  margin: 0 !important; }\n\n.no-margin-bottom {\n  margin-bottom: 0 !important; }\n\n.no-margin-top {\n  margin-top: 0 !important; }\n\n.page {\n  overflow-x: hidden; }\n\n.has-shadow {\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1), -1px 0 2px rgba(0, 0, 0, 0.05); }\n\n.badge {\n  font-weight: 400; }\n\n.badge-rounded {\n  border-radius: 50px; }\n\n/*\r\n  * ==========================================================\r\n  *     SIDEBAR\r\n  * ==========================================================\r\n  */\nnav.side-navbar {\n  background: #fff;\n  min-width: 250px;\n  max-width: 250px;\n  color: #686a76;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  z-index: 9;\n  /*==== Sidebar Header ====*/\n  /*==== Sidebar Menu ====*/\n  /*==== Shrinked Sidebar ====*/ }\n\nnav.side-navbar a {\n  color: inherit;\n  position: relative;\n  font-size: 0.9em; }\n\nnav.side-navbar a[data-toggle=\"collapse\"]::before {\n  content: '\\F104';\n  display: inline-block;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  font-family: 'FontAwesome';\n  position: absolute;\n  top: 50%;\n  right: 20px; }\n\nnav.side-navbar a[aria-expanded=\"true\"] {\n  background: #EEF5F9; }\n\nnav.side-navbar a[aria-expanded=\"true\"]::before {\n  content: '\\F107'; }\n\nnav.side-navbar a i {\n  font-size: 1.2em;\n  margin-right: 10px;\n  transition: none; }\n\nnav.side-navbar .sidebar-header {\n  padding: 30px 15px; }\n\nnav.side-navbar .avatar {\n  width: 55px;\n  height: 55px; }\n\nnav.side-navbar .title {\n  margin-left: 10px; }\n\nnav.side-navbar .title h1 {\n  color: #333; }\n\nnav.side-navbar .title p {\n  font-size: 0.9em;\n  font-weight: 200;\n  margin-bottom: 0;\n  color: #aaa; }\n\nnav.side-navbar span.heading {\n  text-transform: uppercase;\n  font-weight: 400;\n  margin-left: 20px;\n  color: #ccc;\n  font-size: 0.8em; }\n\nnav.side-navbar ul {\n  padding: 15px 0; }\n\nnav.side-navbar ul a {\n  padding: 10px 15px;\n  text-decoration: none;\n  display: block;\n  font-weight: 300;\n  border-left: 4px solid transparent; }\n\nnav.side-navbar ul a:hover {\n  background: #796AEE;\n  border-left: 4px solid #3b25e6;\n  color: #fff; }\n\nnav.side-navbar ul li.active a {\n  background: #EEF5F9; }\n\nnav.side-navbar ul li.active a:hover {\n  background: #796AEE; }\n\nnav.side-navbar ul ul {\n  padding: 0; }\n\nnav.side-navbar ul ul a {\n  padding-left: 50px;\n  background: #EEF5F9; }\n\nnav.side-navbar.shrinked {\n  min-width: 90px;\n  max-width: 90px;\n  text-align: center; }\n\nnav.side-navbar.shrinked span.heading {\n  margin: 0; }\n\nnav.side-navbar.shrinked a {\n  padding: 15px 10px;\n  border: none;\n  font-size: 0.8em;\n  color: #aaa;\n  transition: color 0.3s, background 0.3s; }\n\nnav.side-navbar.shrinked a[data-toggle=\"collapse\"]::before {\n  content: '\\F107';\n  -webkit-transform: translateX(50%);\n  transform: translateX(50%);\n  position: absolute;\n  top: auto;\n  right: 50%;\n  bottom: 0;\n  left: auto; }\n\nnav.side-navbar.shrinked a[data-toggle=\"collapse\"][aria-expanded=\"true\"]::before {\n  content: '\\F106'; }\n\nnav.side-navbar.shrinked a:hover {\n  color: #fff;\n  border: none; }\n\nnav.side-navbar.shrinked a:hover i {\n  color: #fff; }\n\nnav.side-navbar.shrinked a i {\n  margin-right: 0;\n  margin-bottom: 5px;\n  display: block;\n  font-size: 1.6em;\n  color: #333;\n  transition: color 0.3s; }\n\nnav.side-navbar.shrinked .sidebar-header .title {\n  display: none; }\n\n/* SIDBAR MEDIAQUERIES ----------------------------------- */\n@media (max-width: 1199px) {\n  nav.side-navbar {\n    margin-left: -90px;\n    min-width: 90px;\n    max-width: 90px;\n    text-align: center; }\n  nav.side-navbar span.heading {\n    margin: 0; }\n  nav.side-navbar ul a {\n    padding: 15px 10px;\n    border: none;\n    font-size: 0.8em;\n    color: #aaa;\n    transition: color 0.3s, background 0.3s; }\n  nav.side-navbar ul a[data-toggle=\"collapse\"]::before {\n    content: '\\F107';\n    -webkit-transform: translateX(50%);\n    transform: translateX(50%);\n    position: absolute;\n    top: auto;\n    right: 50%;\n    bottom: 0;\n    left: auto; }\n  nav.side-navbar ul a[data-toggle=\"collapse\"][aria-expanded=\"true\"]::before {\n    content: '\\F106'; }\n  nav.side-navbar ul a:hover {\n    color: #fff;\n    border: none; }\n  nav.side-navbar ul a:hover i {\n    color: #fff; }\n  nav.side-navbar ul a i {\n    margin-right: 0;\n    margin-bottom: 5px;\n    display: block;\n    font-size: 1.6em;\n    color: #333;\n    transition: color 0.3s; }\n  nav.side-navbar .sidebar-header .title {\n    display: none; }\n  nav.side-navbar.shrinked {\n    margin-left: 0; }\n  .content-inner {\n    width: 100%; }\n  .content-inner.active {\n    width: calc(100% - 90px); } }\n\n/*\r\n  * ==========================================================\r\n  *     MAIN NAVBAR\r\n  * ==========================================================\r\n  */\nnav.navbar {\n  background: #36D1DC;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #5B86E5, #36D1DC);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: #fff;\n  position: relative;\n  border-radius: 0;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n  z-index: 10;\n  padding-left: 0;\n  padding-right: 0;\n  /*==== Toggle Sidebar Btn ====*/\n  /*==== Navbar Items ====*/\n  /*==== Search Box ====*/\n  /*==== Dropdowns ====*/ }\n\nnav.navbar .badge {\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n  text-align: center;\n  padding: 0;\n  border-radius: 50%; }\n\nnav.navbar .navbar-holder {\n  width: 100%; }\n\nnav.navbar .navbar-brand .brand-small {\n  display: none; }\n\nnav.navbar .brand-big {\n  display: block; }\n\nnav.navbar .brand-small {\n  display: none; }\n\nnav.navbar a {\n  color: inherit; }\n\nnav.navbar .container-fluid {\n  width: 100%; }\n\nnav.navbar .menu-btn {\n  margin-right: 20px;\n  font-size: 1.2em;\n  transition: all 0.7s; }\n\nnav.navbar .menu-btn span {\n  width: 20px;\n  height: 2px;\n  background: #fff;\n  display: block;\n  margin: 4px auto 0;\n  transition: all 0.3s cubic-bezier(0.81, -0.33, 0.345, 1.375); }\n\nnav.navbar .menu-btn span:nth-of-type(2) {\n  position: relative;\n  width: 35px;\n  -webkit-transform: rotateY(180deg);\n  transform: rotateY(180deg); }\n\nnav.navbar .menu-btn span:nth-of-type(2)::before, nav.navbar .menu-btn span:nth-of-type(2)::after {\n  content: '';\n  width: 6px;\n  height: 2px;\n  display: block;\n  background: #fff;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: absolute;\n  top: 2px;\n  left: 0;\n  transition: all 0.7s; }\n\nnav.navbar .menu-btn span:nth-of-type(2)::after {\n  -webkit-transform: rotate(145deg);\n  transform: rotate(145deg);\n  position: absolute;\n  top: -2px;\n  left: 0; }\n\nnav.navbar .menu-btn.active span:first-of-type {\n  -webkit-transform: translateY(12px);\n  transform: translateY(12px); }\n\nnav.navbar .menu-btn.active span:nth-of-type(2) {\n  -webkit-transform: none;\n  transform: none; }\n\nnav.navbar .menu-btn.active span:last-of-type {\n  -webkit-transform: translateY(-12px);\n  transform: translateY(-12px); }\n\nnav.navbar .nav-item > a {\n  position: relative; }\n\nnav.navbar .nav-item > a span {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-weight: 400;\n  font-size: 0.7em; }\n\nnav.navbar .nav-item > a.logout i {\n  margin-left: 10px; }\n\nnav.navbar .search-box {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0;\n  background: #fff;\n  z-index: 12;\n  border-radius: 0;\n  display: none; }\n\nnav.navbar .search-box .dismiss {\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.5em;\n  color: #999; }\n\nnav.navbar .search-box form {\n  height: 100%; }\n\nnav.navbar .search-box form input {\n  height: 100%;\n  border: none;\n  padding: 20px; }\n\nnav.navbar .dropdown-menu {\n  right: 0;\n  min-width: 250px;\n  left: auto;\n  margin-top: 15px;\n  padding: 15px 0;\n  max-width: 400px;\n  border-radius: 0;\n  border: none;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1), -2px 0 2px rgba(0, 0, 0, 0.1); }\n\nnav.navbar .dropdown-menu a {\n  background: #fff;\n  padding: 10px 20px;\n  font-size: 0.8em;\n  color: #777;\n  width: 100%; }\n\nnav.navbar .dropdown-menu a:hover {\n  background: #f5f5f5; }\n\nnav.navbar .dropdown-menu a i {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  background: #796AEE;\n  text-align: center;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 10px; }\n\nnav.navbar .dropdown-menu a small {\n  margin-left: 40px; }\n\nnav.navbar .dropdown-menu span {\n  position: static;\n  font-size: 0.9em;\n  color: #999; }\n\nnav.navbar .dropdown-menu strong {\n  font-weight: 700; }\n\nnav.navbar .dropdown-menu .msg-profile {\n  width: 45px;\n  height: 45px;\n  margin-right: 10px; }\n\nnav.navbar .dropdown-menu h3 {\n  font-weight: 500; }\n\n/* MAIN NAVBAR MEDIAQUERIES ----------------------------------- */\n@media (max-width: 1199px) {\n  nav.navbar {\n    /*==== Toggle Sidebar Btn ====*/ }\n  nav.navbar .navbar-brand .brand-small {\n    display: block !important; }\n  nav.navbar .brand-big {\n    display: none; }\n  nav.navbar .brand-small {\n    display: block; }\n  nav.navbar .menu-btn {\n    margin-right: 20px;\n    font-size: 1.2em;\n    transition: all 0.7s; }\n  nav.navbar .menu-btn span:first-of-type {\n    -webkit-transform: translateY(12px);\n    transform: translateY(12px); }\n  nav.navbar .menu-btn span:nth-of-type(2) {\n    -webkit-transform: none;\n    transform: none; }\n  nav.navbar .menu-btn span:nth-of-type(2)::before, nav.navbar .menu-btn span:nth-of-type(2)::after {\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg); }\n  nav.navbar .menu-btn span:nth-of-type(2)::after {\n    -webkit-transform: rotate(145deg);\n    transform: rotate(145deg);\n    position: absolute;\n    top: -2px;\n    left: 0; }\n  nav.navbar .menu-btn span:last-of-type {\n    -webkit-transform: translateY(-12px);\n    transform: translateY(-12px); }\n  nav.navbar .menu-btn.active span:first-of-type {\n    -webkit-transform: none;\n    transform: none; }\n  nav.navbar .menu-btn.active span:nth-of-type(2) {\n    -webkit-transform: rotateY(180deg);\n    transform: rotateY(180deg); }\n  nav.navbar .menu-btn.active span:last-of-type {\n    -webkit-transform: none;\n    transform: none; } }\n\n@media (max-width: 575px) {\n  nav.navbar {\n    font-size: 14px; }\n  nav.navbar .badge {\n    width: 19px;\n    height: 19px; }\n  nav.navbar .nav-item > a {\n    font-size: 13px; }\n  nav.navbar .dropdown-menu {\n    right: auto;\n    left: -50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%); } }\n\n/*\r\n  * ==========================================================\r\n  *     DASHBOARD COUNTS SECTION\r\n  * ==========================================================\r\n  */\nsection.dashboard-counts .icon {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  min-width: 40px;\n  max-width: 40px;\n  border-radius: 50%; }\n\nsection.dashboard-counts .title {\n  font-size: 1.1em;\n  font-weight: 300;\n  color: #777;\n  margin: 0 20px; }\n\nsection.dashboard-counts .progress {\n  margin-top: 10px;\n  height: 4px; }\n\nsection.dashboard-counts .number {\n  font-size: 1.8em;\n  font-weight: 300; }\n\nsection.dashboard-counts .number strong {\n  font-weight: 700; }\n\nsection.dashboard-counts .row {\n  padding: 30px 15px;\n  margin: 0; }\n\nsection.dashboard-counts div[class*='col-'] .item {\n  border-right: 1px solid #eee;\n  padding: 15px 0; }\n\nsection.dashboard-counts div[class*='col-']:last-of-type .item {\n  border-right: none; }\n\n/*  DASHBOARD COUNTS MEDIAQUERIES ------------------------ */\n@media (max-width: 1199px) {\n  section.dashboard-counts div[class*='col-']:nth-of-type(2) .item {\n    border-right: none; } }\n\n@media (max-width: 575px) {\n  section.dashboard-counts div[class*='col-'] .item {\n    border-right: none; } }\n\n/*\r\n  * ==========================================================\r\n  *     DASHBOARD HEADER SECTION\r\n  * ==========================================================\r\n  */\n.statistic {\n  padding: 20px 15px;\n  margin-bottom: 15px; }\n\n.statistic:last-of-type {\n  margin-bottom: 0; }\n\n.statistic strong {\n  font-size: 1.5em;\n  color: #333;\n  font-weight: 700;\n  line-height: 1; }\n\n.statistic small {\n  color: #aaa;\n  text-transform: uppercase; }\n\n.statistic .icon {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  min-width: 40px;\n  max-width: 40px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 15px; }\n\n.chart .title {\n  padding: 15px 0 0 15px; }\n\n.chart .title strong {\n  font-weight: 700;\n  font-size: 1.2em; }\n\n.chart .title small {\n  color: #aaa;\n  text-transform: uppercase; }\n\n.chart .line-chart {\n  width: 100%;\n  height: 100%;\n  padding: 20px 0; }\n\n.chart .line-chart canvas {\n  width: calc(100% - 30px) !important; }\n\n.chart .bar-chart {\n  margin-bottom: 15px; }\n\n.chart .bar-chart canvas {\n  padding: 15px;\n  width: 100%;\n  margin: 0; }\n\n/*  DASHBOARD HEADER  MEDIAQUERIES ------------------------*/\n@media (max-width: 991px) {\n  section.dashboard-header div[class*='col-'] {\n    margin-bottom: 20px; } }\n\n/*\r\n  * ==========================================================\r\n  *     PROJECTS SECTION\r\n  * ==========================================================\r\n  */\n.project .row {\n  margin: 0;\n  padding: 15px 0;\n  margin-bottom: 15px; }\n\n.project div[class*='col-'] {\n  border-right: 1px solid #eee; }\n\n.project .text h3 {\n  margin-bottom: 0;\n  color: #555; }\n\n.project .text small {\n  color: #aaa;\n  font-size: 0.75em; }\n\n.project .project-date span {\n  font-size: 0.9em;\n  color: #999; }\n\n.project .image {\n  max-width: 50px;\n  min-width: 50px;\n  height: 50px;\n  margin-right: 15px; }\n\n.project .time, .project .comments, .project .project-progress {\n  color: #999;\n  font-size: 0.9em;\n  margin-right: 20px; }\n\n.project .time i, .project .comments i, .project .project-progress i {\n  margin-right: 5px; }\n\n.project .project-progress {\n  width: 200px; }\n\n.project .project-progress .progress {\n  height: 4px; }\n\n.project .card {\n  margin-bottom: 0; }\n\n/* PROJECTS SECTION ------------------------------------- */\n@media (max-width: 991px) {\n  .project .right-col {\n    margin-top: 20px;\n    margin-left: 65px; }\n  .project .project-progress {\n    width: 150px; } }\n\n@media (max-width: 480px) {\n  .project .project-progress {\n    display: none; } }\n\n/*\r\n  * ==========================================================\r\n  *     CLIENT SECTION\r\n  * ==========================================================\r\n  */\n/*====== Work Amount Box ======*/\n.work-amount .chart {\n  max-width: 180px;\n  max-height: 180px;\n  margin: 40px auto;\n  position: relative; }\n\n.work-amount .chart .text {\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n\n.work-amount .chart strong {\n  font-size: 1.5em; }\n\n.work-amount .chart span {\n  color: #999;\n  font-weight: 300; }\n\n.work-amount li span {\n  font-size: 0.85em;\n  margin-bottom: 10px;\n  color: #777;\n  display: block; }\n\n.work-amount li span::before {\n  content: '';\n  display: inline-block;\n  margin-right: 10px;\n  width: 7px;\n  height: 7px;\n  line-height: 7px;\n  background: #85b4f2;\n  border-radius: 50%; }\n\n/*====== Client Profile Box ======*/\n.client .client-avatar {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  position: relative; }\n\n.client .client-avatar .status {\n  content: '';\n  display: block;\n  width: 18px;\n  height: 18px;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  position: absolute;\n  right: 4px;\n  bottom: 4px; }\n\n.client .client-title {\n  margin-top: 20px; }\n\n.client .client-title h3 {\n  font-weight: 500;\n  color: #555; }\n\n.client .client-title span {\n  font-size: 0.9em;\n  color: #aaa;\n  display: block; }\n\n.client .client-title a {\n  padding: 2px 30px;\n  border-radius: 40px;\n  background: #54e69d;\n  color: #fff;\n  margin-top: 5px;\n  font-size: 0.9em;\n  text-decoration: none; }\n\n.client .client-title a:hover {\n  background: #85b4f2; }\n\n.client .client-info {\n  margin-top: 20px; }\n\n.client .client-info strong {\n  font-weight: 700; }\n\n.client .client-social {\n  margin-top: 20px; }\n\n.client .client-social a {\n  color: #aaa; }\n\n/*====== Total Overdue Box ======*/\n.overdue .chart canvas {\n  width: 100% !important;\n  z-index: 1; }\n\n.overdue .card {\n  margin-bottom: 0; }\n\n.overdue .card-body {\n  padding: 20px; }\n\n.overdue .card-body small {\n  font-weight: 300;\n  color: #aaa; }\n\n.overdue .card-body h3 {\n  margin-bottom: 5px; }\n\n.overdue .number {\n  font-size: 1.8em;\n  font-weight: 400;\n  color: #555;\n  margin: 35px 0; }\n\n/*\r\n  * ==========================================================\r\n  *     FEEDS SECTION\r\n  * ==========================================================\r\n  */\n/*====== Checklist Box ======*/\n.checklist label {\n  font-size: 0.8em;\n  color: #999;\n  line-height: 1.8em; }\n\n.checklist .item {\n  padding: 20px; }\n\n.checklist .item:nth-of-type(even) {\n  background: #fafafa; }\n\n/*====== Trending Articles Box ======*/\n.articles a {\n  text-decoration: none !important;\n  display: block;\n  margin-bottom: 0;\n  color: #555; }\n\n.articles .badge {\n  font-size: 0.7em;\n  padding: 5px 10px;\n  line-height: 1;\n  margin-left: 10px; }\n\n.articles .item {\n  padding: 20px; }\n\n.articles .item:nth-of-type(even) {\n  background: #fafafa; }\n\n.articles .item .image {\n  min-width: 50px;\n  max-width: 50px;\n  height: 50px;\n  margin-right: 15px; }\n\n.articles .item img {\n  padding: 3px;\n  border: 1px solid #28a745; }\n\n.articles .item h3 {\n  color: #555;\n  font-weight: 400;\n  margin-bottom: 0; }\n\n.articles .item small {\n  color: #aaa;\n  font-size: 0.75em; }\n\n/*\r\n  * ==========================================================\r\n  *     UPDATES SECTION\r\n  * ==========================================================\r\n  */\n/*====== Recent Updates Box ======*/\n.recent-updates .item {\n  padding: 20px; }\n\n.recent-updates .item:nth-of-type(even) {\n  background: #fafafa; }\n\n.recent-updates .icon {\n  margin-right: 10px; }\n\n.recent-updates h5 {\n  margin-bottom: 5px;\n  color: #333;\n  font-weight: 400; }\n\n.recent-updates p {\n  font-size: 0.8em;\n  color: #aaa;\n  margin-bottom: 0; }\n\n.recent-updates .date {\n  font-size: 0.9em;\n  color: #adadad; }\n\n.recent-updates .date strong {\n  font-size: 1.4em;\n  line-height: 0.8em;\n  display: block; }\n\n.recent-updates .date span {\n  font-size: 0.9em;\n  font-weight: 300; }\n\n/*====== Daily Feeds Box ======*/\n.daily-feeds .item {\n  padding: 20px;\n  border-bottom: 1px solid #eee; }\n\n.daily-feeds .feed-profile {\n  max-width: 50px;\n  min-width: 50px;\n  margin-right: 10px; }\n\n.daily-feeds h5 {\n  margin-bottom: 0;\n  color: #555; }\n\n.daily-feeds span {\n  font-size: 0.8em;\n  color: #999; }\n\n.daily-feeds .full-date {\n  font-size: 0.85em;\n  color: #aaa;\n  font-weight: 300; }\n\n.daily-feeds .CTAs {\n  margin-top: 5px; }\n\n.daily-feeds .CTAs a {\n  font-size: 0.7em;\n  padding: 3px 8px;\n  margin-right: 5px; }\n\n.daily-feeds .CTAs a i {\n  margin-right: 5px; }\n\n.daily-feeds .quote {\n  background: #fafafa;\n  margin-top: 5px;\n  border-radius: 0;\n  padding: 15px;\n  margin-left: 60px; }\n\n.daily-feeds .quote small {\n  font-size: 0.75em;\n  color: #777; }\n\n.daily-feeds .date {\n  font-size: 0.9em;\n  color: #aaa; }\n\n/*====== Recent Activities Box ======*/\n.recent-activities .item {\n  padding: 0 15px;\n  border-bottom: 1px solid #eee; }\n\n.recent-activities .item div[class*='col-'] {\n  padding: 15px; }\n\n.recent-activities h5 {\n  font-weight: 400;\n  color: #333; }\n\n.recent-activities p {\n  font-size: 0.75em;\n  color: #999; }\n\n.recent-activities .icon {\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  background: #f5f5f5;\n  text-align: center;\n  display: inline-block; }\n\n.recent-activities .date {\n  font-size: 0.75em;\n  color: #999;\n  padding: 10px; }\n\n.recent-activities .date-holder {\n  padding: 0 !important;\n  border-right: 1px solid #eee; }\n\n/*\r\n  * ==========================================================\r\n  *     FOOTER\r\n  * ==========================================================\r\n  */\nfooter.main-footer {\n  background: #2f333e;\n  color: #fff;\n  padding: 10px; }\n\nfooter.main-footer a {\n  color: inherit; }\n\nfooter.main-footer p {\n  margin: 0;\n  font-size: 0.8em; }\n\n/* FOOTER MEDIAQUERIES  --------------------------------- */\n@media (max-width: 575px) {\n  footer.main-footer div[class*='col'] {\n    text-align: center !important; } }\n\nsection.charts div[class*=\"col-\"] {\n  margin-bottom: 30px; }\n\nsection.charts header {\n  padding: 30px 0; }\n\nsection.charts div[class*=\"col-\"] {\n  margin-bottom: 0; }\n\n/*\r\n  * ==========================================================\r\n  *     LINE CHART\r\n  * ==========================================================\r\n  */\n.line-chart-example .card-block {\n  padding: 20px; }\n\n/*\r\n  * ==========================================================\r\n  *     POLAR CHART\r\n  * ==========================================================\r\n  */\n/*\r\n  * ==========================================================\r\n  *     POLAR CHART\r\n  * ==========================================================\r\n  */\n.polar-chart-example canvas {\n  max-width: 350px;\n  max-height: 350px;\n  margin: 20px auto; }\n\n/*\r\n  * ==========================================================\r\n  *     PIE CHART\r\n  * ==========================================================\r\n  */\n.pie-chart-example canvas {\n  max-width: 350px;\n  max-height: 350px;\n  margin: 15px auto; }\n\n/*\r\n  * ==========================================================\r\n  *     RADAR CHART\r\n  * ==========================================================\r\n  */\n.radar-chart-example canvas {\n  max-width: 350px;\n  max-height: 350px;\n  margin: 20px auto; }\n\n/* FORMS MEDIAQUERIES -------------------------- */\n@media (max-width: 991px) {\n  section.charts h2 {\n    font-size: 1rem; } }\n\n/*\r\n  * ==========================================================\r\n  *     FORM ELEMENTS\r\n  * ==========================================================\r\n  */\n.form-control {\n  border: 1px solid #e6e6e6;\n  border-radius: 0;\n  padding: 0.5rem 0.75rem; }\n\n.form-control::-moz-placeholder {\n  font-size: 0.9em;\n  font-weight: 300;\n  font-family: \"Poppins\", sans-serif;\n  color: #aaa; }\n\n.form-control::-webkit-input-placeholder {\n  font-size: 0.9em;\n  font-weight: 300;\n  font-family: \"Poppins\", sans-serif;\n  color: #aaa; }\n\n.form-control:-ms-input-placeholder {\n  font-size: 0.9em;\n  font-weight: 300;\n  font-family: \"Poppins\", sans-serif;\n  color: #aaa; }\n\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #796AEE;\n  outline: none; }\n\n.form-control:focus {\n  box-shadow: 0 0 0 3px rgba(121, 106, 238, 0.25); }\n\n.form-control-label {\n  color: #777;\n  font-weight: 300; }\n\nbutton, input[type='submit'] {\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: 300 !important; }\n\nform label {\n  font-size: 0.9em;\n  color: #777;\n  font-weight: 300; }\n\n.checkbox-template, .radio-template {\n  -webkit-transform: translateY(3px);\n  transform: translateY(3px);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  position: relative; }\n\n.checkbox-template + label, .radio-template + label {\n  margin-left: 10px; }\n\n.checkbox-template::before, .radio-template::before {\n  margin-right: 10px;\n  content: '';\n  display: inline-block;\n  -webkit-transform: translate(-2px, -2px);\n  transform: translate(-2px, -2px);\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n  text-align: center;\n  background: #dae2e7;\n  transition: all 0.2s; }\n\n.checkbox-template::after, .radio-template::after {\n  content: '\\F00C';\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n  text-align: center;\n  display: block;\n  font-family: 'FontAwesome';\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  font-size: 0.7em;\n  opacity: 0;\n  transition: all 0.2s;\n  color: #fff; }\n\n.checkbox-template:checked::before, .radio-template:checked::before {\n  background: #796AEE; }\n\n.checkbox-template:checked::after, .radio-template:checked::after {\n  opacity: 1; }\n\n.radio-template::before {\n  border-radius: 50%;\n  -webkit-transform: translate(-3px, -3px);\n  transform: translate(-3px, -3px); }\n\n.radio-template::after {\n  width: 6px;\n  height: 6px;\n  line-height: 6px;\n  text-align: center;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  border-radius: 50%;\n  content: ''; }\n\n.radio-template:checked::after {\n  background: #fff; }\n\ninput.input-material {\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #eee;\n  padding: 10px 0; }\n\ninput.input-material:focus {\n  border-color: #796AEE; }\n\ninput.input-material ~ label {\n  color: #aaa;\n  position: absolute;\n  top: 14px;\n  left: 0;\n  cursor: text;\n  transition: all 0.2s;\n  font-weight: 300; }\n\ninput.input-material ~ label.error {\n  color: #dc3545;\n  font-size: 0.75em;\n  position: absolute;\n  top: auto;\n  bottom: -30px;\n  left: 0; }\n\ninput.input-material ~ label.active {\n  font-size: 0.8em;\n  top: -10px;\n  color: #796AEE; }\n\n.form-group-material {\n  position: relative;\n  margin-bottom: 30px; }\n\n.input-group span.input-group-addon {\n  background: #f5f5f5;\n  color: #999;\n  font-weight: 300;\n  border-radius: 0;\n  border: 1px solid #eee; }\n\n.input-group .dropdown-toggle {\n  background: #f5f5f5;\n  color: #777; }\n\n.input-group .checkbox-template, .input-group .radio-template {\n  -webkit-transform: none;\n  transform: none; }\n\n.input-group ul.dropdown-menu {\n  padding: 15px;\n  color: #777;\n  border-radius: 0; }\n\n.input-group ul.dropdown-menu a {\n  padding: 5px 0;\n  color: inherit;\n  text-decoration: none; }\n\n.input-group ul.dropdown-menu a:hover {\n  color: #796AEE; }\n\n.modal-content {\n  border-radius: 0; }\n\n.i-checks {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\nselect {\n  margin-bottom: 10px; }\n\nselect option {\n  color: #999; }\n\n/*\r\n  * ==========================================================\r\n  *     FORM PAGE\r\n  * ==========================================================\r\n  */\nsection.forms p {\n  font-size: 0.9em;\n  color: #555; }\n\nsection.forms form span, section.forms form small {\n  font-size: 0.8em;\n  color: #999;\n  font-weight: 300; }\n\nsection.forms .line {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #eee;\n  margin: 30px 0; }\n\n/*\r\n  * ==========================================================\r\n  *     LOGIN PAGE\r\n  * ==========================================================\r\n  */\n.login-page {\n  position: relative; }\n\n.login-page::before {\n  content: '';\n  width: 100%;\n  height: 100%;\n  display: block;\n  z-index: -1;\n  background: #ddd;\n  background-size: cover;\n  -webkit-filter: blur(10px);\n  filter: blur(10px);\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  right: 0; }\n\n.login-page .container {\n  min-height: 100vh;\n  z-index: 999;\n  padding: 20px;\n  position: relative; }\n\n.login-page .form-holder {\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-bottom: 50px; }\n\n.login-page .form-holder .info, .login-page .form-holder .form {\n  min-height: 70vh;\n  padding: 40px;\n  height: 100%; }\n\n.login-page .form-holder div[class*='col-'] {\n  padding: 0; }\n\n.login-page .form-holder .info {\n  background: rgba(121, 106, 238, 0.9);\n  color: #fff; }\n\n.login-page .form-holder .info h1 {\n  font-size: 2.5em;\n  font-weight: 600; }\n\n.login-page .form-holder .info p {\n  font-weight: 300; }\n\n.login-page .form-holder .form .form-group {\n  position: relative;\n  margin-bottom: 30px; }\n\n.login-page .form-holder .form .content {\n  width: 100%; }\n\n.login-page .form-holder .form form {\n  width: 100%;\n  max-width: 400px; }\n\n.login-page .form-holder .form #login, .login-page .form-holder .form #register {\n  margin-bottom: 20px;\n  cursor: pointer; }\n\n.login-page .form-holder .form a.forgot-pass, .login-page .form-holder .form a.signup {\n  font-size: 0.9em;\n  color: #85b4f2; }\n\n.login-page .form-holder .form small {\n  color: #aaa; }\n\n.login-page .form-holder .form .terms-conditions label {\n  cursor: pointer;\n  color: #aaa;\n  font-size: 0.9em; }\n\n.login-page .copyrights {\n  width: 100%;\n  z-index: 9999;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  color: #fff; }\n\n@media (max-width: 991px) {\n  .login-page .info, .login-page .form {\n    min-height: auto !important; }\n  .login-page .info {\n    padding-top: 100px !important;\n    padding-bottom: 100px !important; } }\n\n/*\r\n  \r\n  =====================\r\n  STYLE SWITCHER FOR DEMO\r\n  =====================\r\n  \r\n  */\n#style-switch-button {\n  position: fixed;\n  top: 120px;\n  right: 0px;\n  border-radius: 0;\n  z-index: 12; }\n\n#style-switch {\n  width: 300px;\n  padding: 20px;\n  position: fixed;\n  top: 160px;\n  right: 0;\n  background: #fff;\n  border: solid 1px #ced4da;\n  z-index: 12; }\n\n#style-switch h4 {\n  color: #495057; }\n\n/* ========================================= \r\n     THEMING OF BOOTSTRAP COMPONENTS           \r\n     ========================================= */\n/*\r\n   * 1. NAVBAR\r\n   */\n.navbar {\n  padding: 0.5rem 1rem; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n  color: rgba(0, 0, 0, 0.7); }\n\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n\n.navbar-dark .navbar-brand {\n  color: white; }\n\n.navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n  color: white; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n\n.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n  color: rgba(255, 255, 255, 0.75); }\n\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: white; }\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n\n/*\r\n   * 2. BUTTONS\r\n   */\n.btn {\n  font-weight: normal;\n  border: 1px solid transparent;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  border-radius: 0.25rem;\n  transition: all 0.15s ease-in-out; }\n\n.btn:focus, .btn.focus {\n  outline: 0;\n  box-shadow: 0 0 0 3px rgba(121, 106, 238, 0.25); }\n\n.btn:active, .btn.active {\n  background-image: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #796AEE;\n  border-color: #796AEE; }\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #5a48ea;\n  border-color: #503ce9; }\n\n.btn-primary:focus, .btn-primary.focus {\n  box-shadow: 0 0 0 3px rgba(121, 106, 238, 0.5); }\n\n.btn-primary.disabled, .btn-primary:disabled {\n  background-color: #796AEE;\n  border-color: #796AEE; }\n\n.btn-primary:active, .btn-primary.active,\n.show > .btn-primary.dropdown-toggle {\n  background-color: #5a48ea;\n  background-image: none;\n  border-color: #503ce9; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96; }\n\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #727b84;\n  border-color: #6c757d; }\n\n.btn-secondary:focus, .btn-secondary.focus {\n  box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5); }\n\n.btn-secondary.disabled, .btn-secondary:disabled {\n  background-color: #868e96;\n  border-color: #868e96; }\n\n.btn-secondary:active, .btn-secondary.active,\n.show > .btn-secondary.dropdown-toggle {\n  background-color: #727b84;\n  background-image: none;\n  border-color: #6c757d; }\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34; }\n\n.btn-success:focus, .btn-success.focus {\n  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5); }\n\n.btn-success.disabled, .btn-success:disabled {\n  background-color: #28a745;\n  border-color: #28a745; }\n\n.btn-success:active, .btn-success.active,\n.show > .btn-success.dropdown-toggle {\n  background-color: #218838;\n  background-image: none;\n  border-color: #1e7e34; }\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b; }\n\n.btn-info:focus, .btn-info.focus {\n  box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5); }\n\n.btn-info.disabled, .btn-info:disabled {\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n\n.btn-info:active, .btn-info.active,\n.show > .btn-info.dropdown-toggle {\n  background-color: #138496;\n  background-image: none;\n  border-color: #117a8b; }\n\n.btn-warning {\n  color: #111;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n\n.btn-warning:hover {\n  color: #111;\n  background-color: #e0a800;\n  border-color: #d39e00; }\n\n.btn-warning:focus, .btn-warning.focus {\n  box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5); }\n\n.btn-warning.disabled, .btn-warning:disabled {\n  background-color: #ffc107;\n  border-color: #ffc107; }\n\n.btn-warning:active, .btn-warning.active,\n.show > .btn-warning.dropdown-toggle {\n  background-color: #e0a800;\n  background-image: none;\n  border-color: #d39e00; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130; }\n\n.btn-danger:focus, .btn-danger.focus {\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5); }\n\n.btn-danger.disabled, .btn-danger:disabled {\n  background-color: #dc3545;\n  border-color: #dc3545; }\n\n.btn-danger:active, .btn-danger.active,\n.show > .btn-danger.dropdown-toggle {\n  background-color: #c82333;\n  background-image: none;\n  border-color: #bd2130; }\n\n.btn-light {\n  color: #111;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n\n.btn-light:hover {\n  color: #111;\n  background-color: #e2e6ea;\n  border-color: #dae0e5; }\n\n.btn-light:focus, .btn-light.focus {\n  box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5); }\n\n.btn-light.disabled, .btn-light:disabled {\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n\n.btn-light:active, .btn-light.active,\n.show > .btn-light.dropdown-toggle {\n  background-color: #e2e6ea;\n  background-image: none;\n  border-color: #dae0e5; }\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n\n.btn-dark:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124; }\n\n.btn-dark:focus, .btn-dark.focus {\n  box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5); }\n\n.btn-dark.disabled, .btn-dark:disabled {\n  background-color: #343a40;\n  border-color: #343a40; }\n\n.btn-dark:active, .btn-dark.active,\n.show > .btn-dark.dropdown-toggle {\n  background-color: #23272b;\n  background-image: none;\n  border-color: #1d2124; }\n\n.btn-outline-primary {\n  color: #796AEE;\n  background-color: transparent;\n  background-image: none;\n  border-color: #796AEE; }\n\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #796AEE;\n  border-color: #796AEE; }\n\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  box-shadow: 0 0 0 3px rgba(121, 106, 238, 0.5); }\n\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #796AEE;\n  background-color: transparent; }\n\n.btn-outline-primary:active, .btn-outline-primary.active,\n.show > .btn-outline-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #796AEE;\n  border-color: #796AEE; }\n\n.btn-outline-secondary {\n  color: #868e96;\n  background-color: transparent;\n  background-image: none;\n  border-color: #868e96; }\n\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96; }\n\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5); }\n\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #868e96;\n  background-color: transparent; }\n\n.btn-outline-secondary:active, .btn-outline-secondary.active,\n.show > .btn-outline-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96; }\n\n.btn-outline-success {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745; }\n\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n\n.btn-outline-success:focus, .btn-outline-success.focus {\n  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5); }\n\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #28a745;\n  background-color: transparent; }\n\n.btn-outline-success:active, .btn-outline-success.active,\n.show > .btn-outline-success.dropdown-toggle {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n\n.btn-outline-info {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8; }\n\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n\n.btn-outline-info:focus, .btn-outline-info.focus {\n  box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5); }\n\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #17a2b8;\n  background-color: transparent; }\n\n.btn-outline-info:active, .btn-outline-info.active,\n.show > .btn-outline-info.dropdown-toggle {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n\n.btn-outline-warning {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107; }\n\n.btn-outline-warning:hover {\n  color: #fff;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5); }\n\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #ffc107;\n  background-color: transparent; }\n\n.btn-outline-warning:active, .btn-outline-warning.active,\n.show > .btn-outline-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545; }\n\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5); }\n\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #dc3545;\n  background-color: transparent; }\n\n.btn-outline-danger:active, .btn-outline-danger.active,\n.show > .btn-outline-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa; }\n\n.btn-outline-light:hover {\n  color: #fff;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n\n.btn-outline-light:focus, .btn-outline-light.focus {\n  box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5); }\n\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #f8f9fa;\n  background-color: transparent; }\n\n.btn-outline-light:active, .btn-outline-light.active,\n.show > .btn-outline-light.dropdown-toggle {\n  color: #fff;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n\n.btn-outline-dark {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40; }\n\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5); }\n\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #343a40;\n  background-color: transparent; }\n\n.btn-outline-dark:active, .btn-outline-dark.active,\n.show > .btn-outline-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n\n.btn-lg {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.btn-sm {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n/*\r\n   * 3. TYPE  \r\n   */\nbody {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff; }\n\na {\n  color: #796AEE;\n  text-decoration: none; }\n\na:focus, a:hover {\n  color: #3b25e6;\n  text-decoration: underline; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 700;\n  line-height: 1.1;\n  color: inherit; }\n\nh1,\n.h1 {\n  font-size: 1.5rem; }\n\nh2,\n.h2 {\n  font-size: 1.3rem; }\n\nh3,\n.h3 {\n  font-size: 1.2rem; }\n\nh4,\n.h4 {\n  font-size: 1.1rem; }\n\nh5,\n.h5 {\n  font-size: 0.9rem; }\n\nh6,\n.h6 {\n  font-size: 0.8rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.1; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.1; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.1; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.1; }\n\nhr {\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: normal; }\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.blockquote {\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n  border-left: 5px solid #796AEE; }\n\n.blockquote-footer {\n  color: #868e96; }\n\n.blockquote-footer::before {\n  content: \"\\2014   \\A0\"; }\n\n.text-primary {\n  color: #796AEE !important; }\n\na.text-primary:focus, a.text-primary:hover {\n  color: #503ce9 !important; }\n\n/*\r\n   * 4. PAGINATION\r\n   */\n.page-item:first-child .page-link {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.page-item.active .page-link {\n  color: #fff;\n  background-color: #796AEE;\n  border-color: #796AEE; }\n\n.page-item.disabled .page-link {\n  color: #868e96;\n  background-color: #fff;\n  border-color: #ddd; }\n\n.page-link {\n  padding: 0.5rem 0.75rem;\n  line-height: 1.25;\n  color: #796AEE;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n\n.page-link:focus, .page-link:hover {\n  color: #3b25e6;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #ddd; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n\n/*\r\n  * 5. UTILITIES\r\n  */\n.bg-primary {\n  background-color: #796AEE !important; }\n\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #503ce9 !important; }\n\n.bg-secondary {\n  background-color: #868e96 !important; }\n\na.bg-secondary:focus, a.bg-secondary:hover {\n  background-color: #6c757d !important; }\n\n.bg-success {\n  background-color: #28a745 !important; }\n\na.bg-success:focus, a.bg-success:hover {\n  background-color: #1e7e34 !important; }\n\n.bg-info {\n  background-color: #17a2b8 !important; }\n\na.bg-info:focus, a.bg-info:hover {\n  background-color: #117a8b !important; }\n\n.bg-warning {\n  background-color: #ffc107 !important; }\n\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #d39e00 !important; }\n\n.bg-danger {\n  background-color: #dc3545 !important; }\n\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #bd2130 !important; }\n\n.bg-light {\n  background-color: #f8f9fa !important; }\n\na.bg-light:focus, a.bg-light:hover {\n  background-color: #dae0e5 !important; }\n\n.bg-dark {\n  background-color: #343a40 !important; }\n\na.bg-dark:focus, a.bg-dark:hover {\n  background-color: #1d2124 !important; }\n\n.border-primary {\n  border-color: #796AEE !important; }\n\n.border-secondary {\n  border-color: #868e96 !important; }\n\n.border-success {\n  border-color: #28a745 !important; }\n\n.border-info {\n  border-color: #17a2b8 !important; }\n\n.border-warning {\n  border-color: #ffc107 !important; }\n\n.border-danger {\n  border-color: #dc3545 !important; }\n\n.border-light {\n  border-color: #f8f9fa !important; }\n\n.border-dark {\n  border-color: #343a40 !important; }\n\n.text-primary {\n  color: #796AEE !important; }\n\na.text-primary:focus, a.text-primary:hover {\n  color: #503ce9 !important; }\n\n.text-secondary {\n  color: #868e96 !important; }\n\na.text-secondary:focus, a.text-secondary:hover {\n  color: #6c757d !important; }\n\n.text-success {\n  color: #28a745 !important; }\n\na.text-success:focus, a.text-success:hover {\n  color: #1e7e34 !important; }\n\n.text-info {\n  color: #17a2b8 !important; }\n\na.text-info:focus, a.text-info:hover {\n  color: #117a8b !important; }\n\n.text-warning {\n  color: #ffc107 !important; }\n\na.text-warning:focus, a.text-warning:hover {\n  color: #d39e00 !important; }\n\n.text-danger {\n  color: #dc3545 !important; }\n\na.text-danger:focus, a.text-danger:hover {\n  color: #bd2130 !important; }\n\n.text-light {\n  color: #f8f9fa !important; }\n\na.text-light:focus, a.text-light:hover {\n  color: #dae0e5 !important; }\n\n.text-dark {\n  color: #343a40 !important; }\n\na.text-dark:focus, a.text-dark:hover {\n  color: #1d2124 !important; }\n\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\n#content {\n  padding: 20px;\n  min-height: 100vh;\n  transition: all 0.3s; }\n\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\n@media (max-width: 768px) {\n  #sidebar {\n    min-width: 80px;\n    max-width: 80px;\n    text-align: center;\n    margin-left: -80px !important; }\n  a[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\n    top: auto;\n    bottom: 5px;\n    right: 50%;\n    -webkit-transform: translateX(50%);\n    transform: translateX(50%); }\n  #sidebar.active {\n    margin-left: 0 !important; }\n  #sidebar .sidebar-header h3, #sidebar .CTAs {\n    display: none; }\n  #sidebar .sidebar-header strong {\n    display: block; }\n  #sidebar ul li a {\n    padding: 20px 10px; }\n  #sidebar ul li a span {\n    font-size: 0.85em; }\n  #sidebar ul li a i {\n    margin-right: 0;\n    display: block; }\n  #sidebar ul ul a {\n    padding: 10px !important; }\n  #sidebar ul li a i {\n    font-size: 1.3em; }\n  #sidebar {\n    margin-left: 0; }\n  #sidebarCollapse span {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Header-->\r\n<header class=\"page-header\">\r\n    <div class=\"container-fluid\">\r\n        <h2 class=\"no-margin-bottom\">Dashboard</h2>\r\n    </div>\r\n</header>\r\n<!-- Dashboard Counts Section-->\r\n<section class=\"dashboard-counts no-padding-bottom\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row bg-white has-shadow\">\r\n            <!-- Item -->\r\n            <div class=\"col-xl-3 col-sm-6\">\r\n                <div class=\"item d-flex align-items-center\">\r\n                    <div class=\"icon bg-violet\">\r\n                        <i class=\"icon-user\"></i>\r\n                    </div>\r\n                    <div class=\"title\">\r\n                        <span>New\r\n                            <br>Clients</span>\r\n                        <div class=\"progress\">\r\n                            <div role=\"progressbar\" style=\"width: 25%; height: 4px;\" aria-valuenow=\"{#val.value}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                                class=\"progress-bar bg-violet\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"number\">\r\n                        <strong>25</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Item -->\r\n            <div class=\"col-xl-3 col-sm-6\">\r\n                <div class=\"item d-flex align-items-center\">\r\n                    <div class=\"icon bg-red\">\r\n                        <i class=\"icon-padnote\"></i>\r\n                    </div>\r\n                    <div class=\"title\">\r\n                        <span>Work\r\n                            <br>Orders</span>\r\n                        <div class=\"progress\">\r\n                            <div role=\"progressbar\" style=\"width: 70%; height: 4px;\" aria-valuenow=\"{#val.value}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                                class=\"progress-bar bg-red\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"number\">\r\n                        <strong>70</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Item -->\r\n            <div class=\"col-xl-3 col-sm-6\">\r\n                <div class=\"item d-flex align-items-center\">\r\n                    <div class=\"icon bg-green\">\r\n                        <i class=\"icon-bill\"></i>\r\n                    </div>\r\n                    <div class=\"title\">\r\n                        <span>New\r\n                            <br>Invoices</span>\r\n                        <div class=\"progress\">\r\n                            <div role=\"progressbar\" style=\"width: 40%; height: 4px;\" aria-valuenow=\"{#val.value}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                                class=\"progress-bar bg-green\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"number\">\r\n                        <strong>40</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Item -->\r\n            <div class=\"col-xl-3 col-sm-6\">\r\n                <div class=\"item d-flex align-items-center\">\r\n                    <div class=\"icon bg-orange\">\r\n                        <i class=\"icon-check\"></i>\r\n                    </div>\r\n                    <div class=\"title\">\r\n                        <span>Open\r\n                            <br>Cases</span>\r\n                        <div class=\"progress\">\r\n                            <div role=\"progressbar\" style=\"width: 50%; height: 4px;\" aria-valuenow=\"{#val.value}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                                class=\"progress-bar bg-orange\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"number\">\r\n                        <strong>50</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Dashboard Header Section    -->\r\n<section class=\"dashboard-header\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <!-- Statistics -->\r\n            <div class=\"statistics col-lg-3 col-12\">\r\n                <div class=\"statistic d-flex align-items-center bg-white has-shadow\">\r\n                    <div class=\"icon bg-red\">\r\n                        <i class=\"fa fa-tasks\"></i>\r\n                    </div>\r\n                    <div class=\"text\">\r\n                        <strong>234</strong>\r\n                        <br>\r\n                        <small>Applications</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"statistic d-flex align-items-center bg-white has-shadow\">\r\n                    <div class=\"icon bg-green\">\r\n                        <i class=\"fa fa-calendar-o\"></i>\r\n                    </div>\r\n                    <div class=\"text\">\r\n                        <strong>152</strong>\r\n                        <br>\r\n                        <small>Interviews</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"statistic d-flex align-items-center bg-white has-shadow\">\r\n                    <div class=\"icon bg-orange\">\r\n                        <i class=\"fa fa-paper-plane-o\"></i>\r\n                    </div>\r\n                    <div class=\"text\">\r\n                        <strong>147</strong>\r\n                        <br>\r\n                        <small>Forwards</small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Line Chart            -->\r\n            <div class=\"chart col-lg-6 col-12\">\r\n                <div class=\"line-chart bg-white d-flex align-items-center justify-content-center has-shadow\">\r\n                    <canvas id=\"lineCahrt\"></canvas>\r\n                </div>\r\n            </div>\r\n            <div class=\"chart col-lg-3 col-12\">\r\n                <!-- Bar Chart   -->\r\n                <div class=\"bar-chart has-shadow bg-white\">\r\n                    <div class=\"title\">\r\n                        <strong class=\"text-violet\">95%</strong>\r\n                        <br>\r\n                        <small>Current Server Uptime</small>\r\n                    </div>\r\n                    <canvas id=\"barChartHome\"></canvas>\r\n                </div>\r\n                <!-- Numbers-->\r\n                <div class=\"statistic d-flex align-items-center bg-white has-shadow\">\r\n                    <div class=\"icon bg-green\">\r\n                        <i class=\"fa fa-line-chart\"></i>\r\n                    </div>\r\n                    <div class=\"text\">\r\n                        <strong>99.9%</strong>\r\n                        <br>\r\n                        <small>Success Rate</small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar1 {\n  background: #F17153;\n  /* For browsers that do not support gradients */\n  /* For Safari 5.1 to 6.0 */\n  /* For Opera 11.1 to 12.0 */\n  /* For Firefox 3.6 to 15 */\n  background: linear-gradient(#F17153, #F58D63, #f1ab53);\n  /* Standard syntax */\n  padding: 0px;\n  min-height: 100%; }\n\n.logo {\n  max-height: 130px; }\n\n.logo > img {\n  margin-top: 30px;\n  padding: 3px;\n  border: 3px solid white;\n  border-radius: 100%; }\n\n.list {\n  color: #fff;\n  list-style: none;\n  padding-left: 0px; }\n\n.list::first-line {\n  color: rgba(255, 255, 255, 0.5); }\n\n.list > li, h5 {\n  padding: 5px 0px 5px 40px; }\n\n.list > li:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n  border-left: 5px solid white;\n  color: white;\n  font-weight: bolder;\n  padding-left: 35px; }\n\n.main-content {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/dashboard/home/home.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manageuser_manageuser_component__ = __webpack_require__("../../../../../src/app/dashboard/manageuser/manageuser.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__manageuser_manageuser_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manageuser_addsuperuser_addsuperuser_component__ = __webpack_require__("../../../../../src/app/dashboard/manageuser/addsuperuser/addsuperuser.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__manageuser_addsuperuser_addsuperuser_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__managecompany_managecompany_component__ = __webpack_require__("../../../../../src/app/dashboard/managecompany/managecompany.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__managecompany_managecompany_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__managecompany_addcompany_addcompany_component__ = __webpack_require__("../../../../../src/app/dashboard/managecompany/addcompany/addcompany.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__managecompany_addcompany_addcompany_component__["a"]; });








/***/ }),

/***/ "../../../../../src/app/dashboard/managecompany/addcompany/addcompany.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Basic Form-->\r\n <div class=\"col-lg-6 mx-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-close\">\r\n        <div class=\"dropdown\">\r\n          <button type=\"button\" id=\"closeCard1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"dropdown-toggle\"><i class=\"fa fa-ellipsis-v\"></i></button>\r\n          <div aria-labelledby=\"closeCard1\" class=\"dropdown-menu dropdown-menu-right has-shadow\"><a href=\"#\" class=\"dropdown-item remove\"> <i class=\"fa fa-times\"></i>Close</a><a href=\"#\" class=\"dropdown-item edit\"> <i class=\"fa fa-gear\"></i>Edit</a></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-header d-flex align-items-center\">\r\n        <h3 class=\"h4\">Company Form</h3>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>This form is used to add new company</p>\r\n        \r\n        <form novalidate (ngSubmit)=\"onSubmit(company)\" [formGroup]=\"company\" class=\"register-form\">\r\n            <div class=\"form-group\">\r\n            <label>Company Name</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter company name\" formControlName=\"name\">\r\n           \r\n                <div class=\"error\" *ngIf=\"company.get('name').touched && company.get('name').hasError('required')\">\r\n                    Company Name is required\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"company.get('name').touched && company.get('name').hasError('minlength')\">\r\n                    Minimum of 3 characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n            <label>Type</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter company type\" formControlName=\"type\">\r\n           \r\n                <div class=\"error\" *ngIf=\"company.get('type').touched && company.get('type').hasError('required')\">\r\n                    Type is required\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"company.get('type').touched && company.get('type').hasError('minlength')\">\r\n                    Minimum of 3 characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n            <label>Company Email address</label>\r\n                <input type=\"email\"  class=\"form-control\" placeholder=\"Enter company/owner address\" formControlName=\"email\">\r\n            \r\n                <div class=\"error\" *ngIf=\"company.get('email').hasError('required') && company.get('email').touched\">\r\n                    Email is required\r\n                </div>\r\n\r\n                <div class=\"error\" *ngIf=\"company.get('email').touched && company.get('email').hasError('pattern')\">\r\n                    Enter valid email\r\n                </div>\r\n            </div> \r\n            <div class=\"form-group\">\r\n                <label>Trade Registration Number</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter trade registration number\" formControlName=\"traderegnumber\">\r\n            \r\n                <div class=\"error\" *ngIf=\"company.get('traderegnumber').touched && company.get('traderegnumber').hasError('required')\">\r\n                    Type is required\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"company.get('traderegnumber').touched && company.get('traderegnumber').hasError('minlength')\">\r\n                    Minimum of 3 characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"> \r\n                <label>Address</label>\r\n                <input type=\"address\"  class=\"form-control\" placeholder=\"Enter address\" formControlName=\"address\">\r\n            \r\n                <div class=\"error\" *ngIf=\"company.get('address').hasError('required') && company.get('address').touched\">\r\n                    Address is required\r\n                </div>\r\n            </div> \r\n            <div class=\"form-group\">\r\n                <label>Owner Name</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter owner name\" formControlName=\"ownername\">\r\n            \r\n                <div class=\"error\" *ngIf=\"company.get('ownername').touched && company.get('ownername').hasError('required')\">\r\n                    Owner name is required\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"company.get('ownername').touched && company.get('ownername').hasError('minlength')\">\r\n                    Minimum of 3 characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Owner Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter owner surname\" formControlName=\"ownersurname\">\r\n            \r\n                <div class=\"error\" *ngIf=\"company.get('ownersurname').touched && company.get('ownersurname').hasError('required')\">\r\n                    Owner last name is required\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"company.get('ownersurname').touched && company.get('ownersurname').hasError('minlength')\">\r\n                    Minimum of 3 characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n            <label>Phone</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter mobile number\" formControlName=\"ownerphone\">\r\n            \r\n                <div class=\"error\"  *ngIf=\"company.get('ownerphone').hasError('required') && company.get('ownerphone').touched\">\r\n                    Phone is required\r\n                </div>\r\n\r\n                <div class=\"error\" *ngIf=\"company.get('ownerphone').touched && company.get('ownerphone').hasError('pattern')\">\r\n                    Enter valid phone number\r\n                </div>\r\n            </div>  \r\n                \r\n            <div class=\"form-group\">  \r\n            <label>Time table</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter time table\" formControlName=\"timetable\">\r\n                \r\n                <div class=\"error\"  *ngIf=\"company.get('timetable').hasError('required') && company.get('timetable').touched\">\r\n                    timetable is required\r\n                </div>\r\n            </div> \r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block btn-round\" [disabled]=\"company.invalid\"><i *ngIf=\"loading\" class=\"fa fa-circle-o-notch fa-spin\"></i>Sign up</button>\r\n            </div>\r\n          </form>\r\n      </div>\r\n    </div>\r\n  </div> "

/***/ }),

/***/ "../../../../../src/app/dashboard/managecompany/addcompany/addcompany.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/managecompany/addcompany/addcompany.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddcompanyComponent = /** @class */ (function () {
    function AddcompanyComponent(router, userService, alertService, companyService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.companyService = companyService;
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AddcompanyComponent.prototype.ngOnInit = function () {
        this.company = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]),
            type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("[^ @]*@[^ @]*")
            ]),
            traderegnumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]),
            ownername: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]),
            ownersurname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]),
            ownerphone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^(0|[1-9][0-9]*)$")
            ]),
            ownedBy: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.currentUser._id),
            timetable: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('red', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            active: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](true),
            ownerpass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('Admin@123'),
            created: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](Date.now()),
            updated: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](Date.now())
        });
    };
    AddcompanyComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.loading = true;
            this.companyService.create(value)
                .subscribe(function (data) {
                _this.loading = false;
                _this.alertService.success('New company added successfully, Thank you', true);
            }, function (error) {
                _this.alertService.error(error._body);
                _this.loading = false;
            });
        }
    };
    AddcompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addcompany',
            template: __webpack_require__("../../../../../src/app/dashboard/managecompany/addcompany/addcompany.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/managecompany/addcompany/addcompany.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* CompanyService */]])
    ], AddcompanyComponent);
    return AddcompanyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/managecompany/managecompany.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Header-->\r\n<header class=\"page-header\">\r\n    <div class=\"container-fluid\">\r\n        <h2 class=\"no-margin-bottom\">Manage Companies</h2>\r\n    </div>\r\n</header>\r\n\r\n<div class=\"statistic d-flex justify-content-around proapp-padding\">\r\n    <div class=\"statistic d-flex align-items-center bg-white has-shadow col-lg-3\">\r\n        <div class=\"icon bg-red\">\r\n            <i class=\"fa fa-building-o\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <div class=\"text\">\r\n            <small>Add New</small>\r\n            <br>\r\n            <strong>Company</strong>\r\n        </div>\r\n    </div>\r\n    <div class=\"statistic d-flex align-items-center bg-white has-shadow col-lg-3\">\r\n        <div class=\"icon bg-red\">\r\n            <i class=\"fa fa-building-o\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <div class=\"text\">\r\n            <small>Edit</small>\r\n            <br>\r\n            <strong>Company</strong>\r\n        </div>\r\n    </div>\r\n    <div class=\"statistic d-flex align-items-center bg-white has-shadow col-lg-3\">\r\n        <div class=\"icon bg-red\">\r\n            <i class=\"fa fa-building-o\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <div class=\"text\">\r\n            <small>Delete</small>\r\n            <br>\r\n            <strong>Company</strong>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!loading\">\r\n    <div class=\"spinner\">\r\n        <div class=\"double-bounce1\"></div>\r\n        <div class=\"double-bounce2\"></div>\r\n    </div>\r\n</div>\r\n<div class=\"mx-auto proapp-padding\" *ngIf=\"loading\">\r\n        <div class=\"form-group pull-right proapp-padding\">\r\n            <a  [routerLink]=\"['/dashboard', {outlets: {page: ['addcompany']}}]\" class=\"btn btn-primary btn-block btn-round\">Add New Company</a>\r\n        </div>\r\n    <div class=\"bg-white proapp-table-border table-responsive\">\r\n            <ng2-smart-table class='form-control' [settings]=\"settings\" [source]=\"source\"  (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\"\r\n            (createConfirm)=\"onCreateConfirm($event)\"  ></ng2-smart-table> \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/managecompany/managecompany.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/managecompany/managecompany.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagecompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagecompanyComponent = /** @class */ (function () {
    function ManagecompanyComponent(userService, route, router, companyService) {
        var _this = this;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.companyService = companyService;
        this.companies = [];
        this.loading = false;
        this.settings = {
            add: {
                confirmCreate: true,
            },
            edit: {
                confirmSave: true
            },
            delete: {
                confirmDelete: true
            },
            columns: {
                name: {
                    title: 'Company Name'
                },
                type: {
                    title: 'Bussiness Type'
                },
                email: {
                    title: 'Email'
                },
                traderegnumber: {
                    title: 'Trade Registration Number'
                },
                timetable: {
                    title: 'Timetable'
                }
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.companyService.getAll().subscribe(function (companies) {
            _this.companies = companies;
            _this.loading = true;
            _this.source.load(companies);
        });
    }
    ManagecompanyComponent.prototype.ngOnInit = function () {
        //this.loadAllUsers();
    };
    ManagecompanyComponent.prototype.onSaveConfirm = function (event) {
        this.companyService.update(event.newData).subscribe(function () {
            event.confirm.resolve();
        });
    };
    ManagecompanyComponent.prototype.onDeleteConfirm = function (event) {
        this.companyService.delete(event.data._id).subscribe(function () {
            event.confirm.resolve();
        });
    };
    ManagecompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manageuser',
            template: __webpack_require__("../../../../../src/app/dashboard/managecompany/managecompany.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/managecompany/managecompany.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* CompanyService */]])
    ], ManagecompanyComponent);
    return ManagecompanyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/manageuser/addsuperuser/addsuperuser.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Basic Form-->\r\n <div class=\"col-lg-6 mx-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-close\">\r\n        <div class=\"dropdown\">\r\n          <button type=\"button\" id=\"closeCard1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"dropdown-toggle\"><i class=\"fa fa-ellipsis-v\"></i></button>\r\n          <div aria-labelledby=\"closeCard1\" class=\"dropdown-menu dropdown-menu-right has-shadow\"><a href=\"#\" class=\"dropdown-item remove\"> <i class=\"fa fa-times\"></i>Close</a><a href=\"#\" class=\"dropdown-item edit\"> <i class=\"fa fa-gear\"></i>Edit</a></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-header d-flex align-items-center\">\r\n        <h3 class=\"h4\">SuperUser Form</h3>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>This form is used to add new super user</p>\r\n        \r\n        <form novalidate (ngSubmit)=\"onSubmit(user)\" [formGroup]=\"user\" class=\"register-form\">\r\n            <div class=\"form-group\">\r\n            <label>Name</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter first name\" formControlName=\"name\">\r\n           \r\n                <div class=\"error\" *ngIf=\"user.get('name').touched && user.get('name').hasError('required')\">\r\n                    Name is required\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"user.get('name').touched && user.get('name').hasError('minlength')\">\r\n                    Minimum of 3 characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n            <label>Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter last name\" formControlName=\"surname\">\r\n           \r\n                <div class=\"error\" *ngIf=\"user.get('surname').touched && user.get('surname').hasError('required')\">\r\n                    Last Name is required\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"user.get('surname').touched && user.get('surname').hasError('minlength')\">\r\n                    Minimum of 3 characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n            <label>Email address</label>\r\n                <input type=\"email\"  class=\"form-control\" placeholder=\"Enter email address\" formControlName=\"email\">\r\n            \r\n                <div class=\"error\" *ngIf=\"user.get('email').hasError('required') && user.get('email').touched\">\r\n                    Email is required\r\n                </div>\r\n\r\n                <div class=\"error\" *ngIf=\"user.get('email').touched && user.get('email').hasError('pattern')\">\r\n                    Enter valid email\r\n                </div>\r\n            </div>             \r\n                <div class=\"form-group\"> \r\n                <label>Address</label>\r\n                    <input type=\"address\"  class=\"form-control\" placeholder=\"Enter address\" formControlName=\"address\">\r\n                \r\n                    <div class=\"error\" *ngIf=\"user.get('address').hasError('required') && user.get('address').touched\">\r\n                        Address is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                <label>Phone</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter mobile number\" formControlName=\"phone\">\r\n                \r\n                    <div class=\"error\"  *ngIf=\"user.get('phone').hasError('required') && user.get('phone').touched\">\r\n                        Phone is required\r\n                    </div>\r\n\r\n                    <div class=\"error\" *ngIf=\"user.get('phone').touched && user.get('phone').hasError('pattern')\">\r\n                        Enter valid phone number\r\n                    </div>\r\n                </div>  \r\n                <div class=\"form-group\">\r\n                <label>WhatsApp</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter whatsapp number\" formControlName=\"whatsapp\">\r\n                  \r\n                    <div class=\"error\"  *ngIf=\"user.get('whatsapp').hasError('required') && user.get('whatsapp').touched\">\r\n                        WhatsApp is required\r\n                    </div>\r\n\r\n                    <div class=\"error\" *ngIf=\"user.get('whatsapp').touched && user.get('whatsapp').hasError('pattern')\">\r\n                        Enter valid whatsapp number\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">  \r\n                <label>Assigned Color</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter assigned color\" formControlName=\"assignedColor\">\r\n                  \r\n                    <div class=\"error\"  *ngIf=\"user.get('assignedColor').hasError('required') && user.get('assignedColor').touched\">\r\n                        Assigned Color is required\r\n                    </div>\r\n                </div>  \r\n                <div class=\"form-group\">\r\n                <label>Working Hour</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter working hour\" formControlName=\"workingHour\">\r\n                  \r\n                    <div class=\"error\"  *ngIf=\"user.get('workingHour').hasError('required') && user.get('workingHour').touched\">\r\n                        Working Hour is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                <label>Vocation</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Vaction\" formControlName=\"vacation\">\r\n                  \r\n                    <div class=\"error\"  *ngIf=\"user.get('vacation').hasError('required') && user.get('vacation').touched\">\r\n                        Vaction is required\r\n                    </div>\r\n                </div>\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block btn-round\" [disabled]=\"user.invalid\"><i *ngIf=\"loading\" class=\"fa fa-circle-o-notch fa-spin\"></i>Sign up</button>\r\n            </div>\r\n          </form>\r\n      </div>\r\n    </div>\r\n  </div> "

/***/ }),

/***/ "../../../../../src/app/dashboard/manageuser/addsuperuser/addsuperuser.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/manageuser/addsuperuser/addsuperuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddsuperuserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddsuperuserComponent = /** @class */ (function () {
    function AddsuperuserComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AddsuperuserComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]),
            surname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("[^ @]*@[^ @]*")
            ]),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^(0|[1-9][0-9]*)$")
            ]),
            whatsapp: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^(0|[1-9][0-9]*)$")
            ]),
            role: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('superuser', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(2)
            ]),
            invitedBy: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.currentUser._id),
            assignedColor: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('red', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            workingHour: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('10', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            vacation: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('10', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('Admin@123'),
            created: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](Date.now()),
            updated: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](Date.now())
        });
    };
    AddsuperuserComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.loading = true;
            this.userService.create(value)
                .subscribe(function (data) {
                _this.loading = false;
                _this.alertService.success('New superuser added successfully, Thank you', true);
            }, function (error) {
                _this.alertService.error(error._body);
                _this.loading = false;
            });
        }
    };
    AddsuperuserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addsuperuser',
            template: __webpack_require__("../../../../../src/app/dashboard/manageuser/addsuperuser/addsuperuser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/manageuser/addsuperuser/addsuperuser.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AlertService */]])
    ], AddsuperuserComponent);
    return AddsuperuserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/manageuser/manageuser.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Header-->\r\n<header class=\"page-header\">\r\n    <div class=\"container-fluid\">\r\n        <h2 class=\"no-margin-bottom\">Manage Users</h2>\r\n    </div>\r\n</header>\r\n\r\n<div class=\"statistic d-flex justify-content-around proapp-padding\">\r\n    <div class=\"statistic d-flex align-items-center bg-white has-shadow col-lg-3\">\r\n        <div class=\"icon bg-red\">\r\n            <i class=\"icon-user\"></i>\r\n        </div>\r\n        <div class=\"text\">\r\n            <small>Add New</small>\r\n            <br>\r\n            <strong>SuperUser</strong>\r\n        </div>\r\n    </div>\r\n    <div class=\"statistic d-flex align-items-center bg-white has-shadow col-lg-3\">\r\n        <div class=\"icon bg-red\">\r\n            <i class=\"icon-user\"></i>\r\n        </div>\r\n        <div class=\"text\">\r\n            <small>Edit</small>\r\n            <br>\r\n            <strong>SuperUser</strong>\r\n        </div>\r\n    </div>\r\n    <div class=\"statistic d-flex align-items-center bg-white has-shadow col-lg-3\">\r\n        <div class=\"icon bg-red\">\r\n            <i class=\"icon-user\"></i>\r\n        </div>\r\n        <div class=\"text\">\r\n            <small>Delete</small>\r\n            <br>\r\n            <strong>SuperUser</strong>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!loading\">\r\n    <div class=\"spinner\">\r\n        <div class=\"double-bounce1\"></div>\r\n        <div class=\"double-bounce2\"></div>\r\n    </div>\r\n</div>\r\n<div class=\"mx-auto proapp-padding\" *ngIf=\"loading\">\r\n        <div class=\"form-group pull-right proapp-padding\">\r\n            <a  [routerLink]=\"['/dashboard', {outlets: {page: ['addsuperuser']}}]\" class=\"btn btn-primary btn-block btn-round\">Add New SuperUser</a>\r\n        </div>\r\n    <div class=\"bg-white proapp-table-border table-responsive\">\r\n            <ng2-smart-table class='form-control' [settings]=\"settings\" [source]=\"source\"  (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\"\r\n            (createConfirm)=\"onCreateConfirm($event)\"  ></ng2-smart-table> \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/manageuser/manageuser.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "generic-table table thead tr th.sort-enable {\n  cursor: pointer; }\n  generic-table table thead tr th.sort-enable:hover {\n    text-decoration: underline; }\n\ngeneric-table table thead tr th.sort-asc {\n  cursor: pointer; }\n  generic-table table thead tr th.sort-asc:hover {\n    text-decoration: underline; }\n  generic-table table thead tr th.sort-asc::after {\n    content: \"\";\n    display: inline-block;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #000;\n    border-radius: 2px;\n    margin-left: 4px;\n    vertical-align: middle; }\n\ngeneric-table table thead tr th.sort-desc {\n  cursor: pointer; }\n  generic-table table thead tr th.sort-desc:hover {\n    text-decoration: underline; }\n  generic-table table thead tr th.sort-desc::after {\n    content: \"\";\n    display: inline-block;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #000;\n    border-radius: 2px;\n    margin-left: 4px;\n    vertical-align: middle; }\n\ngeneric-table table span.gt-row-label, generic-table table th.gt-sort-label {\n  display: none; }\n\ngeneric-table table tr td.gt-button {\n  vertical-align: middle;\n  padding-top: 0;\n  padding-bottom: 0;\n  width: 1px; }\n\ngeneric-table table tr.row-expanded > td {\n  padding: 0; }\n\ngeneric-table table input.inline-edit {\n  border: none;\n  outline: none;\n  line-height: initial;\n  width: 100%;\n  background: none;\n  position: relative;\n  text-align: inherit; }\n\ngeneric-table table .gt-inline-edit {\n  position: relative; }\n  generic-table table .gt-inline-edit::before {\n    opacity: 0;\n    position: absolute;\n    content: '';\n    margin-left: -0.75rem;\n    background: #007bff;\n    height: 1px;\n    width: 100%;\n    top: auto;\n    bottom: -1px;\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0);\n    transition: all .2s ease-in-out; }\n  generic-table table .gt-inline-edit.gt-edited::before {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n    opacity: 1; }\n  generic-table table .gt-inline-edit .gt-dropdown .dropdown-menu {\n    -webkit-animation: fade-in 0.2s ease-in-out;\n            animation: fade-in 0.2s ease-in-out; }\n    generic-table table .gt-inline-edit .gt-dropdown .dropdown-menu .dropdown-item {\n      cursor: pointer; }\n  generic-table table .gt-inline-edit .gt-inline-edit-notice {\n    opacity: 0;\n    transition: opacity 0.5s ease-in-out;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: inline-block;\n    width: 100%;\n    font-size: 7px;\n    text-transform: uppercase;\n    color: #007bff;\n    text-align: center; }\n  generic-table table .gt-inline-edit.gt-edited .gt-inline-edit-notice {\n    opacity: 1; }\n\ngeneric-table table thead.gt-totals {\n  border-bottom: 2px solid #e9ecef; }\n\ngeneric-table table tfoot.gt-totals {\n  border-top: 2px solid #e9ecef; }\n\ngeneric-table table .gt-totals tr td {\n  font-weight: bold;\n  color: #495057;\n  background: #f8f9fa;\n  font-size: 0.875rem; }\n\ngeneric-table table.table-sm .gt-inline-edit::before {\n  margin-left: -0.3rem; }\n\n.gt-dropdown-menu.show {\n  max-height: 320px;\n  overflow: auto; }\n\n@media (max-width: 768px) {\n  generic-table table.table-stacked thead tr {\n    display: table;\n    width: 100%; }\n    generic-table table.table-stacked thead tr th {\n      text-align: right; }\n      generic-table table.table-stacked thead tr th:first-child {\n        text-align: left; }\n      generic-table table.table-stacked thead tr th.sort-disable {\n        display: none; }\n      generic-table table.table-stacked thead tr th.gt-sort-label {\n        display: table-cell; }\n  generic-table table.table-stacked tr + tr {\n    border-top: 1px solid #ddd; }\n  generic-table table.table-stacked tr td {\n    display: block;\n    border: none; }\n    generic-table table.table-stacked tr td > span {\n      display: table-cell; }\n    generic-table table.table-stacked tr td > span.gt-row-label {\n      white-space: nowrap;\n      font-weight: bold; }\n    generic-table table.table-stacked tr td > span.gt-row-content {\n      text-align: right;\n      width: 100%; }\n    generic-table table.table-stacked tr td.hidden-stacked {\n      display: none; } }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/manageuser/manageuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageuserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageuserComponent = /** @class */ (function () {
    function ManageuserComponent(userService, route, router) {
        var _this = this;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.users = [];
        this.loading = false;
        this.settings = {
            add: {
                confirmCreate: true,
            },
            edit: {
                confirmSave: true
            },
            delete: {
                confirmDelete: true
            },
            columns: {
                name: {
                    title: 'Full Name'
                },
                surname: {
                    title: 'Last Name'
                },
                email: {
                    title: 'Email'
                },
                address: {
                    title: 'Address'
                },
                whatsapp: {
                    title: 'Whatsapp'
                }
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userService.getAll().subscribe(function (users) {
            _this.users = users;
            _this.loading = true;
            _this.source.load(users);
        });
    }
    ManageuserComponent.prototype.ngOnInit = function () {
        //this.loadAllUsers();
    };
    ManageuserComponent.prototype.onSaveConfirm = function (event) {
        this.userService.update(event.newData).subscribe(function () {
            event.confirm.resolve();
        });
    };
    ManageuserComponent.prototype.onDeleteConfirm = function (event) {
        this.userService.delete(event.data._id).subscribe(function () {
            event.confirm.resolve();
        });
    };
    ManageuserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manageuser',
            template: __webpack_require__("../../../../../src/app/dashboard/manageuser/manageuser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/manageuser/manageuser.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], ManageuserComponent);
    return ManageuserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/shared/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.22); }\n\n.navbar-btn {\n  box-shadow: none;\n  outline: none !important;\n  border: none; }\n\n.line {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 40px 0; }\n\ni, span {\n  display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/dashboard/shared/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/shared/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header-->\r\n<div class=\"sidebar-header d-flex align-items-center\">\r\n       <div class=\"title\">\r\n          <h1 class=\"h4\">{{ currentUser.name }}  {{ currentUser.surname }}</h1>\r\n          <p>{{ currentUser.role }}</p>\r\n        </div>\r\n      </div>\r\n      <!-- Sidebar Navidation Menus--><span class=\"heading\">Main</span>\r\n      <ul class=\"list-unstyled\">\r\n        <li class=\"active\"> <a [routerLink]=\"['/']\"><i class=\"icon-home\"></i>Home</a></li>\r\n        <!-- <li><a href=\"#dashvariants\" aria-expanded=\"false\" data-toggle=\"collapse\"> <i class=\"icon-interface-windows\"></i>Dropdown </a>\r\n          <ul id=\"dashvariants\" class=\"collapse list-unstyled\">\r\n            <li><a href=\"#\">Page</a></li>\r\n            <li><a href=\"#\">Page</a></li>\r\n            <li><a href=\"#\">Page</a></li>\r\n            <li><a href=\"#\">Page</a></li>\r\n          </ul>\r\n        </li> -->\r\n        <li> <a [routerLink]=\"['/dashboard', {outlets: {page: ['companies']}}]\"><i class=\"fa fa-building-o\" aria-hidden=\"true\"></i>Manage Companies</a></li>\r\n        <li> <a [routerLink]=\"['/dashboard', {outlets: {page: ['manageuser']}}]\"> <i class=\"icon-user\"></i>Manage Users </a></li>\r\n        <li> <a [routerLink]=\"['/dashboard', {outlets: {page: ['managereports']}}]\"> <i class=\"icon-padnote\"></i>Manage Reports </a></li>\r\n        <li> <a [routerLink]=\"['/dashboard', {outlets: {page: ['manageinvoices']}}]\"> <i class=\"icon-interface-windows\"></i>Manage Invoices</a></li>\r\n      <!-- </ul><span class=\"heading\">Extras</span>\r\n      <ul class=\"list-unstyled\">\r\n        <li> <a href=\"#\"> <i class=\"icon-flask\"></i>Demo </a></li>\r\n        <li> <a href=\"#\"> <i class=\"icon-screen\"></i>Demo </a></li>\r\n        <li> <a href=\"#\"> <i class=\"icon-mail\"></i>Demo </a></li>\r\n        <li> <a href=\"#\"> <i class=\"icon-picture\"></i>Demo </a></li>\r\n      </ul> -->\r\n    "

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#sidebar {\n  min-width: 250px;\n  max-width: 250px;\n  min-height: 1000px;\n  background: #7386D5;\n  color: #fff;\n  transition: all 0.3s; }\n\n#sidebar.active {\n  min-width: 80px;\n  max-width: 80px;\n  text-align: center; }\n\n#sidebar.active .sidebar-header h3, #sidebar.active .CTAs {\n  display: none; }\n\n#sidebar.active .sidebar-header strong {\n  display: block; }\n\n#sidebar ul li a {\n  text-align: left;\n  color: #fff;\n  font-weight: bold; }\n\n#sidebar.active ul li a {\n  padding: 20px 10px;\n  text-align: center;\n  font-size: 0.85em; }\n\n#sidebar.active ul li a i {\n  margin-right: 0;\n  display: block;\n  font-size: 1.8em;\n  margin-bottom: 5px; }\n\n#sidebar.active ul ul a {\n  padding: 10px !important; }\n\n#sidebar.active a[aria-expanded=\"false\"]::before, #sidebar.active a[aria-expanded=\"true\"]::before {\n  top: auto;\n  bottom: 5px;\n  right: 50%;\n  -webkit-transform: translateX(50%);\n  transform: translateX(50%); }\n\n#sidebar .sidebar-header {\n  padding: 20px;\n  background: #6d7fcc; }\n\n#sidebar .sidebar-header strong {\n  display: none;\n  font-size: 1.8em; }\n\n#sidebar ul.components {\n  padding: 20px 0;\n  border-bottom: 1px solid #47748b; }\n\n#sidebar ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block; }\n\n#sidebar ul li a:hover {\n  color: #7386D5;\n  background: #fff; }\n\n#sidebar ul li a i {\n  margin-right: 10px; }\n\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\n  color: #fff;\n  background: #6d7fcc; }\n\na[data-toggle=\"collapse\"] {\n  position: relative; }\n\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\n  content: '\\E259';\n  display: block;\n  position: absolute;\n  right: 20px;\n  font-family: 'Glyphicons Halflings';\n  font-size: 0.6em; }\n\na[aria-expanded=\"true\"]::before {\n  content: '\\E260'; }\n\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #6d7fcc; }\n\nul.CTAs {\n  padding: 20px; }\n\nul.CTAs a {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px; }\n\na.sidebarBtn {\n  background: #fff;\n  color: #8d8484 !important; }\n\na.article, a.article:hover {\n  background: #6d7fcc !important;\n  color: #fff !important; }\n\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\n@media (max-width: 768px) {\n  #sidebar {\n    min-width: 80px;\n    max-width: 80px;\n    text-align: center;\n    margin-left: -80px !important; }\n  a[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\n    top: auto;\n    bottom: 5px;\n    right: 50%;\n    -webkit-transform: translateX(50%);\n    transform: translateX(50%); }\n  #sidebar.active {\n    margin-left: 0 !important; }\n  #sidebar .sidebar-header h3, #sidebar .CTAs {\n    display: none; }\n  #sidebar .sidebar-header strong {\n    display: block; }\n  #sidebar ul li a {\n    padding: 20px 10px; }\n  #sidebar ul li a span {\n    font-size: 0.85em; }\n  #sidebar ul li a i {\n    margin-right: 0;\n    display: block; }\n  #sidebar ul ul a {\n    padding: 10px !important; }\n  #sidebar ul li a i {\n    font-size: 1.3em; }\n  #sidebar {\n    margin-left: 0; }\n  #sidebarCollapse span {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/dashboard/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/shared/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"alert-dismissable\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' } \">\r\n    <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n  {{message.text}}\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/directives/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_alert_service__ = __webpack_require__("../../../../../src/app/services/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert',
            template: __webpack_require__("../../../../../src/app/directives/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alert_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_alert_component__ = __webpack_require__("../../../../../src/app/directives/alert/alert.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_alert_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"container\">\r\n        <app-alert></app-alert>\r\n    </div>\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-5 col-sm-6 mr-auto ml-auto h-100\">\r\n                <section class=\"form-elegant align-middle\">\r\n\r\n                    <!--Form without header-->\r\n                    <div class=\"card\">\r\n\r\n                        <div class=\"card-body mx-4\">\r\n                            <form novalidate (ngSubmit)=\"onSubmit(user)\" [formGroup]=\"user\" class=\"register-form\">\r\n                                <!--Header-->\r\n                                <div class=\"text-center\">\r\n                                    <h3 class=\"dark-grey-text mb-5\">\r\n                                        <strong>Sign in</strong>\r\n                                    </h3>\r\n                                </div>\r\n\r\n                                <div class=\"md-form\">\r\n                                    \r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"email\">\r\n                                    <label>Email</label>\r\n\r\n                                    <div class=\"error\" *ngIf=\"user.get('email').touched && user.get('email').hasError('required')\">\r\n                                        Email is required\r\n                                    </div>\r\n                                    <div class=\"error\" *ngIf=\"user.get('email').touched && user.get('email').hasError('pattern')\">\r\n                                        Enter valid email\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"md-form pb-3\">\r\n                                   \r\n                                    <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n                                    <label>Password</label>\r\n                                    <div class=\"error\" *ngIf=\"user.get('password').touched && user.get('password').hasError('required')\">\r\n                                        Password is required\r\n                                    </div>\r\n                                    <div class=\"error\" *ngIf=\"user.get('password').touched && user.get('password').hasError('minlength')\">\r\n                                        Minimum of 2 characters\r\n                                    </div>\r\n\r\n                                    <!-- <p class=\"font-small blue-text d-flex justify-content-end\">Forgot\r\n                                            <a href=\"#\" class=\"blue-text ml-1\"> Password?</a>\r\n                                    </p> -->\r\n                                </div>\r\n\r\n                                <div class=\"text-center mb-3\">\r\n                                    <button type=\"submit\" class=\"btn blue-gradient btn-block submit-button z-depth-1a\" [disabled]=\"user.invalid\">\r\n                                        <i *ngIf=\"loading\" class=\"fa fa-circle-o-notch fa-spin\"></i> Sign in\r\n                                    </button>\r\n                                </div>\r\n                            </form>\r\n\r\n                        </div>\r\n\r\n                        <!--Footer-->\r\n                        <div class=\"modal-footer mx-5 pt-3 mb-1\">\r\n                            <p class=\"font-small grey-text d-flex justify-content-end\">Not a member?\r\n                                <a [routerLink]=\"['/signup']\" class=\"blue-text ml-1\"> Sign Up</a>\r\n                            </p>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <!--/Form without header-->\r\n\r\n                </section>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        this.user = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("[^ @]*@[^ @]*")
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
        });
    };
    LoginComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.loading = true;
        if (valid) {
            this.authenticationService.login(value.email, value.password)
                .subscribe(function (data) {
                //this.router.navigate([this.returnUrl]);
                _this.loading = false;
                _this.alertService.success('Loggined Successfull', true);
                _this.router.navigate(['/dashboard']);
            }, function (error) {
                _this.alertService.error(error._body);
                _this.loading = false;
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AlertService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/selfregister/selfregister.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"container\">\n      <app-alert></app-alert>\n  </div>\n  <div class=\"filter\"></div>\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-5 col-sm-6 mr-auto ml-auto h-100\">\n              <section class=\"form-elegant align-middle\">\n\n                  <!--Form without header-->\n                  <div class=\"card\">\n\n                      <div class=\"card-body mx-4\">\n                          <form novalidate (ngSubmit)=\"onSubmit(user)\" [formGroup]=\"user\" class=\"register-form\">\n                              <!--Header-->\n                              <div class=\"text-center\">\n                                  <h3 class=\"dark-grey-text mb-5\">\n                                      <strong>Sign up</strong>\n                                  </h3>\n                              </div>\n\n                              <div class=\"md-form\"> \n\n                                <input type=\"text\" class=\"form-control\" formControlName=\"name\">                                 \n                                <label>Name</label>                               \n                    \n                                <div class=\"error\" *ngIf=\"user.get('name').touched && user.get('name').hasError('required')\">\n                                  Name is required\n                                </div>\n                                <div class=\"error\" *ngIf=\"user.get('name').touched && user.get('name').hasError('minlength')\">\n                                  Minimum of 3 characters\n                                </div>\n                              </div>\n                              <div class=\"md-form\">\n                                 \n                                  <label>Last Name</label>\n                                  <input type=\"text\" class=\"form-control\" formControlName=\"surname\">\n                      \n                                  <div class=\"error\" *ngIf=\"user.get('surname').touched && user.get('surname').hasError('required')\">\n                                    Last Name is required\n                                  </div>\n                                  <div class=\"error\" *ngIf=\"user.get('surname').touched && user.get('surname').hasError('minlength')\">\n                                    Minimum of 3 characters\n                                  </div>\n\n                              </div>\n\n                              <div class=\"md-form\">\n                                <label>Email address</label>\n                                <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n                    \n                                <div class=\"error\" *ngIf=\"user.get('email').hasError('required') && user.get('email').touched\">\n                                  Email is required\n                                </div>\n                    \n                                <div class=\"error\" *ngIf=\"user.get('email').touched && user.get('email').hasError('pattern')\">\n                                  Enter valid email\n                                </div>\n                              </div>\n                             \n                              <div class=\"md-form\">\n                              <label>Phone</label>\n                              <input type=\"text\" class=\"form-control\" formControlName=\"phone\">\n                  \n                              <div class=\"error\" *ngIf=\"user.get('phone').hasError('required') && user.get('phone').touched\">\n                                Phone is required\n                              </div>\n                            </div>\n\n                              <div class=\"text-center mb-3\">\n                                  <button type=\"submit\" class=\"btn blue-gradient btn-block submit-button z-depth-1a waves-effect waves-light\" [disabled]=\"user.invalid\">\n                                      <i *ngIf=\"loading\" class=\"fa fa-circle-o-notch fa-spin\"></i> Sign up\n                                  </button>\n                              </div>\n                          </form>\n                      </div>\n\n                      <!--Footer-->\n                      <div class=\"modal-footer mx-5 pt-3 mb-1\">\n                          <p class=\"font-small grey-text d-flex justify-content-end\">Aleardy a member?\n                              <a [routerLink]=\"['/login']\" class=\"blue-text ml-1\"> Sign in</a>\n                          </p>\n                      </div>\n\n                  </div>\n                  <!--/Form without header-->\n\n              </section>\n\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/selfregister/selfregister.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selfregister/selfregister.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfregisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelfregisterComponent = /** @class */ (function () {
    function SelfregisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
    }
    SelfregisterComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]),
            surname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("[^ @]*@[^ @]*")
            ]),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            role: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('owner'),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('Admin@123'),
            created: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](Date.now()),
            updated: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](Date.now())
        });
    };
    SelfregisterComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.loading = true;
            this.userService.create(value)
                .subscribe(function (data) {
                _this.loading = false;
                _this.alertService.success('Registration successful', true);
                _this.router.navigate(['/login']);
            }, function (error) {
                _this.alertService.error(error._body);
                _this.loading = false;
            });
        }
    };
    SelfregisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-selfregister',
            template: __webpack_require__("../../../../../src/app/selfregister/selfregister.component.html"),
            styles: [__webpack_require__("../../../../../src/app/selfregister/selfregister.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AlertService */]])
    ], SelfregisterComponent);
    return SelfregisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/alert/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/services/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, config) {
        this.http = http;
        this.config = config;
    }
    AuthenticationService.prototype.login = function (email, password) {
        return this.http.post(this.config.apiUrl + '/user/authenticate', { email: email, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/company/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = /** @class */ (function () {
    function CompanyService(http, config) {
        this.http = http;
        this.config = config;
    }
    CompanyService.prototype.getAll = function () {
        return this.http.get(this.config.apiUrl + '/company/getAllCompanies', this.jwt()).map(function (response) { return response.json(); });
    };
    CompanyService.prototype.getById = function (_id) {
        return this.http.get(this.config.apiUrl + '/company/' + _id, this.jwt()).map(function (response) { return response.json(); });
    };
    CompanyService.prototype.create = function (company) {
        return this.http.post(this.config.apiUrl + '/company/register', company, this.jwt());
    };
    CompanyService.prototype.update = function (company) {
        return this.http.put(this.config.apiUrl + '/company/update', company, this.jwt());
    };
    CompanyService.prototype.delete = function (_id) {
        return this.http.delete(this.config.apiUrl + '/company/' + _id, this.jwt());
    };
    // private helper methods
    CompanyService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_alert_service__ = __webpack_require__("../../../../../src/app/services/alert/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_company_service__ = __webpack_require__("../../../../../src/app/services/company/company.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__company_company_service__["a"]; });






/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.config.apiUrl + '/user/getAllUsers', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get(this.config.apiUrl + '/user/' + _id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.config.apiUrl + '/user/register', user, this.jwt());
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.config.apiUrl + '/user/update', user, this.jwt());
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(this.config.apiUrl + '/user/' + _id, this.jwt());
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"filter\"></div>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\r\n                    <div class=\"card card-register\">\r\n                        <h3 class=\"title\">Welcome to ProApps</h3>\r\n                        <form novalidate (ngSubmit)=\"onSubmit(user)\" [formGroup]=\"user\" class=\"register-form\">\r\n                            <label>Name</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter first name\" formControlName=\"name\">\r\n                           \r\n                                <div class=\"error\" *ngIf=\"user.get('name').touched && user.get('name').hasError('required')\">\r\n                                    Name is required\r\n                                </div>\r\n                                <div class=\"error\" *ngIf=\"user.get('name').touched && user.get('name').hasError('minlength')\">\r\n                                    Minimum of 3 characters\r\n                                </div>\r\n                            <label>Last Name</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter last name\" formControlName=\"surname\">\r\n                           \r\n                                <div class=\"error\" *ngIf=\"user.get('surname').touched && user.get('surname').hasError('required')\">\r\n                                    Last Name is required\r\n                                </div>\r\n                                <div class=\"error\" *ngIf=\"user.get('surname').touched && user.get('surname').hasError('minlength')\">\r\n                                    Minimum of 3 characters\r\n                                </div>\r\n                            <label>Email address</label>\r\n                                <input type=\"email\"  class=\"form-control\" placeholder=\"Enter email address\" formControlName=\"email\">\r\n                            \r\n                                <div class=\"error\" *ngIf=\"user.get('email').hasError('required') && user.get('email').touched\">\r\n                                    Email is required\r\n                                </div>\r\n\r\n                                <div class=\"error\" *ngIf=\"user.get('email').touched && user.get('email').hasError('pattern')\">\r\n                                    Enter valid email\r\n                                </div>\r\n\r\n                            <div formGroupName=\"account\">              \r\n                              \r\n                                <label>Address</label>\r\n                                    <input type=\"address\"  class=\"form-control\" placeholder=\"Enter address\" formControlName=\"address\">\r\n                                \r\n                                    <div class=\"error\" *ngIf=\"user.get('account').get('address').hasError('required') && user.get('account').get('address').touched\">\r\n                                        Address is required\r\n                                    </div>\r\n                              \r\n                                <label>Phone</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter mobile number\" formControlName=\"phone\">\r\n                                \r\n                                    <div class=\"error\"  *ngIf=\"user.get('account').get('phone').hasError('required') && user.get('account').get('phone').touched\">\r\n                                        Phone is required\r\n                                    </div>\r\n                                \r\n                                <label>WhatsApp</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter whatsapp number\" formControlName=\"whatsapp\">\r\n                                  \r\n                                    <div class=\"error\"  *ngIf=\"user.get('account').get('whatsapp').hasError('required') && user.get('account').get('whatsapp').touched\">\r\n                                        WhatsApp is required\r\n                                    </div>\r\n\r\n                                <label>Assigned Color</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter assigned color\" formControlName=\"assignedColor\">\r\n                                  \r\n                                    <div class=\"error\"  *ngIf=\"user.get('account').get('assignedColor').hasError('required') && user.get('account').get('assignedColor').touched\">\r\n                                        Assigned Color is required\r\n                                    </div>\r\n                                \r\n                                <label>Working Hour</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter working hour\" formControlName=\"workingHour\">\r\n                                  \r\n                                    <div class=\"error\"  *ngIf=\"user.get('account').get('workingHour').hasError('required') && user.get('account').get('workingHour').touched\">\r\n                                        Working Hour is required\r\n                                    </div>\r\n                                \r\n                                <label>Vocation</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Vaction\" formControlName=\"vacation\">\r\n                                  \r\n                                    <div class=\"error\"  *ngIf=\"user.get('account').get('vacation').hasError('required') && user.get('account').get('vacation').touched\">\r\n                                        Working Hour is required\r\n                                    </div>\r\n                            </div>\r\n                            <button type=\"submit\" class=\"btn btn-danger btn-block btn-round\" [disabled]=\"user.invalid\"><i *ngIf=\"loading\" class=\"fa fa-circle-o-notch fa-spin\"></i>Sign up</button>\r\n                          </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]),
            surname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("[^ @]*@[^ @]*")
            ]),
            account: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
                address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                whatsapp: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                role: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('superuser', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(2)
                ]),
                invitedBy: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('superuser'),
                assignedColor: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('red', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                workingHour: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('10', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                vacation: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('10', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            }),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('Admin@123'),
            created: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](Date.now()),
            updated: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](Date.now())
        });
    };
    SignupComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.loading = true;
            this.userService.create(value)
                .subscribe(function (data) {
                _this.loading = false;
                _this.alertService.success('Registration successful', true);
                _this.router.navigate(['/login']);
            }, function (error) {
                _this.alertService.error(error._body);
                _this.loading = false;
            });
        }
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AlertService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map