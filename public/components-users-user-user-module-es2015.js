(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-users-user-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/users/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/users/login/login.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main container bg-light\">\n\t<br>\n<div style=\"min-height: 80vh;\">\n  <div class=\"text-center\">\n\t\t<h1 style=\"color: rgb(74, 146, 212);\">CROMO</h1>\n\t\t<p class=\"lead\" style=\"margin-bottom: 20px;\">Please sign in here...</p>\n\t</div>\n\t<div class=\"sub-main\">\n\t  <br>\n\t  <br>\n\t  <div class=\"col-md-6\">\n\t\t<form autocomplete=\"off\" novalidate #loginForm=\"ngForm\" (ngSubmit)=\"save(loginForm)\">\n\n\t\t\t<div class=\"form-group\"\n\t\t\t\t[ngClass] = \"{'error': usern.invalid && (usern.touched || usern.dirty || mouseOver)}\"\n\t\t\t>\n\t\t\t\t<label for=\"email\">Username:</label>\n\t\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\t\tngModel\n\t\t\t\t\tname=\"email\"\n\t\t\t\t\t#usern = \"ngModel\"\n\t\t\t\t\tplaceholder=\" Email Address...\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\trequired\n\t\t\t\t  email\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"usern.invalid && (usern.touched || usern.dirty || mouseOver)\">\n\t\t\t\t\t<em *ngIf=\"usern.errors.required\">email is required.</em>\n\t\t\t\t\t<em *ngIf=\"usern.errors.email\">Enter a valid email.</em>\n\t\t\t\t</div>\n            </div>\n\n\t\t\t<div class=\"form-group\"\n\t\t\t     [ngClass] = \"{'error': pass.invalid && (pass.touched || pass.dirty || mouseOver)}\"\n\t\t\t>\n\t\t\t\t<label for=\"password\">Password:</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tngModel\n\t\t\t\t\tname=\"password\"\n\t\t\t\t\t#pass = \"ngModel\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\" Password...\"\n\t\t\t\t\trequired\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"pass.invalid && (pass.touched || pass.dirty || mouseOver)\">\n\t\t\t\t\t<em *ngIf=\"pass.errors.required\">password is required.</em>\n\t\t\t\t</div>\n            </div>\n\n\t\t\t<span (mouseenter)=\"mouseOver = true\" (mouseleave)=\"mouseOver = false\">\n\t\t\t<button type=\"submit\" class=\"btn btn-outline-secondary \" id=\"btn-one\" [disabled]=\"loginForm.invalid || loginForm.invalid\">Save</button>\n\t\t\t</span>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn-two\" (click)=\"cancel()\">Cancel</button>\n\n        </form>\n       <br><br>\n     </div>\n   </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/users/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/users/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main container bg-light\">\n\t<br>\n\t<div class=\"text-center\">\n\t\t<h1 style=\"color: rgb(74, 146, 212);\">CROMO</h1>\n\t\t<p class=\"lead\" style=\"margin-bottom: 20px;\">Please Register here...</p>\n\t</div>\n\t<div class=\"sub-main\">\n\t  <br>\n\t  <br>\n\t  <div class=\"col-md-6\">\n\t\t<form autocomplete=\"off\" novalidate #signUpForm=\"ngForm\"  (ngSubmit)=\"save(signUpForm)\">\n\n\t\t <div class=\"form-group\"\n\t\t\t[ngClass] = \"{'error': fname.invalid && (fname.touched || fname.dirty || mouseOver)}\"\n\t\t >\n\t\t\t\t<label for=\"fname\">Firstname *</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tngModel\n\t\t\t\t\tname=\"fname\"\n\t\t\t\t\t#fname = \"ngModel\"\n\t\t\t\t\tplaceholder=\"Firstname...\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\trequired\n\t\t\t\t\tpattern = \"[a-zA-Z].*\"\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"fname.invalid && (fname.touched || fname.dirty || mouseOver)\">\n\t\t\t\t\t<em *ngIf=\"fname.errors.required\">first-name is required.</em>\n\t\t\t\t\t<em *ngIf=\"fname.errors.pattern\">first-name must  with a letter.</em>\n\t\t\t\t</div>\n\t\t  </div>\n\n\t\t  <div class=\"form-group\"\n\t\t\t  [ngClass] = \"{'error': sname.invalid && (sname.touched || sname.dirty || mouseOver)}\"\n\t\t  >\n\t\t\t\t<label for=\"username\">Lastname *</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tngModel\n\t\t\t\t\tname=\"sname\"\n\t\t\t\t\t#sname = \"ngModel\"\n\t\t\t\t\tplaceholder=\"Lastnameame...\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\trequired\n\t\t\t\t\tpattern = \"[a-zA-Z].*\"\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"sname.invalid && (sname.touched || sname.dirty || mouseOver)\">\n\t\t\t\t\t<em *ngIf=\"sname.errors.required\">lastname name is required.</em>\n\t\t\t\t\t<em *ngIf=\"sname.errors.pattern\">lastname must  with a letter.</em>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\"\n\t\t\t\t[ngClass] = \"{'error': usern.invalid && (usern.touched || usern.dirty || mouseOver)}\"\n\t\t\t>\n\t\t\t\t\t<label for=\"username\">Username *</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tngModel\n\t\t\t\t\t\tname=\"username\"\n\t\t\t\t\t\t#usern = \"ngModel\"\n\t\t\t\t\t\tplaceholder=\" Username...\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tid=\"username\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\tpattern = \"[a-zA-Z].*\"\n\t\t\t\t\t>\n\t\t\t\t\t<div *ngIf=\"usern.invalid && (usern.touched || usern.dirty || mouseOver)\">\n\t\t\t\t\t\t<em *ngIf=\"usern.errors.required\">username is required.</em>\n\t\t\t\t\t\t<em *ngIf=\"usern.errors.pattern\">username must  with a letter.</em>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for='email'>Email *</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tname=\"email\"\n\t\t\t\t\t\tngModel\n\t\t\t\t\t\tplaceholder=\"enter email\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\tid=\"email\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\temail\n\t\t\t\t\t\t#useremail=\"ngModel\"\n\t\t\t\t\t>\n\t\t\t\t\t<div *ngIf=\"useremail.invalid && (useremail.touched || useremail.dirty || mouseOver)\">\n\t\t\t\t\t\t<em *ngIf=\"useremail.errors.required\">email is required.</em>\n\t\t\t\t\t\t<em *ngIf=\"useremail.errors.pattern\">username must  with a letter.</em>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t<div ngModelGroup=\"passwordGroup\"\n\t\t\t\t #passwordGroup=\"ngModelGroup\"\n\t\t\t\t [ngClass] = \"{'error':\n\t\t\t\t\t\t\t   c_pass.invalid && (c_pass.touched || c_pass.dirty || mouseOver) && !c_pass.errors.required}\"\n\t\t    >\n\t\t\t   <div class=\"form-group\"\n\t\t\t\t   [ngClass] = \"{'error': pass.invalid && (pass.touched || pass.dirty || mouseOver)}\"\n\t\t\t   >\n\t\t\t\t   <label for=\"password\">Password *</label>\n\t\t\t\t   <input\n\t\t\t\t\t   type=\"password\"\n\t\t\t\t\t   ngModel\n\t\t\t\t\t   name=\"password\"\n\t\t\t\t\t   #pass = \"ngModel\"\n\t\t\t\t\t   class=\"form-control\"\n\t\t\t\t\t   class=\"form-control\"\n\t\t\t\t\t   (input)=\"c_pass.control.updateValueAndValidity()\"\n\t\t\t\t\t   id=\"password\"\n\t\t\t\t\t   placeholder=\" Password...\"\n\t\t\t\t\t   required\n\t\t\t\t   >\n\t\t\t   <div *ngIf=\"pass.invalid && (pass.touched || pass.dirty || mouseOver)\">\n\t\t\t\t   <em *ngIf=\"pass.errors.required\">password is required.</em>\n\t\t\t   </div>\n\t\t       </div>\n\n\t\t   <div class=\"form-group\"\n\t\t\t\t[ngClass] = \"{'error': pass.invalid && (pass.touched || pass.dirty || mouseOver)}\"\n\t\t   >\n\t\t\t  <label for=\"c_password\">Confirm Password *</label>\n\t\t\t  <input\n\t\t\t\t  type=\"password\"\n\t\t\t\t  ngModel\n\t\t\t\t  name=\"c_password\"\n\t\t\t\t  #c_pass = \"ngModel\"\n\t\t\t\t  appconfirmpassword=\"password\"\n\t\t\t\t  class=\"form-control\"\n\t\t\t\t  id=\"c_password\"\n\t\t\t\t  placeholder=\" Confirm password...\"\n\t\t\t\t  required\n\t\t\t  >\n\t\t\t  <div *ngIf=\"c_pass.invalid && (c_pass.touched || c_pass.dirty || mouseOver)\">\n\t\t\t\t  <em *ngIf=\"c_pass.errors.required\">Confirm password.</em>\n\t\t\t\t  <em *ngIf=\"c_pass.errors.notEqual && !c_pass.errors.required\">password does not match.</em>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\n\t\t\t<span (mouseenter)=\"mouseOver = true\" (mouseleave)=\"mouseOver = false\">\n\t\t\t<button type=\"submit\" class=\"btn btn-outline-secondary\" id=\"btn-one\" [disabled]=\"signUpForm.invalid || signUpForm.invalid\">Save</button>\n\t\t\t</span>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn-two\" (click)=\"cancel()\">Cancel</button>\n\n        </form>\n       <br><br>\n     </div>\n   </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/users/user-dashboard/user-dashboard.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/users/user-dashboard/user-dashboard.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main\">\n\t<mat-card id=\"matCard\">\n\t\t<div>\n\t\t\t<div *ngIf=\"user\">\n        <div>\n          <p style=\"text-align: right;\">welcome {{user.username}}</p>\n          <h3>PROFILE INFORMATION</h3>\n        </div>\n        <br>\n        <div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<button class=\"btn btn-outline-secondary one\">ID:{{user.id}}</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<button class=\"btn btn-outline-secondary one\">Name: {{user.firstname}} {{user.lastname}}</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n                        <button class=\"btn btn-outline-secondary one\">{{user.email}}</button>\n          </div>\n        </div>\n        <div>\n        </div>\n\n      </div>\n\t\t\t<div>\n        <br>\n\t\t\t\t<h2>Dashboard Details.</h2>\n\t\t\t\t<br>\n\t\t\t\t<div>\n\t\t\t\t\t<mat-accordion>\n\t\t\t\t\t\t<mat-expansion-panel (opened)=\"panelOpenState = true\"\n\t\t\t\t\t\t\t\t\t\t\t (closed)=\"panelOpenState = false\" id=\"matExpansionPanel\">\n\t\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title id=\"matPanelTitle\">\n\t\t\t\t\t\t\t  Decorator\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\t  The panel {{panelOpenState ? 'open' : 'closed'}}\n\t\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t  </mat-accordion>\n\t\t\t\t</div>\n\t\t\t\t<br><br>\n\t\t\t\t<div *ngIf=\"payDetail\">\n\t\t\t\t\t<mat-accordion *ngFor=\"let pay of payDetail \">\n\t\t\t\t\t\t<mat-expansion-panel (opened)=\"panelOpenState = true\"\n\t\t\t\t\t\t\t\t\t\t\t (closed)=\"panelOpenState = false\">\n\t\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t  Success Pay\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\t  The panel {{panelOpenState ? 'open' : 'closed'}}\n\t\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t\t  <div>\n                <p>Payment ID: {{pay.id}}</p>\n                <p>Amount Charge: {{pay.amount | currency:'Ksh': 'symbol':'1.2-2'}}</p>\n                <p>Date: {{pay.date}}</p>\n              </div>\n\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t  </mat-accordion>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</mat-card>\n\t<br>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/users/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/users/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  padding-top: 15vh;\r\n  height: 100vh;\r\n}\r\n\r\ninput {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  border: 0.1px solid #eee;\r\n  margin-bottom: 5px;\r\n}\r\n\r\nlabel {\r\n  color: rgb(74, 146, 212);\r\n  font-weight: 900;\r\n}\r\n\r\n.error input {\r\n  background-color: rgb(241, 168, 168);\r\n}\r\n\r\nem {\r\n  color: red;\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.sub-main {\r\n  border-radius: 10px;\r\n  border: 0.5px solid rgb(74, 146, 212);\r\n  background-color: rgb(74, 146, 212);\r\n}\r\n\r\nform {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#btn-one {\r\n  color: #fff;\r\n  background-color:rgb(59, 7, 126);\r\n  margin-right: 10px;\r\n}\r\n\r\n#btn-two {\r\n  color: rgb(107, 19, 103);\r\n  background-color: #fff;\r\n}\r\n\r\n.toast-top-center {\r\n  top: 30vh;\r\n  margin: 30vh auto;\r\n  left: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgcGFkZGluZy10b3A6IDE1dmg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDAuMXB4IHNvbGlkICNlZWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6IHJnYig3NCwgMTQ2LCAyMTIpO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5lcnJvciBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMTY4LCAxNjgpO1xyXG59XHJcblxyXG5lbSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnN1Yi1tYWluIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiKDc0LCAxNDYsIDIxMik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc0LCAxNDYsIDIxMik7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNidG4tb25lIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig1OSwgNywgMTI2KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNidG4tdHdvIHtcclxuICBjb2xvcjogcmdiKDEwNywgMTksIDEwMyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRvYXN0LXRvcC1jZW50ZXIge1xyXG4gIHRvcDogMzB2aDtcclxuICBtYXJnaW46IDMwdmggYXV0bztcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/users/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/users/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autheticate/auth.service */ "./src/app/components/users/autheticate/auth.service.ts");
/* harmony import */ var _toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toastr */ "./src/app/components/users/toastr.ts");





