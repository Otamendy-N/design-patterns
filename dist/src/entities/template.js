export class FootballGame {
    play() {
        this.prepareForGame();
        this.startGame();
        this.endGame();
    }
    prepareForGame() {
        console.log("[Info] Teams get ready with their shoes.");
    }
    startGame() {
        console.log("[Info] The game starts with blue team.");
    }
    endGame() {
        console.log("[Info] The game has ended and the blue team wins!!");
    }
}
export class TenisGame {
    play() {
        this.prepareForGame();
        this.startGame();
        this.endGame();
    }
    prepareForGame() {
        console.log("[Info] Players get ready with their shoes.");
    }
    startGame() {
        console.log("[Info] The game starts with player 1.");
    }
    endGame() {
        console.log("[Info] The game has ended and player 2 wins!!");
    }
}
