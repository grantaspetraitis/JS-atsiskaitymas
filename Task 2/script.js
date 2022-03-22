/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const mygtukas = document.querySelector("#btn__element");
let state = document.querySelector("#btn__state");

let paspaudimuSkaicius = 0;

mygtukas.addEventListener("click", () => {
    paspaudimuSkaicius += 1;
    state.textContent = paspaudimuSkaicius;
});