interface Game {
    play(): void;

    prepareForGame(): void;
    startGame(): void;
    endGame(): void;
}

export class FootballGame implements Game {
    play(): void {
        this.prepareForGame()
        this.startGame()
        this.endGame()
    }
    prepareForGame(): void {
        console.log("[Info] Teams get ready with their shoes.")
    }
    startGame(): void {
        console.log("[Info] The game starts with blue team.")
    }
    endGame(): void {
        console.log("[Info] The game has ended and the blue team wins!!")
    }
}
export class TenisGame implements Game {
    play(): void {
        this.prepareForGame()
        this.startGame()
        this.endGame()
    }
    prepareForGame(): void {
        console.log("[Info] Players get ready with their shoes.")
    }
    startGame(): void {
        console.log("[Info] The game starts with player 1.")
    }
    endGame(): void {
        console.log("[Info] The game has ended and player 2 wins!!")
    }

}