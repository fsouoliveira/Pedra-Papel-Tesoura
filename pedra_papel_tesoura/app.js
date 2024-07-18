// Seleciona todas as opções do jogador
const playerOptionList = document.querySelectorAll(".player .option");
// Seleciona todas as opções do inimigo
const enemyOptionList = document.querySelectorAll(".enemy .option");

// Adiciona um evento de clique a cada opção do jogador
playerOptionList.forEach((option) => {
    option.onclick = () => {
        // Limpa as seleções anteriores do jogador
        clearOptions(playerOptionList);

        // Define a opacidade da opção selecionada para 1 (visível)
        option.style.opacity = "1";
        // Define o atributo data-selected como verdadeiro
        option.setAttribute("data-selected", true);

        // Chama a função que seleciona uma opção aleatória para o inimigo
        iaEnemy();

        // Obtém o valor da jogada do jogador
        const movePlayer = option.getAttribute("data-value");
        // Obtém o valor da jogada do inimigo
        const moveEnemy = iaEnemy();

        // Determina o resultado do jogo
        result(movePlayer, moveEnemy);
    };
});

// Função que seleciona uma opção aleatória para o inimigo
const iaEnemy = () => {
    // Gera um índice aleatório
    const optionRandom = Math.floor(Math.random() * enemyOptionList.length);
    // Seleciona a opção correspondente ao índice aleatório
    const optionSelected = enemyOptionList[optionRandom];

    // Limpa as seleções anteriores do inimigo
    clearOptions(enemyOptionList);

    // Define a opacidade da opção selecionada para 1 (visível)
    optionSelected.style.opacity = "1";
    // Define o atributo data-selected como verdadeiro
    optionSelected.setAttribute("data-selected", "true");

    // Retorna o valor da jogada do inimigo
    return optionSelected.getAttribute("data-value");
};

// Função que limpa as seleções anteriores
const clearOptions = (optionsList) => {
    optionsList.forEach((option) => {
        // Define o atributo data-selected como falso
        option.setAttribute("data-selected", "false");
        // Define a opacidade das opções para 0.5 (meio visível)
        option.style.opacity = "0.5";
    });
};

// Função que determina o resultado do jogo
const result = (movePlayer, moveEnemy) => {
    // Seleciona o elemento onde o resultado será exibido
    const resultElement = document.querySelector(".result-container span");

    // Verifica se houve empate
    if (movePlayer === moveEnemy) {
        resultElement.textContent = "Você empatou 😒";
    } 
    // Verifica se o jogador perdeu
    else if (
        (movePlayer === "stone" && moveEnemy === "paper") ||
        (movePlayer === "paper" && moveEnemy === "scissor") ||
        (movePlayer === "scissor" && moveEnemy === "stone")
    ) {
        resultElement.textContent = "Você perdeu 😭";
    } 
    // Verifica se o jogador ganhou
    else if (
        (movePlayer === "stone" && moveEnemy === "scissor") ||
        (movePlayer === "paper" && moveEnemy === "stone") ||
        (movePlayer === "scissor" && moveEnemy === "paper")
    ) {
        resultElement.textContent = "Você ganhou 😎";
    }
};
