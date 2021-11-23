
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function redirecionar(){
    window.open("https://www.google.com.br/");
    //window.location.href = "https://www.google.com.br/";
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passou o mouse"
    //alert("trocar texto");
    elemento.innerHTML = "passou o mouse";
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*var nome = "Júlio Maruyama Kashiwaya";
var idade = 20;
var frase = "Moro no Brasil"
alert("Bem vindo " + nome);
console.log(nome);
console.log(idade);
console.log(frase.toUpperCase());*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());

/*var fruta ={nome: "maça" cor: "vermelho"}
console.log(fruta);*/

/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

