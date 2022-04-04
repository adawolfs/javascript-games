import { ComputerAI } from "./ai.js";
import { Player } from "./classes.js";
import { Choice, Result } from "./enums.js";

export class Game {
    constructor(public player1: Player, public player2: Player) {
        console.log('Game is ready...');
    }
    private _result: string = "";

    public get result(): string {
        return this._result;
    }
    public set result(value: string) {
        this._result = value;
    }

    private _applyRules() {
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

    public play() {
        console.log('Game is running...');
        this.player2.choice = this.getComputerChoice();
        this._applyRules();
    }

    getComputerChoice(): string {
        return new ComputerAI().getChoice();
    }

    public stop() {
        console.log('Game is stopped...');
    }

    public pause() {
        console.log('Game is paused...');
    }
}