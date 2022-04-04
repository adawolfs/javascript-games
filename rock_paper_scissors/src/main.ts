import { Game } from "./game.js";
import { Player } from "./classes.js";

const change = (e: Event) =>{
    const target = e.target as HTMLButtonElement;
    const player: Player = new Player("Player", target.id);
    const computer: Player = new Player("Computer", "papel");

    let aiInput = document.getElementById("ai");
    let resultInput = document.getElementById("result");

    const game: Game = new Game(player, computer);
    game.play();

    aiInput!.innerText = `Computadora: ${game.player2.choice}`;
    resultInput!.innerText = `Resultado: ${game.result}`
}

document.getElementById("👊")!.addEventListener("click", change);
document.getElementById("✋")!.addEventListener("click", change);
document.getElementById("✌️")!.addEventListener("click", change);