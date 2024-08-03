function dia7() {
    function opc() {
        const opcoes = prompt("Calculadora\n Opções:\n + -> Soma\n - -> Subtração\n  * -> Multiplicação\n / -> Divisão\n Sair -> Para sair da calculadora");

        if(opcoes !== "+" && opcoes !== "-" && opcoes !== "*" && opcoes !== "/" && !opcoes) return opc();

        return opcoes;
    }

    function num() {
        const numero = Number(prompt(`Digite um número:`));

        if(!numero) return num();

        return numero;
    }

    function soma(n1, n2) {
        return alert(`O resultado da soma é ${n1 + n2}.`);
    }
    function subtracao(n1, n2) {
        return alert(`O resultado da subtração é ${n1 - n2}.`);
    }

    function multiplicacao(n1, n2) {
        return alert(`O resultado da multiplicação é ${n1 * n2}.`);
    }
    
    function divisao(n1, n2) {
        return alert(`O resultado da divisão é ${n1 / n2}.`);
    }

    function sair() {
        return alert("Até a próxima");
    } 

    function calculadora() {
        const opcoes = opc();

        if(opcoes === "+") soma(num(), num()); 
        if(opcoes === "-") subtracao(num(), num()); 
        if(opcoes === "*") multiplicacao(num(), num()); 
        if(opcoes === "/") divisao(num(), num());
        if(opcoes === "Sair") {
            sair();
            return;
        }
        return calculadora();
    }
    calculadora();
}
dia7();