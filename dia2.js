// function dia2() {
//     function criaMensagem1(nome, idade, linguagem) {
//         const mensagem = criaParagrafo();

//         mensagem.innerText = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

//         artigoMensagem.appendChild(mensagem);
//     }
    
//     function criaParagrafo() {
//         const paragrafo = document.createElement("p");
//         return paragrafo;
//     }

//     function criaPergunta(linguagem) {
//         const pergunta = criaParagrafo();

//         pergunta.classList.add("pergunta-linguagem");

//         pergunta.innerText = `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`;

//         artigoMensagem.appendChild(pergunta);

//         return pergunta;
//     }

//     function criaInput() {
//         const input = document.createElement("input");
//         input.classList.add("resp-pergunta");
//         artigoMensagem.appendChild(input);
//         return input;
//     }

//     function criaMensagem2(resposta) {
//         const mensagem = criaParagrafo();

//         switch (resposta) {
//             case "1":
//                 mensagem.innerText = `Muito bom! Continue estudando e você terá muito sucesso.`;
//                 return;
//             default:
//                 mensagem.innerText = `Ahh que pena... Já tentou aprender outras linguagens?`;
//         }

//         artigoMensagem.appendChild(mensagem);
//         return mensagem;

//     }

    // function limpaElemento(elemento) {
    //     elemento.value = "";
    // }
    
//     const artigoMensagem = document.querySelector(".artigo-mensagem");
    
//     // const botaoEnviar = document.querySelector(".botao-enviar");

//     botaoEnviar.addEventListener("click", function() {
//         limpaElemento(artigoMensagem);
//         const inputNome = document.querySelector(".nome");
//         const inputIdade = document.querySelector(".idade");
//         const inputLinguagem = document.querySelector(".linguagem");
        
//         const idade = Number(inputIdade.value);

//         if(!inputNome || !idade || !inputLinguagem) return;

//         criaMensagem1(inputNome.value, idade, inputLinguagem.value);

//         criaPergunta(inputLinguagem.value);

//         const inputPergunta = criaInput();

//         if (!inputPergunta.value || inputPergunta != "1" || inputPergunta != "2") return;

//         const botaoMsg2 = criaBotao

//         criaMensagem2(inputPergunta.value);
        
//         limpaElemento(inputNome);
//         limpaElemento(inputIdade);
//         limpaElemento(inputLinguagem);
//         inputNome.focus();
//     });    
// }
// dia2();

function dia2() {
    function criaElemento(tag) {
        const elemento = document.createElement(tag);
        return elemento;    
    }
    
    function criaMsgEPgt(classe) {
        const mensagem = criaElemento("p");
        
        mensagem.classList.add(classe);

        articleMsg.appendChild(mensagem);

        return mensagem;
    }

    function criaInput(classe) {
        const input = criaElemento("input");

        input.classList.add(classe);

        articleMsg.appendChild(input);

        return input;
    }

    function criaBotao(classe) {
        const botao = criaElemento("button");

        botao.classList.add(classe);

        articleMsg.appendChild(botao);

        return botao;
    }

    function limpaElemento(elemento) {
        elemento.value = "";
    }
    
    const articleMsg = document.querySelector(".artigo-mensagem");

    document.addEventListener("click", e => {
        const elemClic = e.target;
        
        const nome = document.querySelector(".input-nome").value;

        const idade = Number(document.querySelector(".input-idade").value);

        const linguagem = document.querySelector(".input-linguagem").value;

        if (elemClic.classList.contains("botao-enviar")) {
            if (!nome || !idade || !linguagem) return;

            const mensagem1 = criaMsgEPgt( "mensagem1");

            mensagem1.innerText = `Olá ${nome}, você têm ${idade} e já está aprendendo ${linguagem}.`;

            const pergunta1 = criaMsgEPgt("pergunta1");

            pergunta1.innerText = `Você gosta de estudar ${linguagem}? Responda com número 1 para SIM e 2 para NÃO.`;

            const inputUmDois = criaInput("input-um-dois");

            const botao2 = criaBotao("botao-e2");

            botao2.innerText = `Enviar`;

            botao2.addEventListener("click", e => {
                if(!Number(inputUmDois.value) || Number(inputUmDois.value) < 1 && Number(inputUmDois.value) > 2) return;
    
                console.log("OPa!!")
    
                const mensagem2 = criaMsgEPgt("mensagem2");
    
                if (Number(inputUmDois.value) === 1) {
                    mensagem2.innerText = `Muito bom! Continue estudando e você terá muito sucesso.`;
                }
    
                if (Number(inputUmDois.value) === 2) {
                    mensagem2.innerText = `Ahh que pena... Já tentou aprender outras linguagens?`;
                }
            });       
        }
    });
}

dia2();