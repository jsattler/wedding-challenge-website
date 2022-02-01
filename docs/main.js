(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jsattler/IdeaProjects/wedding-challenge-website/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _wishes_wishes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishes/wishes.component */ "mCFJ");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video/video.component */ "o9RM");
/* harmony import */ var _challenge_stepper_challenge_stepper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./challenge-stepper/challenge-stepper.component */ "iVjg");







class AppComponent {
    constructor() {
        this.title = 'wedding-challenge-website';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-wishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-challenge-stepper");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _wishes_wishes_component__WEBPACK_IMPORTED_MODULE_3__["WishesComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_4__["VideoComponent"], _challenge_stepper_challenge_stepper_component__WEBPACK_IMPORTED_MODULE_5__["ChallengeStepperComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./video/video.component */ "o9RM");
/* harmony import */ var _wishes_wishes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wishes/wishes.component */ "mCFJ");
/* harmony import */ var _challenge_stepper_challenge_stepper_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./challenge-stepper/challenge-stepper.component */ "iVjg");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _video_video_component__WEBPACK_IMPORTED_MODULE_11__["VideoComponent"],
        _wishes_wishes_component__WEBPACK_IMPORTED_MODULE_12__["WishesComponent"],
        _challenge_stepper_challenge_stepper_component__WEBPACK_IMPORTED_MODULE_13__["ChallengeStepperComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _video_video_component__WEBPACK_IMPORTED_MODULE_11__["VideoComponent"],
                    _wishes_wishes_component__WEBPACK_IMPORTED_MODULE_12__["WishesComponent"],
                    _challenge_stepper_challenge_stepper_component__WEBPACK_IMPORTED_MODULE_13__["ChallengeStepperComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class HeaderComponent {
    constructor() {
        // private marriedDate = new Date(Date.UTC(2020, 10, 7, 16, 0, 0, 0));
        this.marriedDate = new Date('2020-11-07T16:00:00.000-05:00');
        this.headerText = 'Married Since';
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).subscribe(() => {
            if (new Date() < this.marriedDate) {
                this.headerText = 'Wedding Counter';
            }
            let diff = Math.abs(Date.now() - this.marriedDate.getTime()) / 1000;
            this.days = Math.floor(diff / 86400);
            diff -= this.days * 86400;
            // calculate (and subtract) whole hours
            this.hours = Math.floor(diff / 3600) % 24;
            diff -= this.hours * 3600;
            this.minutes = Math.floor(diff / 60) % 60;
            diff -= this.minutes * 60;
            this.seconds = Math.floor(diff % 60);
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 5, consts: [[1, "header-image"], [1, "header-text"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", ctx.days, " days ", ctx.hours, " hours ", ctx.minutes, " minutes ", ctx.seconds, " seconds");
    } }, styles: [".header-image[_ngcontent-%COMP%]{\n  \n  \n\n  \n\n  \n  height: 40%;\n  background: url('tiffany-levi-sunset.jpg') no-repeat fixed center top;\n  background-size: 100%;\n}\n.header-text[_ngcontent-%COMP%] {\n\n  color: white;\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 50%;\n  text-align: center;\n\n}\nh1[_ngcontent-%COMP%]{\n  font-size: 4em;\n  letter-spacing: 30px;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n@media only screen and (max-width: 1560px){\n  h1[_ngcontent-%COMP%] {\n    font-size: 3em;\n    letter-spacing: normal;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n\n\n  .header-image[_ngcontent-%COMP%]{\n    \n    \n\n    \n\n    \n    height: 50%;\n    background: url('tiffany-levi-sunset.jpg') no-repeat fixed center bottom;\n    background-size: cover;\n  }\n  .header-text[_ngcontent-%COMP%] {\n    \n    color: white;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    width: 50%;\n    text-align: center;\n\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCOzZCQUMyQjs7RUFFM0IsZ0JBQWdCOztFQUVoQixzQ0FBc0M7RUFDdEMsV0FBVztFQUNYLHFFQUF1RjtFQUN2RixxQkFBcUI7QUFDdkI7QUFDQTtBQUNBO3dFQUN3RTtFQUN0RSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixVQUFVO0VBQ1Ysa0JBQWtCOztBQUVwQjtBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7O0VBR0E7SUFDRSx3QkFBd0I7SUFDeEI7K0JBQzJCOztJQUUzQixnQkFBZ0I7O0lBRWhCLHNDQUFzQztJQUN0QyxXQUFXO0lBQ1gsd0VBQTBGO0lBQzFGLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0U7NEVBQ3dFO0lBQ3hFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7O0VBRXBCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWltYWdle1xuICAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXG4gIC8qZmlsdGVyOiBibHVyKDVweCk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7Ki9cblxuICAvKiBGdWxsIGhlaWdodCAqL1xuXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xuICBoZWlnaHQ6IDQwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvdGlmZmFueS1sZXZpLXN1bnNldC5qcGdcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbi5oZWFkZXItdGV4dCB7XG4vKiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgISogRmFsbGJhY2sgY29sb3IgKiFcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC40KTsgISogQmxhY2sgdy9vcGFjaXR5L3NlZS10aHJvdWdoICohKi9cbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuaDF7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBsZXR0ZXItc3BhY2luZzogMzBweDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDNlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTYwcHgpe1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxuXG5cbiAgLmhlYWRlci1pbWFnZXtcbiAgICAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXG4gICAgLypmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpOyovXG5cbiAgICAvKiBGdWxsIGhlaWdodCAqL1xuXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvdGlmZmFueS1sZXZpLXN1bnNldC5qcGdcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlciBib3R0b207XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICAuaGVhZGVyLXRleHQge1xuICAgIC8qICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAhKiBGYWxsYmFjayBjb2xvciAqIVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC40KTsgISogQmxhY2sgdy9vcGFjaXR5L3NlZS10aHJvdWdoICohKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iVjg":
/*!******************************************************************!*\
  !*** ./src/app/challenge-stepper/challenge-stepper.component.ts ***!
  \******************************************************************/
/*! exports provided: ChallengeStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeStepperComponent", function() { return ChallengeStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




function ChallengeStepperComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeStepperComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeStepperComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Cook Some Good ole' German Food");
} }
function ChallengeStepperComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Floating in Memories");
} }
function ChallengeStepperComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Take a Break from Life");
} }
function ChallengeStepperComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "This One Is For Levi");
} }
function ChallengeStepperComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Writing a Letter");
} }
function ChallengeStepperComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Persisting Memories");
} }
function ChallengeStepperComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Floating in Memories... Again");
} }
function ChallengeStepperComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "It's Wine O'Clock");
} }
function ChallengeStepperComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Back to the future");
} }
function ChallengeStepperComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Cocktail Time");
} }
function ChallengeStepperComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Travel Planning");
} }
class ChallengeStepperComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChallengeStepperComponent.ɵfac = function ChallengeStepperComponent_Factory(t) { return new (t || ChallengeStepperComponent)(); };
ChallengeStepperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeStepperComponent, selectors: [["app-challenge-stepper"]], decls: 57, vars: 4, consts: [[1, "challenge-wrapper"], [1, "challenge-header"], [1, "left"], [1, "center"], [2, "font-size", "3.5em"], [2, "font-size", "3em"], [1, "right"], [1, "challenge-stepper"], ["linear", "true", "selectedIndex", "3"], ["stepper", ""], ["matStepperIcon", "done"], ["matStepperIcon", "edit"], [3, "completed"], ["matStepLabel", ""], ["src", "../../assets/images/challenge-1-solved.jpeg", "alt", "challenge-1-solved"], ["src", "../../assets/images/challenge-2-solved.png", "alt", "challenge-2-solved"], ["src", "../../assets/images/challenge-3-solved.jpg", "alt", "challenge-3-solved", 2, "border-radius", "20px"], [1, "final-wedding-gift", 2, "text-align", "center", "padding", "3em"]], template: function ChallengeStepperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to Your Wedding Challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Great to see you here! You have to complete all of the following challenges to get to your final wedding gift. Have fun and enjoy life!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-vertical-stepper", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChallengeStepperComponent_ng_template_15_Template, 2, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChallengeStepperComponent_ng_template_16_Template, 2, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-step", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChallengeStepperComponent_ng_template_18_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "To solve this challenge you have to cook some German food (maybe some Jager Schnitzel with fries) together. The challenge is solved if you present us a picture of your meal. Have fun and enjoy cooking!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-step", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ChallengeStepperComponent_ng_template_24_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Go back to Amsterdam on the 31st of December 2018. Find out the name and coordinates of the bar where we played cards together. Solved when you provide the coordinates and name. If you need a hint contact us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-step", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ChallengeStepperComponent_ng_template_30_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Take a long walk at the beach (at least four miles). It is solved when you send a picture of you two walking at the beach (track the walk if possible). Equip yourself with some wine and crackers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-step", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ChallengeStepperComponent_ng_template_36_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Jug a beer (possibly alcohol free) together. Solved when you provide a video or picture of you two with proof \uD83C\uDF7A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ChallengeStepperComponent_ng_template_40_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ChallengeStepperComponent_ng_template_42_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ChallengeStepperComponent_ng_template_44_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ChallengeStepperComponent_ng_template_46_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ChallengeStepperComponent_ng_template_48_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ChallengeStepperComponent_ng_template_50_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ChallengeStepperComponent_ng_template_52_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Come and Get Your Wedding Gift ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", false);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatStepperIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatStepLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".mat-stepper-vertical[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n  .mat-vertical-stepper-content\n{\n  visibility: visible !important;\n  height: 100% !important;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.challenge-wrapper[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-areas: \"header\" \"stepper\";\n  grid-gap: 1em;\n}\n\n.challenge-header[_ngcontent-%COMP%] {\n  text-align: center;\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-areas: \". center .\";\n  grid-area: header;\n}\n\n.challenge-stepper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-areas: \". center .\";\n  grid-area: stepper;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: 'Amatic SC', cursive;\n  font-size: 2em;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100%;\n  max-width: 400px;\n  height: auto;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlLXN0ZXBwZXIvY2hhbGxlbmdlLXN0ZXBwZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2hhbGxlbmdlLXN0ZXBwZXIvY2hhbGxlbmdlLXN0ZXBwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdmVydGljYWwtc3RlcHBlci1jb250ZW50XG57XG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jaGFsbGVuZ2Utd3JhcHBlcntcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXJcIiBcInN0ZXBwZXJcIjtcbiAgZ3JpZC1nYXA6IDFlbTtcbn1cblxuLmNoYWxsZW5nZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiBjZW50ZXIgLlwiO1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbn1cblxuLmNoYWxsZW5nZS1zdGVwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIGNlbnRlciAuXCI7XG4gIGdyaWQtYXJlYTogc3RlcHBlcjtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeStepperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challenge-stepper',
                templateUrl: './challenge-stepper.component.html',
                styleUrls: ['./challenge-stepper.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 8, vars: 0, consts: [["color", "#fff", 1, "app-toolbar"], ["src", "assets/images/tiffany-levi-logo.jpeg"], [1, "example-spacer"], ["id", "married-since"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tiffany and Levi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Married Since 7th of November 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nspan[_ngcontent-%COMP%]{\n  font-size: 2em;\n  font-weight: bold;\n  margin-left: 0.5em;\n  margin-right: 0.5em;\n  color: #465A73\n}\n\nmat-toolbar[_ngcontent-%COMP%]{\n  background-color: rgba(255,255,255, 0.5);\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 64px;\n}\n\n.app-toolbar[_ngcontent-%COMP%] {\n  font-family: 'Amatic SC', cursive;\n}\n\n@media only screen and (max-width: 857px){\n  #married-since[_ngcontent-%COMP%] {\n    display: none;\n  }\n  img[_ngcontent-%COMP%] {\n    height: 56px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbnNwYW57XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICBjb2xvcjogIzQ2NUE3M1xufVxuXG5tYXQtdG9vbGJhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4uYXBwLXRvb2xiYXIge1xuICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODU3cHgpe1xuICAjbWFycmllZC1zaW5jZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpbWcge1xuICAgIGhlaWdodDogNTZweDtcbiAgfVxufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mCFJ":
/*!********************************************!*\
  !*** ./src/app/wishes/wishes.component.ts ***!
  \********************************************/
/*! exports provided: WishesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishesComponent", function() { return WishesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WishesComponent {
    constructor() { }
    ngOnInit() {
    }
}
WishesComponent.ɵfac = function WishesComponent_Factory(t) { return new (t || WishesComponent)(); };
WishesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WishesComponent, selectors: [["app-wishes"]], decls: 7, vars: 0, consts: [[1, "wishes"], [2, "font-size", "2.5em"], ["src", "assets/images/tiffany-levi-logo.jpeg", "alt", "tiffany-levi-logo"], [1, "parallax"]], template: function WishesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Dear Tiffany and Levi, this website is dedicated to you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " We wish you all the best for your common future! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
    } }, styles: [".wishes[_ngcontent-%COMP%]{\n  padding-top: 2em;\n  margin-top: 3em;\n  text-align: center;\n  width: 100%;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 320px;\n}\n\n.parallax[_ngcontent-%COMP%] {\n  \n  background-image: url('tiffany-levi-cheers.jpg');\n\n  \n  height: 500px;\n\n  \n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaGVzL3dpc2hlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdEQUFrRTs7RUFFbEUsMEJBQTBCO0VBQzFCLGFBQWE7O0VBRWIseUNBQXlDO0VBQ3pDLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3dpc2hlcy93aXNoZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aXNoZXN7XG4gIHBhZGRpbmctdG9wOiAyZW07XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAzMjBweDtcbn1cbi5wYXJhbGxheCB7XG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3RpZmZhbnktbGV2aS1jaGVlcnMuanBnXCIpO1xuXG4gIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xuICBoZWlnaHQ6IDUwMHB4O1xuXG4gIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WishesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wishes',
                templateUrl: './wishes.component.html',
                styleUrls: ['./wishes.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "o9RM":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class VideoComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], decls: 0, vars: 0, template: function VideoComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video',
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map