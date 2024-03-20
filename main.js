/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/test.png
const test_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/GoblinGame.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var GoblinGame = /*#__PURE__*/function () {
  function GoblinGame(board, size) {
    _classCallCheck(this, GoblinGame);
    this.board = board;
    this.size = size;
    this.activeIndex = -1;
  }
  _createClass(GoblinGame, [{
    key: "init",
    value: function init() {
      var _this = this;
      var html = '';
      for (var i = 0; i < Math.pow(this.size, 2); i++) {
        html += '<div class="hole"></div>';
      }
      this.board.innerHTML = html;
      this.holes = this.board.querySelectorAll('.hole');
      this.goblin = document.createElement('img');
      this.goblin.src = test_namespaceObject;
      this.goblin.className = 'goblin';
      this.moveGoblin();
      setInterval(function () {
        return _this.moveGoblin();
      }, 1000);
    }
  }, {
    key: "moveGoblin",
    value: function moveGoblin() {
      var oldIndex = this.activeIndex;
      do {
        this.activeIndex = Math.trunc(Math.random() * Math.pow(this.size, 2));
      } while (this.activeIndex === oldIndex);
      this.holes[this.activeIndex].appendChild(this.goblin);
    }
  }]);
  return GoblinGame;
}();

;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here


var game = new GoblinGame(document.getElementsByClassName('hole-board')[0], 4);
game.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;