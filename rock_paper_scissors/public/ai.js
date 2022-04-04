import { Choice } from "./enums.js";
export class ComputerAI {
    getChoice() {
        let choices = [Choice.STONE, Choice.PAPER, Choice.SCISSORS];
        return choices[Math.floor(Math.random() * choices.length)];
    }
}
