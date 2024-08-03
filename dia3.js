// function dia3() {
//     function pergunta1() {
//         const pergunta = prompt("Você quer seguir para área de Front-End (insira: dev front) ou seguir para a área de Back-End (insira: dev back)?");

//         if (pergunta !== "dev front" && pergunta !== "dev back") {
//             pergunta1();
//         }
//         return pergunta;
//     }

//     function pergunta2(area) {
//         let pergunta;

//         if (area === "dev front") {
//             pergunta = prompt("Voce  quer seguir se especializando no Front End (insira: front) ou seguir se desenvolvendo para se tornar Fullstack (insira: fullstack).");
//         }

//         if (area === "dev back") {
//             pergunta = prompt("Voce  quer seguir se especializando no Back End (insira: back) ou seguir se desenvolvendo para se tornar Fullstack (insira: fullstack).");
//         }

//         if (pergunta!== "front" && pergunta !== "back" && pergunta !== "fullstack") {
//             pergunta2(area);
//         }
//         return pergunta;
//     }

//     function perguntaTec() {
//         const respTec = prompt("Qual é a tecnologia você gostaria de se especializar?");

//         const respOk = prompt(`Tem mais alguma tecnologia que você gostaria de aprender?(insira "ok" para sim e "não" para não)`);

//         if (respOk === "ok"){
//             perguntaTec();
//         } else {
//             if (respTec === "python") {
//                 alert("Python é uma das linguagens mais fáceis de se aprender além de ser poderosa no tratamento de dados.");
//             }
    
//             if (respTec === "js" || respTec === "javascript") {
//                 alert("JS é a linguagem que estou aprendendo, uma ótima escolha para quem quer virar FullStack.");
//             } else if (respTec === "html") {
//                 alert("Você vai criar sites incríveis com HTML!!");
//             } else if (respTec === "c") {
//                 alert("Tenho vontade de aprender C também, é a mãe de todas as linguagens, e possui um processamento muito rápido.");
//             } else {
//                 alert("Continue assim, quanto mais aprendermos, mais iremos nos destacar no mercado de tecnologia");
//             }

//             return;
//         }
//     }
    
//     function jogoDev() {
//         let respostaArea = pergunta1();

//         let perguntaArea;

//         switch (respostaArea) {
//             case "dev front":
//                 perguntaArea += prompt("Você quer aprender React ou aprender Vue?");
            
//             default:
//                 perguntaArea += "Você quer aprender Back-End, poderá aprender C# ou aprender Java?";
//         }

//         let respostaArea2 = pergunta2(respostaArea);

//         if (respostaArea2 === "front") alert("Você vai ser um excelente densenvolvedor front!!");

//         if (respostaArea2 === "back") alert("Você vai ser um excelente densenvolvedor back!!");

//         if (respostaArea2 === "fullstack") alert("Gostei de ver voce vai ser um desenvolvedor completo!!!");

//         perguntaTec();

//         respostaArea = "";
//         respostaArea2 = "";
//     }
//     jogoDev();
// }
// dia3();

// extra

let idade = 0;

while (idade < 8) {
    if(idade === 0) {
        console.log("Eu ainda não fiz 1 ano.")
    } else if (idade === 1) {
    console.log(`Eu tenho ${idade} ano de idade.`)
    } else {
        console.log(`Eu tenho ${idade} anos de idade.`)
    }
    idade++;
}