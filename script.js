// Banco de dados com explicações simples para crianças de 5 anos
const explicacoesMovimentos = {
    saque: {
        titulo: "🚀 O Saque",
        texto: "É o peteleco inicial! Você joga a bola bem alto lá no fundo da quadra e dá uma batidinha nela para mandar lá para o outro lado e começar a brincadeira!"
    },
    manchete: {
        titulo: "💪 A Manchete",
        texto: "Quando a bola vem voando baixinho, você junta os dois braços bem retinhos igual a um super-herói para fazer a bola subir de volta para o alto!"
    },
    toque: {
        titulo: "✨ O Toque",
        texto: "Quando a bola vem bem alta, você usa as pontinhas dos dedinhos perto da testa, fazendo formato de conchinha, para empurrar a bola para cima com suavidade!"
    },
    cortada: {
        titulo: "⚡ A Cortada",
        texto: "É a hora do pulo do gatinho! Você salta bem alto perto da rede e dá um tapão forte na bola para ela cair rapidinho no chão do outro time!"
    },
    bloqueio: {
        titulo: "🧱 O Bloqueio",
        texto: "Você vira uma muralha mágica! Pula bem pertinho da rede com os braços esticados para impedir que a bola do amiguinho passe para o seu lado."
    }
};

// Selecionando os elementos da tela
const botoes = document.querySelectorAll('.btn-movimento');
const tituloPainel = document.getElementById('titulo-movimento');
const textoPainel = document.getElementById('texto-movimento');
const painel = document.getElementById('painel-explicacao');

// Adicionando evento de clique em cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Pega qual botão foi clicado através do atributo 'data-alvo'
        const tipo = botao.getAttribute('data-alvo');
        const dados = explicacoesMovimentos[tipo];

        // Atualiza o texto do painel com animação simples
        painel.style.opacity = '0';
        setTimeout(() => {
            tituloPainel.textContent = dados.titulo;
            textoPainel.textContent = dados.texto;
            painel.style.opacity = '1';
        }, 150);
    });
});