/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator{
    constructor(sk1, sk2){
        this.sk1 = sk1;
        this.sk2 = sk2;
    }
    sum(){
        return this.sk1 + this.sk2;
    }
    subtraction(){
        return this.sk1 - this.sk2;
    }
    multiplication(){
        return this.sk1 * this.sk2;
    }
    division(){
        return this.sk1 / this.sk2;
    }
}      

const skaiciai = new Calculator(10, 50);

console.log(skaiciai.sum());
console.log(skaiciai.subtraction());
console.log(skaiciai.multiplication());
console.log(skaiciai.division());
console.log(skaiciai);

//Nezinau ar cia gerai padariau, su klasem dar ne visai gerai moku, nenuimkit per daug balu jeigu ka :)