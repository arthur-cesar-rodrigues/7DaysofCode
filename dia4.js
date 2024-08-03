function dia4() {
    function sorteio(valorSorteio) {
        let chute;

        for (let i = 2; i > 0; i--) {
            if (i === 1) alert("Você ganhou mais 2 tentativas");
            
            for(let tentativas = 2; tentativas > 0; tentativas--) {
                chute = prompt("Qual o valor que você deseja chutar (entre 0 e 10)?");

                console.log(valorSorteio);

                if (Number(chute) === valorSorteio) {
                    alert(`Parabéns você acertou!!!`);

                    return true;
                } else {
                    alert(`Errou, número de tentativas restantes: ${tentativas - 1}`);
                }
            }
        }
        return false;
    }
    
    const valorSorteio = Math.floor(Math.random() * (10 - 0 + 1) + 0);

    if (!sorteio(valorSorteio)) {
        alert(`Que pena, o número correto era ${valorSorteio}`);
    }
}
dia4();