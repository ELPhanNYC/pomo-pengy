"use strict";
(self["webpackChunkpengy_portal_frontend"] = self["webpackChunkpengy_portal_frontend"] || []).push([["main"],{

/***/ 7732:
/*!********************************************************!*\
  !*** ./src/app/achievements/achievements.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AchievementsComponent: () => (/* binding */ AchievementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../carousel/carousel.component */ 5948);


class AchievementsComponent {
  constructor() {
    this.displayInfo = false;
    /* ------------------ TEMPORARY CODE ------------------ */
    this.achievements_temp = ["Rookie Pengy", "Apprentice Pengy", "Junior Pengy Analyst", "Associate Pengy", "Pengy Analyst", "Pengy Fellow", "Pengy Researcher", "Erudite Pengy", "Luminary Pengy", "Master Pengy", "Doctor Pengy", "Enlightened Pengy"];
    this.cur = this.achievements_temp[this.getRandomInt(13)];
  }
  toggleInfo() {
    this.displayInfo = !this.displayInfo;
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  static #_ = this.ɵfac = function AchievementsComponent_Factory(t) {
    return new (t || AchievementsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AchievementsComponent,
    selectors: [["app-achievements"]],
    decls: 18,
    vars: 7,
    consts: [[1, "levels-container"], [1, "upper"], [1, "toggle", 3, "click"], [1, "container-info"], [1, "center-all"], [1, "lower"]],
    template: function AchievementsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "study level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AchievementsComponent_Template_a_click_4_listener() {
          return ctx.toggleInfo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u02C5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AchievementsComponent_Template_a_click_6_listener() {
          return ctx.toggleInfo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u02C4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "inspired by the ranking feature in modern games, Pomo Pengy allows you to climb to higher ranks on the pyramid of pengy knowledge. The more hours of studying you put in, the higher your rank grows!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.displayInfo ? "none" : "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.displayInfo ? "inline" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.displayInfo ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cur);
      }
    },
    dependencies: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_0__.CarouselComponent],
    styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  color: #a9a6fc;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.upper[_ngcontent-%COMP%] {\n  height: 40vh;\n}\n\n.lower[_ngcontent-%COMP%] {\n  height: 40vh;\n}\n\n.center-all[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  color: #535c91;\n  font-size: 1.25rem;\n  text-decoration: none;\n}\n\n.toggle[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\n.container-info[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNoaWV2ZW1lbnRzL2FjaGlldmVtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUdKIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgIGNvbG9yOiAjYTlhNmZjO1xufVxuXG5oMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVwcGVyIHtcbiAgICBoZWlnaHQ6IDQwdmg7XG59XG4ubG93ZXIge1xuICAgIGhlaWdodDogNDB2aDtcbn1cblxuLmNlbnRlci1hbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZ2dsZSB7XG4gICAgY29sb3I6ICM1MzVjOTE7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRvZ2dsZTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhaW5lci1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDc1JTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8708:
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage-supervisor.service */ 4304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);





class ApiService {
  constructor(http) {
    this.http = http;
  }
  sendRegister(data) {
    return this.http.post("http://localhost:8080/api/register", data);
  }
  sendLogin(data) {
    return this.http.post("http://localhost:8080/api/login", data);
  }
  sendTask(data) {
    const token = _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.getItem("token");
    if (token) {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        authorization: token
      });
      return this.http.post("http://localhost:8080/api/postTask", data, {
        headers
      });
    }
    // return an empty object
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  getTasks() {
    const token = _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.getItem("token");
    console.log(token);
    if (token) {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        authorization: token
      });
      return this.http.get("http://localhost:8080/api/getTasks", {
        headers
      });
    }
    // return an empty object
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  removeTask(data) {
    const token = _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.getItem("token");
    if (token) {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        authorization: token
      });
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set("title", data.title);
      return this.http.delete("http://localhost:8080/api/removeTask", {
        headers,
        params
      });
    }
    // return an empty object
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  getUserStats() {
    const token = _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.getItem("token");
    console.log(token);
    if (token) {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        authorization: token
      });
      return this.http.get("http://localhost:8080/api/sendStats", {
        headers
      });
    }
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  static #_ = this.ɵfac = function ApiService_Factory(t) {
    return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ApiService,
    factory: ApiService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 484:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page.component */ 3200);
/* harmony import */ var _pomo_page_pomo_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pomo-page/pomo-page.component */ 8616);
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-page/register-page.component */ 5548);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page/login-page.component */ 4432);
/* harmony import */ var _notes_page_notes_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes-page/notes-page.component */ 3328);
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-page/profile-page.component */ 8360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);









const routes = [{
  path: "",
  component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent
}, {
  path: "pomo",
  component: _pomo_page_pomo_page_component__WEBPACK_IMPORTED_MODULE_1__.PomoPageComponent
}, {
  path: "notes",
  component: _notes_page_notes_page_component__WEBPACK_IMPORTED_MODULE_4__.NotesPageComponent
}, {
  path: "register",
  component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__.RegisterPageComponent
}, {
  path: "login",
  component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__.LoginPageComponent
}, {
  path: "profile",
  component: _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__.ProfilePageComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 6108:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/animations/animations */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);



class AppComponent {
  constructor() {
    this.title = 'pengy-portal-frontend';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 1,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@loadIn", undefined);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__.loadInAnimation]
    }
  });
}

/***/ }),

/***/ 5204:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 381);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 484);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6108);
/* harmony import */ var _time_date_time_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-date/time-date.component */ 956);
/* harmony import */ var _session_button_session_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-button/session-button.component */ 7996);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 4060);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ 3200);
/* harmony import */ var _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./to-do/to-do.component */ 9504);
/* harmony import */ var _pomo_page_pomo_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pomo-page/pomo-page.component */ 8616);
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timer/timer.component */ 4508);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-page/login-page.component */ 4432);
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register-page/register-page.component */ 5548);
/* harmony import */ var _notes_page_notes_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notes-page/notes-page.component */ 3328);
/* harmony import */ var _spotify_integration_spotify_integration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spotify-integration/spotify-integration.component */ 1928);
/* harmony import */ var _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./text-editor/text-editor.component */ 9716);
/* harmony import */ var _login_register_buttons_login_register_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login-register-buttons/login-register-buttons.component */ 4012);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ 1092);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-markdown */ 9552);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api.service */ 8708);
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile-page/profile-page.component */ 8360);
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./achievements/achievements.component */ 7732);
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./statistics/statistics.component */ 7300);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./carousel/carousel.component */ 5948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 4280);




























class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
    providers: [_api_service__WEBPACK_IMPORTED_MODULE_16__.ApiService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_25__.MarkdownModule.forRoot(), ngx_markdown__WEBPACK_IMPORTED_MODULE_25__.MarkdownModule.forChild(), _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_25__.MarkdownModule.forRoot({
      loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClient
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _time_date_time_date_component__WEBPACK_IMPORTED_MODULE_2__.TimeDateComponent, _session_button_session_button_component__WEBPACK_IMPORTED_MODULE_3__.SessionButtonComponent, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__.NavBarComponent, _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__.HomePageComponent, _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_6__.ToDoComponent, _pomo_page_pomo_page_component__WEBPACK_IMPORTED_MODULE_7__.PomoPageComponent, _timer_timer_component__WEBPACK_IMPORTED_MODULE_8__.TimerComponent, _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__.LoginPageComponent, _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_10__.RegisterPageComponent, _notes_page_notes_page_component__WEBPACK_IMPORTED_MODULE_11__.NotesPageComponent, _spotify_integration_spotify_integration_component__WEBPACK_IMPORTED_MODULE_12__.SpotifyIntegrationComponent, _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_13__.TextEditorComponent, _login_register_buttons_login_register_buttons_component__WEBPACK_IMPORTED_MODULE_14__.LoginRegisterButtonsComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_15__.HeaderComponent, _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_17__.ProfilePageComponent, _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_18__.AchievementsComponent, _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_19__.StatisticsComponent, _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__.CarouselComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_25__.MarkdownModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_25__.MarkdownModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_25__.MarkdownModule]
  });
})();

/***/ }),

/***/ 5948:
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarouselComponent: () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);


function CarouselComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.achievement_badges[ctx_r0.getPreviousIndex()].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function CarouselComponent_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.achievement_badges[ctx_r1.getNextIndex()].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class CarouselComponent {
  constructor() {
    this.achievement_badges = [
    // Completion of first study session
    {
      image: "../../assets/achievement-badges/bronze-plain.png",
      desc: "Earned for the completion of your first study session!🎖️"
    },
    // Completion of first task
    {
      image: "../../assets/achievement-badges/bronze-lightning.png",
      desc: "Awarded for completing your first task! ⚡"
    },
    // Completion of 5 tasks
    {
      image: "../../assets/achievement-badges/bronze-star.png",
      desc: "Achieved by completing 5 tasks. ⭐"
    },
    // Completion of 90 minutes of studying
    {
      image: "../../assets/achievement-badges/bronze-clock.png",
      desc: "Granted for completing 90 minutes of study time. ⏰"
    },
    // Completion of 5 study sessions
    {
      image: "../../assets/achievement-badges/bronze-book.png",
      desc: "Earned for completing 5 study sessions. 📚"
    },
    // Completion of 10 study sessions
    {
      image: "../../assets/achievement-badges/bronze-brain.png",
      desc: "Awarded for completing 10 study sessions. 🧠"
    },
    // Completion of at least 10 study sessions and 10 tasks
    {
      image: "../../assets/achievement-badges/bronze-penguin.png",
      desc: "Granted for completing at least 10 study sessions and 10 tasks! 🐧"
    },
    // Completion of 15 study sessions
    {
      image: "../../assets/achievement-badges/silver-plain.png",
      desc: "Achieved by completing 15 study sessions! 🎉"
    },
    // Completion of 15 tasks
    {
      image: "../../assets/achievement-badges/silver-star.png",
      desc: "Awarded for completing 15 tasks! 🌟"
    },
    // Completion of 750 minutes of studying
    {
      image: "../../assets/achievement-badges/silver-clock.png",
      desc: "Granted for completing 750 minutes of study time! ⏱️"
    },
    // Completion of 20 study sessions
    {
      image: "../../assets/achievement-badges/silver-book.png",
      desc: "Earned for completing 20 study sessions! 📖"
    },
    // Completion of 25 study sessions
    {
      image: "../../assets/achievement-badges/silver-brain.png",
      desc: "Awarded for completing 25 study sessions! 🧠"
    },
    // Completion of at least 25 study sessions and 25 tasks
    {
      image: "../../assets/achievement-badges/silver-penguin.png",
      desc: "Granted for completing at least 25 study sessions and 25 tasks! 🐧"
    },
    // Completion of 50 tasks
    {
      image: "../../assets/achievement-badges/gold-plain.png",
      desc: "Achieved by completing 50 tasks! 🎖️"
    },
    // Completion of 50 study sessions
    {
      image: "../../assets/achievement-badges/gold-lightning.png",
      desc: "Awarded for completing 50 study sessions! ⚡"
    },
    // Completion of 75 tasks
    {
      image: "../../assets/achievement-badges/gold-star.png",
      desc: "Granted for completing 75 tasks! 🌟"
    },
    // Completion of 75 study sessions
    {
      image: "../../assets/achievement-badges/gold-clock.png",
      desc: "Earned for completing 75 study sessions! ⏰"
    },
    // Completion of 100 tasks
    {
      image: "../../assets/achievement-badges/gold-book.png",
      desc: "Achieved by completing 100 tasks! 📘"
    },
    // Completion of 100 study sessions
    {
      image: "../../assets/achievement-badges/gold-brain.png",
      desc: "Awarded for completing 100 study sessions! 🧠"
    },
    // Completion of at least 100 study sessions and 200 tasks
    {
      image: "../../assets/achievement-badges/gold-penguin.png",
      desc: "Granted for completing at least 100 study sessions and 200 tasks! 🐧"
    }];
    // current index will be max achievement a user as obtained
    this.currentIndex = 0;
  }
  showPrevious() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.achievement_badges.length - 1;
  }
  showNext() {
    this.currentIndex = this.currentIndex < this.achievement_badges.length - 1 ? this.currentIndex + 1 : 0;
  }
  getPreviousIndex() {
    return this.currentIndex > 0 ? this.currentIndex - 1 : this.achievement_badges.length - 1;
  }
  getNextIndex() {
    return this.currentIndex < this.achievement_badges.length - 1 ? this.currentIndex + 1 : 0;
  }
  static #_ = this.ɵfac = function CarouselComponent_Factory(t) {
    return new (t || CarouselComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CarouselComponent,
    selectors: [["app-carousel"]],
    decls: 12,
    vars: 4,
    consts: [[1, "carousel-container"], [1, "carousel-button", 3, "click"], [1, "carousel-slide"], ["class", "previous", 3, "src", 4, "ngIf"], ["alt", "Current badge", 1, "current", 3, "src"], ["class", "next", 3, "src", 4, "ngIf"], [1, "desc"], [1, "previous", 3, "src"], [1, "next", 3, "src"]],
    template: function CarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_2_listener() {
          return ctx.showPrevious();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_img_5_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarouselComponent_img_7_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_8_listener() {
          return ctx.showNext();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.achievement_badges[ctx.currentIndex].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.achievement_badges[ctx.currentIndex].desc);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".carousel-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.carousel-slide[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.carousel-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 10rem;\n}\n\n.carousel-button[_ngcontent-%COMP%] {\n  background-color: rgba(169, 166, 252, 0.3764705882);\n  border: none;\n  border-radius: 20%;\n  color: white;\n  font-size: 2rem;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  top: 50%;\n}\n\n.carousel-slide[_ngcontent-%COMP%]   img.current[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 1;\n  z-index: 2;\n}\n\n.carousel-slide[_ngcontent-%COMP%]   img.previous[_ngcontent-%COMP%] {\n  opacity: 0.2;\n  transform: scale(0.9) translateX(4rem);\n  z-index: 1;\n}\n\n.carousel-slide[_ngcontent-%COMP%]   img.next[_ngcontent-%COMP%] {\n  opacity: 0.2;\n  transform: scale(0.9) translateX(-4rem);\n  z-index: 1;\n}\n\n.carousel-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5019607843);\n}\n\n.desc[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksbURBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1EQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcm91c2VsLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJvdXNlbC1zbGlkZSBpbWcge1xuICAgIGhlaWdodDogMTByZW07XG59XG5cbi5jYXJvdXNlbC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE2ZmM2MDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogNTAlO1xufVxuXG4uY2Fyb3VzZWwtc2xpZGUgaW1nLmN1cnJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5jYXJvdXNlbC1zbGlkZSBpbWcucHJldmlvdXMge1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWCg0cmVtKTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uY2Fyb3VzZWwtc2xpZGUgaW1nLm5leHQge1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWCgtNHJlbSk7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmNhcm91c2VsLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjgwO1xufVxuXG4uZGVzYyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1092:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage-supervisor.service */ 4304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ 8708);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ 4060);
/* harmony import */ var _login_register_buttons_login_register_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-register-buttons/login-register-buttons.component */ 4012);







function HeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-login-register-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("hello, ", ctx_r1.user, "!");
  }
}
class HeaderComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.user = '';
    this.logged_in = false;
  }
  ngOnInit() {
    this.checkStatus();
  }
  checkStatus() {
    const user = _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.getItem('username');
    const token = _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.getItem('token');
    if (user && token) {
      this.user = user;
      this.logged_in = true;
    }
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 4,
    vars: 2,
    consts: [["routerLink", "/", "src", "../../assets/pomo_pengy_logo_dark.png", 1, "logo"], [4, "ngIf"], ["class", "welcome-message", 4, "ngIf"], [1, "welcome-message"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 2, 0, "div", 1)(2, HeaderComponent_p_2_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-nav-bar");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.logged_in);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__.NavBarComponent, _login_register_buttons_login_register_buttons_component__WEBPACK_IMPORTED_MODULE_3__.LoginRegisterButtonsComponent],
    styles: ["app-login-register-buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4rem;\n  right: 0.1rem;\n}\n\n.welcome-message[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n  margin-right: 3rem;\n  position: absolute;\n  top: 4rem;\n  right: 0.1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQURGIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWxvZ2luLXJlZ2lzdGVyLWJ1dHRvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHJlbTtcbiAgcmlnaHQ6IDAuMXJlbTtcbn1cblxuLndlbGNvbWUtbWVzc2FnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1yaWdodDogM3JlbTtcblxuICAvLyBwb3NpdGlvbmluZ1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHJlbTtcbiAgcmlnaHQ6IDAuMXJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3200:
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/animations/animations */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _time_date_time_date_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../time-date/time-date.component */ 956);
/* harmony import */ var _session_button_session_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session-button/session-button.component */ 7996);
/* harmony import */ var _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../to-do/to-do.component */ 9504);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ 1092);






