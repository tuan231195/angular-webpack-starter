"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('./styles.css');
var angular = require("angular");
require("angular-animate");
require("angular-aria");
require("angular-material");
var mainCtrl_1 = require("./mainCtrl");
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module('ContactApp', ['ngMaterial', 'ngAnimate', 'ngAria']).controller('mainController', mainCtrl_1.MainController);
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=app.js.map