let LoginComponent = class LoginComponent {
    constructor(router, auth, toastr) {
        this.router = router;
        this.auth = auth;
        this.toastr = toastr;
    }
    ngOnInit() { }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    save(form) {
        if (form.invalid) {
            return;
        }
        const user = {
            email: form.value.email,
            password: form.value.password
        };
        this.auth.login(user);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    cancel() {
        this.router.navigate(['/']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _toastr__WEBPACK_IMPORTED_MODULE_4__["Toastr"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/users/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/users/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _toastr__WEBPACK_IMPORTED_MODULE_4__["Toastr"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/users/signup/confirmed.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/users/signup/confirmed.directive.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmedEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedEqualValidatorDirective", function() { return ConfirmedEqualValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

var ConfirmedEqualValidatorDirective_1;


let ConfirmedEqualValidatorDirective = ConfirmedEqualValidatorDirective_1 = class ConfirmedEqualValidatorDirective {
    validate(control) {
        const controlToCompare = control.parent.get(this.appconfirmpassword);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { notEqual: true };
        }
        return null;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ConfirmedEqualValidatorDirective.prototype, "appconfirmpassword", void 0);
ConfirmedEqualValidatorDirective = ConfirmedEqualValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[appconfirmpassword]',
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                useExisting: ConfirmedEqualValidatorDirective_1,
                multi: true
            }
        ]
    })
], ConfirmedEqualValidatorDirective);



