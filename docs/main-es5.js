function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about-me/about-me.component.ts":
  /*!************************************************!*\
    !*** ./src/app/about-me/about-me.component.ts ***!
    \************************************************/

  /*! exports provided: AboutMeComponent */

  /***/
  function srcAppAboutMeAboutMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
      return AboutMeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var AboutMeComponent = function AboutMeComponent() {
      _classCallCheck(this, AboutMeComponent);

      this.professionalProfiles = [{
        name: 'linkedIn',
        url: '',
        icon: '',
        description: ''
      }, {
        name: 'github',
        url: '',
        icon: '',
        description: ''
      }, {
        name: 'kaggle',
        url: '',
        icon: '',
        description: ''
      }, {
        name: 'stackOverflow',
        url: '',
        icon: '',
        description: ''
      }, {
        name: 'medium',
        url: '',
        icon: '',
        description: ''
      }];
    };

    AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
      return new (t || AboutMeComponent)();
    };

    AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutMeComponent,
      selectors: [["about-me"]],
      decls: 11,
      vars: 0,
      consts: [[1, "about-me-container"], [1, "profile-picture-wrapper"], ["mat-card-image", "", "src", "assets/image/Profile Picture/Zaedul-Islam.jpg", 1, "profile-picture"], [1, "introduction-wrapper"], [1, "introduction"]],
      template: function AboutMeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "INTRODUCTION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
      styles: [".about-me-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 24px;\n}\n.about-me-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  margin: 5px;\n  box-shadow: 0px 5px 10px rgba(154, 160, 185, 0.05), 0px 15px 40px rgba(166, 173, 201, 0.2);\n  background-color: #FFFFFF;\n}\n.about-me-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  background-color: #e86e44;\n  border-radius: 4px;\n}\n.about-me-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #ffffff;\n  margin: 0px;\n  padding: 8px;\n  font-weight: 700px;\n}\n.profile-picture[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  border-radius: 50%;\n  width: 200px;\n}\n.profiles[_ngcontent-%COMP%] {\n  margin: 0px;\n  width: 120px;\n  height: 120px;\n  border: 1px solid darkslategray;\n  border-radius: 5px !important;\n  margin-right: 15px;\n}\n.introduction-wrapper[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.introduction[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 16px;\n  line-height: 1.56;\n  text-align: justify;\n  white-space: normal;\n}\nli[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.56;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvRTpcXFdPUktTVEFUSU9OXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGFib3V0LW1lXFxhYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSwwRkFBQTtFQUNBLHlCQUFBO0FDQ1I7QURDUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQ1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDaEI7QURLQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRko7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0E7RUFDSSxVQUFBO0FDRko7QURLQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRko7QURLQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtbWUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiKDE1NCAxNjAgMTg1IC8gNSUpLCAwcHggMTVweCA0MHB4IHJnYigxNjYgMTczIDIwMSAvIDIwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHJcbiAgICAgICAgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDExMCwgNjgpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICAgICAgICBtYXQtY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZmlsZS1waWN0dXJlIHtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlcyB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrc2xhdGVncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5pbnRyb2R1Y3Rpb24td3JhcHBlcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5pbnRyb2R1Y3Rpb24ge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41NjtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41NjtcclxufVxyXG4iLCIuYWJvdXQtbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG4uYWJvdXQtbWUtY29udGFpbmVyIG1hdC1jYXJkIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDE1NCwgMTYwLCAxODUsIDAuMDUpLCAwcHggMTVweCA0MHB4IHJnYmEoMTY2LCAxNzMsIDIwMSwgMC4yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbi5hYm91dC1tZS1jb250YWluZXIgbWF0LWNhcmQgbWF0LWNhcmQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODZlNDQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5hYm91dC1tZS1jb250YWluZXIgbWF0LWNhcmQgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMHB4O1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5wcm9maWxlcyB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtzbGF0ZWdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pbnRyb2R1Y3Rpb24td3JhcHBlciB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5pbnRyb2R1Y3Rpb24ge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41NjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxubGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU2O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'about-me',
          templateUrl: './about-me.component.html',
          styleUrls: ['./about-me.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app/about-me/about-me.component */
    "./src/app/about-me/about-me.component.ts");
    /* harmony import */


    var _app_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app/experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _app_education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app/education/education.component */
    "./src/app/education/education.component.ts"); // CLI imports router


    var routes = [{
      path: 'about-me',
      component: _app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"]
    }, {
      path: 'experience',
      component: _app_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"]
    }, {
      path: 'education',
      component: _app_education_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"]
    }]; // Sets up routes constant where you define your routes
    // configures NgModule imports and exports

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'personal-website';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./about-me/about-me.component */
    "./src/app/about-me/about-me.component.ts");
    /* harmony import */


    var _education_education_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./education/education.component */
    "./src/app/education/education.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js"); // Angular Material API references
    // Angular Flex-Layout


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_15__["AboutMeComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_16__["EducationComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_15__["AboutMeComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_16__["EducationComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var ContactComponent = function ContactComponent() {
      _classCallCheck(this, ContactComponent);

      this.contacts = {
        emails: [{
          work: 'zaedul.islam@enosisbd.com'
        }, {
          personal: 'islam.zaedul@gmail.com'
        }],
        skype: 'islam.zaedul',
        linkedIn: 'Zaedul Islam',
        phone: '+8801824844655',
        location: 'Dhaka, Bangladesh'
      };
    };

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["contact"]],
      decls: 63,
      vars: 6,
      consts: [["fxLayout", "row wrap", 1, "mat-card-container"], ["fxFlex", "calc(40% - 10px)", "fxFlex.lt-md", "0 0 calc(100% - 10px)", 1, "contact-infomation"], ["fxFlex", "calc(60% - 10px)", "fxFlex.lt-md", "0 0 calc(100% - 10px);", 1, "email-box"], ["appearance", "outline", 2, "width", "calc(50% - 5px)", "margin-right", "5px"], ["matInput", "", "placeholder", "Name", "required", ""], ["appearance", "outline", 2, "width", "calc(50% - 5px)", "margin-left", "5px"], ["matInput", "", "placeholder", "Phone", "required", ""], ["matInput", "", "placeholder", "Email Address", "required", ""], ["matInput", "", "placeholder", "Subject", "required", ""], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "type", "text", "placeholder", "Type Message Here", "formControlName", "yourMessage", "required", ""]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Skype");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "LinkedIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email (Work): ", ctx.contacts.emails[0].work, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email (Personal): ", ctx.contacts.emails[1].personal, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.contacts.skype, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.contacts.linkedIn, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.contacts.phone, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contacts.location);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"]],
      styles: [".mat-card-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.mat-card-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.contact-infomation[_ngcontent-%COMP%]    > mat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\nspan[_ngcontent-%COMP%] {\n  padding-left: 18px;\n}\nul[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\nmat-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9FOlxcV09SS1NUQVRJT05cXFBvcnRmb2xpby9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0FDQ1I7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQTtFQUNJLGtCQUFBO0FDSEo7QURNQTtFQUNJLGtCQUFBO0FDSEo7QURTSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDTlIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcblxyXG4gICAgbWF0LWNhcmR7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbWFpbC1ib3gge1xyXG59XHJcblxyXG4uY29udGFjdC1pbmZvbWF0aW9uID4gbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICByZXNpemU6IG5vbmU7IC8vIFRoaXMgd2lsbCB0dXJuIG9mZiB0aGUgcmVzaXppbmdcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4OyAgLy8gU2V0IHlvdXIgc3VpdGFibGUgaFxyXG4gICAgfVxyXG59XHJcbiIsIi5tYXQtY2FyZC1jb250YWluZXIge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuLm1hdC1jYXJkLWNvbnRhaW5lciBtYXQtY2FyZCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uY29udGFjdC1pbmZvbWF0aW9uID4gbWF0LWNhcmQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbn1cblxudWwge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBoZWlnaHQ6IDE1MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function DashboardComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var toolbarItem_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", toolbarItem_r1.path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", toolbarItem_r1.displayTitle, " ");
      }
    }

    var DashboardComponent = function DashboardComponent() {
      _classCallCheck(this, DashboardComponent);

      this.toolbarItems = [{
        path: '/about-me',
        displayTitle: 'ABOUT ME'
      }, {
        path: '/experience',
        displayTitle: 'EXPERIENCE'
      }, {
        path: '/education',
        displayTitle: 'EDUCATION'
      }];
    };

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["dashboard"]],
      decls: 10,
      vars: 1,
      consts: [[1, "dashboard-container"], [1, "toolbar-title"], [1, "given-name"], [1, "last-name"], [1, "toolbar-items"], [4, "ngFor", "ngForOf"], ["mat-button", "", "routerLinkActive", "active", 1, "toolbar-item", 3, "routerLink"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ZAEDUL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ISLAM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardComponent_div_9_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toolbarItems);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 5000;\n  font-size: 14px;\n  background-color: #04003F;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 100px;\n  width: 100%;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 40%;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]   .given-name[_ngcontent-%COMP%] {\n  font-family: Yellowtail;\n  font-size: 30px;\n  font-weight: 700;\n  margin-right: 10px;\n  color: #4DDBC3;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]   .last-name[_ngcontent-%COMP%] {\n  font-family: Yellowtail;\n  font-size: 30px;\n  font-weight: 700;\n  color: #bd5d38;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%]   .toolbar-items[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 60%;\n  color: #FFFFFF;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%]   .toolbar-items[_ngcontent-%COMP%]     .toolbar-item .mat-button-wrapper {\n  font-family: \"Caveat\", cursive;\n  font-weight: 700;\n  font-size: 16px;\n  padding: 0px 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0U6XFxXT1JLU1RBVElPTlxcUG9ydGZvbGlvL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBRUEsVUFBQTtBQ0FSOztBREVRO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBWjs7QURFUTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FaOztBRElJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNGUjs7QURLWTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDAwM0Y7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudG9vbGJhci10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG5cclxuICAgICAgICAuZ2l2ZW4tbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBZZWxsb3d0YWlsO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM0RERCQzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYXN0LW5hbWUge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogWWVsbG93dGFpbDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogI2JkNWQzODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvb2xiYXItaXRlbXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuXHJcbiAgICAgICAgOjpuZy1kZWVwIC50b29sYmFyLWl0ZW0ge1xyXG4gICAgICAgICAgICAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0NhdmVhdCcsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibWF0LXRvb2xiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDUwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MDAzRjtcbn1cblxubWF0LXRvb2xiYXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbm1hdC10b29sYmFyLXJvdyAudG9vbGJhci10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNDAlO1xufVxubWF0LXRvb2xiYXItcm93IC50b29sYmFyLXRpdGxlIC5naXZlbi1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFllbGxvd3RhaWw7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzREREJDMztcbn1cbm1hdC10b29sYmFyLXJvdyAudG9vbGJhci10aXRsZSAubGFzdC1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFllbGxvd3RhaWw7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNiZDVkMzg7XG59XG5tYXQtdG9vbGJhci1yb3cgLnRvb2xiYXItaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDYwJTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5tYXQtdG9vbGJhci1yb3cgLnRvb2xiYXItaXRlbXMgOjpuZy1kZWVwIC50b29sYmFyLWl0ZW0gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDBweCAxNHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/education/education.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/education/education.component.ts ***!
    \**************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function EducationComponent_mat_card_1_li_6_mat_icon_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "switch_access_shortcut");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EducationComponent_mat_card_1_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EducationComponent_mat_card_1_li_6_mat_icon_7_Template, 2, 0, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, item_r3.key.replace("_", " ")), ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.value, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.key === "institution" || item_r3.key === "faculty" || item_r3.key === "department" || item_r3.key === "program");
      }
    }

    function EducationComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EducationComponent_mat_card_1_li_6_Template, 8, 5, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var education_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](education_r1.degree);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx_r0.processEducationData(education_r1)));
      }
    }

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent() {
        _classCallCheck(this, EducationComponent);

        this.educations = [{
          id: 4,
          degree: 'Master of Applied Science (MASc)',
          institution: 'Concordia University,  Montreal, Quebec, Canada',
          faculty: 'Gina Cody School of Engineering and Computer Science',
          department: 'Concordia Institute for Information Systems Engineering',
          program: 'Master of Applied Science Quality Systems Engineering',
          passing_year: 'Ongoing',
          result: 'Yet to Publish'
        }, {
          id: 3,
          degree: 'Bachelor of Science (BSc)',
          institution: 'American International University-Bangladesh (AIUB)',
          faculty: 'Faculty of Science and Technology',
          department: 'Department of Computer Science',
          program: 'Bachelor of Science in Computer Science & Engineering',
          passing_year: '2018 (December)',
          result: '3.95 out of 4.00, last two semesters GPA (by chronological order): 4.00/4.00 & 3.94/4.00'
        }, {
          id: 2,
          degree: 'Higher Secondary Certificate (HSC)',
          institution: 'Govt. Rajendra College, Faridpur',
          area: 'Science',
          passing_year: '2013',
          result: 'GPA 5.00'
        }, {
          id: 1,
          degree: 'Secondary School Certificate (SSC)',
          institution: 'Faridpur Zilla School, Faridpur',
          area: 'Science',
          passing_year: '2011',
          result: 'GPA 5.00'
        }];
      }

      _createClass(EducationComponent, [{
        key: "processEducationData",
        value: function processEducationData(education) {
          var educationProcessed = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(education);
          delete educationProcessed['degree'];
          delete educationProcessed['id'];
          return educationProcessed;
        }
      }]);

      return EducationComponent;
    }();

    EducationComponent.ɵfac = function EducationComponent_Factory(t) {
      return new (t || EducationComponent)();
    };

    EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EducationComponent,
      selectors: [["education"]],
      decls: 2,
      vars: 1,
      consts: [[1, "mat-card-container"], [4, "ngFor", "ngForOf"], [1, "education-title"], ["class", "education-non-title-wrapper", 4, "ngFor", "ngForOf"], [1, "education-non-title-wrapper"], ["class", "link-icon", 4, "ngIf"], [1, "link-icon"]],
      template: function EducationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EducationComponent_mat_card_1_Template, 8, 4, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.educations);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]],
      styles: [".mat-card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.mat-card-container[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  box-shadow: 0px 5px 10px rgba(154, 160, 185, 0.05), 0px 15px 40px rgba(166, 173, 201, 0.2) !important;\n  min-height: 200px;\n  width: 70%;\n  background-color: #ffffff;\n}\nmat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  background-color: #e86e44;\n  border-radius: 4px;\n}\nmat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #ffffff;\n  margin: 0px;\n  padding: 8px;\n  font-family: \"Cairo\", sans-serif;\n}\nmat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 20px;\n  color: black;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: disclosure-closed;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n.education-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.link-icon[_ngcontent-%COMP%] {\n  vertical-align: top;\n  color: lightgrey;\n}\n.link-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL0U6XFxXT1JLU1RBVElPTlxcUG9ydGZvbGlvL3NyY1xcYXBwXFxlZHVjYXRpb25cXGVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7QUNDSjtBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxR0FBQTtFQUVBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDREY7QURHRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FER0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNETjtBRElJO0VBQ0UsV0FBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0FDSE47QURRQTtFQUNFLGtDQUFBO0FDTEY7QURPRTtFQUNFLFlBQUE7QUNMSjtBRFNBO0VBQ0UsZ0JBQUE7QUNORjtBRFlBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ1RGO0FEWUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcblxyXG4gIC5kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYigxNTQgMTYwIDE4NSAvIDUlKSxcclxuICAgIDBweCAxNXB4IDQwcHggcmdiKDE2NiAxNzMgMjAxIC8gMjAlKSAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAxMTAsIDY4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICBtYXQtY2FyZC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzY2xvc3VyZS1jbG9zZWQ7XHJcblxyXG4gIGxpIHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbi5lZHVjYXRpb24tdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5lZHVjYXRpb24tbm9uLXRpdGxlLXdyYXBwZXIge1xyXG59XHJcblxyXG4ubGluay1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5saW5rLWljb246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzNmNTFiNTtcclxufVxyXG4iLCIubWF0LWNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG4ubWF0LWNhcmQtY29udGFpbmVyIC5kaXYge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgxNTQsIDE2MCwgMTg1LCAwLjA1KSwgMHB4IDE1cHggNDBweCByZ2JhKDE2NiwgMTczLCAyMDEsIDAuMikgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5tYXQtY2FyZCBtYXQtY2FyZC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4NmU0NDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxubWF0LWNhcmQgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1mYW1pbHk6IFwiQ2Fpcm9cIiwgc2Fucy1zZXJpZjtcbn1cbm1hdC1jYXJkIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2Nsb3N1cmUtY2xvc2VkO1xufVxudWwgbGkge1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5lZHVjYXRpb24tdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubGluay1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLmxpbmstaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMzZjUxYjU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'education',
          templateUrl: './education.component.html',
          styleUrls: ['./education.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/experience/experience.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/experience/experience.component.ts ***!
    \****************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExperienceComponent_ul_28_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Project 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ExperienceComponent_ul_28_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ExperienceComponent_ul_28_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Project 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ExperienceComponent_ul_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceComponent_ul_28_ng_container_1_Template, 4, 0, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExperienceComponent_ul_28_ng_container_4_Template, 2, 0, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExperienceComponent_ul_28_ng_container_5_Template, 4, 0, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var responsibility_r5 = ctx.$implicit;
        var index_r6 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r6 === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](responsibility_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r6 === 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r6 === 7);
      }
    }

    function ExperienceComponent_ul_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var responsibility_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](responsibility_r10);
      }
    }

    function ExperienceComponent_ul_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var responsibility_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](responsibility_r11);
      }
    }

    function ExperienceComponent_ul_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var responsibility_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](responsibility_r12);
      }
    }

    function ExperienceComponent_ul_96_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var responsibility_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](responsibility_r13);
      }
    }

    var ExperienceComponent = function ExperienceComponent() {
      _classCallCheck(this, ExperienceComponent);

      this.professionalSectionHeader = 'Professional Experience';
      this.academicSectionHeader = 'Academic Experience';
      this.extracurricularActivities = 'Extracurricular Activities';
      this.experience = [{
        designation: 'Senior Software Engineer',
        company: {
          name: 'Enosis Solutions',
          url: 'https://www.enosisbd.com/',
          about: 'Enosis Solutions is an offshore Software Company located in Dhaka, Bangladesh.'
        },
        startDate: '1 January 2019',
        endDate: 'Present',
        responsibilities: ['Involved in the full development life cycle of a Big Data project including requirements analysis,  design, development, integration, testing, bug fixing, and deployment support using Apache Spark ecosystem', 'Automated ETL Pipeline which takes customer’s multi-gigabyte of unstructured source data (GZIP files) and yields to over 150 GB of structured data (CSV files) in both AWS S3 and AWS Redshift', 'Automated  the  reporting  infrastructure  to  run  on  ETL  processed  data  monthly  as  well  as  per  different criteria using AWS EMR clusters for analyzing the financial opportunity', 'Split the huge data into chunks by applying the Best Fit algorithm to ensure the best usage of the AmazonEMR clusters', 'Did performance benchmarking (memory and process time) to optimize Spark jobs, each processing up to 30 millions of records in a Spark dataframe', 'Developed REST APIs in Scala using Play Framework and new user-facing features using Angular 2', 'Wrote and executed test scripts using ScalaTest in the Scala ecosystem', 'Prepared documentation of use cases and flow charts to illustrate the entire workflow of several processes', 'Developed a highly interactive web application that uses the "Internet of Things" by utilizing Angular 9, Angular Material Design, and integrating RESTful APIs', 'Worked in a Scrum team', 'Provided multi-language support using Internationalization (i18n) library', 'Provided Google reCAPTCHA v2 support', 'Used Media Queries for the design to be compatible in all devices', 'Implemented the Drag and Drop functionality using ng2-dragula', 'Parse, validate, manipulate, and display dates and times using Moment.js', 'Utilized RxJS library for composing asynchronous and event-based programs by using observable sequences', 'Utilized Agile Methodologies (Scrum) to manage full life-cycle development of the project', 'Gathered specs from client to create a feasible workflow', 'Cooperating with the back-end developer in the process of building the RESTful API', 'Made design recommendations towards the development of new code or reuse of existing code', 'Presented solutions to the client when they want out of scope issues to be solved', 'Created Shared module with components that will be shared across the application', 'Prepared and dispensed work assignments, provide guidance, and/or review the work of other team members', 'Collaborated with QA team to define test cases, metrics, and resolve questions about test results', 'Recommended business process flow improvements and clearly communicate problem/resolution process to project management', 'Documented the code inline using JSDoc or other conventions']
      }, {
        designation: 'Undergraduate Teaching Assistant (Internship)',
        company: {
          name: 'American International University-Bangladesh',
          url: 'https://www.aiub.edu/'
        },
        startDate: 'September 2018',
        endDate: 'December 2018',
        responsibilities: ["Assisted students to learn different topics of 'Artificial Intelligence and Expert System' and to implement the source codes in the lab"]
      }, {
        designation: 'Academic  Assistant',
        company: {
          name: 'AIUB  Competitive  Programmers’  Community  (ACPC)',
          url: 'https://www.facebook.com/groups/aiub.acm'
        },
        responsibilities: ["With the guidance of Department of Computer Science, on behalf of AIUB Competitive Programmers' Community (ACPC), I had assisted fellow AIUBians who had found difficulties related to Programming and/or C, C++, Discrete Math, C#, Java, Data Structure and Algorithms courses, to understand the topics, program or code"]
      }, {
        designation: 'Problem Setter',
        company: {
          name: 'AIUB CS Fest 2018 Programming Contest (Junior)',
          url: 'https://toph.co/c/aiub-cs-fest-2018-j'
        },
        responsibilities: ['Set a problem, generated test cases, and wrote the problem solution for the AIUB CS Fest 2018 Programming Contest (Junior) hosted by AIUB Computer Club (ACC)']
      }, {
        designation: 'Volunteer',
        company: {
          name: 'AIUB GIRLS PROGRAMMING CONTEST - SPRING 2016-2017',
          url: 'https://www.aiub.edu/aiub-girls-programming-contest---spring-2016-2017'
        },
        responsibilities: ["I monitored the contest labs, judged contestants' submissions, and assisted AIUB Computer Club (ACC) to make the event successful"]
      }];
    };

    ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
      return new (t || ExperienceComponent)();
    };

    ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["experience"]],
      decls: 97,
      vars: 54,
      consts: [[1, "experience-container"], [1, "mat-card-container"], [1, "upper-section"], [1, "designation-wrapper"], [1, "designation"], [1, "experience-timeline"], [1, "company-name-wrapper"], [1, "company-name"], ["target", "_blank", 3, "href"], [1, "company-about-wrapper"], [1, "company-about"], [1, "responsibilities-header"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "project-header"]],
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Responsibilities: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ExperienceComponent_ul_28_Template, 6, 4, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Responsibilities: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ExperienceComponent_ul_49_Template, 3, 1, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Responsibilities: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ExperienceComponent_ul_68_Template, 3, 1, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Responsibilities: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ExperienceComponent_ul_82_Template, 3, 1, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Responsibilities: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, ExperienceComponent_ul_96_Template, 3, 1, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 28, ctx.professionalSectionHeader));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 30, ctx.experience[0].designation));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.experience[0].startDate, " - ", ctx.experience[0].endDate, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.experience[0].company.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 32, ctx.experience[0].company.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.experience[0].company.about, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience[0].responsibilities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 34, ctx.academicSectionHeader));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 36, ctx.experience[1].designation));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.experience[1].startDate, " - ", ctx.experience[1].endDate, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.experience[1].company.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 38, ctx.experience[1].company.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience[1].responsibilities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 40, ctx.extracurricularActivities));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 42, ctx.experience[2].designation));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.experience[2].company.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 44, ctx.experience[2].company.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience[2].responsibilities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 46, ctx.experience[3].designation));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.experience[3].company.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](78, 48, ctx.experience[3].company.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience[3].responsibilities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 50, ctx.experience[4].designation));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.experience[4].company.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 52, ctx.experience[4].company.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience[4].responsibilities);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]],
      styles: [".upper-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.experience-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.profile-picture-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.profile-picture-container[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  padding-right: 40px;\n  width: 300px;\n}\n\n.designation-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.designation[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #343a40;\n}\n\n.experience-timeline[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #05417b;\n}\n\n.company-name-wrapper[_ngcontent-%COMP%] {\n  margin: 8px 0px 16px;\n}\n\n.company-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #6c757d;\n}\n\n.company-about[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.mat-card-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.mat-card-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  box-shadow: 0px 5px 10px rgba(154, 160, 185, 0.05), 0px 15px 40px rgba(166, 173, 201, 0.2) !important;\n  width: 70%;\n  background-color: #ffffff;\n}\n\n.mat-card-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  background-color: #e86e44;\n  border-radius: 4px;\n}\n\n.mat-card-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #ffffff;\n  margin: 0px;\n  padding: 8px;\n  font-weight: 600;\n}\n\n.mat-card-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 20px;\n  color: black;\n}\n\n.responsibilities-header[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #005799;\n}\n\n.project-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n\n.project-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #005799;\n}\n\nli[_ngcontent-%COMP%] {\n  text-align: justify;\n  white-space: normal;\n  list-style-type: disclosure-closed;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  height: 1px;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9FOlxcV09SS1NUQVRJT05cXFBvcnRmb2xpby9zcmNcXGFwcFxcZXhwZXJpZW5jZVxcZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBRENFO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLDBCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EscUdBQUE7RUFFQSxVQUFBO0VBQ0EseUJBQUE7QUNESjs7QURHSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0ROOztBREdNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRlI7O0FES007RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7QUNKUjs7QURVQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ1BGOztBRFVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNQRjs7QURTRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ1BKOztBRFdBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FDUkY7O0FEV0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9HQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBwZXItc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmV4cGVyaWVuY2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpY3R1cmUtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG5cclxuICAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRlc2lnbmF0aW9uLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGVzaWduYXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG59XHJcblxyXG4uZXhwZXJpZW5jZS10aW1lbGluZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogcmdiYSg1LCA2NSwgMTIzLCAxKTtcclxufVxyXG5cclxuLmNvbXBhbnktbmFtZS13cmFwcGVyIHtcclxuICBtYXJnaW46IDhweCAwcHggMTZweDtcclxufVxyXG5cclxuLmNvbXBhbnktbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmNvbXBhbnktYWJvdXQge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXQtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYigxNTQgMTYwIDE4NSAvIDUlKSxcclxuICAgICAgMHB4IDE1cHggNDBweCByZ2IoMTY2IDE3MyAyMDEgLyAyMCUpICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICBtYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMTEwLCA2OCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAgIG1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXNwb25zaWJpbGl0aWVzLWhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAwNTc5OTtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDA1Nzk5O1xyXG4gIH1cclxufVxyXG5cclxubGkge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2Nsb3N1cmUtY2xvc2VkO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0LFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwKSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC43NSksXHJcbiAgICByZ2JhKDAsIDAsIDAsIDApXHJcbiAgKTtcclxufVxyXG4iLCIudXBwZXItc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5leHBlcmllbmNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5wcm9maWxlLXBpY3R1cmUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjRweDtcbn1cbi5wcm9maWxlLXBpY3R1cmUtY29udGFpbmVyIC5wcm9maWxlLXBpY3R1cmUge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5kZXNpZ25hdGlvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGVzaWduYXRpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuXG4uZXhwZXJpZW5jZS10aW1lbGluZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDU0MTdiO1xufVxuXG4uY29tcGFueS1uYW1lLXdyYXBwZXIge1xuICBtYXJnaW46IDhweCAwcHggMTZweDtcbn1cblxuLmNvbXBhbnktbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4uY29tcGFueS1hYm91dCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubWF0LWNhcmQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYXQtY2FyZC1jb250YWluZXIgbWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgxNTQsIDE2MCwgMTg1LCAwLjA1KSwgMHB4IDE1cHggNDBweCByZ2JhKDE2NiwgMTczLCAyMDEsIDAuMikgIWltcG9ydGFudDtcbiAgd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5tYXQtY2FyZC1jb250YWluZXIgbWF0LWNhcmQgbWF0LWNhcmQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODZlNDQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5tYXQtY2FyZC1jb250YWluZXIgbWF0LWNhcmQgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYXQtY2FyZC1jb250YWluZXIgbWF0LWNhcmQgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucmVzcG9uc2liaWxpdGllcy1oZWFkZXIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwNTc5OTtcbn1cblxuLnByb2plY3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4ucHJvamVjdC1oZWFkZXIgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDA1Nzk5O1xufVxuXG5saSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzY2xvc3VyZS1jbG9zZWQ7XG59XG5cbmhyIHtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuNzUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'experience',
          templateUrl: './experience.component.html',
          styleUrls: ['./experience.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\WORKSTATION\Portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map