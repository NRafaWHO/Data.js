let weight=70;
let height=1.71;
let bmi=weight/(height*height)
if(bmi<18.5){
    console.log("BMI: "+ bmi.toFixed(2) +" unerweight");

}
else if(bmi >=18.5 && bmi <24.9){
    console.log("BMI: " + bmi.toFixed(2) + " Normal weight");
}
else if (bmi >= 25 && bmi < 29.9) {
    console.log("BMI: " + bmi.toFixed(2) + "Overweight");
}
else{
    console.log("BMI: " + bmi.toFixed(2) + " Obesity");
}