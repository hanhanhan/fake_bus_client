/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// require('./logger.js')
// require('./route.js')
// import { bar } from './logger'

const bus_stops = [1, 2]

//example
let api_data = {"r1": {"1": [0, 15, 30, 45], "2": [2, 17, 32, 47], "3": [4, 19, 34, 49], "4": [6, 21, 36, 51], "5": [8, 23, 38, 53], "6": [10, 25, 40, 55], "7": [12, 27, 42, 57], "8": [14, 29, 44, 59], "9": [16, 31, 46, 1], "10": [18, 33, 48, 3]}, "r2": {"1": [2, 17, 32, 47], "2": [4, 19, 34, 49], "3": [6, 21, 36, 51], "4": [8, 23, 38, 53], "5": [10, 25, 40, 55], "6": [12, 27, 42, 57], "7": [14, 29, 44, 59], "8": [16, 31, 46, 1], "9": [18, 33, 48, 3], "10": [20, 35, 50, 5]}, "r3": {"1": [4, 19, 34, 49], "2": [6, 21, 36, 51], "3": [8, 23, 38, 53], "4": [10, 25, 40, 55], "5": [12, 27, 42, 57], "6": [14, 29, 44, 59], "7": [16, 31, 46, 1], "8": [18, 33, 48, 3], "9": [20, 35, 50, 5], "10": [22, 37, 52, 7]}}
console.log(api_data['r1']["1"])
let route 
let schedule

function schedul(ro, timestring){
    let tablerow = 
        `<h1>${ro}<h1>
         <h1>${timestring}<h1>`
    return tablerow
} 

let route_holder = document.getElementById('route')
route_holder.innerHTML = schedul(465, "built inside")

// module.exports = { schedule, route_holder }

/***/ })
/******/ ]);