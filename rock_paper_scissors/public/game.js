import { ComputerAI } from "./ai.js";
import { Choice, Result } from "./enums.js";
export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this._result = "";
        console.log('Game is ready...');
    }
    get result() {
        return this._result;
    }
    set result(value) {
        this._result = value;
    }
    _applyRules() {
        switch (this.player1.choice) {
            case Choice.STONE:
                if (this.player2.choice === Choice.STONE) {
                    this.result = Result.DRAW;
                }
                else if (this.player2.choice === Choice.PAPER) {
                    this.result = Result.LOSE;
                }
                else {
                    this.result = Result.WIN;
                }
                break;
            case Choice.PAPER:
                if (this.player2.choice === Choice.STONE) {
                    this.result = Result.WIN;
                }
                else if (this.player2.choice === Choice.PAPER) {
                    this.result = Result.DRAW;
                }
                else {
                    this.result = Result.LOSE;
                }
                break;
            case Choice.SCISSORS:
                if (this.player2.choice === Choice.STONE) {
                    this.result = Result.LOSE;
                }
                else if (this.player2.choice === Choice.PAPER) {
                    this.result = Result.WIN;
                }
                else {
                    this.result = Result.DRAW;
                }
                break;
        }
    }
    play() {
        console.log('Game is running...');
        this.player2.choice = this.getComputerChoice();
        this._applyRules();
    }
    getComputerChoice() {
        return new ComputerAI().getChoice();
    }
    stop() {
        console.log('Game is stopped...');
    }
    pause() {
        console.log('Game is paused...');
    }
}
