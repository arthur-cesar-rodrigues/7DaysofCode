function dia1() {
    console.log("####### RESOLUÇÃO EXERCÍCIO PROPOSTO #######");
    
    const valorIgual = (valor1, valor2) => valor1 == valor2 ? true : false;

    const valorETipoIgual = (valor1, valor2) => valor1 === valor2 ? true : false;

    let numeroUm = 1
    let stringUm = '1'
    let numeroTrinta = 30
    let stringTrinta = '30'
    let numeroDez = 10
    let stringDez = '10'

    if (valorIgual(numeroUm, stringUm)) console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.');
    else console.log('As variáveis numeroUm e stringUm não tem o mesmo valor.');

    if (valorETipoIgual(numeroTrinta, stringTrinta)) console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo.');
    else console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo.');

    if (valorIgual(numeroDez, stringDez)) console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.');
    else console.log('As variáveis numeroDez e stringDez não tem o mesmo valor.');
}
dia1();

// function dia1() {
    //     function valoresIguais(valor1, valor2) {
    //         const resultado = valor1 == valor2 ? true : false;
    //         const tipoMensagem = 0;
    //         return mensagem(resultado, tipoMensagem, valor1, valor2);
    //     }
        
    //     function valoresTiposIguais(valor1, valor2) {
    //         const resultado = valor1 === valor2 ? true : false;
    //         const tipoMensagem = 1;
    //         return mensagem(resultado, tipoMensagem, valor1, valor2);
    //     }
        
    //     function mensagem(resultado, tipo, valor1, valor2) {
    //         switch (tipo) {
    //             case 0:
    //                 if(resultado) return `As variáveis ${valor1} e ${valor2} tem o mesmo valor, mas tipos diferentes`;
    //                 else return `As variáveis ${valor1} e ${valor2} não tem o mesmo valor`;
    //             case 1:
    //                 if(resultado) return `As variáveis ${valor1} e ${valor2} tem o mesmo valor e mesmo tipo`;
    //                 else return `As variáveis ${valor1} e ${valor2} não tem o mesmo tipo`;
    //         }
    //     }
        
    //     let numeroUm = 1;
    //     let stringUm = "1";
    //     let numeroTrinta = 30;
    //     let stringTrinta = "30";
    //     let numeroDez = 10;
    //     let stringDez = "10";
    
    //     console.log(valoresIguais(numeroUm, stringUm));
    //     console.log(valoresTiposIguais(numeroTrinta, stringTrinta));
    //     console.log(valoresIguais(numeroDez, stringDez));
    // }
    // dia1();