class HomePageComponent {
  static #_ = this.ɵfac = function HomePageComponent_Factory(t) {
    return new (t || HomePageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: HomePageComponent,
    selectors: [["app-home-page"]],
    decls: 7,
    vars: 2,
    consts: [[1, "components-left"], [1, "components-right"]],
    template: function HomePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header")(1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-time-date")(4, "app-session-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-to-do");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeIn", undefined);
      }
    },
    dependencies: [_time_date_time_date_component__WEBPACK_IMPORTED_MODULE_1__.TimeDateComponent, _session_button_session_button_component__WEBPACK_IMPORTED_MODULE_2__.SessionButtonComponent, _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_3__.ToDoComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent],
    styles: [".components-left[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.components-right[_ngcontent-%COMP%] {\n  width: 50%;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnRzLWxlZnR7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbn1cbi5jb21wb25lbnRzLXJpZ2h0IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OiByaWdodDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__.fadeInAnimation]
    }
  });
}

/***/ }),

/***/ 4432:
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageComponent: () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/animations/animations */ 740);
/* harmony import */ var _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage-supervisor.service */ 4304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8708);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1904);






class LoginPageComponent {
  constructor(apiService, router) {
    this.apiService = apiService;
    this.router = router;
    this.email = '';
    this.password = '';
  }
  postToDB() {
    const payload = {
      email: this.email,
      password: this.password
    };
    this.apiService.sendLogin(payload).subscribe(response => {
      alert('Login Successful!');
      // Set token expiry to 1 Day => Require Re-login
      _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_1__.supervisor.setItem('username', response.username, 1440);
      _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_1__.supervisor.setItem('token', response.accessToken, 1440);
      this.router.navigate(['/']);
    }, error => {
      console.error('Error:', error);
    });
  }
  static #_ = this.ɵfac = function LoginPageComponent_Factory(t) {
    return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginPageComponent,
    selectors: [["app-login-page"]],
    decls: 16,
    vars: 3,
    consts: [["routerLink", "/", "src", "../../assets/pomo_pengy_logo_dark.png", 1, "logo"], [1, "login-form"], [1, "form-input"], ["type", "text", "id", "email", "placeholder", "email", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "password", "placeholder", "password", 3, "ngModel", "ngModelChange"], [1, "submit-button", 3, "click"], ["routerLink", "/register"]],
    template: function LoginPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "form")(6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginPageComponent_Template_div_click_10_listener() {
          return ctx.postToDB();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
    styles: [".login-form[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  height: 27.5rem;\n  width: auto;\n  max-width: 30rem;\n  margin: 0 auto; \n\n  margin-bottom: 7rem;\n  background-color: #1B1A55;\n  border-radius: 30px;\n}\n.login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  font-size: 3.75rem;\n}\n.login-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #9290C3;\n  text-decoration: none;\n}\n.login-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  width: 24rem;\n  margin: 0 auto; \n\n}\n\n#email[_ngcontent-%COMP%], #password[_ngcontent-%COMP%] {\n  width: 20rem;\n  margin-bottom: 1rem;\n  border-radius: 10px;\n  border: 0.3rem solid #535C91;\n  padding: 1rem 1.5rem;\n  font-size: 1rem;\n}\n\n#email[_ngcontent-%COMP%]:focus, #password[_ngcontent-%COMP%]:focus {\n  border-color: #9290C3; \n\n  outline: none; \n\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  background-color: #535C91;\n  height: 3.3rem;\n  width: 23.5rem;\n  border-radius: 10px;\n  text-align: center;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  margin: 0 auto; \n\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n  background-color: #9290C3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBYUEsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUEsRUFBQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQVpKO0FBUEk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBU1I7QUFOSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQVFSO0FBTkk7RUFDSSxZQUFBO0FBUVI7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsY0FBQSxFQUFBLGlDQUFBO0FBREo7O0FBSUE7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxxQkFBQSxFQUFBLHNDQUFBO0VBQ0EsYUFBQSxFQUFBLGdDQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsY0FBQSxFQUFBLGlDQUFBO0FBSEo7O0FBS0E7RUFDSSx5QkFBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm17XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoMSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICBmb250LXNpemU6IDMuNzVyZW07XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjOTI5MEMzO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIGE6aG92ZXJ7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgICBoZWlnaHQ6IDI3LjVyZW07XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBcbiAgICBtYXJnaW46IDAgYXV0bzsgLyogSG9yaXpvbnRhbGx5IGNlbnRlcnMgdGhlIGRpdiAqL1xuICAgIG1hcmdpbi1ib3R0b206IDdyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFCMUE1NTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gICAgd2lkdGg6IDI0cmVtO1xuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBIb3Jpem9udGFsbHkgY2VudGVycyB0aGUgZGl2ICovXG59XG5cbiNlbWFpbCwgI3Bhc3N3b3Jke1xuICAgIC8vIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAwLjNyZW0gc29saWQgIzUzNUM5MTtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW1cbn1cblxuI2VtYWlsOmZvY3VzLCAjcGFzc3dvcmQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzkyOTBDMzsgLyogQ2hhbmdlcyB0aGUgYm9yZGVyIGNvbG9yIG9uIGZvY3VzICovXG4gICAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlcyB0aGUgZGVmYXVsdCBvdXRsaW5lICovXG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM1QzkxO1xuICAgIGhlaWdodDogMy4zcmVtO1xuICAgIHdpZHRoOiAyMy41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIEZpZ21hLWxpa2UgRHJvcCBTaGFkb3dcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIEhvcml6b250YWxseSBjZW50ZXJzIHRoZSBkaXYgKi9cbn1cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5MEMzO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__.fadeInAnimation]
    }
  });
}

