function dia5() {
    const frutas = [];
    const laticinios = [];
    const congelados = [];
    const doces = [];
    
    function resp() {        
        let resposta = prompt(`Você deseja adicionar uma comida na lista de compras?`);

        if (resposta === "sim" || resposta === "não") {
            return resposta;
        } else {
            return resp();
        }
    }

    function adicionaItens() {
        const itens = prompt("Qual comida você deseja inserir?");
        return itens;
    }

    function adicionaCategoria() {
        const categoria = prompt("Qual categoria essa comida se encaixa (frutas, laticínios, congelados ou doces)?");

        if (categoria === "frutas" || categoria === "laticínios" || categoria === "congelados" || categoria === "doces") {
            return categoria;
        } else return adicionaCategoria();
        
    }

    function adicionaEspaco(vetor) {
        for (let i = 0; i < vetor.length; i++) {
            vetor[i] = " " + vetor[i];
        }
        return vetor
    }

    function categorizando(item, categoria) {
        if(categoria === "frutas") {
            frutas.push(item);
        }
        if(categoria === "laticínios") {
            laticinios.push(item);
        }
        if(categoria === "congelados") {
            congelados.push(item);
        }
        if(categoria === "doces") {
            doces.push(item);
        }
        return;
        
    }

    function escreveLista() {
        alert(`Lista de Compras:
            Frutas: ${adicionaEspaco(frutas)}
            Laticínios: ${adicionaEspaco(laticinios)}
            Congelados: ${adicionaEspaco(congelados)}
            Doces: ${adicionaEspaco(doces)}`);
        return;
    }
    
    function listaCompras() {
        let resposta;

        do {
            resposta = resp();

            if (resposta === "sim") {
                categorizando(adicionaItens(), adicionaCategoria());
            }

        } while(resposta === "sim");
        escreveLista();
    }
    listaCompras();
}
dia5();