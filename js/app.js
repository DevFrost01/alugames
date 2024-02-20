const limiteAluguel = 2;

let jogosAlugados = 0;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (jogosAlugados >= limiteAluguel && !imagem.classList.contains('dashboard__item__img--rented')) {
        alert('Limite de aluguel de jogos atingido. Devolva um jogo para alugar outro.');
        return;
    }


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';

        alert('Seu jogo foi devolvido com sucesso!');
        jogosAlugados--;

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';

        alert('Seu jogo foi alugado com sucesso!');
        jogosAlugados++;
    }

    console.log(`Número total de jogos alugados: ${jogosAlugados}`);
}

console.log(`Número total de jogos alugados: ${jogosAlugados}`);