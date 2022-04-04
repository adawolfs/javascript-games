import { time } from "console";

export class Game {

    private _matrix: Array<Array<string>> = [];
    private _direction: string = 'ArrowRight';
    private _head = new Map<string, number>([
        ['x', 0],
        ['y', 0]
    ]);

    private _defaultColor = 'white';
    private _snakeColor = 'green';
    private _fruitColor = 'lightgreen';
    private _fruitEmoji = '🍎';
    private _points = 0;
    private _interval: NodeJS.Timeout | undefined;
    private _isGameOver: boolean = false;

    gameGrid: HTMLDivElement | undefined;

    constructor(public gameUI: HTMLDivElement) {
        this.prepare();
    }

    private _draw() {
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
                cell.addEventListener('click', (e: Event) => {
                    let cell = e.target as HTMLDivElement;
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

    public prepare() {
        console.log('Game is preparing...');
        this._draw();

        // Define game layout
        this.gameGrid!.style.display = 'none';
        this.gameGrid!.style.width = '400px';
        this.gameGrid!.style.height = '400px';
        this.gameGrid!.style.display = 'grid';
        this.gameGrid!.style.gridTemplate = 'repeat(20,5%) /  repeat(20,5%)';
        
        let body = document.getElementsByTagName('body')[0];
        body.addEventListener('keydown', (e: KeyboardEvent) => {
            this._direction = e.code;
            this._move();
            this.play();
         });
        let x = this._head.get('x');
        let y = this._head.get('y');
        let head = document.getElementById(`cell-${y}-${x}`) as HTMLDivElement;
        head.style.backgroundColor = this._snakeColor;
    }

    private _gameOver() {
        this._isGameOver = true;
        this.gameUI.innerHTML = '<h1>Game Over</h1><br>😞';
        this.gameUI.style.textAlign = 'center';
    }

    private _move() {
        console.log('Game is moving...');
        if(this._isGameOver) return;
        switch (this._direction) {
            case 'ArrowUp':
                this._head.set('y', this._head.get('y')! - 1);
                break;
            case 'ArrowDown':
                console.log(this._head);
                this._head.set('y', this._head.get('y')! + 1);
                console.log(this._head);
                break;
            case 'ArrowLeft':
                this._head.set('x', this._head.get('x')! - 1);
                break;
            case 'ArrowRight':
                this._head.set('x', this._head.get('x')! + 1);
                break;
        }

        let x = this._head.get('x');
        let y = this._head.get('y');
        let head = document.getElementById(`cell-${y}-${x}`) as HTMLDivElement;

        if (x! < 0 || x! > 19 || y! < 0 || y! > 19) {
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

        if  (head.style.backgroundColor === this._fruitColor) {
            this._points += 10;
            //   this._fruit();
        }
        
        head.style.backgroundColor = this._snakeColor;
        let score = document.getElementById('score') as HTMLDivElement; 
        score.innerHTML = `Score: ${this._points}`;
        
    }

    public play() {
        console.log('Game is running...');
        this._interval ? clearInterval(this._interval) : null;
        this._interval = setInterval(() => {
            console.log('loop')
            this._move();
          }, 1000);
    }

}