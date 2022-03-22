/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

let outputas = document.querySelector("#output");

window.addEventListener("load", render);

async function gautiDuomenis(){
    try {
        let response = await fetch(ENDPOINT);
        let result = await response.json();
        return result;
    }
    catch (error){
        console.log(error);
    }
}

async function render(){
    let cars = await gautiDuomenis();
    for(i = 0; i < cars.length; i++){
        outputas.innerHTML += `
        <h1 id="heading">Gamintojas: ${cars[i].brand}</h1>
        `;
        const modeliuMasyvas = cars[i].models;
        const modeliai = modeliuMasyvas.join(", ");
        outputas.innerHTML += `
        <p class="paragrafas">Modeliai: ${modeliai}</p>
        `;
    }
}