/***/ }),

/***/ 4012:
/*!****************************************************************************!*\
  !*** ./src/app/login-register-buttons/login-register-buttons.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginRegisterButtonsComponent: () => (/* binding */ LoginRegisterButtonsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);


class LoginRegisterButtonsComponent {
  static #_ = this.ɵfac = function LoginRegisterButtonsComponent_Factory(t) {
    return new (t || LoginRegisterButtonsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginRegisterButtonsComponent,
    selectors: [["app-login-register-buttons"]],
    decls: 5,
    vars: 0,
    consts: [[1, "lr-buttons-container"], ["routerLink", "/login", 1, "lr-buttons"], ["routerLink", "/register", 1, "lr-buttons"]],
    template: function LoginRegisterButtonsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".lr-buttons-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.lr-buttons[_ngcontent-%COMP%] {\n  background-color: #535C91;\n  width: 8rem;\n  height: 3.5rem;\n  border-radius: 3.125rem;\n  text-align: center;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  margin-right: 1rem;\n}\n\n.lr-buttons[_ngcontent-%COMP%]:hover {\n  background-color: #9290C3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4tcmVnaXN0ZXItYnV0dG9ucy9sb2dpbi1yZWdpc3Rlci1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmxyLWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmxyLWJ1dHRvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzVDOTE7XG4gICAgLy8gSGVpZ2h0IGFuZCBXaWR0aCBhcmUgZnJvbSBGaWdtYVxuICAgIHdpZHRoOiA4cmVtO1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBGaWdtYS1saWtlIERyb3AgU2hhZG93XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5sci1idXR0b25zOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5MEMzO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4060:
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarComponent: () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);



function NavBarComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", icon_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](icon_r1.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", icon_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", icon_r1.title);
  }
}
class NavBarComponent {
  constructor() {
    this.icons = [{
      link: "/",
      src: "../../assets/nav-icons/home-icon.png",
      title: "Home",
      class: "icon"
    }, {
      link: "/pomo",
      src: "../../assets/nav-icons/timer-icon.png",
      title: "Pomodoro Timer",
      class: "icon right-icons"
    },
    // {link:"/notes", src:"../../assets/nav-icons/note-icon.png", title:"Notes", class:"icon right-icons"},
    {
      link: "/profile",
      src: "../../assets/nav-icons/user-icon.png",
      title: "Profile",
      class: "icon right-icons"
    }];
  }
  static #_ = this.ɵfac = function NavBarComponent_Factory(t) {
    return new (t || NavBarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavBarComponent,
    selectors: [["app-nav-bar"]],
    decls: 2,
    vars: 1,
    consts: [[1, "nav"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], [3, "src", "title"]],
    template: function NavBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_a_1_Template, 2, 6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".nav[_ngcontent-%COMP%] {\n  width: 19rem;\n  height: 3.3125rem;\n  flex-shrink: 0;\n  border-radius: 3.125rem;\n  background: #1B1A55;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  text-align: center;\n  padding-top: 1.075rem;\n  margin-top: -2rem;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 2.25rem;\n}\n\n.icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n}\n\n.right-icons[_ngcontent-%COMP%] {\n  margin-left: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esd0NBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcbiAgICAvLyBGcm9tIEZpZ21hXG4gICAgd2lkdGg6IDE5cmVtO1xuICAgIGhlaWdodDogMy4zMTI1cmVtO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICAgIGJhY2tncm91bmQ6ICMxQjFBNTU7XG4gICAgLy8gQ2VudGVyaW5nIHRoZSBkaXZcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxLjA3NXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uaWNvbiB7XG4gICAgaGVpZ2h0OiAyLjI1cmVtO1xufVxuLmljb246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLnJpZ2h0LWljb25zIHtcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3328:
/*!****************************************************!*\
  !*** ./src/app/notes-page/notes-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotesPageComponent: () => (/* binding */ NotesPageComponent)
/* harmony export */ });
/* harmony import */ var src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/animations/animations */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text-editor/text-editor.component */ 9716);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ 1092);




class NotesPageComponent {
  static #_ = this.ɵfac = function NotesPageComponent_Factory(t) {
    return new (t || NotesPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NotesPageComponent,
    selectors: [["app-notes-page"]],
    decls: 2,
    vars: 1,
    template: function NotesPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header")(1, "app-text-editor");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
      }
    },
    dependencies: [_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_1__.TextEditorComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
    styles: [".notes-container[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.notes[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90ZXMtcGFnZS9ub3Rlcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rlcy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5vdGVzIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__.fadeInAnimation]
    }
  });
}

/***/ }),

/***/ 8616:
/*!**************************************************!*\
  !*** ./src/app/pomo-page/pomo-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PomoPageComponent: () => (/* binding */ PomoPageComponent)
/* harmony export */ });
/* harmony import */ var src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/animations/animations */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../timer/timer.component */ 4508);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ 1092);




class PomoPageComponent {
  static #_ = this.ɵfac = function PomoPageComponent_Factory(t) {
    return new (t || PomoPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PomoPageComponent,
    selectors: [["app-pomo-page"]],
    decls: 2,
    vars: 1,
    template: function PomoPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header")(1, "app-timer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
      }
    },
    dependencies: [_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__.TimerComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__.fadeInAnimation]
    }
  });
}

/***/ }),

/***/ 8360:
/*!********************************************************!*\
  !*** ./src/app/profile-page/profile-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageComponent: () => (/* binding */ ProfilePageComponent)
/* harmony export */ });
/* harmony import */ var src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/animations/animations */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ 1092);
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../achievements/achievements.component */ 7732);
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../statistics/statistics.component */ 7300);





class ProfilePageComponent {
  static #_ = this.ɵfac = function ProfilePageComponent_Factory(t) {
    return new (t || ProfilePageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProfilePageComponent,
    selectors: [["app-profile-page"]],
    decls: 6,
    vars: 2,
    consts: [[1, "content"], [1, "components-left"], [1, "components-right"]],
    template: function ProfilePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeIn", undefined);
      }
    },
    dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_2__.AchievementsComponent, _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_3__.StatisticsComponent],
    styles: [".content[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.components-left[_ngcontent-%COMP%] {\n  width: 49.5%;\n  float: left;\n}\n\n.components-right[_ngcontent-%COMP%] {\n  width: 49.5%;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbXBvbmVudHMtbGVmdHtcbiAgICB3aWR0aDogNDkuNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uY29tcG9uZW50cy1yaWdodCB7XG4gICAgd2lkdGg6IDQ5LjUlO1xuICAgIGZsb2F0OiByaWdodDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__.fadeInAnimation]
    }
  });
}

