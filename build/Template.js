/*!
 * Advertisement data
 * Template file v0.7.4
 * © 2016-2017 Manhhailua
 * Zone: {{zoneId}}
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by manhhailua on 1/4/17.
	 */
	
	/* eslint-disable quotes */
	
	var env = location.search.indexOf('corejs_env=dev') !== -1 ? '' : '.min';
	var script = document.createElement('script');
	
	script.id = 'arf-core-js';
	script.type = 'text/javascript';
	script.src = '//corejs.manhhailua.com/build/Arf' + env + '.js';
	
	/**
	 * Async load core-js script
	 */
	if (!document.getElementById(script.id)) {
	  document.getElementsByTagName('body')[0].appendChild(script);
	}
	
	// Init arfZonesQueue if not existed
	window.arfZonesQueue = window.arfZonesQueue || [];
	
	// Push current zone to arfZonesQueue
	// In production mode, webpack will force double quotes for string
	window.arfZonesQueue.push({
	  el: document.getElementById("{{zoneId}}"),
	  propsData: {
	    model: "{{zoneDataObject}}"
	  }
	});

/***/ }
/******/ ]);
//# sourceMappingURL=Template.js.map