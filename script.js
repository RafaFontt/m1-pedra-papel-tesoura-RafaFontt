function playRockPaperScissor(player1, player2) {
    player1 == "Pedra", "Papel", "Tesoura"
    player2 == "Pedra", "Papel", "Tesoura"

    if (player1 === "Pedra" && player2 === "Pedra" || player1 === "Papel" && player2 === "Papel" || player1 === "Tesoura" && player2 === "Tesoura") {
        return "Empate!"
    } else if (player1 === "Pedra" && player2 === "Tesoura" || player1 === "Papel" && player2 === "Pedra" || player1 === "Tesoura" && player2 === "Papel") {
        return "Jogador 1 venceu!"
    } return "Jogador 2 venceu!"
}