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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var FooComponent_1 = __webpack_require__(3);
var FooClass_1 = __webpack_require__(4);
console.log('Start');
var foo = new FooClass_1.Foo("bar");
console.log(foo.toString());
ReactDOM.render(React.createElement(FooComponent_1.default, { foo: "foo from props" }), document.getElementById('root'));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var IFooComponentState = /** @class */ (function () {
    function IFooComponentState() {
    }
    return IFooComponentState;
}());
var FooComponent = /** @class */ (function (_super) {
    __extends(FooComponent, _super);
    function FooComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { foo: false };
        _this.Button2ClickHandler = _this.Button2ClickHandler.bind(_this);
        return _this;
    }
    FooComponent.prototype.Button2ClickHandler = function () {
        this.setState({ foo: !this.state.foo });
    };
    FooComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            "props.foo: ",
            this.props.foo,
            React.createElement("br", null),
            "props.bar: ",
            this.props.bar ? this.props.bar : "null",
            React.createElement("br", null),
            "state.foo: ",
            this.state.foo ? "true" : "false",
            React.createElement("br", null),
            React.createElement("button", { onClick: function () { return _this.setState({ foo: !_this.state.foo }); } }, "Toggle state.foo"),
            React.createElement("br", null),
            React.createElement("button", { onClick: this.Button2ClickHandler }, "Toggle state.foo")));
    };
    return FooComponent;
}(React.Component));
exports.default = FooComponent;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Foo = /** @class */ (function () {
    function Foo(foo) {
        this._foo = "";
        this._foo = foo;
    }
    Foo.prototype.toString = function () {
        return "This is class Foo!";
    };
    return Foo;
}());
exports.Foo = Foo;


/***/ })
/******/ ]);