
document.getElementById("click").onclick = () =>{
const salaryInput = document.getElementById("salaryInput").value;
const rentInput = document.getElementById("rentInput").value;
const foodInput = document.getElementById("foodInput").value;
const fuelInput = document.getElementById("fuelInput").value;
const entertainInput = document.getElementById("entertainInput").value

const result = Number(salaryInput)-Number(rentInput)-Number(foodInput)-Number(fuelInput)-Number(entertainInput);
const tax = 14/100
const subTax = Number(salaryInput) * tax;
document.getElementById("outPut").innerHTML = `hello mohamud eslan your balance is ${result} and your tax pay is${subTax.toFixed(2
    ) }`}
