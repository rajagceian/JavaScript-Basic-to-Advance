/*
BMI (Body Mass Index) ek measurement hai jo aapke weight aur height ke basis par ye 
estimate karta hai ki aapka weight aapki height ke hisaab se kam, normal, zyada ya bahut
zyada hai.
*/

function BMIIndex(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}

function BMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
const index = BMIIndex(70, 1.75);
const res = BMICategory(index); // weight in kg, height in meters
console.log("Your BMI category is: " + res + " with a BMI of: " + index.toFixed(2));