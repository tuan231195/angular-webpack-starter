require('./styles.css');
import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import {MainController} from './mainCtrl';

module ContactManagerApp {
    angular.module('ContactApp', ['ngMaterial', 'ngAnimate', 'ngAria']).controller('mainController', MainController);
}
