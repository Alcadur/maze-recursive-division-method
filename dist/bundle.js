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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/p5/lib/p5.js":
/*!***********************************!*\
  !*** ./node_modules/p5/lib/p5.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/Cell.js":
/*!*********************!*\
  !*** ./src/Cell.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _main = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\nvar _main2 = _interopRequireDefault(_main);\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar config = _interopRequireWildcard(_config);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar width = config.cellWidth;\nvar height = config.cellHeight;\n\nvar Cell = function () {\n    function Cell(column, row) {\n        _classCallCheck(this, Cell);\n\n        this.x = column * width;\n        this.y = row * height;\n        this.lines = [false, false, false, false];\n        this.gaps = [false, false, false, false];\n    }\n\n    _createClass(Cell, [{\n        key: 'draw',\n        value: function draw() {\n            this.mask();\n\n            this.drawSetup();\n\n            //if (this.lines[Cell.TOP] && !this.gaps[Cell.TOP]) {\n            //    this.drawTop()\n            //}\n            //\n            //if (this.lines[Cell.RIGHT] && !this.gaps[Cell.RIGHT]) {\n            //    this.drawRight()\n            //}\n            //\n            //if (this.lines[Cell.BOTTOM] && !this.gaps[Cell.BOTTOM]) {\n            //    this.drawBottom()\n            //}\n            //\n            //if (this.lines[Cell.LEFT] && !this.gaps[Cell.LEFT]) {\n            //    this.drawLeft()\n            //}\n\n            //p5.stroke(0);\n        }\n    }, {\n        key: 'mask',\n        value: function mask() {\n\n            if (!this.lines[Cell.TOP] && !this.gaps[Cell.TOP]) {\n                this.drawTop();\n            }\n\n            if (!this.lines[Cell.RIGHT] && !this.gaps[Cell.RIGHT]) {\n                this.drawRight();\n            }\n\n            if (!this.lines[Cell.BOTTOM] && !this.gaps[Cell.BOTTOM]) {\n                this.drawBottom();\n            }\n\n            if (!this.lines[Cell.LEFT] && !this.gaps[Cell.LEFT]) {\n                this.drawLeft();\n            }\n\n            _main2.default.stroke(185);\n        }\n    }, {\n        key: 'markAsGap',\n        value: function markAsGap(direction) {\n            if ([Cell.TOP, Cell.RIGHT, Cell.BOTTOM, Cell.LEFT].indexOf(direction) === -1) {\n                throw new TypeError('invalid side type');\n            }\n\n            this.gaps[direction] = true;\n        }\n    }, {\n        key: 'drawSetup',\n        value: function drawSetup() {\n            _main2.default.noFill();\n            //p5.stroke(185);\n        }\n    }, {\n        key: 'drawTop',\n        value: function drawTop() {\n            this.drawSetup();\n\n            _main2.default.line(this.x, this.y, this.x + width, this.y);\n        }\n    }, {\n        key: 'drawRight',\n        value: function drawRight() {\n            this.drawSetup();\n\n            _main2.default.line(this.x + width, this.y, this.x + width, this.y + height);\n        }\n    }, {\n        key: 'drawBottom',\n        value: function drawBottom() {\n            this.drawSetup();\n\n            _main2.default.line(this.x + width, this.y + height, this.x, this.y + height);\n        }\n    }, {\n        key: 'drawLeft',\n        value: function drawLeft() {\n            this.drawSetup();\n\n            _main2.default.line(this.x, this.y + height, this.x, this.y);\n        }\n    }, {\n        key: 'show',\n        value: function show(direction) {\n            this.lines[direction] = true;\n        }\n    }]);\n\n    return Cell;\n}();\n\nCell.TOP = 0;\nCell.RIGHT = 1;\nCell.BOTTOM = 2;\nCell.LEFT = 3;\n\nexports.default = Cell;\n\n//# sourceURL=webpack:///./src/Cell.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar WIDTH = exports.WIDTH = 500;\nvar HEIGHT = exports.HEIGHT = 500;\nvar NUMBER_OF_CELLS_AND_ROWS = exports.NUMBER_OF_CELLS_AND_ROWS = 5;\nvar cellWidth = exports.cellWidth = Math.floor(WIDTH / NUMBER_OF_CELLS_AND_ROWS);\nvar cellHeight = exports.cellHeight = Math.floor(HEIGHT / NUMBER_OF_CELLS_AND_ROWS);\nvar cellsNumber = exports.cellsNumber = Math.pow(NUMBER_OF_CELLS_AND_ROWS, 2);\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _p = __webpack_require__(/*! p5 */ \"./node_modules/p5/lib/p5.js\");\n\nvar _p2 = _interopRequireDefault(_p);\n\nvar _Cell = __webpack_require__(/*! ./Cell */ \"./src/Cell.js\");\n\nvar _Cell2 = _interopRequireDefault(_Cell);\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar config = _interopRequireWildcard(_config);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar grid = [];\nvar stack = [];\nvar isHorizontalMode = true;\n\nvar p5 = new _p2.default(function (sk) {\n    sk.setup = function () {\n        sk.createCanvas(config.WIDTH, config.HEIGHT);\n\n        for (var rowIndex = 0; rowIndex < config.NUMBER_OF_CELLS_AND_ROWS; rowIndex++) {\n            for (var columnIndex = 0; columnIndex < config.NUMBER_OF_CELLS_AND_ROWS; columnIndex++) {\n                grid.push(new _Cell2.default(columnIndex, rowIndex));\n            }\n        }\n\n        stack.push(StackFactory([0, 0], [config.NUMBER_OF_CELLS_AND_ROWS, config.NUMBER_OF_CELLS_AND_ROWS]));\n\n        window.grid = grid;\n    };\n\n    sk.draw = function () {\n        sk.background(158);\n\n        grid.forEach(function (cell) {\n            return cell.draw();\n        });\n\n        divisionGrid(sk);\n    };\n});\n\nvar debug = 0;\n\nfunction divisionGrid(sk) {\n    if (debug < 1) {\n        var currentPart = stack.pop();\n        var start = currentPart.start;\n        var end = currentPart.end;\n\n        if (isHorizontalMode) {\n            var cutIndex = getIntRandom(start[1], end[1]);\n            var gapIndex = getCellIndexByCoordinats(cutIndex, getIntRandom(start[1], end[1]));\n\n            grid[gapIndex].markAsGap(_Cell2.default.BOTTOM);\n            console.log(gapIndex);\n\n            for (var index = start[0]; index < end[0]; index++) {\n                var cellIndex = getCellIndexByCoordinats(index, cutIndex);\n                grid[cellIndex].show(_Cell2.default.BOTTOM);\n\n                console.log(grid[cellIndex]);\n            }\n\n            stack.push(StackFactory([start[0], end[0]], [cutIndex, end[1]]));\n            stack.push(StackFactory([cutIndex, end[0]], [end[0], end[1]]));\n        } else {\n            //const cutIndex = getIntRandom(start[1], end(1));\n            //const gapIndex = getIntRandom(start[0], end[0]);\n            //\n            //\n            //stack.push(StackFactory([start[0], end[0]], [start[1], cutIndex]));\n            //stack.push(StackFactory([start[0], cutIndex], [start[1], end[1]]));\n        }\n\n        debug++;\n        divisionGrid(sk);\n    }\n}\n\n/**\n *\n * @param {array} start\n * @param {array} end\n * @return {{start: *, end: *}}\n * @constructor\n */\nfunction StackFactory(start, end) {\n    return {\n        start: start,\n        end: end,\n        getEndPosition: function getEndPosition(inHorizontal) {\n            if (inHorizontal) {\n                return end[0];\n            }\n\n            return end[1];\n        }\n    };\n}\n\nfunction markVerticalLineAt(columnNumber, length) {\n    for (var index = columnNumber; index < length; index++) {\n        var cellIndex = getCellIndexByCoordinats(columnNumber, index);\n        var cell = grid[cellIndex];\n        cell.lines[_Cell2.default.LEFT] = true;\n    }\n}\n\nfunction markHorizontalLineAt(columnNumber, length) {\n    for (var index = columnNumber; index < length; index++) {\n        var cellIndex = getCellIndexByCoordinats(index, columnNumber);\n        var cell = grid[cellIndex];\n        cell.lines[_Cell2.default.TOP] = true;\n    }\n}\n\nfunction markRandomCellAsGapInLine(startPosition, endPosition) {\n    var isHorizontal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n    var randomPosition = getIntRandom(startPosition, endPosition);\n    var cellIndex = getCellIndexByCoordinats(startPosition, randomPosition);\n    var cell = grid[cellIndex];\n\n    if (isHorizontal) {\n        cellIndex = getCellIndexByCoordinats(startPosition, randomPosition);\n        cell = grid[cellIndex];\n        cell.markAsGap(_Cell2.default.TOP);\n    } else {\n        cell.markAsGap(_Cell2.default.LEFT);\n    }\n}\n\nfunction getIntRandom(minInclude, maxExclude) {\n    return Math.floor(p5.random(minInclude, maxExclude));\n}\n\nfunction getCellIndexByCoordinats(x, y) {\n    return x + y * config.NUMBER_OF_CELLS_AND_ROWS;\n}\n\nexports.default = p5;\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });