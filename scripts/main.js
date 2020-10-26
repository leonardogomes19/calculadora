let inputResultado = document.getElementById("inputDisplayResultado");

let calculo = {
    primeiroValor : 0,
    segundoValor : 0,
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

    document.getElementById("btnLimpar").addEventListener("click", limparDados);
    
    document.getElementById("btnPonto").addEventListener("click", inserirPonto);

    document.getElementById("btnDividir").addEventListener("click", clicarOperador);
    document.getElementById("btnMultiplicar").addEventListener("click", clicarOperador);
    document.getElementById("btnSubtrair").addEventListener("click", clicarOperador);
    document.getElementById("btnSomar").addEventListener("click", clicarOperador);

    document.getElementById("btnResultado").addEventListener("click", clicarResultado);
}

//Inserir um número no display da calculadora
function inserirNumero(){
    if(isNaN(inputResultado.value)){
        inputResultado.value = event.target.textContent;
    }else{
        if(inputResultado.value == 0){
            inputResultado.value = event.target.textContent;
        }else{
            inputResultado.value += event.target.textContent;
        }
    }

}

//Função para somar dois valores
function somarValores(valor1, valor2){
    return valor1 + valor2;
}

//Função para subtrair o segundo valor do primeiro
function subtrairValores(valor1, valor2){
    return valor1 - valor2;
}

//Função que multiplica os dois valores
function multiplicarValores(valor1, valor2){
    return valor1 * valor2;
}

//Função que divide o primeiro valor pelo segundo
function dividirValores(valor1, valor2){
    if(valor2 == 0){
        return "Erro, divisão por zero!";
    }else{
        return valor1 / valor2;
    }
}

//Limpa todos os dados do input e objeto de calculo
function limparDados(){
    inputResultado.value = "";

    calculo.valorSalvo = null;
    calculo.funcaoParaCalcular = null;

}

function inserirPonto(){
    if(inputResultado.value == "" || isNaN(inputResultado.value)){
        inputResultado.value = "0. ";
    }else if(!inputResultado.value.includes(".")){
        inputResultado.value = inputResultado.value + ".";
    }

    //isNan(valor)
    //se não é número : true
    //se for número : false
}

//função que atualiza o objeto calculo ao clicar nos operadores
function clicarOperador(){
   if(!isNaN(inputResultado.value)){
       if(calculo.valorSalvo == null){
           calculo.valorSalvo = Number(inputResultado.value);
       }else if(calculo.funcaoParaCalcular != null){
           calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
       }

   }

   let operador = event.target.textContent;
   atribuirOperacao(operador);
   inputResultado.value = operador;
}

//função que atribui a operação correta ao objeto calculo
// +-*/
function atribuirOperacao(operador){
    if(operador == "+"){
        calculo.funcaoParaCalcular = somarValores;
    } else if(operador == "-"){
        calculo.funcaoParaCalcular = subtrairValores;
    } else if(operador == "*"){
        calculo.funcaoParaCalcular = multiplicarValores;
    } else {
        calculo.funcaoParaCalcular = dividirValores;
    }

}

//Exibe o resultado quando clicado no "="
function clicarResultado(){
    if(!isNaN(inputResultado.value) && calculo.funcaoParaCalcular != null){
        let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));

        inputResultado.value = resultado;
        calculo.valorSalvo = resultado;

        calculo.funcaoParaCalcular = null;
    }
}