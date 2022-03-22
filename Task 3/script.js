/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const mygtukas = document.querySelector("#btn");
const zinute = document.querySelector("#message");
let outputas = document.querySelector("#output");

mygtukas.addEventListener("click", render);

async function gautiDuomenis(){
    mygtukas.classList.add("nerodyti");
    zinute.classList.add("nerodyti");
    try {
        let response = await fetch(ENDPOINT);
        let result = await response.json();
        return result;
    }
    catch(error){
        console.log(error);
    }
}


async function render(){
    let users = await gautiDuomenis();
    for(i = 0; i < users.length; i++){
        outputas.innerHTML += `
        <div class="kortele">
            <h5>Login: ${users[i].login}</h5>
            <img src="${users[i].avatar_url}" width="200px">
        </div>
        `;
    } 
}