/***/ }),

/***/ "./src/app/components/users/signup/signup.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/users/signup/signup.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  padding-top: 15vh;\r\n  height: 120vh;\r\n}\r\n\r\ninput {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  border: 0.1px solid #eee;\r\n  margin-bottom: 5px;\r\n}\r\n\r\nlabel {\r\n  color: #fff;\r\n  font-weight: 900;\r\n}\r\n\r\n.error input {\r\n  background-color: rgb(241, 168, 168);\r\n}\r\n\r\nem {\r\n  color: red;\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.sub-main {\r\n  border-radius: 10px;\r\n  border: 0.5px solid  rgb(74, 146, 212);\r\n  background-color:  rgb(74, 146, 212);\r\n}\r\n\r\nform {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#btn-one {\r\n  color:  rgb(74, 146, 212);\r\n  background-color: #fff;\r\n  margin-right: 10px;\r\n}\r\n\r\n#btn-two {\r\n  color:  rgb(74, 146, 212);\r\n  background-color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBwYWRkaW5nLXRvcDogMTV2aDtcclxuICBoZWlnaHQ6IDEyMHZoO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMC4xcHggc29saWQgI2VlZTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4uZXJyb3IgaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDE2OCwgMTY4KTtcclxufVxyXG5cclxuZW0ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zdWItbWFpbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICByZ2IoNzQsIDE0NiwgMjEyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDc0LCAxNDYsIDIxMik7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNidG4tb25lIHtcclxuICBjb2xvcjogIHJnYig3NCwgMTQ2LCAyMTIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jYnRuLXR3byB7XHJcbiAgY29sb3I6ICByZ2IoNzQsIDE0NiwgMjEyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/users/signup/signup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/users/signup/signup.component.ts ***!
  \*************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toastr */ "./src/app/components/users/toastr.ts");