/***/ }),

/***/ 5548:
/*!**********************************************************!*\
  !*** ./src/app/register-page/register-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterPageComponent: () => (/* binding */ RegisterPageComponent)
/* harmony export */ });
/* harmony import */ var src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/animations/animations */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ 8708);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1904);





class RegisterPageComponent {
  constructor(apiService, router) {
    this.apiService = apiService;
    this.router = router;
    this.username = '';
    this.email = '';
    this.password = '';
  }
  postToDB() {
    const payload = {
      email: this.email,
      username: this.username,
      password: this.password
    };
    this.apiService.sendRegister(payload).subscribe(response => {
      alert('Registration Successful!');
      this.router.navigate(['/login']);
    }, error => {
      console.error('Error:', error);
    });
  }
  static #_ = this.ɵfac = function RegisterPageComponent_Factory(t) {
    return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RegisterPageComponent,
    selectors: [["app-register-page"]],
    decls: 18,
    vars: 4,
    consts: [["routerLink", "/", "src", "../../assets/pomo_pengy_logo_dark.png", 1, "logo"], [1, "register-form"], [1, "form-input"], ["type", "text", "id", "email", "placeholder", "email", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "username", "placeholder", "username", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "password", "placeholder", "password", 3, "ngModel", "ngModelChange"], [1, "submit-button", 3, "click"], ["routerLink", "/login"]],
    template: function RegisterPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "form")(6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.username, $event) || (ctx.username = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterPageComponent_Template_div_click_12_listener() {
          return ctx.postToDB();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
    styles: [".register-form[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  height: 32rem;\n  width: auto;\n  max-width: 30rem;\n  margin: 0 auto; \n\n  margin-bottom: 7rem;\n  background-color: #1B1A55;\n  border-radius: 30px;\n}\n.register-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  font-size: 3.75rem;\n}\n.register-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #9290C3;\n  text-decoration: none;\n}\n.register-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  width: 24rem;\n  margin: 0 auto; \n\n}\n\n#email[_ngcontent-%COMP%], #username[_ngcontent-%COMP%], #password[_ngcontent-%COMP%] {\n  width: 20rem;\n  margin-bottom: 1rem;\n  border-radius: 10px;\n  border: 0.3rem solid #535C91;\n  padding: 1rem 1.5rem;\n  font-size: 1rem;\n}\n\n#email[_ngcontent-%COMP%]:focus, #password[_ngcontent-%COMP%]:focus {\n  border-color: #9290C3; \n\n  outline: none; \n\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  background-color: #535C91;\n  height: 3.3rem;\n  width: 23.5rem;\n  border-radius: 10px;\n  text-align: center;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  margin: 0 auto; \n\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n  background-color: #9290C3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBYUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUEsRUFBQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQVpKO0FBUEk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBU1I7QUFOSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQVFSO0FBTkk7RUFDSSxZQUFBO0FBUVI7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsY0FBQSxFQUFBLGlDQUFBO0FBREo7O0FBSUE7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxxQkFBQSxFQUFBLHNDQUFBO0VBQ0EsYUFBQSxFQUFBLGdDQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsY0FBQSxFQUFBLGlDQUFBO0FBSEo7O0FBS0E7RUFDSSx5QkFBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWZvcm17XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoMSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICBmb250LXNpemU6IDMuNzVyZW07XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjOTI5MEMzO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIGE6aG92ZXJ7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgICBoZWlnaHQ6IDMycmVtO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIEhvcml6b250YWxseSBjZW50ZXJzIHRoZSBkaXYgKi9cbiAgICBtYXJnaW4tYm90dG9tOiA3cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjFBNTU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLmZvcm0taW5wdXQge1xuICAgIHdpZHRoOiAyNHJlbTtcbiAgICBtYXJnaW46IDAgYXV0bzsgLyogSG9yaXpvbnRhbGx5IGNlbnRlcnMgdGhlIGRpdiAqL1xufVxuXG4jZW1haWwsICN1c2VybmFtZSwgI3Bhc3N3b3Jke1xuICAgIC8vIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAwLjNyZW0gc29saWQgIzUzNUM5MTtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW1cbn1cblxuI2VtYWlsOmZvY3VzLCAjcGFzc3dvcmQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzkyOTBDMzsgLyogQ2hhbmdlcyB0aGUgYm9yZGVyIGNvbG9yIG9uIGZvY3VzICovXG4gICAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlcyB0aGUgZGVmYXVsdCBvdXRsaW5lICovXG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM1QzkxO1xuICAgIGhlaWdodDogMy4zcmVtO1xuICAgIHdpZHRoOiAyMy41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIEZpZ21hLWxpa2UgRHJvcCBTaGFkb3dcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIEhvcml6b250YWxseSBjZW50ZXJzIHRoZSBkaXYgKi9cbn1cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5MEMzO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__.fadeInAnimation]
    }
  });
}

/***/ }),

/***/ 7996:
/*!************************************************************!*\
  !*** ./src/app/session-button/session-button.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionButtonComponent: () => (/* binding */ SessionButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);


