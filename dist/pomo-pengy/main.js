"use strict";
(self["webpackChunkpengy_portal_frontend"] = self["webpackChunkpengy_portal_frontend"] || []).push([["main"],{

/***/ 940:
/*!********************************************************!*\
  !*** ./src/app/about-button/about-button.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutButtonComponent: () => (/* binding */ AboutButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);


class AboutButtonComponent {
  static #_ = this.ɵfac = function AboutButtonComponent_Factory(t) {
    return new (t || AboutButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutButtonComponent,
    selectors: [["app-about-button"]],
    decls: 3,
    vars: 0,
    consts: [["routerLink", "/about-pomo-pengy", 1, "about-button"]],
    template: function AboutButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "learn more about pomopengy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".about-button[_ngcontent-%COMP%] {\n  background-color: #1B1A52;\n  width: 16.25rem;\n  height: 4.4375rem;\n  border-radius: 3.125rem;\n  text-align: center;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n\n.about-button[_ngcontent-%COMP%]:hover {\n  background-color: #535C91;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQtYnV0dG9uL2Fib3V0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBRUEsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLCtDQUFBO0FBREo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFCMUE1MjtcbiAgICAvLyBIZWlnaHQgYW5kIFdpZHRoIGFyZSBmcm9tIEZpZ21hXG4gICAgd2lkdGg6IDE2LjI1cmVtO1xuICAgIGhlaWdodDogNC40Mzc1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBGaWdtYS1saWtlIERyb3AgU2hhZG93XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLmFib3V0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzNUM5MTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6372:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/animations/animations */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);



class AboutComponent {
  ngOnInit() {
    document.body.classList.add('about-body');
  }
  ngOnDestroy() {
    document.body.classList.remove('about-body');
  }
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 34,
    vars: 1,
    consts: [[1, "header"], ["routerLink", "/"], ["src", "../../assets/pomo_pengy_logo_light.png", 1, "logo"], [1, "right-item"], [1, "content"], [1, "bio"], ["src", "../../assets/about-images/ethan-headshot.png", 1, "headshot"], [1, "info"], ["href", "https://ethanlphan.com"], ["href", "https://savina-chan.github.io"], ["src", "../../assets/about-images/savina-headshot.jpg", 1, "headshot", "right"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 1)(5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "< back to the site");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "what is pomopengy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "pomopengy is a multi-feature productivity application designed for students by students. we aimed to incentivize task completion through earning achievements and badges.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "our inspiration came from video games, such as valorant or league of legends, that give users a rank based on their performance and gives them rewards based on the amount of time/effort put towards the game.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "our team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7)(19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Ethan Phan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "visionary, lead developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "B.S. Computer Science, University at Buffalo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5)(26, "div", 7)(27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Savina Chan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "lead developer, asset procurer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "B.A. Computer Science, New York University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .right-item[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #555C8D;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1B1A52;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.bio[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.bio[_ngcontent-%COMP%]   .headshot[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 12rem;\n}\n.bio[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n.bio[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #555c8d;\n  font-size: 1.5rem;\n  text-decoration: none;\n}\n.bio[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #828cd8;\n}\n.bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtBQUVSO0FBQ0k7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUFDUjtBQUNJO0VBQ0ksY0FBQTtBQUNSOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksY0FBQTtBQUFSO0FBRUk7RUFDSSxtQkFBQTtBQUFSOztBQUlBO0VBdUJJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUF2Qko7QUFGSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUlSO0FBREk7RUFDSSxpQkFBQTtBQUdSO0FBQUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUVSO0FBQUk7RUFDSSxjQUFBO0FBRVI7QUFDSTtFQUNJLGNBQUE7QUFDUiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLnJpZ2h0LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG4gICAgXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBhOmhvdmVye1xuICAgICAgICBjb2xvcjogIzU1NUM4RDtcbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuXG4gICAgaDMge1xuICAgICAgICBjb2xvcjogIzFCMUE1MjtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxufVxuXG4uYmlvIHtcbiAgICAuaGVhZHNob3Qge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogMTJyZW07XG4gICAgfVxuXG4gICAgLmluZm8ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICB9XG4gICAgXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjNTU1YzhkO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IzgyOGNkODtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgfVxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__.fadeInAnimation]
    }
  });
}

/***/ }),

/***/ 7732:
/*!********************************************************!*\
  !*** ./src/app/achievements/achievements.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AchievementsComponent: () => (/* binding */ AchievementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.service */ 8708);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel/carousel.component */ 5948);



class AchievementsComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.displayInfo = false;
    this.cur = "";
  }
  ngOnInit() {
    this.getStats();
  }
  toggleInfo() {
    this.displayInfo = !this.displayInfo;
  }
  /* ------------------ TEMPORARY CODE ------------------ */
  // achievements_temp = [
  //   "Rookie Pengy",
  //   "Apprentice Pengy",
  //   "Junior Pengy Analyst",
  //   "Associate Pengy",
  //   "Pengy Analyst",
  //   "Pengy Fellow",
  //   "Pengy Researcher",
  //   "Erudite Pengy",
  //   "Luminary Pengy",
  //   "Master Pengy",
  //   "Doctor Pengy",
  //   "Enlightened Pengy"
  // ]
  // getRandomInt(max: number) {
  //   return Math.floor(Math.random() * max);
  // }
  getStats() {
    this.apiService.getUserRank().subscribe(response => {
      if (response) {
        this.cur = response.cur;
      }
    }, error => {
      console.error('Error:', error);
    });
  }
  static #_ = this.ɵfac = function AchievementsComponent_Factory(t) {
    return new (t || AchievementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AchievementsComponent,
    selectors: [["app-achievements"]],
    decls: 18,
    vars: 7,
    consts: [[1, "levels-container"], [1, "upper"], [1, "toggle", 3, "click"], [1, "container-info"], [1, "center-all"], [1, "lower"]],
    template: function AchievementsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "study level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AchievementsComponent_Template_a_click_4_listener() {
          return ctx.toggleInfo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u02C5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AchievementsComponent_Template_a_click_6_listener() {
          return ctx.toggleInfo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u02C4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "inspired by the ranking feature in modern games, Pomo Pengy allows you to climb to higher ranks on the pyramid of pengy knowledge. The more hours of studying you put in, the higher your rank grows!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.displayInfo ? "none" : "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.displayInfo ? "inline" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.displayInfo ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cur);
      }
    },
    dependencies: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent],
    styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  color: #a9a6fc;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.upper[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\n.lower[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\n.center-all[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  color: #535c91;\n  font-size: 1.25rem;\n  text-decoration: none;\n}\n\n.toggle[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\n.container-info[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNoaWV2ZW1lbnRzL2FjaGlldmVtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7QUFHSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUdKIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgIGNvbG9yOiAjYTlhNmZjO1xufVxuXG5oMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVwcGVyIHtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cbi5sb3dlciB7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbi5jZW50ZXItYWxsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b2dnbGUge1xuICAgIGNvbG9yOiAjNTM1YzkxO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50b2dnbGU6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250YWluZXItaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA3NSU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    this.url = "https://seashell-app-uarvh.ondigitalocean.app/"; /*"http://localhost:8080/";*/
  }
  sendRegister(data) {
    return this.http.post(this.url + "api/register", data);
  }
  sendLogin(data) {
    return this.http.post(this.url + "api/login", data);
  }
  sendTask(data) {
    const token = _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.getItem("token");
    if (token) {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        authorization: token
      });
      return this.http.post(this.url + "api/postTask", data, {
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
      return this.http.get(this.url + "api/getTasks", {
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
      return this.http.delete(this.url + "api/removeTask", {
        headers,
        params
      });
    }
    // return an empty object
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  patchTask(data) {
    const token = _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.getItem("token");
    if (token) {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        authorization: token
      });
      return this.http.patch(this.url + "api/patchTask", data, {
        headers
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
      return this.http.get(this.url + "api/sendStats", {
        headers
      });
    }
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  sendSession(data) {
    const token = _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.getItem("token");
    if (token) {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        authorization: token
      });
      return this.http.post(this.url + "api/endSession", data, {
        headers
      });
    }
    // return an empty object
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  getUserRank() {
    const token = _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.getItem("token");
    console.log(token);
    if (token) {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        authorization: token
      });
      return this.http.get(this.url + "api/getRanking", {
        headers
      });
    }
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  logout() {
    _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.removeItem("username");
    _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.removeItem("token");
  }
  checkLogInStatus() {
    const user = _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.getItem('username');
    const token = _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_0__.supervisor.getItem('token');
    if (user && token) {
      return [user, token];
    }
    return [];
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page.component */ 3200);
/* harmony import */ var _pomo_page_pomo_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pomo-page/pomo-page.component */ 8616);
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-page/register-page.component */ 5548);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page/login-page.component */ 4432);
/* harmony import */ var _notes_page_notes_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes-page/notes-page.component */ 3328);
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-page/profile-page.component */ 8360);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ 6372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4280);










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
}, {
  path: "about-pomo-pengy",
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 381);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 1904);
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
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-markdown */ 9552);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api.service */ 8708);
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile-page/profile-page.component */ 8360);
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./achievements/achievements.component */ 7732);
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./statistics/statistics.component */ 7300);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./carousel/carousel.component */ 5948);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./logout/logout.component */ 4100);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./about/about.component */ 6372);
/* harmony import */ var _about_button_about_button_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./about-button/about-button.component */ 940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 4280);































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
    providers: [_api_service__WEBPACK_IMPORTED_MODULE_16__.ApiService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_28__.MarkdownModule.forRoot(), ngx_markdown__WEBPACK_IMPORTED_MODULE_28__.MarkdownModule.forChild(), _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_28__.MarkdownModule.forRoot({
      loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClient
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _time_date_time_date_component__WEBPACK_IMPORTED_MODULE_2__.TimeDateComponent, _session_button_session_button_component__WEBPACK_IMPORTED_MODULE_3__.SessionButtonComponent, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__.NavBarComponent, _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__.HomePageComponent, _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_6__.ToDoComponent, _pomo_page_pomo_page_component__WEBPACK_IMPORTED_MODULE_7__.PomoPageComponent, _timer_timer_component__WEBPACK_IMPORTED_MODULE_8__.TimerComponent, _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__.LoginPageComponent, _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_10__.RegisterPageComponent, _notes_page_notes_page_component__WEBPACK_IMPORTED_MODULE_11__.NotesPageComponent, _spotify_integration_spotify_integration_component__WEBPACK_IMPORTED_MODULE_12__.SpotifyIntegrationComponent, _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_13__.TextEditorComponent, _login_register_buttons_login_register_buttons_component__WEBPACK_IMPORTED_MODULE_14__.LoginRegisterButtonsComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_15__.HeaderComponent, _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_17__.ProfilePageComponent, _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_18__.AchievementsComponent, _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_19__.StatisticsComponent, _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__.CarouselComponent, _logout_logout_component__WEBPACK_IMPORTED_MODULE_21__.LogoutComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_22__.AboutComponent, _about_button_about_button_component__WEBPACK_IMPORTED_MODULE_23__.AboutButtonComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_28__.MarkdownModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_28__.MarkdownModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_28__.MarkdownModule]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.service */ 8708);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2676);



function CarouselComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.achievement_badges[ctx_r0.getPreviousIndex()].image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function CarouselComponent_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.achievement_badges[ctx_r1.getNextIndex()].image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = a0 => [a0];
class CarouselComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.achievement_badges = [
    // Completion of first study session
    {
      image: "../../assets/achievement-badges/bronze-plain.png",
      desc: "Earned for the completion of your first study session!🎖️",
      status: "inactive"
    },
    // Completion of first task
    {
      image: "../../assets/achievement-badges/bronze-lightning.png",
      desc: "Awarded for completing your first task! ⚡",
      status: "inactive"
    },
    // Completion of 5 tasks
    {
      image: "../../assets/achievement-badges/bronze-star.png",
      desc: "Achieved by completing 5 tasks. ⭐",
      status: "inactive"
    },
    // Completion of 90 minutes of studying
    {
      image: "../../assets/achievement-badges/bronze-clock.png",
      desc: "Granted for completing 90 minutes of study time. ⏰",
      status: "inactive"
    },
    // Completion of 5 study sessions
    {
      image: "../../assets/achievement-badges/bronze-book.png",
      desc: "Earned for completing 5 study sessions. 📚",
      status: "inactive"
    },
    // Completion of 10 study sessions
    {
      image: "../../assets/achievement-badges/bronze-brain.png",
      desc: "Awarded for completing 10 study sessions. 🧠",
      status: "inactive"
    },
    // Completion of at least 10 study sessions and 10 tasks
    {
      image: "../../assets/achievement-badges/bronze-penguin.png",
      desc: "Granted for completing at least 10 study sessions and 10 tasks! 🐧",
      status: "inactive"
    },
    // Completion of 15 study sessions
    {
      image: "../../assets/achievement-badges/silver-plain.png",
      desc: "Achieved by completing 15 study sessions! 🎉",
      status: "inactive"
    },
    // Completion of 15 tasks
    {
      image: "../../assets/achievement-badges/silver-star.png",
      desc: "Awarded for completing 15 tasks! 🌟",
      status: "inactive"
    },
    // Completion of 750 minutes of studying
    {
      image: "../../assets/achievement-badges/silver-clock.png",
      desc: "Granted for completing 750 minutes of study time! ⏱️",
      status: "inactive"
    },
    // Completion of 20 study sessions
    {
      image: "../../assets/achievement-badges/silver-book.png",
      desc: "Earned for completing 20 study sessions! 📖",
      status: "inactive"
    },
    // Completion of 25 study sessions
    {
      image: "../../assets/achievement-badges/silver-brain.png",
      desc: "Awarded for completing 25 study sessions! 🧠",
      status: "inactive"
    },
    // Completion of at least 25 study sessions and 25 tasks
    {
      image: "../../assets/achievement-badges/silver-penguin.png",
      desc: "Granted for completing at least 25 study sessions and 25 tasks! 🐧",
      status: "inactive"
    },
    // Completion of 50 tasks
    {
      image: "../../assets/achievement-badges/gold-plain.png",
      desc: "Achieved by completing 50 tasks! 🎖️",
      status: "inactive"
    },
    // Completion of 50 study sessions
    {
      image: "../../assets/achievement-badges/gold-lightning.png",
      desc: "Awarded for completing 50 study sessions! ⚡",
      status: "inactive"
    },
    // Completion of 75 tasks
    {
      image: "../../assets/achievement-badges/gold-star.png",
      desc: "Granted for completing 75 tasks! 🌟",
      status: "inactive"
    },
    // Completion of 75 study sessions
    {
      image: "../../assets/achievement-badges/gold-clock.png",
      desc: "Earned for completing 75 study sessions! ⏰",
      status: "inactive"
    },
    // Completion of 100 tasks
    {
      image: "../../assets/achievement-badges/gold-book.png",
      desc: "Achieved by completing 100 tasks! 📘",
      status: "inactive"
    },
    // Completion of 100 study sessions
    {
      image: "../../assets/achievement-badges/gold-brain.png",
      desc: "Awarded for completing 100 study sessions! 🧠",
      status: "inactive"
    },
    // Completion of at least 100 study sessions and 200 tasks
    {
      image: "../../assets/achievement-badges/gold-penguin.png",
      desc: "Granted for completing at least 100 study sessions and 200 tasks! 🐧",
      status: "inactive"
    }];
    this.stats = {};
    // current index will be max achievement a user as obtained
    this.currentIndex = 0;
  }
  ngOnInit() {
    this.getStats();
  }
  getStats() {
    this.apiService.getUserStats().subscribe(response => {
      if (response) {
        this.setStatus(response);
        this.stats = response;
      }
    }, error => {
      console.error('Error:', error);
    });
  }
  setStatus(statistics) {
    const timeStudy = statistics["study time"];
    const sessions = statistics["number of sessions completed"];
    const numTask = statistics["number of completed tasks"];
    if (sessions >= 1) {
      this.achievement_badges[0].status = "active";
    }
    if (numTask >= 1) {
      this.achievement_badges[1].status = "active";
    }
    if (numTask >= 5) {
      this.achievement_badges[2].status = "active";
    }
    if (timeStudy >= 90) {
      this.achievement_badges[3].status = "active";
    }
    if (sessions >= 5) {
      this.achievement_badges[4].status = "active";
    }
    if (sessions >= 10) {
      this.achievement_badges[5].status = "active";
    }
    if (sessions >= 10 && numTask >= 10) {
      this.achievement_badges[6].status = "active";
    }
    if (sessions >= 15) {
      this.achievement_badges[7].status = "active";
    }
    if (numTask >= 15) {
      this.achievement_badges[8].status = "active";
    }
    if (timeStudy >= 750) {
      this.achievement_badges[9].status = "active";
    }
    if (sessions >= 20) {
      this.achievement_badges[10].status = "active";
    }
    if (sessions >= 25) {
      this.achievement_badges[11].status = "active";
    }
    if (sessions >= 25 && numTask >= 25) {
      this.achievement_badges[12].status = "active";
    }
    if (numTask >= 50) {
      this.achievement_badges[13].status = "active";
    }
    if (sessions >= 50) {
      this.achievement_badges[14].status = "active";
    }
    if (numTask >= 75) {
      this.achievement_badges[15].status = "active";
    }
    if (sessions >= 75) {
      this.achievement_badges[16].status = "active";
    }
    if (numTask >= 100) {
      this.achievement_badges[17].status = "active";
    }
    if (sessions >= 100) {
      this.achievement_badges[18].status = "active";
    }
    if (numTask >= 200 && sessions >= 100) {
      this.achievement_badges[19].status = "active";
    }
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
    return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CarouselComponent,
    selectors: [["app-carousel"]],
    decls: 12,
    vars: 7,
    consts: [[1, "carousel-container"], [1, "carousel-button", 3, "click"], [1, "carousel-slide"], ["class", "previous", 3, "src", 4, "ngIf"], ["alt", "Current badge", 3, "src", "ngClass"], ["class", "next", 3, "src", 4, "ngIf"], [1, "desc"], [1, "previous", 3, "src"], [1, "next", 3, "src"]],
    template: function CarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_2_listener() {
          return ctx.showPrevious();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CarouselComponent_img_5_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CarouselComponent_img_7_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_8_listener() {
          return ctx.showNext();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.achievement_badges[ctx.currentIndex].image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.achievement_badges[ctx.currentIndex].status));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.achievement_badges[ctx.currentIndex].desc);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".carousel-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.carousel-slide[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.carousel-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 10rem;\n}\n\n.carousel-button[_ngcontent-%COMP%] {\n  background-color: rgba(169, 166, 252, 0.3764705882);\n  border: none;\n  border-radius: 20%;\n  color: white;\n  font-size: 2rem;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  top: 50%;\n}\n\n.carousel-slide[_ngcontent-%COMP%]   img.inactive[_ngcontent-%COMP%] {\n  position: relative;\n  filter: brightness(20%);\n  z-index: 2;\n}\n\n.carousel-slide[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: brightness(100%);\n  position: relative;\n  z-index: 2;\n}\n\n.carousel-slide[_ngcontent-%COMP%]   img.previous[_ngcontent-%COMP%] {\n  opacity: 0.1;\n  transform: scale(0.9) translateX(4rem);\n  z-index: 1;\n}\n\n.carousel-slide[_ngcontent-%COMP%]   img.next[_ngcontent-%COMP%] {\n  opacity: 0.1;\n  transform: scale(0.9) translateX(-4rem);\n  z-index: 1;\n}\n\n.carousel-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5019607843);\n}\n\n.desc[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksbURBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1EQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcm91c2VsLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJvdXNlbC1zbGlkZSBpbWcge1xuICAgIGhlaWdodDogMTByZW07XG59XG5cbi5jYXJvdXNlbC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE2ZmM2MDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogNTAlO1xufVxuXG4uY2Fyb3VzZWwtc2xpZGUgaW1nLmluYWN0aXZlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDIwJSk7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmNhcm91c2VsLXNsaWRlIGltZy5hY3RpdmV7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5jYXJvdXNlbC1zbGlkZSBpbWcucHJldmlvdXMge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWCg0cmVtKTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uY2Fyb3VzZWwtc2xpZGUgaW1nLm5leHQge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWCgtNHJlbSk7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmNhcm91c2VsLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjgwO1xufVxuXG4uZGVzYyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.service */ 8708);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ 4060);
