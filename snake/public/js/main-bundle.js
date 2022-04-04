/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
class Game {
    constructor(gameUI) {
        this.gameUI = gameUI;
        this._matrix = [];
        this._direction = 'ArrowRight';
        this._head = new Map([
            ['x', 0],
            ['y', 0]
        ]);
        this._defaultColor = 'white';
        this._snakeColor = 'green';
        this._fruitColor = 'lightgreen';
        this._fruitEmoji = '🍎';
        this._points = 0;
        this._isGameOver = false;
        this.prepare();
    }
    _draw() {
        console.log('Game is drawing...');
        this.gameGrid = document.createElement('div');
        // Create a bidimensional array typescript
        for (let i = 0; i < 20; i++) {
            this._matrix[i] = [];
            for (let j = 0; j < 20; j++) {
                this._matrix[i][j] = `${i}-${j}`;
                let cell = document.createElement('div');
                cell.setAttribute('index', `${i}-${j}`);
                cell.id = `cell-${i}-${j}`;
                cell.className = 'cell';
                cell.style.backgroundColor = this._defaultColor;
                cell.style.border = '1px solid black';
                cell.style.margin = '1px';
                cell.style.display = 'flex';
                cell.style.justifyContent = 'center';
                cell.style.alignItems = 'center';
                cell.addEventListener('click', (e) => {
                    let cell = e.target;
                    cell.innerHTML = this._fruitEmoji;
                    cell.style.backgroundColor = this._fruitColor;
                });
                this.gameGrid.appendChild(cell);
            }
        }
        let score = document.createElement('div');
        score.id = 'score';
        score.innerHTML = `Score: ${this._points}`;
        this.gameUI.appendChild(score);
        this.gameUI.appendChild(this.gameGrid);
    }
    prepare() {
        console.log('Game is preparing...');
        this._draw();
        // Define game layout
        this.gameGrid.style.display = 'none';
        this.gameGrid.style.width = '400px';
        this.gameGrid.style.height = '400px';
        this.gameGrid.style.display = 'grid';
        this.gameGrid.style.gridTemplate = 'repeat(20,5%) /  repeat(20,5%)';
        let body = document.getElementsByTagName('body')[0];
        body.addEventListener('keydown', (e) => {
            this._direction = e.code;
            this._move();
            this.play();
        });
        let x = this._head.get('x');
        let y = this._head.get('y');
        let head = document.getElementById(`cell-${y}-${x}`);
        head.style.backgroundColor = this._snakeColor;
    }
    _gameOver() {
        this._isGameOver = true;
        this.gameUI.innerHTML = '<h1>Game Over</h1><br>😞';
        this.gameUI.style.textAlign = 'center';
    }
    _move() {
        console.log('Game is moving...');
        if (this._isGameOver)
            return;
        switch (this._direction) {
            case 'ArrowUp':
                this._head.set('y', this._head.get('y') - 1);
                break;
            case 'ArrowDown':
                console.log(this._head);
                this._head.set('y', this._head.get('y') + 1);
                console.log(this._head);
                break;
            case 'ArrowLeft':
                this._head.set('x', this._head.get('x') - 1);
                break;
            case 'ArrowRight':
                this._head.set('x', this._head.get('x') + 1);
                break;
        }
        let x = this._head.get('x');
        let y = this._head.get('y');
        let head = document.getElementById(`cell-${y}-${x}`);
        if (x < 0 || x > 19 || y < 0 || y > 19) {
            console.log('Game is over by wall');
            this._gameOver();
            return;
        }
        if (head.style.backgroundColor === this._snakeColor) {
            console.log('Game is over by collision...');
            console.log(head);
            this._gameOver();
            return;
        }
        if (head.style.backgroundColor === this._fruitColor) {
            this._points += 10;
            //   this._fruit();
        }
        head.style.backgroundColor = this._snakeColor;
        let score = document.getElementById('score');
        score.innerHTML = `Score: ${this._points}`;
    }
    play() {
        console.log('Game is running...');
        this._interval ? clearInterval(this._interval) : null;
        this._interval = setInterval(() => {
            console.log('loop');
            this._move();
        }, 1000);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.ts");

let gameUI = document.getElementById('game');
let game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game(gameUI);
// game.play();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLDRCQUE0QixRQUFRO0FBQ3BDLHdDQUF3QyxFQUFFLEdBQUcsRUFBRTtBQUMvQztBQUNBLDhDQUE4QyxFQUFFLEdBQUcsRUFBRTtBQUNyRCxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGFBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsbURBQW1ELEVBQUUsR0FBRyxFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsRUFBRSxHQUFHLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxhQUFhO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7VUM1SEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044QjtBQUM5QjtBQUNBLGVBQWUsdUNBQUk7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZVVJKSB7XG4gICAgICAgIHRoaXMuZ2FtZVVJID0gZ2FtZVVJO1xuICAgICAgICB0aGlzLl9tYXRyaXggPSBbXTtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gJ0Fycm93UmlnaHQnO1xuICAgICAgICB0aGlzLl9oZWFkID0gbmV3IE1hcChbXG4gICAgICAgICAgICBbJ3gnLCAwXSxcbiAgICAgICAgICAgIFsneScsIDBdXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLl9kZWZhdWx0Q29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB0aGlzLl9zbmFrZUNvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgdGhpcy5fZnJ1aXRDb2xvciA9ICdsaWdodGdyZWVuJztcbiAgICAgICAgdGhpcy5fZnJ1aXRFbW9qaSA9ICfwn42OJztcbiAgICAgICAgdGhpcy5fcG9pbnRzID0gMDtcbiAgICAgICAgdGhpcy5faXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByZXBhcmUoKTtcbiAgICB9XG4gICAgX2RyYXcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIGlzIGRyYXdpbmcuLi4nKTtcbiAgICAgICAgdGhpcy5nYW1lR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBDcmVhdGUgYSBiaWRpbWVuc2lvbmFsIGFycmF5IHR5cGVzY3JpcHRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXRyaXhbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjA7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hdHJpeFtpXVtqXSA9IGAke2l9LSR7an1gO1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgYCR7aX0tJHtqfWApO1xuICAgICAgICAgICAgICAgIGNlbGwuaWQgPSBgY2VsbC0ke2l9LSR7an1gO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5fZGVmYXVsdENvbG9yO1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5tYXJnaW4gPSAnMXB4JztcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmlubmVySFRNTCA9IHRoaXMuX2ZydWl0RW1vamk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5fZnJ1aXRDb2xvcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVHcmlkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzY29yZS5pZCA9ICdzY29yZSc7XG4gICAgICAgIHNjb3JlLmlubmVySFRNTCA9IGBTY29yZTogJHt0aGlzLl9wb2ludHN9YDtcbiAgICAgICAgdGhpcy5nYW1lVUkuYXBwZW5kQ2hpbGQoc2NvcmUpO1xuICAgICAgICB0aGlzLmdhbWVVSS5hcHBlbmRDaGlsZCh0aGlzLmdhbWVHcmlkKTtcbiAgICB9XG4gICAgcHJlcGFyZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgaXMgcHJlcGFyaW5nLi4uJyk7XG4gICAgICAgIHRoaXMuX2RyYXcoKTtcbiAgICAgICAgLy8gRGVmaW5lIGdhbWUgbGF5b3V0XG4gICAgICAgIHRoaXMuZ2FtZUdyaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5nYW1lR3JpZC5zdHlsZS53aWR0aCA9ICc0MDBweCc7XG4gICAgICAgIHRoaXMuZ2FtZUdyaWQuc3R5bGUuaGVpZ2h0ID0gJzQwMHB4JztcbiAgICAgICAgdGhpcy5nYW1lR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgICAgICB0aGlzLmdhbWVHcmlkLnN0eWxlLmdyaWRUZW1wbGF0ZSA9ICdyZXBlYXQoMjAsNSUpIC8gIHJlcGVhdCgyMCw1JSknO1xuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSBlLmNvZGU7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCB4ID0gdGhpcy5faGVhZC5nZXQoJ3gnKTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLl9oZWFkLmdldCgneScpO1xuICAgICAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsLSR7eX0tJHt4fWApO1xuICAgICAgICBoZWFkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX3NuYWtlQ29sb3I7XG4gICAgfVxuICAgIF9nYW1lT3ZlcigpIHtcbiAgICAgICAgdGhpcy5faXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZVVJLmlubmVySFRNTCA9ICc8aDE+R2FtZSBPdmVyPC9oMT48YnI+8J+Ynic7XG4gICAgICAgIHRoaXMuZ2FtZVVJLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIH1cbiAgICBfbW92ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgaXMgbW92aW5nLi4uJyk7XG4gICAgICAgIGlmICh0aGlzLl9pc0dhbWVPdmVyKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX2RpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5faGVhZC5zZXQoJ3knLCB0aGlzLl9oZWFkLmdldCgneScpIC0gMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2hlYWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hlYWQuc2V0KCd5JywgdGhpcy5faGVhZC5nZXQoJ3knKSArIDEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2hlYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLl9oZWFkLnNldCgneCcsIHRoaXMuX2hlYWQuZ2V0KCd4JykgLSAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hlYWQuc2V0KCd4JywgdGhpcy5faGVhZC5nZXQoJ3gnKSArIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxldCB4ID0gdGhpcy5faGVhZC5nZXQoJ3gnKTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLl9oZWFkLmdldCgneScpO1xuICAgICAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsLSR7eX0tJHt4fWApO1xuICAgICAgICBpZiAoeCA8IDAgfHwgeCA+IDE5IHx8IHkgPCAwIHx8IHkgPiAxOSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgaXMgb3ZlciBieSB3YWxsJyk7XG4gICAgICAgICAgICB0aGlzLl9nYW1lT3ZlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gdGhpcy5fc25ha2VDb2xvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgaXMgb3ZlciBieSBjb2xsaXNpb24uLi4nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhlYWQpO1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IHRoaXMuX2ZydWl0Q29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuX3BvaW50cyArPSAxMDtcbiAgICAgICAgICAgIC8vICAgdGhpcy5fZnJ1aXQoKTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX3NuYWtlQ29sb3I7XG4gICAgICAgIGxldCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xuICAgICAgICBzY29yZS5pbm5lckhUTUwgPSBgU2NvcmU6ICR7dGhpcy5fcG9pbnRzfWA7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIGlzIHJ1bm5pbmcuLi4nKTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPyBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKSA6IG51bGw7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb3AnKTtcbiAgICAgICAgICAgIHRoaXMuX21vdmUoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xubGV0IGdhbWVVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG5sZXQgZ2FtZSA9IG5ldyBHYW1lKGdhbWVVSSk7XG4vLyBnYW1lLnBsYXkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==