
let nome = prompt("Insira o seu nome:");
let nota1 = parseFloat(prompt("Insira a sua primeira nota:"));
let nota2 = parseFloat(prompt("Insira a sua segunda nota:"));

var media = (nota1 + nota2) / 2

if (media >= 6) {

    alert("Parabéns, você foi aprovado!")
    let x = document.getElementById("situação1");
    x.innerHTML = "Parabéns, " + nome + ", você foi aprovado ✔"
    let z = document.getElementById("media1")
    z.innerHTML = media

} else {

    alert("Você foi reprovado, se esforçe mais na próxima.")
    let y = document.getElementById("situação2");
    y.innerHTML = "Infelizmente, " + nome + ", você foi reprovado ❌"
    let z = document.getElementById("media1")
    z.innerHTML = media

}





