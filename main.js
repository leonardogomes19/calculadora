let inputresultado = document.getElementById("InputDisplayResultado");

let calculo = {
    primeiroValor : 0,
    segundaValor : 0,
    funcaoParaCalcular : null
};

//Adicionar evento para iniciar quando a janela carregar
window.addEventListener("load", function(){
    atribuirEventos();
})

//Atribuir eventos para os botões da calculadora
function atribuirEventos(){
    document.getElementById("btnValor0").addEventListener("click", inserirNumero);
    document.getElementById("btnValor1").addEventListener("click", inserirNumero);
    document.getElementById("btnValor2").addEventListener("click", inserirNumero);
    document.getElementById("btnValor3").addEventListener("click", inserirNumero);
    document.getElementById("btnValor4").addEventListener("click", inserirNumero);
    document.getElementById("btnValor5").addEventListener("click", inserirNumero);
    document.getElementById("btnValor6").addEventListener("click", inserirNumero);
    document.getElementById("btnValor7").addEventListener("click", inserirNumero);
    document.getElementById("btnValor8").addEventListener("click", inserirNumero);
    document.getElementById("btnValor9").addEventListener("click", inserirNumero);
    
}

//Inserir um número no display da calculadora
function inserirNumero(){
    if(isNaN(inputResultado.value)){
        inputResultado.value = event.target.textContent;
    }

app.listen(process.env.PORT || 3333, () => {
    console.log("Servidor iniciado");
})
};