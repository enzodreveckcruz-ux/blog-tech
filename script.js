const botoes = document.querySelectorAll("button");

       botoes.forEach(function (botao){
           botao.addEventListener("click", botaoClicado);
           function botaoClicado(){
                console.log("fui clicado");
                let texto = botao.querySelector("span");
                texto.textContent++;
           }

        })

const BotaoTemaEscuro = document.querySelector(".botao-tema-escuro");
     
BotaoTemaEscuro.addEventListener("click", mudarTemaEscuro);

function mudarTemaEscuro() {
     const corpoPagina = document.body;
     if (corpoPagina.classList.contains("tema-escuro")) {
         corpoPagina.classList.remove("tema-escuro");
     } else {
         corpoPagina.classList.add("tema-escuro");
     }
}