/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "filterDogOwners" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20, hasDog: true },
  { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
  { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
  { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
  { id: '5', name: 'Alex John', age: 25, hasDog: true },
  { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
  { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
  { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
  { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
];

const atsakymoMasyvas = [];
const atsakymoMasyvas2 = [];

function filterDogOwners(mas){
  for(i = 0; i < mas.length; i++){
    if(mas[i].hasDog){
      atsakymoMasyvas.push(` ${mas[i].name}`);
    }
  }
  return `Šie žmonės turi šunį: ${atsakymoMasyvas}`
}

function filterAdults(mas){
  for(i = 0; i < mas.length; i++){
    if(mas[i].age >= 18){
      atsakymoMasyvas2.push(` ${mas[i].name}`);
    }
  }
  return `Šie žmonės yra pilnamečiai: ${atsakymoMasyvas2}`;
}

console.log(filterDogOwners(users));
console.log(filterAdults(users));