/* harmony import */ var _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../autheticate/auth.service */ "./src/app/components/users/autheticate/auth.service.ts");





let SignupComponent = class SignupComponent {
    constructor(router, toastr, auth) {
        this.router = router;
        this.toastr = toastr;
        this.auth = auth;
    }
    ngOnInit() { }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    save(form) {
        if (form.invalid) {
            return;
        }
        const user = {
            firstname: form.value.fname,
            lastname: form.value.sname,
            username: form.value.username,
            email: form.value.email,
            password: form.value.passwordGroup.password
        };
        this.auth.register(user);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    cancel() {
        this.router.navigate(['/']);
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _toastr__WEBPACK_IMPORTED_MODULE_3__["Toastr"] },
    { type: _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/users/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/users/signup/signup.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _toastr__WEBPACK_IMPORTED_MODULE_3__["Toastr"],
        _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/components/users/user-dashboard/user-dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/users/user-dashboard/user-dashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  padding-top: 20vh;\r\n  background-color: #fff;\r\n}\r\n\r\nh2, h3 {\r\n  color: rgb(0, 119, 255);\r\n}\r\n\r\n#matCard {\r\n  min-height: 80vh;\r\n  background-color: rgb(189, 205, 223);\r\n}\r\n\r\n.one {\r\n  background-color: rgb(0, 119, 255);\r\n  color: #fff;\r\n  cursor: pointer;\r\n  min-width: 255px;\r\n  text-align: left;\r\n}\r\n\r\n.one:hover {\r\n  background-color: #fff;\r\n  color: rgb(0, 119, 255);\r\n}\r\n\r\n#matExpansionPanel {\r\n  background-color: rgb(126, 180, 241);\r\n}\r\n\r\n#matPanelTitle {\r\n  font-size: 1rem;\r\n  color: #fff;\r\n  font-size: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlci1kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBwYWRkaW5nLXRvcDogMjB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5oMiwgaDMge1xyXG4gIGNvbG9yOiByZ2IoMCwgMTE5LCAyNTUpO1xyXG59XHJcblxyXG4jbWF0Q2FyZCB7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAyMDUsIDIyMyk7XHJcbn1cclxuXHJcbi5vbmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMTksIDI1NSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1pbi13aWR0aDogMjU1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm9uZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogcmdiKDAsIDExOSwgMjU1KTtcclxufVxyXG5cclxuI21hdEV4cGFuc2lvblBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LCAxODAsIDI0MSk7XHJcbn1cclxuXHJcbiNtYXRQYW5lbFRpdGxlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/users/user-dashboard/user-dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/users/user-dashboard/user-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autheticate/auth.service */ "./src/app/components/users/autheticate/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toastr */ "./src/app/components/users/toastr.ts");
/* harmony import */ var _cart_items_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cart-items/cart/cart.service */ "./src/app/components/cart-items/cart/cart.service.ts");






let UserDashboardComponent = class UserDashboardComponent {
    constructor(auth, router, toastr, payment) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.payment = payment;
        this.panelOpenState = false;
    }
    ngOnInit() {
        this.auth.getDashboard()
            .subscribe((res) => {
            if (res) {
                const data = {
                    id: res.id,
                    firstname: res.firstname,
                    lastname: res.lastname,
                    username: res.username,
                    email: res.email
                };
                this.user = data;
                // tslint:disable-next-line: max-line-length
                this.toastr.success(`_______________________________________________________________________________________________________________Welcome to Your Dashboard ${data.username} .................................................................................................................`);
            }
            else {
                this.toastr.warning('Errr');
            }
        }, (err) => {
            console.log('The error is amos', err);
        });
        this.payment.paymentInfo().subscribe((res) => {
            // tslint:disable-next-line: no-unused-expression
            this.payDetail = res.data;
        }, (err) => {
            console.log('The error is ', err);
        });
    }
};
UserDashboardComponent.ctorParameters = () => [
    { type: _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _toastr__WEBPACK_IMPORTED_MODULE_4__["Toastr"] },
    { type: _cart_items_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceT"] }
];
UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-dashboard',
        template: __webpack_require__(/*! raw-loader!./user-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/users/user-dashboard/user-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/components/users/user-dashboard/user-dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_autheticate_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _toastr__WEBPACK_IMPORTED_MODULE_4__["Toastr"],
        _cart_items_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceT"]])
], UserDashboardComponent);



/***/ }),

/***/ "./src/app/components/users/user/user.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/users/user/user.module.ts ***!
  \******************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/components/users/signup/signup.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-dashboard/user-dashboard.component */ "./src/app/components/users/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_confirmed_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../signup/confirmed.directive */ "./src/app/components/users/signup/confirmed.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_materials_material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/materials/material/material.module */ "./src/app/materials/material/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Guard */ "./src/app/components/Guard.ts");












const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'dashboard', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["UserDashboardComponent"], canActivate: [_Guard__WEBPACK_IMPORTED_MODULE_11__["AuthGurds"]] }
];
let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["UserDashboardComponent"], _signup_confirmed_directive__WEBPACK_IMPORTED_MODULE_7__["ConfirmedEqualValidatorDirective"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], src_app_materials_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=components-users-user-user-module-es2015.js.map