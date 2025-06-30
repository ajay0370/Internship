function BMI_Calculator(weight,height){
    var ans=weight/(height)**2;
    return Math.round(ans);
}

var bmi=BMI_Calculator(65,1.8);
console.log(bmi);