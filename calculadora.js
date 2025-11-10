// chamando o input com ID 'tela'
const tela = document.getElementById('tela');

//função
function adicionarValor(valor) {
    tela.value += valor;
}

//--------🌟---------

// Definindo a função que apaga todos os valores da tela ao clique do botão 'Del'
function limparTela() {
    tela.value = '';
}

function apagarUltimo() {
    // Aqui, 'tela.value' recebe o valor de 'tela.value' com método 🌟🌟slice🌟🌟 que inicia no primeiro elemento de 'tela.value' (0) e vai até o penúltimo elemento (-1). Ou seja, retorna o valor que estava em 'tela' SEM o último elemento.
    tela.value = tela.value.slice(0, -1);
}

function calcularResultado() {
     // O 'try' define um bloco de código que o programa TENTARÁ executar
    try { tela.value = eval(tela.value);
    } catch (erro) { // Caso ocorra algum erro na execução do TRY, o 🌟🌟'catch'🌟🌟 captura o erro e executa o bloco de instruções definido entre chaves
        tela.value = 'Erro';
    }
}

document.addEventListener('keydown', function(evento) {
    const tecla = evento.key;

     // Aqui, verificamos se o valor da variável 'tecla' está incluido na string que define os possíveis válidos por meio da função 'includes'
         if ("0123456789./*-+".includes(tecla)) {      
             // Caso esse IF retorne true, chamamos a função 'adicionarValor' passando o valor armazenado em 'tecla' como parâmetro
        adicionarValor(tecla);
    }

      // esse define que se a tecla digitada foi o backspace, chamamos a função que apaga o último número
    if (tecla === 'Backspace') {
        apagarUltimo();
    }

      
    // definimos que se a tecla digitada foi o enter, chamamos a função que realiza o cálculo
    if (tecla === 'Enter' || tecla === '=') {
        calcularResultado();
    }
    
    // Aqui, definimos que se a tecla digitada foi o esc, chamamos a função que apaga todo o valor da tela
    if (tecla === 'Escape') {
        limparTela();
    }
})
