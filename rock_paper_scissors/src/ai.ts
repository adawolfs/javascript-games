import { Choice } from "./enums.js";

export class ComputerAI {
    public getChoice(): string {
        let choices = [Choice.STONE, Choice.PAPER, Choice.SCISSORS];
        return choices[Math.floor(Math.random() * choices.length)];
    }
}