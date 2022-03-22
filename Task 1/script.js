/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const submitas = document.querySelector("#submit-btn");
let inputas = document.querySelector("#input");
let outputas = document.querySelector("#output");
const forma = document.querySelector("#forma");

outputas.classList.add("nerodyti");

forma.addEventListener("submit", e => {
    e.preventDefault();
    let svarai = inputas.value * 2.2046;
    let gramai = inputas.value / 0.001;
    let uncijos = inputas.value * 35.274;
    outputas.classList.remove("nerodyti");
    outputas.innerHTML += `<h3>Jūsų svoris svarais: ${svarai} lbs</h3>`;
    outputas.innerHTML += `<h3>Jūsų svoris gramais: ${gramai} g</h3>`;
    outputas.innerHTML += `<h3>Jūsų svoris uncijomis: ${uncijos} oz</h3>`;
});
