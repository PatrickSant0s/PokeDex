const BotaoAlterarTema = document.getElementById("botao-alterar-tema");

console.log(BotaoAlterarTema)

const body = document.querySelector("body");
const ImagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")
console.log(body);


BotaoAlterarTema.addEventListener("click", () => {
    console.log("clicou no botão"); 
    const modoEscuroEstaAtivo = body.classList. contains("modo-escuro")
   

    if (modoEscuroEstaAtivo) {


        body.classList.remove("modo-escuro");
        ImagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png")
    }
    else {

        body.classList.add("modo-escuro");
        ImagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png")
    }




});




