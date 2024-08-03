function dia5() {
    const frutas = [];
    const laticinios = [];
    const congelados = [];
    const doces = [];
    
    function resp() {
        let resposta;

        if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0) {
            resposta = Number(prompt(`LISTA DE COMPRAS
            OPÇÕES:
            1 - Você deseja adicionar uma comida na lista de compras?
            2 - Sair`));
            
            if (resposta !== 1 && resposta !== 2) return resp();
        } else {
            resposta = Number(prompt(`LISTA DE COMPRAS
            OPÇÕES:
            1 - Você deseja adicionar uma comida na lista de compras?
            2 - Sair
            3 - Você deseja remover algum item da lista?`));
            
            if (resposta !== 1 && resposta !== 2 && resposta !== 3) return resp();
        }
        return resposta;
    }

    function adicionaItens() {
        const itens = prompt("Qual comida você deseja inserir?");
        if (!itens) return adicionaItens();
        return itens;
    }

    function adicionaCategoria() {
        const categoria = prompt("Qual categoria essa comida se encaixa (frutas, laticínios, congelados ou doces)?");

        if (categoria === "frutas" || categoria === "laticínios" || categoria === "congelados" || categoria === "doces") {
            return categoria;
        } else return adicionaCategoria();
        
    }

    function adicionaEspaco(vetor) {
        return vetor.join(", ");
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

    function escreveListas() {
        alert(`Lista de Compras:
            Frutas: ${adicionaEspaco(frutas)}
            Laticínios: ${adicionaEspaco(laticinios)}
            Congelados: ${adicionaEspaco(congelados)}
            Doces: ${adicionaEspaco(doces)}`);
        return;
    }

    function respRemove() {
        const resp = prompt(`Você vai remover item de qual lista (frutas, laticínios, congelados, doces)?`);

        if (resp !== "frutas" && resp !== "laticínios" && resp !== "congelados" && resp !== "doces") return respRemove();

        return resp;
    }


    function remove(lista, item) {
        if (!lista.includes(item)) return alert("Não foi possível encontrar o item dentro da lista!");

        for (let i = 0; i < lista.length; i++) {
            if(lista[i] === item) {
                lista.splice(i, 1);
                return alert(`O item ${item} foi removido com sucesso, lista atualizada:
                    ${adicionaEspaco(lista)}`);
            }
        }
    }

    function removeItem() {
        escreveListas();

        let lista = []; 
        let resposta = respRemove();

        if (resposta === "frutas") lista = frutas;
        if (resposta === "laticínios") lista = laticinios;
        if (resposta === "congelados") lista = congelados;
        if (resposta === "doces") lista = doces;

        if(lista.length === 0) return alert("A lista escolhida está vazia!!");
            
        const item = prompt(`${adicionaEspaco(lista)}
        Qual item deseja remover?`);

        if (!item) return alert("Item inválido!");
        
        remove(lista, item);
        return;
    }

    function listaCompras() {
        let resposta;

        do {
            resposta = resp();

            if (resposta === 1) {
                categorizando(adicionaItens(), adicionaCategoria());
            }

            if (resposta === 3) {
                removeItem();
            }
        } while(resposta !== 2);
        escreveListas();
    }
    listaCompras();
}
dia5();