/* harmony import */ var _login_register_buttons_login_register_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-register-buttons/login-register-buttons.component */ 4012);






function HeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-login-register-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("hello, ", ctx_r1.user, "!");
  }
}
class HeaderComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.user = '';
    this.logged_in = false;
  }
  ngOnInit() {
    this.status();
  }
  status() {
    const result = this.apiService.checkLogInStatus();
    if (result[1]) {
      this.user = result[0];
      this.logged_in = result[1];
    }
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 4,
    vars: 2,
    consts: [["routerLink", "/", "src", "../../assets/pomo_pengy_logo_dark.png", 1, "logo"], [4, "ngIf"], ["class", "welcome-message", 4, "ngIf"], [1, "welcome-message"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 2, 0, "div", 1)(2, HeaderComponent_p_2_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-nav-bar");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.logged_in);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent, _login_register_buttons_login_register_buttons_component__WEBPACK_IMPORTED_MODULE_2__.LoginRegisterButtonsComponent],
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var src_assets_animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/animations/animations */ 740);
/* harmony import */ var _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage-supervisor.service */ 4304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8708);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2676);








function LoginPageComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "your email or password is incorrect, please try again!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "one or more fields are empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class LoginPageComponent {
  constructor(apiService, router) {
    this.apiService = apiService;
    this.router = router;
    this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)])
    });
    this.failedLogin = false;
    this.emptyLogin = false;
  }
  get email() {
    return this.formLogin.get('email');
  }
  get password() {
    return this.formLogin.get('password');
  }
  getEmail() {
    return this.formLogin.get('email')?.value || '';
  }
  getPassword() {
    return this.formLogin.get('password')?.value || '';
  }
  postToDB(event) {
    event.preventDefault();
    if (this.formLogin.invalid) {
      this.emptyLogin = true;
    } else {
      this.emptyLogin = false;
      const payload = {
        email: this.getEmail(),
        password: this.getPassword()
      };
      this.apiService.sendLogin(payload).subscribe(response => {
        // Set token expiry to 1 Day => Require Re-login
        _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_1__.supervisor.setItem('username', response.username, 1440);
        _storage_supervisor_service__WEBPACK_IMPORTED_MODULE_1__.supervisor.setItem('token', response.accessToken, 1440);
        this.router.navigate(['/']);
      }, error => {
        this.failedLogin = true;
      });
    }
  }
  static #_ = this.ɵfac = function LoginPageComponent_Factory(t) {
    return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginPageComponent,
    selectors: [["app-login-page"]],
    decls: 19,
    vars: 4,
    consts: [["routerLink", "/", "src", "../../assets/pomo_pengy_logo_dark.png", 1, "logo"], [1, "login-form"], [1, "form-input"], [3, "formGroup", "ngSubmit"], ["type", "text", "id", "email", "placeholder", "email", "name", "email", "required", "", "formControlName", "email"], ["type", "password", "id", "password", "placeholder", "password", "name", "password", "required", "", "formControlName", "password"], [1, "submit-button", 3, "click"], [1, "error-messages"], ["class", "alert message", 4, "ngIf"], ["routerLink", "/register"], [1, "alert", "message"]],
    template: function LoginPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_5_listener($event) {
          return ctx.postToDB($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 4)(7, "br")(8, "input", 5)(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginPageComponent_Template_div_click_10_listener($event) {
          return ctx.postToDB($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, LoginPageComponent_p_13_Template, 2, 0, "p", 8)(14, LoginPageComponent_p_14_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.failedLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emptyLogin);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".login-form[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  height: auto;\n  width: auto;\n  max-width: 30rem;\n  margin: 0 auto; \n\n  margin-bottom: 7rem;\n  background-color: #1B1A55;\n  border-radius: 30px;\n  padding-bottom: 2rem;\n}\n.login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  font-size: 3.75rem;\n}\n.login-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #9290C3;\n  text-decoration: none;\n}\n.login-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  width: 24rem;\n  margin: 0 auto; \n\n}\n\n#email[_ngcontent-%COMP%], #password[_ngcontent-%COMP%] {\n  width: 20rem;\n  margin-bottom: 1rem;\n  border-radius: 10px;\n  border: 0.3rem solid #535C91;\n  padding: 1rem 1.5rem;\n  font-size: 1rem;\n}\n\n#email[_ngcontent-%COMP%]:focus, #password[_ngcontent-%COMP%]:focus {\n  border-color: #9290C3; \n\n  outline: none; \n\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  background-color: #535C91;\n  height: 3.3rem;\n  width: 23.5rem;\n  border-radius: 10px;\n  text-align: center;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  color: white;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  margin: 0 auto; \n\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n  background-color: #9290C3;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBYUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUEsRUFBQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBWko7QUFSSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFVUjtBQVBJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBU1I7QUFQSTtFQUNJLFlBQUE7QUFTUjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxjQUFBLEVBQUEsaUNBQUE7QUFESjs7QUFJQTtFQUVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNJLHFCQUFBLEVBQUEsc0NBQUE7RUFDQSxhQUFBLEVBQUEsZ0NBQUE7QUFGSjs7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsY0FBQSxFQUFBLGlDQUFBO0FBSEo7O0FBTUE7RUFDSSx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBSEoiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGgxIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICM5MjkwQzM7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgYTpob3ZlcntcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIFxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBIb3Jpem9udGFsbHkgY2VudGVycyB0aGUgZGl2ICovXG4gICAgbWFyZ2luLWJvdHRvbTogN3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIxQTU1O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgICB3aWR0aDogMjRyZW07XG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIEhvcml6b250YWxseSBjZW50ZXJzIHRoZSBkaXYgKi9cbn1cblxuI2VtYWlsLCAjcGFzc3dvcmR7XG4gICAgLy8gaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDAuM3JlbSBzb2xpZCAjNTM1QzkxO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbVxufVxuXG4jZW1haWw6Zm9jdXMsICNwYXNzd29yZDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTI5MEMzOyAvKiBDaGFuZ2VzIHRoZSBib3JkZXIgY29sb3Igb24gZm9jdXMgKi9cbiAgICBvdXRsaW5lOiBub25lOyAvKiBSZW1vdmVzIHRoZSBkZWZhdWx0IG91dGxpbmUgKi9cbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzVDOTE7XG4gICAgaGVpZ2h0OiAzLjNyZW07XG4gICAgd2lkdGg6IDIzLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIC8vIEZpZ21hLWxpa2UgRHJvcCBTaGFkb3dcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIEhvcml6b250YWxseSBjZW50ZXJzIHRoZSBkaXYgKi9cbn1cblxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MjkwQzM7XG59XG5cbi5tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY29sb3I6IHJlZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
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

/***/ 4100:
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutComponent: () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.service */ 8708);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);



class LogoutComponent {
  constructor(apiService) {
    this.apiService = apiService;
  }
  sendLogout() {
    this.apiService.logout();
  }
  static #_ = this.ɵfac = function LogoutComponent_Factory(t) {
    return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LogoutComponent,
    selectors: [["app-logout"]],
    decls: 3,
    vars: 0,
    consts: [[1, "button-container"], ["routerLink", "/", 1, "logout", 3, "click"]],
    template: function LogoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogoutComponent_Template_div_click_1_listener() {
          return ctx.sendLogout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 3rem;\n}\n\n.logout[_ngcontent-%COMP%] {\n  background-color: #535C91;\n  width: 16.25rem;\n  height: 4.4375rem;\n  border-radius: 3.125rem;\n  text-align: center;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n\n.logout[_ngcontent-%COMP%]:hover {\n  background-color: #9290C3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBRUEsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLCtDQUFBO0FBREo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuXG4ubG9nb3V0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM1QzkxO1xuICAgIC8vIEhlaWdodCBhbmQgV2lkdGggYXJlIGZyb20gRmlnbWFcbiAgICB3aWR0aDogMTYuMjVyZW07XG4gICAgaGVpZ2h0OiA0LjQzNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIEZpZ21hLWxpa2UgRHJvcCBTaGFkb3dcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG4ubG9nb3V0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5MEMzO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ 8708);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ 1092);
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../achievements/achievements.component */ 7732);
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../statistics/statistics.component */ 7300);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logout/logout.component */ 4100);
/* harmony import */ var _about_button_about_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about-button/about-button.component */ 940);










function ProfilePageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "h3")(2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "register");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " to see personalized statistics and earn achievement badges!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "app-about-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeIn", undefined);
  }
}
function ProfilePageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-statistics");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-logout")(5, "app-about-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-achievements");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeIn", undefined);
  }
}
class ProfilePageComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.logged_in = false;
  }
  ngOnInit() {
    this.status();
  }
  status() {
    const result = this.apiService.checkLogInStatus();
    if (result[1]) {
      this.logged_in = result[1];
    }
  }
  static #_ = this.ɵfac = function ProfilePageComponent_Factory(t) {
    return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ProfilePageComponent,
    selectors: [["app-profile-page"]],
    decls: 3,
    vars: 2,
    consts: [["class", "content not_login", 4, "ngIf"], ["class", "content login", 4, "ngIf"], [1, "content", "not_login"], ["routerLink", "/register"], ["routerLink", "/login"], [1, "content", "login"], [1, "components-left"], [1, "profile-buttons"], [1, "lower-button"], [1, "components-right"]],
    template: function ProfilePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProfilePageComponent_div_1_Template, 11, 1, "div", 0)(2, ProfilePageComponent_div_2_Template, 8, 2, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.logged_in);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_3__.AchievementsComponent, _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__.StatisticsComponent, _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__.LogoutComponent, _about_button_about_button_component__WEBPACK_IMPORTED_MODULE_6__.AboutButtonComponent],
    styles: [".content[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.components-left[_ngcontent-%COMP%] {\n  width: 49.5%;\n  float: left;\n}\n.components-left[_ngcontent-%COMP%]   .profile-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.components-left[_ngcontent-%COMP%]   .lower-button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.components-right[_ngcontent-%COMP%] {\n  width: 49.5%;\n  float: right;\n}\n\n.not_login[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 50vh;\n  margin: 0;\n}\n.not_login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #7f8cec;\n  text-decoration: none;\n}\n.not_login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.not_login[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #555C8D;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFBSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBQ1I7QUFDSTtFQUNJLFlBQUE7QUFDUjtBQUNJO0VBQ0ksY0FBQTtBQUNSIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbXBvbmVudHMtbGVmdHtcbiAgICB3aWR0aDogNDkuNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAucHJvZmlsZS1idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmxvd2VyLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxufVxuLmNvbXBvbmVudHMtcmlnaHQge1xuICAgIHdpZHRoOiA0OS41JTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5ub3RfbG9naW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBtYXJnaW46IDA7IFxuICAgIGEge1xuICAgICAgICBjb2xvcjogIzdmOGNlYztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgY29sb3I6ICM1NTVDOEQ7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ 8708);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 2676);







function RegisterPageComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "one or more fields are empty/incorrectly filled!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterPageComponent_div_20_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "please enter a valid email address!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterPageComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterPageComponent_div_20_p_1_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.email == null ? null : ctx_r1.email.errors == null ? null : ctx_r1.email.errors["email"]);
  }
}
function RegisterPageComponent_div_21_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "your password should have at least 8 characters!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterPageComponent_div_21_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "your password should include at least 1 lowercase letter , 1 uppercase letter, 1 number, and 1 special character!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterPageComponent_div_21_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "your passwords do not match!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterPageComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterPageComponent_div_21_p_1_Template, 2, 0, "p", 11)(2, RegisterPageComponent_div_21_p_2_Template, 2, 0, "p", 11)(3, RegisterPageComponent_div_21_p_3_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.password == null ? null : ctx_r2.password.errors == null ? null : ctx_r2.password.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.password == null ? null : ctx_r2.password.errors == null ? null : ctx_r2.password.errors["complexity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.matchStatus);
  }
}
function RegisterPageComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "your passwords do not match!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class RegisterPageComponent {
  ngOnInit() {
    this.formRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8), this.complexityValidator()]),
      passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      toggle: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl()
    });
  }
  constructor(apiService, router) {
    this.apiService = apiService;
    this.router = router;
    this.formStatus = false;
    this.matchStatus = true;
    this.passwordStatus = "password";
  }
  get username() {
    return this.formRegister.get("username");
  }
  get email() {
    return this.formRegister.get("email");
  }
  get password() {
    return this.formRegister.get("password");
  }
  getUsername() {
    return this.formRegister.get("username")?.value || '';
  }
  getEmail() {
    return this.formRegister.get("email")?.value || '';
  }
  getPassword() {
    return this.formRegister.get("password")?.value || '';
  }
  getConfirmedPassword() {
    return this.formRegister.get("passwordConfirm")?.value || '';
  }
  getToggle() {
    return this.formRegister.get("toggle")?.value;
  }
  passwordToggle() {
    this.passwordStatus = this.getToggle() ? "text" : "password";
  }
  postToDB(event) {
    event.preventDefault();
    if (this.formRegister.invalid) {
      this.formStatus = true;
    }
    if (this.getConfirmedPassword() != this.getPassword()) {
      this.matchStatus = false;
    } else {
      this.formStatus = false;
      this.matchStatus = true;
      const payload = {
        email: this.getEmail(),
        username: this.getUsername(),
        password: this.getPassword()
      };
      console.log(payload);
      this.apiService.sendRegister(payload).subscribe(response => {
        alert('Registration Successful!');
        this.router.navigate(['/login']);
      }, error => {
        console.error('Error:', error);
      });
    }
  }
  // Password validator
  complexityValidator() {
    return control => {
      const value = control.value;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
      return !passwordValid ? {
        complexity: true
      } : null;
    };
  }
  static #_ = this.ɵfac = function RegisterPageComponent_Factory(t) {
    return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RegisterPageComponent,
    selectors: [["app-register-page"]],
    decls: 27,
    vars: 8,
    consts: [["routerLink", "/", "src", "../../assets/pomo_pengy_logo_dark.png", 1, "logo"], [1, "register-form"], [1, "form-input"], [3, "formGroup", "ngSubmit"], ["type", "text", "id", "email", "name", "email", "placeholder", "email", "formControlName", "email"], ["type", "text", "id", "username", "name", "username", "placeholder", "username", "formControlName", "username"], ["id", "password", "name", "password", "placeholder", "password (min. 8 characters)", "formControlName", "password", 3, "type"], ["id", "passwordConfirm", "name", "passwordConfirm", "placeholder", "confirm password", "formControlName", "passwordConfirm", 3, "type"], ["type", "checkbox", "id", "toggle", "formControlName", "toggle", 3, "change"], [1, "submit-button", 3, "click"], [1, "message"], [4, "ngIf"], ["routerLink", "/login"]],
    template: function RegisterPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_5_listener($event) {
          return ctx.postToDB($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 4)(7, "br")(8, "input", 5)(9, "br")(10, "input", 6)(11, "br")(12, "input", 7)(13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RegisterPageComponent_Template_input_change_14_listener() {
          return ctx.passwordToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " show password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterPageComponent_Template_div_click_16_listener($event) {
          return ctx.postToDB($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, RegisterPageComponent_p_19_Template, 2, 0, "p", 11)(20, RegisterPageComponent_div_20_Template, 2, 1, "div", 11)(21, RegisterPageComponent_div_21_Template, 4, 3, "div", 11)(22, RegisterPageComponent_p_22_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formRegister);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("type", ctx.passwordStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("type", ctx.passwordStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.email == null ? null : ctx.email.invalid) && ((ctx.email == null ? null : ctx.email.dirty) || (ctx.email == null ? null : ctx.email.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.password == null ? null : ctx.password.invalid) && ((ctx.password == null ? null : ctx.password.dirty) || (ctx.password == null ? null : ctx.password.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.matchStatus);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".register-form[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  height: auto;\n  width: auto;\n  max-width: 30rem;\n  margin: 0 auto; \n\n  margin-bottom: 7rem;\n  background-color: #1B1A55;\n  border-radius: 30px;\n  padding-bottom: 2rem;\n}\n.register-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  font-size: 3.75rem;\n}\n.register-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #9290C3;\n  text-decoration: none;\n}\n.register-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  width: 24rem;\n  margin: 0 auto; \n\n}\n\n#email[_ngcontent-%COMP%], #username[_ngcontent-%COMP%], #password[_ngcontent-%COMP%], #passwordConfirm[_ngcontent-%COMP%] {\n  width: 20rem;\n  margin-bottom: 1rem;\n  border-radius: 10px;\n  border: 0.3rem solid #535C91;\n  padding: 1rem 1.5rem;\n  font-size: 1rem;\n}\n\n#email[_ngcontent-%COMP%]:focus, #username[_ngcontent-%COMP%]:focus, #password[_ngcontent-%COMP%]:focus, #passwordConfirm[_ngcontent-%COMP%]:focus {\n  border-color: #9290C3; \n\n  outline: none; \n\n}\n\n#toggle[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  background-color: #535C91;\n  height: 3.3rem;\n  width: 23.5rem;\n  border-radius: 10px;\n  text-align: center;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  margin: 0 auto; \n\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n  background-color: #9290C3;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBYUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUEsRUFBQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBWko7QUFSSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFVUjtBQVBJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBU1I7QUFQSTtFQUNJLFlBQUE7QUFTUjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxjQUFBLEVBQUEsaUNBQUE7QUFESjs7QUFJQTtFQUVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNJLHFCQUFBLEVBQUEsc0NBQUE7RUFDQSxhQUFBLEVBQUEsZ0NBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsY0FBQSxFQUFBLGlDQUFBO0FBSEo7O0FBS0E7RUFDSSx5QkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItZm9ybXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGgxIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICM5MjkwQzM7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgYTpob3ZlcntcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIFxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBIb3Jpem9udGFsbHkgY2VudGVycyB0aGUgZGl2ICovXG4gICAgbWFyZ2luLWJvdHRvbTogN3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIxQTU1O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgICB3aWR0aDogMjRyZW07XG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIEhvcml6b250YWxseSBjZW50ZXJzIHRoZSBkaXYgKi9cbn1cblxuI2VtYWlsLCAjdXNlcm5hbWUsICNwYXNzd29yZCwgI3Bhc3N3b3JkQ29uZmlybXtcbiAgICAvLyBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogMjByZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMC4zcmVtIHNvbGlkICM1MzVDOTE7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtXG59XG5cbiNlbWFpbDpmb2N1cywgI3VzZXJuYW1lOmZvY3VzLCAjcGFzc3dvcmQ6Zm9jdXMsICAjcGFzc3dvcmRDb25maXJtOmZvY3Vze1xuICAgIGJvcmRlci1jb2xvcjogIzkyOTBDMzsgLyogQ2hhbmdlcyB0aGUgYm9yZGVyIGNvbG9yIG9uIGZvY3VzICovXG4gICAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlcyB0aGUgZGVmYXVsdCBvdXRsaW5lICovXG59XG5cbiN0b2dnbGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM1QzkxO1xuICAgIGhlaWdodDogMy4zcmVtO1xuICAgIHdpZHRoOiAyMy41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIEZpZ21hLWxpa2UgRHJvcCBTaGFkb3dcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIEhvcml6b250YWxseSBjZW50ZXJzIHRoZSBkaXYgKi9cbn1cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5MEMzO1xufVxuXG4ubWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGNvbG9yOiByZWQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.service */ 8708);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2676);



function StatisticsComponent_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.value);
  }
}
class StatisticsComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.stats = {};
  }
  ngOnInit() {
    this.getStats();
  }
  getStats() {
    this.apiService.getUserStats().subscribe(response => {
      if (response) {
        this.stats = response;
      }
    }, error => {
      console.error('Error:', error);
    });
  }
  static #_ = this.ɵfac = function StatisticsComponent_Factory(t) {
    return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StatisticsComponent,
    selectors: [["app-statistics"]],
    decls: 11,
    vars: 3,
    consts: [[1, "stats-container"], [4, "ngFor", "ngForOf"]],
    template: function StatisticsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "study insight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "table")(4, "tr")(5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "statistic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, StatisticsComponent_tr_9_Template, 5, 2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 1, ctx.stats));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.KeyValuePipe],
    styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.stats-container[_ngcontent-%COMP%] {\n  margin-left: 3rem;\n  margin-right: 3rem;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid #D4C2FC;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #1B1A52;\n  padding: 0.5rem;\n  font-size: 1.25rem;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #555C8D;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFFQSx5QkFBQTtBQUFKO0FBQ0k7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7O0FBR0E7RUFDSSx5QkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0YXRzLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gU3BsYXNoIG9mIFBlcml3aW5rbGVcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRDRDMkZDO1xuICAgIHRoIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFCMUE1MjtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgIH1cbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1QzhEO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
  clearTasks() {
    this.tasks = [];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 8708);


class TimerService {
  constructor(apiService) {
    this.apiService = apiService;
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
      this.postToDB(this.minutes);
      // start a break session next
      this.entered = this.break;
    } else {
      // start a study session next
      this.entered = this.minutes;
    }
    this.seconds = 0;
  }
  postToDB(sessionTime) {
    const payload = {
      sessionTime: sessionTime
    };
    this.apiService.sendSession(payload).subscribe(response => {
      null;
    }, error => {
      console.error('Error:', error);
    });
  }
  static #_ = this.ɵfac = function TimerService_Factory(t) {
    return new (t || TimerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
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





function ToDoComponent_li_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ToDoComponent_li_12_div_1_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r5.newTask.title, $event) || (ctx_r5.newTask.title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "due date (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ToDoComponent_li_12_div_1_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r7.newTask.include, $event) || (ctx_r7.newTask.include = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ToDoComponent_li_12_div_1_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r8.newTask.dueDate, $event) || (ctx_r8.newTask.dueDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToDoComponent_li_12_div_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.toggleEdit(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToDoComponent_li_12_div_1_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.patchTask(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.newTask.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.newTask.include);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.newTask.dueDate);
  }
}
function ToDoComponent_li_12_div_2_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("due on ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, task_r1.dueDate, "medium"), "");
  }
}
function ToDoComponent_li_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ToDoComponent_li_12_div_2_p_4_Template, 3, 4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToDoComponent_li_12_div_2_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.toggleEdit(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToDoComponent_li_12_div_2_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.removeTask(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r1.include);
  }
}
function ToDoComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ToDoComponent_li_12_div_1_Template, 16, 3, "div", 14)(2, ToDoComponent_li_12_div_2_Template, 10, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r1.edit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !task_r1.edit);
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
      include: false,
      edit: false
    };
    this.displayInfo = true;
  }
  ngOnInit() {
    this.getFromDB();
    this.tasks = this.taskService.getTasks();
  }
  ngOnDestroy() {
    const status_arr = this.apiService.checkLogInStatus();
    // Clear the to do list if the user is logged in (avoid double printing)
    if (status_arr[1]) {
      this.taskService.clearTasks();
    }
  }
  toggleInfo() {
    this.displayInfo = !this.displayInfo;
  }
  toggleEdit(index) {
    this.newTask = {
      title: this.tasks[index].title,
      dueDate: this.tasks[index].dueDate,
      include: this.tasks[index].include,
      edit: false
    };
    this.tasks[index].edit = !this.tasks[index].edit;
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
      include: false,
      edit: false
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
        include: i['include'],
        edit: false
      };
      this.taskService.addTask(task);
    }
  }
  patchTask(index) {
    const payload = {
      title: this.tasks[index].title,
      newTitle: this.newTask.title,
      newDueDate: this.newTask.dueDate,
      newInclude: this.newTask.include
    };
    this.tasks[index] = {
      title: this.newTask.title,
      dueDate: this.newTask.dueDate,
      include: this.newTask.include,
      edit: false
    };
    this.newTask = {
      title: '',
      dueDate: new Date(),
      include: false,
      edit: false
    };
    this.patchDB(payload);
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
  patchDB(payload) {
    this.apiService.patchTask(payload).subscribe(response => {
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
    consts: [[1, "list-container"], [1, "to-do-header"], [1, "toggle", 3, "click"], [1, "container-info"], [1, "task-container"], [4, "ngFor", "ngForOf"], [1, "task-add-button", 3, "click"], [1, "temp-container", "task-item", 2, "display", "none"], ["for", "title"], ["type", "text", "id", "title", "required", "", 1, "user-vals", 3, "ngModel", "ngModelChange"], ["for", "date"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["type", "datetime-local", "id", "date", 1, "user-vals", 3, "ngModel", "ngModelChange"], [1, "submit", 3, "click"], ["class", "temp-container task-item", 4, "ngIf"], ["class", "task-item", 4, "ngIf"], [1, "temp-container", "task-item"], ["type", "text", "id", "title", 1, "user-vals", 3, "ngModel", "ngModelChange"], [1, "edit", 3, "click"], [1, "task-item"], [1, "task-title"], ["class", "task-date", 4, "ngIf"], [1, "task-date"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ToDoComponent_li_12_Template, 3, 2, "li", 5);
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
    styles: [".list-container[_ngcontent-%COMP%] {\n  width: 33rem;\n  height: 39.6875rem;\n  border-radius: 3.125rem;\n  background: #1B1A55;\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  text-align: center;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n}\n\n.list-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none; \n\n}\n\n.to-do-header[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n}\n\n.task-add-button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 3.6875rem;\n  height: 3.6875rem;\n  background: #535C91;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.task-add-button[_ngcontent-%COMP%]:hover {\n  background-color: #9290C3;\n}\n\nh2[_ngcontent-%COMP%] {\n  padding-top: 0.63rem;\n}\n\n.task-item[_ngcontent-%COMP%] {\n  width: 29.625rem;\n  border-radius: 3.125rem;\n  background: #535C91;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  margin-top: 1rem;\n  text-align: left;\n  padding-top: 1.25rem;\n  padding-left: 1.75rem;\n  padding-bottom: 1.25rem;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n}\n.task-item[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  border-radius: 3.125rem;\n  background-color: #9290C3;\n  color: #FFFFFF;\n  font-family: Jua;\n  width: 4rem;\n  height: 2.25rem;\n  border: none;\n  display: none;\n}\n.task-item[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n  border-radius: 3.125rem;\n  background-color: #7775ab;\n  color: #FFFFFF;\n  font-family: Jua;\n  width: 4rem;\n  height: 2.25rem;\n  margin-right: 0.5rem;\n  border: none;\n  display: none;\n}\n.task-item[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]:hover {\n  background-color: #b3b1d5;\n}\n.task-item[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]:hover {\n  background-color: #9290C3;\n}\n\n.task-item[_ngcontent-%COMP%]:hover {\n  background: #5663aa;\n}\n.task-item[_ngcontent-%COMP%]:hover   .submit[_ngcontent-%COMP%] {\n  display: inline;\n}\n.task-item[_ngcontent-%COMP%]:hover   .edit[_ngcontent-%COMP%] {\n  display: inline;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.user-vals[_ngcontent-%COMP%] {\n  border-radius: 3.125rem;\n  font-family: Jua;\n  width: 50%;\n  height: 1.75rem;\n  margin-bottom: 1rem;\n  padding-left: 0.5rem;\n}\n\n.task-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0;\n  margin-bottom: -0.75rem;\n}\n\n.task-date[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0;\n  margin-bottom: -0.75rem;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  color: #535C91;\n  font-size: 1.25rem;\n  text-decoration: none;\n}\n\n.toggle[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\n.container-info[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG8tZG8vdG8tZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUEsRUFBQSxzQkFBQTtBQUFKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxvQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7QUFJSjtBQUhJO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFLUjtBQUhJO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUtSO0FBRkk7RUFDSSx5QkFBQTtBQUlSO0FBREk7RUFDSSx5QkFBQTtBQUdSOztBQUNBO0VBQ0ksbUJBQUE7QUFFSjtBQURJO0VBQ0ksZUFBQTtBQUdSO0FBREk7RUFDSSxlQUFBO0FBR1I7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFBWSxlQUFBO0VBQ1osbUJBQUE7RUFDQSxvQkFBQTtBQUdKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1jb250YWluZXIge1xuICAgIHdpZHRoOiAzM3JlbTtcbiAgICBoZWlnaHQ6IDM5LjY4NzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XG4gICAgYmFja2dyb3VuZDogIzFCMUE1NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAvLyBIaWRkZW4gU2Nyb2xsIEJhclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi8vIEhpZGRlbiBTY3JvbGwgQmFyXG4ubGlzdC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXG4gICAgZGlzcGxheTogbm9uZTsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG59XG4udG8tZG8taGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuLnRhc2stYWRkLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzLjY4NzVyZW07XG4gICAgaGVpZ2h0OiAzLjY4NzVyZW07XG4gICAgYmFja2dyb3VuZDogIzUzNUM5MTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4udGFzay1hZGQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5MEMzO1xufVxuaDIge1xuICAgIHBhZGRpbmctdG9wOiAwLjYzcmVtO1xufVxuLnRhc2staXRlbSB7XG4gICAgd2lkdGg6IDI5LjYyNXJlbTtcbiAgICAvLyBoZWlnaHQ6IDUuNjg3NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjNTM1QzkxO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgLnN1Ym1pdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5MEMzO1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgZm9udC1mYW1pbHk6IEp1YTtcbiAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgIGhlaWdodDogMi4yNXJlbTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH0gXG4gICAgLmVkaXQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NzVhYjtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBKdWE7XG4gICAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgICBoZWlnaHQ6IDIuMjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiMWQ1O1xuICAgIH1cbiAgICBcbiAgICAuZWRpdDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MjkwQzM7XG4gICAgfVxufVxuXG4udGFzay1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTY2M2FhO1xuICAgIC5zdWJtaXQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuICAgIC5lZGl0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxubGkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4udXNlci12YWxzIHtcbiAgICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgICBmb250LWZhbWlseTogSnVhO1xuICAgIHdpZHRoOiA1MCU7IGhlaWdodDogMS43NXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuXG5cbi50YXNrLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNTByZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjc1cmVtO1xufVxuXG4udGFzay1kYXRlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjc1cmVtO1xufVxuXG4udG9nZ2xlIHtcbiAgICBjb2xvcjogIzUzNUM5MTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udG9nZ2xlOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFpbmVyLWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNzUlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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