class SessionButtonComponent {
  static #_ = this.ɵfac = function SessionButtonComponent_Factory(t) {
    return new (t || SessionButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SessionButtonComponent,
    selectors: [["app-session-button"]],
    decls: 3,
    vars: 0,
    consts: [["routerLink", "/pomo", 1, "start-session"]],
    template: function SessionButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "start a study session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".start-session[_ngcontent-%COMP%] {\n  background-color: #535C91;\n  width: 16.25rem;\n  height: 4.4375rem;\n  border-radius: 3.125rem;\n  text-align: center;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n\n.start-session[_ngcontent-%COMP%]:hover {\n  background-color: #9290C3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2Vzc2lvbi1idXR0b24vc2Vzc2lvbi1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSwrQ0FBQTtBQURKOztBQUdBO0VBQ0kseUJBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydC1zZXNzaW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM1QzkxO1xuICAgIC8vIEhlaWdodCBhbmQgV2lkdGggYXJlIGZyb20gRmlnbWFcbiAgICB3aWR0aDogMTYuMjVyZW07XG4gICAgaGVpZ2h0OiA0LjQzNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIEZpZ21hLWxpa2UgRHJvcCBTaGFkb3dcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG4uc3RhcnQtc2Vzc2lvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyOTBDMztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1928:
/*!**********************************************************************!*\
  !*** ./src/app/spotify-integration/spotify-integration.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpotifyIntegrationComponent: () => (/* binding */ SpotifyIntegrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class SpotifyIntegrationComponent {
  static #_ = this.ɵfac = function SpotifyIntegrationComponent_Factory(t) {
    return new (t || SpotifyIntegrationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SpotifyIntegrationComponent,
    selectors: [["app-spotify-integration"]],
    decls: 0,
    vars: 0,
    template: function SpotifyIntegrationComponent_Template(rf, ctx) {},
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7300:
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatisticsComponent: () => (/* binding */ StatisticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class StatisticsComponent {
  static #_ = this.ɵfac = function StatisticsComponent_Factory(t) {
    return new (t || StatisticsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StatisticsComponent,
    selectors: [["app-statistics"]],
    decls: 2,
    vars: 0,
    template: function StatisticsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "study stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4304:
/*!***********************************************!*\
  !*** ./src/app/storage-supervisor.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supervisor: () => (/* binding */ supervisor)
/* harmony export */ });
class StorageSupervisorService {
  setItem(key, value, expiryInMinutes) {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + expiryInMinutes * 60 * 1000
    };
    localStorage.setItem(key, JSON.stringify(item));
  }
  getItem(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item['value'];
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
}
// Export an instance of the service
const supervisor = new StorageSupervisorService();

/***/ }),

/***/ 8352:
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskService: () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

// Service (Methods) that can can be used with the task model (interface) we defined.
class TaskService {
  constructor() {
    this.tasks = [];
  }
  getTasks() {
    return this.tasks;
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(index) {
    return this.tasks.splice(index, 1)[0];
  }
  static #_ = this.ɵfac = function TaskService_Factory(t) {
    return new (t || TaskService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TaskService,
    factory: TaskService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9716:
/*!******************************************************!*\
  !*** ./src/app/text-editor/text-editor.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextEditorComponent: () => (/* binding */ TextEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ 9552);




function TextEditorComponent_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const font_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", font_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](font_r1);
  }
}
class TextEditorComponent {
  constructor() {
    this.markdownText = '';
    this.fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana', 'Jua'];
    // Default selected font
    this.selectedFont = this.fonts[0];
  }
  static #_ = this.ɵfac = function TextEditorComponent_Factory(t) {
    return new (t || TextEditorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TextEditorComponent,
    selectors: [["app-text-editor"]],
    decls: 11,
    vars: 6,
    consts: [[1, "parent"], [1, "child", "editor"], [1, "toolbar"], ["for", "font-select"], ["id", "font-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Enter Markdown text here...", 3, "ngModel", "ngModelChange"], [1, "child", "preview", "std-font"], [1, "std-font", 3, "data"], [3, "value"]],
    template: function TextEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Font: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function TextEditorComponent_Template_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.selectedFont, $event) || (ctx.selectedFont = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TextEditorComponent_option_7_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function TextEditorComponent_Template_textarea_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.markdownText, $event) || (ctx.markdownText = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "markdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedFont);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fonts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.markdownText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-family", ctx.selectedFont);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.markdownText);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownComponent],
    styles: [".parent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 2rem;\n  text-align: center;\n}\n\n.child[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  vertical-align: middle;\n}\n\n.editor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-right: 4rem;\n  box-sizing: border-box;\n}\n\n.preview[_ngcontent-%COMP%] {\n  background-color: white;\n  height: calc(100vh - 3.5rem);\n  overflow-y: auto;\n  width: 100%;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  background-color: gray;\n  box-sizing: border-box;\n}\n.toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-left: 0.25rem;\n  color: white;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  width: 100%;\n  height: calc(100vh - 5.5rem);\n  resize: vertical;\n  box-sizing: border-box;\n}\n\n.std-font[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n\n@media (max-width: 768px) {\n  \n\n  .parent[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  \n\n  .child[_ngcontent-%COMP%] {\n    max-width: 100%; \n\n  }\n  \n\n  textarea[_ngcontent-%COMP%], .preview[_ngcontent-%COMP%] {\n    height: 50vh; \n\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGV4dC1lZGl0b3IvdGV4dC1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksT0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFFUjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHNDQUFBO0VBQ0E7SUFDSSxzQkFBQTtFQUNOO0VBRUUsaUNBQUE7RUFDQTtJQUNJLGVBQUEsRUFBQSwyQ0FBQTtFQUFOO0VBR0UsOERBQUE7RUFDQTs7SUFFSSxZQUFBLEVBQUEsc0NBQUE7RUFETjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNoaWxkIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5lZGl0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnByZXZpZXcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMuNXJlbSk7IFxuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbGFiZWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbnRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNS41cmVtKTsgXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc3RkLWZvbnQge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAvKiBTdGFjayBjaGlsZCBjb250YWluZXJzIHZlcnRpY2FsbHkgKi9cbiAgICAucGFyZW50IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAvKiBBZGp1c3QgY2hpbGQgY29udGFpbmVyIHdpZHRoICovXG4gICAgLmNoaWxkIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlOyAvKiBBbGxvdyBlYWNoIGNoaWxkIHRvIHRha2UgdXAgZnVsbCB3aWR0aCAqL1xuICAgIH1cblxuICAgIC8qIEFkanVzdCBoZWlnaHQgb2YgdGV4dGFyZWEgYW5kIHByZXZpZXcgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xuICAgIHRleHRhcmVhLFxuICAgIC5wcmV2aWV3IHtcbiAgICAgICAgaGVpZ2h0OiA1MHZoOyAvKiBBZGp1c3QgaGVpZ2h0IGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 956:
/*!**************************************************!*\
  !*** ./src/app/time-date/time-date.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeDateComponent: () => (/* binding */ TimeDateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class TimeDateComponent {
  constructor() {
    this.currentDateTime = new Date();
    this.time = this.formatTime(this.currentDateTime);
    this.date = this.formatDate(this.currentDateTime);
  }
  ngOnInit() {
    this.updateDateTime();
    // Update the time every second
    setInterval(() => this.updateDateTime(), 1000);
  }
  formatTime(curDate) {
    let hours = curDate.getHours() % 12;
    hours = hours === 0 ? 12 : hours;
    return this.padZero(hours) + ':' + this.padZero(curDate.getMinutes()) + ' ' + (curDate.getHours() >= 12 ? 'PM' : 'AM');
  }
  padZero(value) {
    return value < 10 ? '0' + value : '' + value;
  }
  formatDate(curDate) {
    const dOW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const mOY = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return dOW[curDate.getDay()] + ", " + mOY[curDate.getMonth()] + " " + curDate.getDate() + ", " + curDate.getFullYear();
  }
  updateDateTime() {
    this.currentDateTime = new Date();
    this.time = this.formatTime(this.currentDateTime);
    this.date = this.formatDate(this.currentDateTime);
  }
  static #_ = this.ɵfac = function TimeDateComponent_Factory(t) {
    return new (t || TimeDateComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TimeDateComponent,
    selectors: [["app-time-date"]],
    decls: 5,
    vars: 2,
    consts: [[1, "time"], [1, "date"]],
    template: function TimeDateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date);
      }
    },
    styles: [".time[_ngcontent-%COMP%] {\n  margin-top: 12.5rem;\n  margin-bottom: -2rem;\n  text-align: center;\n  color: white;\n}\n\n.date[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGltZS1kYXRlL3RpbWUtZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZSB7XG4gICAgbWFyZ2luLXRvcDogMTIuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmRhdGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9624:
/*!**********************************!*\
  !*** ./src/app/timer.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimerService: () => (/* binding */ TimerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class TimerService {
  constructor() {
    this.minutes = 45;
    this.seconds = 0;
    this.entered = 45;
    // used for pomodoro feature
    this.sprint = 0;
    this.break = 10;
    this.isRunning = false;
    this.callRestart = 0;
  }
  startTimer() {
    if (this.callRestart !== 1) {
      this.resetTimer();
      this.callRestart = 1;
    }
    this.isRunning = true;
    this.sprint++;
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else if (this.entered > 0) {
        this.entered--;
        this.seconds = 59;
      } else {
        this.resetTimer();
        this.callRestart = 0;
        alert("The timer has ended!");
      }
    }, 1000);
  }
  stopTimer() {
    this.isRunning = false;
    this.sprint--;
    clearInterval(this.interval);
  }
  resetTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
    if (this.sprint % 2 === 1) {
      this.entered = this.break;
    } else {
      this.entered = this.minutes;
    }
    this.seconds = 0;
  }
  static #_ = this.ɵfac = function TimerService_Factory(t) {
    return new (t || TimerService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TimerService,
    factory: TimerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4508:
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimerComponent: () => (/* binding */ TimerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../timer.service */ 9624);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2676);




class TimerComponent {
  constructor(timerService) {
    this.timerService = timerService;
    this.displaySettings = false;
  }
  toggleSettings() {
    this.displaySettings = !this.displaySettings;
  }
  ngOnInit() {
    this.resetTimer();
  }
  startTimer() {
    this.timerService.startTimer();
  }
  stopTimer() {
    this.timerService.stopTimer();
  }
  resetTimer() {
    this.timerService.resetTimer();
  }
  get minutes() {
    return this.timerService.minutes;
  }
  get entered() {
    return this.timerService.entered;
  }
  get seconds() {
    return this.timerService.seconds;
  }
  get isRunning() {
    return this.timerService.isRunning;
  }
  get break() {
    return this.timerService.break;
  }
  set minutes(min) {
    this.timerService.minutes = min;
  }
  set break(br) {
    this.timerService.break = br;
  }
  static #_ = this.ɵfac = function TimerComponent_Factory(t) {
    return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_timer_service__WEBPACK_IMPORTED_MODULE_0__.TimerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TimerComponent,
    selectors: [["app-timer"]],
    decls: 30,
    vars: 16,
    consts: [[1, "timer-container"], [1, "timer-controller"], [1, "timer-buttons", 3, "disabled", "click"], [1, "timer-buttons", 3, "click"], [1, "toggle", 3, "click"], ["for", "minutes"], ["type", "number", "id", "minutes", "min", "1", 1, "timer-input", 3, "ngModel", "ngModelChange"], [1, "toggle", "inner", 3, "click"]],
    template: function TimerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1)(7, "div")(8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_8_listener() {
          return ctx.startTimer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "start");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_10_listener() {
          return ctx.stopTimer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_12_listener() {
          return ctx.resetTimer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_15_listener() {
          return ctx.toggleSettings();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u2304");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div")(18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "To use the Pomodoro Timer, set your preferred study and break intervals. These intervals will alternate, helping you maximize your study time. We provided some commonly used default values.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "study interval:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TimerComponent_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.minutes, $event) || (ctx.minutes = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "break interval:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TimerComponent_Template_input_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.break, $event) || (ctx.break = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_28_listener() {
          return ctx.toggleSettings();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u2303");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 10, ctx.entered, "2.0"), " min ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 13, ctx.seconds, "2.0"), " s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isRunning);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isRunning);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.displaySettings ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.displaySettings ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.minutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.break);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
    styles: ["div[_ngcontent-%COMP%] {\n  color: white;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 9rem;\n}\n\n.timer-container[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  text-align: center;\n}\n\n.timer-buttons[_ngcontent-%COMP%] {\n  color: white;\n  font-family: Jua;\n  background-color: #535C91;\n  border: none;\n  text-decoration: none;\n  margin: 1rem;\n  height: 2.5rem;\n  width: 5rem;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n}\n\n.timer-buttons[_ngcontent-%COMP%]:hover {\n  background-color: #9290C3;\n}\n\n.timer-controller[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  border-radius: 25px;\n  background-color: #1B1A55;\n  padding: 2rem;\n  width: 24rem;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-right: 0.75rem;\n}\n\n.timer-input[_ngcontent-%COMP%] {\n  font-family: Jua;\n  height: 1.35rem;\n  border-radius: 15px;\n  width: 3rem;\n  border: none;\n  text-decoration: none;\n  text-align: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n}\n\n.toggle[_ngcontent-%COMP%] {\n  color: #535C91;\n  font-size: 1.25rem;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  background-color: inherit;\n  border: none;\n  text-decoration: none;\n}\n\n.inner[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.toggle[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGltZXIvdGltZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDlyZW07XG59XG5cbi50aW1lci1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpbWVyLWJ1dHRvbnMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogSnVhO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzVDOTE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4udGltZXItYnV0dG9uczpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5MEMzO1xufVxuXG4udGltZXItY29udHJvbGxlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFCMUE1NTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIHdpZHRoOiAyNHJlbTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbn1cbi50aW1lci1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IEp1YTtcbiAgICBoZWlnaHQ6IDEuMzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4udG9nZ2xlIHtcbiAgICBjb2xvcjogIzUzNUM5MTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmlubmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxLjUwcmVtO1xufVxuXG4udG9nZ2xlOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9504:
/*!******************************************!*\
  !*** ./src/app/to-do/to-do.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDoComponent: () => (/* binding */ ToDoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.service */ 8708);
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task.service */ 8352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1904);





function ToDoComponent_li_12_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("due on ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, task_r1.dueDate, "medium"), "");
  }
}
function ToDoComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "div", 14)(2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ToDoComponent_li_12_p_5_Template, 3, 4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToDoComponent_li_12_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const i_r2 = restoredCtx.index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.removeTask(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r1.include);
  }
}
class ToDoComponent {
  constructor(apiService, taskService, el, renderer) {
    this.apiService = apiService;
    this.taskService = taskService;
    this.el = el;
    this.renderer = renderer;
    this.tasks = [];
    this.newTask = {
      title: '',
      dueDate: new Date(),
      include: false
    };
    this.displayInfo = true;
  }
  ngOnInit() {
    this.getFromDB();
    this.tasks = this.taskService.getTasks();
  }
  toggleInfo() {
    this.displayInfo = !this.displayInfo;
  }
  addTask() {
    if (!this.newTask.title.trim()) {
      // You can show an error message or handle it as needed
      alert('Please enter a task title!');
      return;
    }
    // store the task in the DB to be retrieved when re-entering the site
    this.postToDB();
    this.taskService.addTask(this.newTask);
    this.newTask = {
      title: '',
      dueDate: new Date(),
      include: false
    };
    const container = this.el.nativeElement.querySelector('.temp-container');
    this.renderer.setStyle(container, "display", "none");
    const add_button = this.el.nativeElement.querySelector('.task-add-button');
    this.renderer.setStyle(add_button, "display", "block");
  }
  removeTask(index) {
    const removed = this.taskService.removeTask(index);
    console.log(removed.title);
    this.removeFromDB(removed.title);
  }
  displayForm() {
    const container = this.el.nativeElement.querySelector('.temp-container');
    this.renderer.setStyle(container, "display", "block");
    const add_button = this.el.nativeElement.querySelector('.task-add-button');
    this.renderer.setStyle(add_button, "display", "none");
  }
  parseTaskData(response) {
    for (let i of response) {
      const task = {
        title: i['title'],
        dueDate: new Date(i['dueDate']),
        include: i['include']
      };
      this.taskService.addTask(task);
    }
  }
  getFromDB() {
    this.apiService.getTasks().subscribe(response => {
      if (response) {
        this.parseTaskData(response);
      }
    }, error => {
      console.error('Error:', error);
    });
  }
  postToDB() {
    const payload = {
      title: this.newTask.title,
      dueDate: this.newTask.dueDate,
      include: this.newTask.include
    };
    this.apiService.sendTask(payload).subscribe(response => {
      null;
    }, error => {
      console.error('Error:', error);
    });
  }
  removeFromDB(title) {
    const payload = {
      title: title
    };
    this.apiService.removeTask(payload).subscribe(response => {
      null;
    }, error => {
      console.error('Error:', error);
    });
  }
  static #_ = this.ɵfac = function ToDoComponent_Factory(t) {
    return new (t || ToDoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_1__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ToDoComponent,
    selectors: [["app-to-do"]],
    decls: 30,
    vars: 10,
    consts: [[1, "list-container"], [1, "to-do-header"], [1, "toggle", 3, "click"], [1, "container-info"], [1, "task-container"], [4, "ngFor", "ngForOf"], [1, "task-add-button", 3, "click"], [1, "temp-container", "task-item", 2, "display", "none"], ["for", "title"], ["type", "text", "id", "title", "required", "", 1, "user-vals", 3, "ngModel", "ngModelChange"], ["for", "date"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["type", "datetime-local", "id", "date", 1, "user-vals", 3, "ngModel", "ngModelChange"], [1, "submit", 3, "click"], [1, "task-item"], [1, "task-title"], ["class", "task-date", 4, "ngIf"], [1, "task-date"]],
    template: function ToDoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " your tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToDoComponent_Template_a_click_3_listener() {
          return ctx.toggleInfo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u02C5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToDoComponent_Template_a_click_5_listener() {
          return ctx.toggleInfo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u02C4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Here is where you can organize your tasks. To add a new task, press the \"+\" button and fill out the form. Check the box if you want to include a due date for your task.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4)(11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ToDoComponent_li_12_Template, 9, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToDoComponent_Template_div_click_13_listener() {
          return ctx.displayForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ToDoComponent_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.newTask.title, $event) || (ctx.newTask.title = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "due date (optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ToDoComponent_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.newTask.include, $event) || (ctx.newTask.include = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ToDoComponent_Template_input_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.newTask.dueDate, $event) || (ctx.newTask.dueDate = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToDoComponent_Template_button_click_28_listener() {
          return ctx.addTask();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "add task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.displayInfo ? "none" : "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.displayInfo ? "inline" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.displayInfo ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.newTask.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.newTask.include);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.newTask.dueDate);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
    styles: [".list-container[_ngcontent-%COMP%] {\n  width: 33rem;\n  height: 39.6875rem;\n  border-radius: 3.125rem;\n  background: #1B1A55;\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  text-align: center;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n}\n\n.list-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none; \n\n}\n\n.to-do-header[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n}\n\n.task-add-button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 3.6875rem;\n  height: 3.6875rem;\n  background: #535C91;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.task-add-button[_ngcontent-%COMP%]:hover {\n  background-color: #9290C3;\n}\n\nh2[_ngcontent-%COMP%] {\n  padding-top: 0.63rem;\n}\n\n.task-item[_ngcontent-%COMP%] {\n  width: 29.625rem;\n  min-height: 5.6875rem;\n  border-radius: 3.125rem;\n  background: #535C91;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  margin-top: 1rem;\n  text-align: left;\n  padding-top: 1.25rem;\n  padding-left: 1.75rem;\n  padding-bottom: 1.25rem;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.user-vals[_ngcontent-%COMP%] {\n  border-radius: 3.125rem;\n  font-family: Jua;\n  width: 50%;\n  height: 1.75rem;\n  margin-bottom: 1rem;\n  padding-left: 0.5rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  border-radius: 3.125rem;\n  background-color: #9290C3;\n  color: #FFFFFF;\n  font-family: Jua;\n  width: 4rem;\n  height: 2.25rem;\n  border: none;\n}\n\n.submit[_ngcontent-%COMP%]:hover {\n  background-color: #b3b1d5;\n}\n\n.task-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0;\n  margin-bottom: -0.75rem;\n}\n\n.task-date[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0;\n  margin-bottom: -0.75rem;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  color: #535C91;\n  font-size: 1.25rem;\n  text-decoration: none;\n}\n\n.toggle[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\n.container-info[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG8tZG8vdG8tZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUEsRUFBQSxzQkFBQTtBQUFKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxvQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtBQUtKOztBQUZBO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUZBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFLSjs7QUFGQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQVksZUFBQTtFQUNaLG1CQUFBO0VBQ0Esb0JBQUE7QUFNSjs7QUFIQTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFNSjs7QUFIQTtFQUNJLHlCQUFBO0FBTUo7O0FBSEE7RUFDSSxpQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUhBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUhBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFNSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSEE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFNSiIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMzcmVtO1xuICAgIGhlaWdodDogMzkuNjg3NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjMUIxQTU1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC8vIEhpZGRlbiBTY3JvbGwgQmFyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLy8gSGlkZGVuIFNjcm9sbCBCYXJcbi5saXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcbiAgICBkaXNwbGF5OiBub25lOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbn1cbi50by1kby1oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG59XG4udGFzay1hZGQtYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDMuNjg3NXJlbTtcbiAgICBoZWlnaHQ6IDMuNjg3NXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjNTM1QzkxO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi50YXNrLWFkZC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MjkwQzM7XG59XG5oMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNjNyZW07XG59XG4udGFzay1pdGVtIHtcbiAgICB3aWR0aDogMjkuNjI1cmVtO1xuICAgIG1pbi1oZWlnaHQ6IDUuNjg3NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjNTM1QzkxO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnVzZXItdmFscyB7XG4gICAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XG4gICAgZm9udC1mYW1pbHk6IEp1YTtcbiAgICB3aWR0aDogNTAlOyBoZWlnaHQ6IDEuNzVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuLnN1Ym1pdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyOTBDMztcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LWZhbWlseTogSnVhO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogMi4yNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5zdWJtaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2IxZDU7XG59XG5cbi50YXNrLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNTByZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjc1cmVtO1xufVxuXG4udGFzay1kYXRlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjc1cmVtO1xufVxuXG4udG9nZ2xlIHtcbiAgICBjb2xvcjogIzUzNUM5MTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udG9nZ2xlOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFpbmVyLWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNzUlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 740:
/*!*********************************************!*\
  !*** ./src/assets/animations/animations.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fadeInAnimation: () => (/* binding */ fadeInAnimation),
/* harmony export */   loadInAnimation: () => (/* binding */ loadInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 3291);

const loadInAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('loadIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('2s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}))])]);
const fadeInAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('1.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('1.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}))])]);

/***/ }),

/***/ 7460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5204);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map