function clicou(){
    document.getElementById('agradecimento').innerHTML = "<b>Meu Git</b>";
   // console.log(document.getElementById('agradecimento'));
    
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/Antonio31211");
 // window.location.href = "https://github.com/Antonio31211"; //redireciona para o outro site sem abrir uma nova guia
}

function trocar(elemento){
  //  document.getElementById("mousemovie").innerHTML = "Obrigado por passar o mouse";
  elemento.innerHTML = "Obrigado por passar o mouse";
  // alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemovie").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
function soma(n1, n2){
    return soma = n1 + n2;
}

var validar = 0;
function validaIdade(idade){

    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
/*


/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");//prompt exibe uma pergunta;

if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*
var frutas = [{nome: "maçã", cor: "vermelha"},{nome: "uva", cor: "roxa"} ];
console.log(frutas);
alert(frutas[1]);
/*

/*
var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta);
*/

/*
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//lista.pop();

console.log(lista[2]);
*/


/*
var nome = "Antonio Eduardo";
var n1 = 29;
var n2 = 10;
var frase = "Isaac Newton foi uma pessoa importante para a ciência";
//alert("Nome: " + nome + " tem " + n1 + " anos");
//alert (n1 + n2);
console.log(nome);
console.log(n1+n2);
//console.log(frase.replace("ciência", "astronomia"));
//alert (frase.replace("ciência", "astronomia"));
console.log(frase.toUpperCase());
*/